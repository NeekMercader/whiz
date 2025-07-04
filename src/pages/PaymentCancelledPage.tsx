import React from 'react'
import { XCircle, ArrowLeft, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

const PaymentCancelledPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Payment Cancelled - No Charges Made | Whiz"
        description="Your payment was cancelled and no charges were made. Still interested? Contact us for a free consultation or book a call to discuss your project."
        canonicalUrl="https://whiz.so/payment-cancelled"
      />
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <XCircle className="h-20 w-20 text-orange-500 mx-auto mb-8" />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Payment Cancelled
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            No worries! Your payment was cancelled and no charges were made to your account.
          </p>

          <div className="bg-orange-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Interested?</h2>
            <p className="text-gray-700 mb-6">
              I understand that payment decisions can be complex. If you have any questions 
              about pricing, the development process, or want to discuss your project further, 
              I'm here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Have Questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Book a free 15-minute call to discuss your project and get all your questions answered.
                </p>
                <Link
                  to="/book-call"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Book Free Call
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Need More Info?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Check out our portfolio, read case studies, or calculate your potential ROI.
                </p>
                <Link
                  to="/portfolio"
                  className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors block text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Get Free Proposal
            </Link>
            <Link
              to="/"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Remember</h3>
            <p className="text-gray-600">
              With Whiz, you only pay after seeing and approving a working demo of your app. 
              There's zero risk to getting started with a free consultation.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PaymentCancelledPage