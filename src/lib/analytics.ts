import posthog from 'posthog-js'

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com'

// Initialize PostHog
export const initAnalytics = () => {
  if (POSTHOG_KEY && POSTHOG_KEY !== 'placeholder-posthog-key' && typeof window !== 'undefined') {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      loaded: (posthog) => {
        if (import.meta.env.DEV) posthog.debug()
      }
    })
  } else {
    console.log('Analytics disabled - no valid PostHog key provided')
  }
}

// Analytics functions
export const analytics = {
  // Page tracking
  page: (name: string, properties?: Record<string, any>) => {
    if (POSTHOG_KEY) {
      posthog.capture('$pageview', { page: name, ...properties })
    }
  },

  // Event tracking
  track: (event: string, properties?: Record<string, any>) => {
    if (POSTHOG_KEY) {
      posthog.capture(event, properties)
    }
  },

  // User identification
  identify: (userId: string, properties?: Record<string, any>) => {
    if (POSTHOG_KEY) {
      posthog.identify(userId, properties)
    }
  },

  // Feature flags
  isFeatureEnabled: (flag: string): boolean => {
    if (POSTHOG_KEY) {
      return posthog.isFeatureEnabled(flag) || false
    }
    return false
  },

  // Reset user (on logout)
  reset: () => {
    if (POSTHOG_KEY) {
      posthog.reset()
    }
  }
}

// Common events
export const trackEvent = {
  // Contact form
  contactFormSubmitted: (projectType?: string) => {
    analytics.track('Contact Form Submitted', { project_type: projectType })
  },

  // Newsletter
  newsletterSubscribed: (source: string) => {
    analytics.track('Newsletter Subscribed', { source })
  },

  // Navigation
  ctaClicked: (cta: string, location: string) => {
    analytics.track('CTA Clicked', { cta, location })
  },

  // ROI Calculator
  roiCalculated: (result: number, projectType: string) => {
    analytics.track('ROI Calculated', { result, project_type: projectType })
  },

  // Authentication
  userSignedUp: (method: string) => {
    analytics.track('User Signed Up', { method })
  },

  userSignedIn: (method: string) => {
    analytics.track('User Signed In', { method })
  },

  // Projects
  projectCreated: (projectType: string) => {
    analytics.track('Project Created', { project_type: projectType })
  },

  // Payments
  paymentInitiated: (amount: number, projectType: string) => {
    analytics.track('Payment Initiated', { amount, project_type: projectType })
  },

  paymentCompleted: (amount: number, projectType: string) => {
    analytics.track('Payment Completed', { amount, project_type: projectType })
  }
}