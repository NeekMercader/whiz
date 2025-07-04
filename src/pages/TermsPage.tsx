import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEOHead 
        title="Terms of Service | Whiz Custom App Development"
        description="Read our terms of service for custom app development. Transparent policies, guarantees, and service agreements for Whiz clients."
        keywords="terms of service, whiz terms, app development agreement, service terms"
        canonicalUrl="https://whiz.so/terms"
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

          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-12">Last updated: January 15, 2025</p>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing and using Whiz services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-gray-300">
                Whiz provides custom application development services for businesses. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                <li>Micro-Apps ($197)</li>
                <li>Workflow Killer Apps ($299)</li>
                <li>Starter Apps ($1,997)</li>
                <li>Business Apps ($3,997)</li>
                <li>System Apps ($7,997+)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
              <p className="text-gray-300">
                Payment is due only after you approve the working demo of your application. We offer the following guarantees:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                <li>Demo-First Guarantee: No payment until you approve the demo</li>
                <li>On-Time Guarantee: Discounts for late delivery</li>
                <li>90-Day Peace of Mind: Free fixes for any bugs in our code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300">
                Upon full payment, you own the complete source code and all intellectual property rights to your custom application. 
                We retain no rights to your application or data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Warranties and Guarantees</h2>
              <p className="text-gray-300">
                We provide a 90-day warranty on all applications. If your app breaks due to our code within 90 days, 
                we will fix it at no charge. For Workflow Killer apps, we guarantee 5+ hours of time savings in the first month 
                or provide a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300">
                Our liability is limited to the amount paid for services. We are not liable for any indirect, 
                incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Privacy and Confidentiality</h2>
              <p className="text-gray-300">
                We treat all client information as confidential. We will sign NDAs upon request and never share 
                your business information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-gray-300">
                For questions about these Terms of Service, please contact us through our contact form or 
                call 1-800-WHIZ-APP.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;