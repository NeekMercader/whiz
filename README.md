# Whiz - Custom Apps Built Fast

A modern React application for Whiz, showcasing custom app development services with integrated CMS, email services, and newsletter functionality.

## Features

- **Modern React Frontend** - Built with Vite, TypeScript, and Tailwind CSS
- **User Authentication** - Secure user management with Supabase Auth
- **Client Portal** - Project tracking and management dashboard
- **Strapi CMS Integration** - Dynamic content management via Strapi Cloud
- **Email Services** - Contact forms and newsletter subscriptions via Resend
- **Newsletter Management** - ConvertKit integration for subscriber management
- **Supabase Edge Functions** - Secure server-side API handling
- **Payment Processing** - Stripe integration for secure payments
- **Analytics & Monitoring** - PostHog integration for user analytics
- **Search Functionality** - Global search across blog posts and pages
- **Responsive Design** - Mobile-first design with beautiful animations
- **SEO Optimized** - Meta tags, structured data, and semantic HTML

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **CMS**: Strapi Cloud
- **Email**: Resend API
- **Newsletter**: ConvertKit API
- **Backend**: Supabase Edge Functions
- **Payments**: Stripe
- **Analytics**: PostHog
- **Deployment**: Cloudflare Pages
- **Icons**: Lucide React
- **3D Graphics**: Three.js with React Three Fiber

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase CLI (for Edge Functions)

### Environment Variables

Create a `.env` file in the root directory:

```env
# Strapi Cloud Configuration
VITE_STRAPI_API_URL=https://your-strapi-instance.strapi.app/api

# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# PostHog Analytics
VITE_POSTHOG_KEY=your-posthog-key
VITE_POSTHOG_HOST=https://app.posthog.com

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase Edge Functions:
   ```bash
   # Install Supabase CLI if not already installed
   npm install -g supabase

   # Login to Supabase
   supabase login

   # Link to your project
   supabase link --project-ref your-project-ref

   # Deploy Edge Functions
   supabase functions deploy send-email
   supabase functions deploy subscribe-newsletter
   supabase functions deploy create-checkout-session
   supabase functions deploy stripe-webhook
   
   # Run database migrations
   supabase db push
   ```

4. Configure Supabase Secrets:
   ```bash
   supabase secrets set RESEND_API_KEY=your-resend-api-key
   supabase secrets set CONVERTKIT_API_KEY=your-convertkit-api-key
   supabase secrets set CONVERTKIT_FORM_ID=your-convertkit-form-id
   supabase secrets set STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Auth, etc.)
├── lib/               # Utility functions and configurations
├── pages/              # Page components
├── services/           # API services (Strapi, Email)
└── main.tsx           # Application entry point

supabase/
├── migrations/         # Database migrations
└── functions/          # Edge Functions
    ├── send-email/     # Contact form handler
    ├── subscribe-newsletter/  # Newsletter subscription handler
    ├── create-checkout-session/  # Stripe checkout
    └── stripe-webhook/    # Stripe webhook handler
```

## Services Integration

### Strapi CMS
- **Purpose**: Dynamic content management for blog posts and pages
- **Setup**: Configure `VITE_STRAPI_API_URL` in your environment
- **Features**: Blog posts, categories, SEO metadata, featured images

### Resend Email
- **Purpose**: Transactional emails (contact forms, welcome emails)
- **Setup**: Set `RESEND_API_KEY` as Supabase secret
- **Features**: Contact form submissions, welcome emails

### ConvertKit Newsletter
- **Purpose**: Newsletter subscription management
- **Setup**: Set `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID` as Supabase secrets
- **Features**: Subscriber management, automated welcome sequences

### Stripe Payments
- **Purpose**: Secure payment processing for services
- **Setup**: Set `VITE_STRIPE_PUBLISHABLE_KEY` in environment and `STRIPE_SECRET_KEY` as Supabase secret
- **Features**: One-time payments, webhook handling, payment tracking

### PostHog Analytics
- **Purpose**: User behavior analytics and feature flags
- **Setup**: Set `VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST` in environment
- **Features**: Event tracking, user identification, feature flags

### Supabase Database
- **Purpose**: User data, projects, payments, and application state
- **Setup**: Automatic with Supabase project
- **Features**: User profiles, project management, payment tracking

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Configure environment variables in Cloudflare Pages dashboard

### Supabase Edge Functions

Deploy functions using the Supabase CLI:
```bash
supabase functions deploy
```

## Security

- **API Keys**: All sensitive keys are stored as Supabase secrets, never exposed to client
- **Authentication**: Secure user authentication with Supabase Auth
- **Database Security**: Row Level Security (RLS) policies protect user data
- **CORS**: Properly configured for cross-origin requests
- **Input Validation**: Form data is validated on both client and server
- **Rate Limiting**: Implemented via Supabase Edge Functions
- **Payment Security**: PCI-compliant payment processing via Stripe

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For support, email neek@whiz.so or visit [whiz.so](https://whiz.so).