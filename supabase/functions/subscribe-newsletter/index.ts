import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface SubscriptionData {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, firstName, lastName, tags }: SubscriptionData = await req.json()

    // Get ConvertKit credentials from environment
    const convertKitApiKey = Deno.env.get('CONVERTKIT_API_KEY')
    const convertKitFormId = Deno.env.get('CONVERTKIT_FORM_ID')
    
    if (!convertKitApiKey || !convertKitFormId) {
      throw new Error('ConvertKit credentials not configured')
    }

    // Subscribe to ConvertKit
    const convertKitResponse = await fetch(`https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: convertKitApiKey,
        email: email,
        first_name: firstName || '',
        last_name: lastName || '',
        tags: tags || ['whiz-newsletter'],
      }),
    })

    if (!convertKitResponse.ok) {
      const errorData = await convertKitResponse.text()
      console.error('ConvertKit API error:', errorData)
      throw new Error(`Failed to subscribe: ${convertKitResponse.status}`)
    }

    const convertKitData = await convertKitResponse.json()

    // Send welcome email via Resend (optional)
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Neek from Whiz <neek@whiz.so>',
            to: [email],
            subject: 'Welcome to the Whiz Newsletter! 🎉',
            html: `
              <h2>Welcome to the Whiz Community!</h2>
              <p>Hi ${firstName || 'there'},</p>
              <p>Thanks for joining our newsletter! You'll receive weekly app ideas, case studies, and automation tips every Tuesday at 9 AM EST.</p>
              <p>As promised, here's your free guide: <strong>"10 Apps Every Business Needs"</strong> - coming to your inbox shortly.</p>
              <p>Best,<br>Neek<br>Founder, Whiz</p>
              <hr>
              <p><small>You can unsubscribe anytime by replying to any email.</small></p>
            `,
          }),
        })
      } catch (emailError) {
        console.warn('Failed to send welcome email:', emailError)
        // Don't fail the subscription if welcome email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        subscriberId: convertKitData.subscription?.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in subscribe-newsletter function:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to subscribe to newsletter' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})