// Configuration file to centralize environment variable handling
export const config = {
  // Supabase Configuration
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
    isConfigured: function() {
      return this.url && 
             this.anonKey && 
             this.url !== 'https://placeholder.supabase.co' &&
             this.anonKey !== 'placeholder-anon-key';
    }
  },

  // Strapi Configuration
  strapi: {
    apiUrl: import.meta.env.VITE_STRAPI_API_URL || '',
    isConfigured: function() {
      return this.apiUrl && 
             this.apiUrl !== 'https://your-strapi-instance.strapi.app/api';
    }
  },

  // PostHog Configuration
  posthog: {
    key: import.meta.env.VITE_POSTHOG_KEY || '',
    host: import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com',
    isConfigured: function() {
      return this.key && this.key !== 'placeholder-posthog-key';
    }
  },

  // Stripe Configuration
  stripe: {
    publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
    isConfigured: function() {
      return this.publishableKey && this.publishableKey !== 'pk_test_placeholder';
    }
  }
};

// Debug function to log configuration status
export const debugConfig = () => {
  console.group('🔧 Environment Configuration Debug');
  
  // Log all environment variables that start with VITE_
  console.log('All VITE_ environment variables:');
  Object.keys(import.meta.env).forEach(key => {
    if (key.startsWith('VITE_')) {
      const value = import.meta.env[key];
      console.log(`- ${key}:`, value ? `"${value.substring(0, 20)}..."` : '❌ Not set');
    }
  });
  
  console.log('\nRaw environment variable values:');
  console.log('- VITE_SUPABASE_URL:', JSON.stringify(import.meta.env.VITE_SUPABASE_URL));
  console.log('- VITE_SUPABASE_ANON_KEY:', JSON.stringify(import.meta.env.VITE_SUPABASE_ANON_KEY));
  console.log('- VITE_STRAPI_API_URL:', JSON.stringify(import.meta.env.VITE_STRAPI_API_URL));
  console.log('- VITE_POSTHOG_KEY:', JSON.stringify(import.meta.env.VITE_POSTHOG_KEY));
  console.log('- VITE_STRIPE_PUBLISHABLE_KEY:', JSON.stringify(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY));
  
  console.log('Environment variables loaded:');
  console.log('- VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing');
  console.log('- VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing');
  console.log('- VITE_STRAPI_API_URL:', import.meta.env.VITE_STRAPI_API_URL ? '✅ Set' : '❌ Missing');
  console.log('- VITE_POSTHOG_KEY:', import.meta.env.VITE_POSTHOG_KEY ? '✅ Set' : '❌ Missing');
  console.log('- VITE_STRIPE_PUBLISHABLE_KEY:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ? '✅ Set' : '❌ Missing');
  
  console.log('\nConfiguration status:');
  console.log('- Supabase:', config.supabase.isConfigured() ? '✅ Ready' : '❌ Not configured');
  console.log('- Strapi:', config.strapi.isConfigured() ? '✅ Ready' : '❌ Not configured');
  console.log('- PostHog:', config.posthog.isConfigured() ? '✅ Ready' : '❌ Not configured');
  console.log('- Stripe:', config.stripe.isConfigured() ? '✅ Ready' : '❌ Not configured');
  
  console.groupEnd();
};