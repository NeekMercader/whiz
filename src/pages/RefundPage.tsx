import React from 'react';
import { ArrowLeft, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const RefundPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEOHead 
        title="100% Risk-Free Guarantee | Whiz Refund Policy"
        description="Learn about our comprehensive guarantees and refund policy. Demo-first guarantee, 5-hour guarantee, and 90-day warranty for all apps."
        keywords="refund policy, money back guarantee, risk free, app development guarantee"
        canonicalUrl="https://whiz.so/refund"
      />
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">100% Risk-Free Guarantee</h1>
            <p className="text-xl text-gray-300">
              We're so confident in our work, we put our money where our mouth is
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Demo-First Guarantee</h3>
              <p className="text-gray-300">
                You pay nothing until you see and approve a working demo. Don't love it? You owe nothing.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">5-Hour Guarantee</h3>
              <p className="text-gray-300">
                Workflow Killer apps must save 5+ hours in month one or get a full refund. Track your time.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">90-Day Warranty</h3>
              <p className="text-gray-300">
                If your app breaks due to our code within 90 days, we fix it free. No questions asked.
              </p>
            </div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Refund Policy</h2>
              <p className="text-gray-300">
                At Whiz, we believe in taking all the risk so you don't have to. Here's exactly how our guarantees work:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Demo-First Guarantee</h2>
              <p className="text-gray-300">
                You pay absolutely nothing until you see a working demo of your application. If you don't love 
                the initial design and functionality, you walk away owing nothing. No deposits, no setup fees, 
                no questions asked.
              </p>
              <p className="text-gray-300 mt-4">
                <strong>How it works:</strong> We build your app first, show you the demo, and only request 
                payment after you're completely satisfied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. 5-Hour Guarantee (Workflow Killer Apps)</h2>
              <p className="text-gray-300">
                For our $299 Workflow Killer apps, we guarantee you'll save at least 5 hours in the first month 
                of use. If you don't, we'll refund your money completely.
              </p>
              <p className="text-gray-300 mt-4">
                <strong>How to claim:</strong> Track your time savings for 30 days. If you haven't saved 5+ hours, 
                send us your time log and we'll process a full refund within 48 hours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. 90-Day Peace of Mind Warranty</h2>
              <p className="text-gray-300">
                If your app breaks due to our code within 90 days of delivery, we'll fix it at no charge. 
                This covers bugs, errors, and functionality issues caused by our development.
              </p>
              <p className="text-gray-300 mt-4">
                <strong>What's covered:</strong> Any malfunction caused by our code, security vulnerabilities 
                we introduced, or features that don't work as specified.
              </p>
              <p className="text-gray-300 mt-4">
                <strong>What's not covered:</strong> Issues caused by third-party services, hosting problems, 
                or changes you made to the code.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. On-Time Guarantee</h2>
              <p className="text-gray-300">
                If we're late delivering your project, you automatically get a discount:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                <li>1 day late: 10% off final price</li>
                <li>2 days late: 25% off final price</li>
                <li>3+ days late: 50% off final price</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2>
              <p className="text-gray-300">
                To request a refund under any of our guarantees:
              </p>
              <ol className="list-decimal list-inside text-gray-300 mt-4 space-y-2">
                <li>Contact us through our contact form or call 1-800-WHIZ-APP</li>
                <li>Explain which guarantee you're claiming under</li>
                <li>Provide any required documentation (time logs for 5-hour guarantee)</li>
                <li>We'll process your refund within 48 hours</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Why We Offer These Guarantees</h2>
              <p className="text-gray-300">
                Simple: I'm confident in my work and believe in fair business practices. Too many businesses 
                have been burned by developers who take money upfront and disappear. I do the opposite - 
                I take all the risk so you can focus on growing your business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Questions?</h2>
              <p className="text-gray-300">
                If you have any questions about our refund policy or guarantees, don't hesitate to reach out. 
                I personally handle all refund requests and aim to resolve them within 24 hours.
              </p>
            </section>
          </div>

          <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started Risk-Free?</h3>
            <p className="text-lg mb-6">
              With our guarantees, you have nothing to lose and everything to gain.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get My Free Proposal
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPage;