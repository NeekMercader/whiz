import React, { useEffect } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { trackEvent } from '../lib/analytics'

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    // Track successful payment
    if (sessionId) {
      trackEvent.paymentCompleted(0, 'unknown') // Amount will be tracked via webhook
    }
  }, [sessionId])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-8" />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Payment Successful! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your payment. Your project is now in our development queue 
            and I'll be in touch within 24 hours to kick things off.
          </p>

          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
                  <p className="text-gray-600">You'll receive a confirmation email with your receipt and project details.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Project Kickoff</h3>
                  <p className="text-gray-600">I'll reach out within 24 hours to discuss requirements and timeline.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Development Begins</h3>
                  <p className="text-gray-600">Track progress in your client portal with daily updates.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Demo & Delivery</h3>
                  <p className="text-gray-600">Review your working app and provide feedback before final delivery.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portal"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Access Client Portal
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns, don't hesitate to reach out.
            </p>
            <div className="space-y-2 text-sm">
              <p>📧 Email: neek@whiz.so</p>
              <p>📞 Phone: 1-800-WHIZ-APP</p>
              <p>💬 Live Chat: Available 9-5 EST</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PaymentSuccessPage