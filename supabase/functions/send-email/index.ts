import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Send email function called');
    console.log('Request method:', req.method);
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));

    const { name, email, company, projectType, budget, timeline, description }: ContactFormData = await req.json()
    console.log('Received form data:', { name, email: '[REDACTED]', company, projectType, budget, timeline });

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    console.log('Resend API key configured:', !!resendApiKey);
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      throw new Error('RESEND_API_KEY not configured')
    }

    // Prepare email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
      ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
      ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
      <p><strong>Description:</strong></p>
      <p>${description.replace(/\n/g, '<br>')}</p>
    `

    console.log('Sending email via Resend API');

    // Send email via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Whiz Contact Form <noreply@whiz.so>',
        to: ['neek@whiz.so'], // Replace with your actual email
        subject: `New Contact Form Submission from ${name}`,
        html: emailHtml,
        reply_to: email,
      }),
    })

    console.log('Resend API response status:', resendResponse.status);

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text()
      console.error('Resend API error response:', errorData)
      throw new Error(`Failed to send email via Resend: ${resendResponse.status} - ${errorData}`)
    }

    const resendData = await resendResponse.json()
    console.log('Email sent successfully via Resend:', resendData.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: resendData.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in send-email function:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to send email' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})