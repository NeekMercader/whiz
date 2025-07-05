import { loadStripe } from '@stripe/stripe-js'
import { config } from './config'

if (!config.stripe.isConfigured()) {
  console.warn('Stripe publishable key not found. Payment functionality will not work.')
}

export const stripePromise = config.stripe.isConfigured()
  ? loadStripe(config.stripe.publishableKey) 
  : null

export interface PaymentData {
  amount: number
  currency: string
  projectType: string
  projectId?: string
  description?: string
}

export const createCheckoutSession = async (paymentData: PaymentData) => {
  if (!config.supabase.isConfigured()) {
    throw new Error('Supabase configuration missing')
  }

  try {
    const response = await fetch(`${config.supabase.url}/functions/v1/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.supabase.anonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create checkout session')
    }

    return data
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

export const redirectToCheckout = async (sessionId: string) => {
  const stripe = await stripePromise
  if (!stripe) {
    throw new Error('Stripe failed to load')
  }

  const { error } = await stripe.redirectToCheckout({ sessionId })
  if (error) {
    throw error
  }
}

// Service pricing
export const servicePricing = {
  'workflow-killer': { amount: 29700, name: 'Workflow Killer App' },
  'micro-app': { amount: 29700, name: 'Micro-App' },
  'starter-app': { amount: 199700, name: 'Starter App' },
  'business-app': { amount: 399700, name: 'Business App' },
  'system-app': { amount: 799700, name: 'System App' }
}

export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100)
}