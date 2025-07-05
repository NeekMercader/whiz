import posthog from 'posthog-js'
import { config } from './config'

// Initialize PostHog
export const initAnalytics = () => {
  if (config.posthog.isConfigured() && typeof window !== 'undefined') {
    posthog.init(config.posthog.key, {
      api_host: config.posthog.host,
      capture_pageview: true,
      capture_pageleave: true,
      loaded: (posthog) => {
        if (import.meta.env.DEV) posthog.debug()
      }
    })
    console.log('✅ PostHog analytics initialized');
  } else {
    console.log('⚠️ Analytics disabled - PostHog not configured');
  }
}

// Analytics functions
export const analytics = {
  // Page tracking
  page: (name: string, properties?: Record<string, any>) => {
    if (config.posthog.isConfigured()) {
      posthog.capture('$pageview', { page: name, ...properties })
    }
  },

  // Event tracking
  track: (event: string, properties?: Record<string, any>) => {
    if (config.posthog.isConfigured()) {
      posthog.capture(event, properties)
    }
  },

  // User identification
  identify: (userId: string, properties?: Record<string, any>) => {
    if (config.posthog.isConfigured()) {
      posthog.identify(userId, properties)
    }
  },

  // Feature flags
  isFeatureEnabled: (flag: string): boolean => {
    if (config.posthog.isConfigured()) {
      return posthog.isFeatureEnabled(flag) || false
    }
    return false
  },

  // Reset user (on logout)
  reset: () => {
    if (config.posthog.isConfigured()) {
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