// Email service for handling contact forms and newsletter subscriptions

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate Supabase configuration
if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL === 'https://placeholder.supabase.co') {
  console.warn('Supabase configuration missing. Email services will not work.');
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description: string;
}

export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
}

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  // Check if Supabase is properly configured
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL === 'https://placeholder.supabase.co') {
    console.warn('Email service not configured - using mock response');
    return { success: true, message: 'Email service not configured (development mode)' };
  }

  try {
    console.log('Sending contact email via Supabase Edge Function');
    console.log('Supabase URL:', SUPABASE_URL);
    console.log('Form data:', { ...formData, email: '[REDACTED]' });

    const response = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Supabase Edge Function response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('Raw response:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse response as JSON:', parseError);
      throw new Error(`Invalid JSON response: ${responseText}`);
    }

    if (!response.ok) {
      console.error('Supabase Edge Function error:', data);
      throw new Error(data.error || `HTTP ${response.status}: ${responseText}`);
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending contact email:', error);
    
    // Provide more specific error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error: Unable to connect to email service. Please check your internet connection.');
    }
    
    if (error instanceof Error) {
      throw new Error(`Email service error: ${error.message}`);
    }
    
    throw new Error('Unknown error occurred while sending email');
  }
};

// Subscribe to newsletter
export const subscribeToNewsletter = async (subscriptionData: NewsletterSubscription): Promise<EmailResponse> => {
  // Check if Supabase is properly configured
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL === 'https://placeholder.supabase.co') {
    console.warn('Newsletter service not configured - using mock response');
    return { success: true, message: 'Newsletter service not configured (development mode)' };
  }

  try {
    console.log('Subscribing to newsletter via Supabase Edge Function');
    console.log('Subscription data:', { ...subscriptionData, email: '[REDACTED]' });

    const response = await fetch(`${SUPABASE_URL}/functions/v1/subscribe-newsletter`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(subscriptionData),
    });

    console.log('Newsletter subscription response status:', response.status);

    const responseText = await response.text();
    console.log('Newsletter raw response:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse newsletter response as JSON:', parseError);
      throw new Error(`Invalid JSON response: ${responseText}`);
    }

    if (!response.ok) {
      console.error('Newsletter subscription error:', data);
      throw new Error(data.error || `HTTP ${response.status}: ${responseText}`);
    }

    console.log('Newsletter subscription successful:', data);
    return data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    
    // Provide more specific error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error: Unable to connect to newsletter service. Please check your internet connection.');
    }
    
    if (error instanceof Error) {
      throw new Error(`Newsletter service error: ${error.message}`);
    }
    
    throw new Error('Unknown error occurred while subscribing to newsletter');
  }
};