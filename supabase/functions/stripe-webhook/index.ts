import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY')
    const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!stripeSecretKey || !stripeWebhookSecret || !supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing required environment variables')
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2023-10-16',
    })

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const body = await req.text()
    const signature = req.headers.get('stripe-signature')

    if (!signature) {
      throw new Error('Missing stripe-signature header')
    }

    // Verify webhook signature
    const event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret)

    console.log('Received Stripe webhook:', event.type)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        
        // Extract metadata
        const projectType = session.metadata?.project_type
        const projectId = session.metadata?.project_id

        // Save payment record
        const { error: paymentError } = await supabase
          .from('payments')
          .insert({
            stripe_payment_intent_id: session.payment_intent as string,
            amount: session.amount_total || 0,
            currency: session.currency || 'usd',
            status: 'succeeded',
            project_id: projectId || null,
            user_id: session.client_reference_id || null,
          })

        if (paymentError) {
          console.error('Error saving payment:', paymentError)
        }

        // Update project status if project_id exists
        if (projectId) {
          const { error: projectError } = await supabase
            .from('projects')
            .update({ status: 'in_progress' })
            .eq('id', projectId)

          if (projectError) {
            console.error('Error updating project:', projectError)
          }
        }

        // Send confirmation email via Resend
        const resendApiKey = Deno.env.get('RESEND_API_KEY')
        if (resendApiKey && session.customer_details?.email) {
          try {
            await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: 'Neek from Whiz <neek@whiz.so>',
                to: [session.customer_details.email],
                subject: 'Payment Confirmed - Your Project Starts Now! 🚀',
                html: `
                  <h2>Payment Confirmed!</h2>
                  <p>Hi there,</p>
                  <p>Your payment has been successfully processed and your project is now in our development queue!</p>
                  <p><strong>Project Type:</strong> ${projectType}</p>
                  <p><strong>Amount Paid:</strong> $${((session.amount_total || 0) / 100).toFixed(2)}</p>
                  <p>I'll be in touch within 24 hours to kick off your project. You can track progress in your client portal.</p>
                  <p>Best,<br>Neek<br>Founder, Whiz</p>
                `,
              }),
            })
          } catch (emailError) {
            console.warn('Failed to send confirmation email:', emailError)
          }
        }

        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        
        // Update payment status
        const { error } = await supabase
          .from('payments')
          .update({ status: 'failed' })
          .eq('stripe_payment_intent_id', paymentIntent.id)

        if (error) {
          console.error('Error updating failed payment:', error)
        }

        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})