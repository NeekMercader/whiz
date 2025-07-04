import React, { useState } from 'react'
import { CreditCard, Loader } from 'lucide-react'
import { createCheckoutSession, redirectToCheckout, servicePricing, formatPrice } from '../lib/stripe'
import { useAuth } from '../contexts/AuthContext'
import { trackEvent } from '../lib/analytics'
import toast from 'react-hot-toast'

interface PaymentButtonProps {
  projectType: keyof typeof servicePricing
  projectId?: string
  className?: string
  children?: React.ReactNode
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ 
  projectType, 
  projectId, 
  className = '',
  children 
}) => {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const handlePayment = async () => {
    if (!user) {
      toast.error('Please sign in to continue with payment')
      return
    }

    setLoading(true)
    
    try {
      const pricing = servicePricing[projectType]
      
      // Track payment initiation
      trackEvent.paymentInitiated(pricing.amount / 100, projectType)

      const { sessionId } = await createCheckoutSession({
        amount: pricing.amount,
        currency: 'USD',
        projectType,
        projectId,
        description: pricing.name
      })

      await redirectToCheckout(sessionId)
    } catch (error: any) {
      console.error('Payment error:', error)
      toast.error(error.message || 'Failed to process payment')
    } finally {
      setLoading(false)
    }
  }

  const pricing = servicePricing[projectType]

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <Loader className="h-5 w-5 mr-2 animate-spin" />
      ) : (
        <CreditCard className="h-5 w-5 mr-2" />
      )}
      {children || `Pay ${formatPrice(pricing.amount)}`}
    </button>
  )
}

export default PaymentButton