import React, { useState } from 'react';
import { ArrowLeft, Download, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const NDATemplatePage = () => {
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email for NDA download:', email);
    setIsDownloaded(true);
  };

  if (isDownloaded) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <SEOHead 
          title="NDA Template Sent - Free Download | Whiz"
          description="Your free NDA template has been sent to your email. Check your inbox for the lawyer-reviewed templates."
          canonicalUrl="https://whiz.so/resources/nda-template"
        />
        <Header />
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">
              NDA Template Sent!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Check your email for the download link to our comprehensive NDA template.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEOHead 
        title="Free NDA Template - Lawyer-Reviewed Non-Disclosure Agreement | Whiz"
        description="Download our free, lawyer-reviewed NDA template. Protect your business ideas when working with developers and contractors. Mutual and one-way options included."
        keywords="NDA template, non-disclosure agreement, free NDA, business protection, confidentiality agreement"
        canonicalUrl="https://whiz.so/resources/nda-template"
      />
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-blue-400 mr-4" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Free NDA Template
                  </h1>
                  <p className="text-gray-400">Protect your business ideas</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8">
                A comprehensive, lawyer-reviewed Non-Disclosure Agreement template that protects 
                your confidential business information when working with developers and contractors.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">What's Included:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Mutual NDA template (both parties protected)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>One-way NDA template (you protected)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Clear definitions of confidential information</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Standard 2-year protection period</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Return/destruction of materials clause</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Injunctive relief provisions</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold mb-3">Why You Need an NDA</h3>
                <p className="text-gray-300 mb-4">
                  When discussing your business ideas, processes, or proprietary information with developers, 
                  an NDA ensures your confidential information stays protected.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Protects business strategies and plans</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Covers technical specifications and code</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Includes customer lists and financial data</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Prevents unauthorized disclosure</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">My NDA Policy</h3>
                <p className="text-gray-300">
                  I'm happy to sign your NDA or we can use this template. I treat all client 
                  information as confidential by default and have never had a confidentiality issue 
                  in 20+ years of development work.
                </p>
              </div>
            </div>

            {/* Download Form */}
            <div className="bg-gray-800 rounded-xl p-8 h-fit">
              <div className="text-center mb-6">
                <Download className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Download Free NDA Template</h3>
                <p className="text-gray-300">
                  Get instant access to our lawyer-reviewed NDA templates.
                </p>
              </div>

              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download NDA Templates
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  No spam, ever. Templates delivered instantly.
                  <br />
                  <strong>1,500+ downloads</strong> • <strong>Lawyer reviewed</strong>
                </p>
              </div>

              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <h4 className="font-bold mb-2">Need Help with Your NDA?</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Not sure which template to use? I'm happy to review your specific needs.
                </p>
                <Link 
                  to="/contact"
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                >
                  Ask Neek →
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-16 bg-yellow-900/20 border border-yellow-800 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 text-yellow-400">Legal Disclaimer</h3>
            <p className="text-gray-300 text-sm">
              This template is provided for informational purposes only and does not constitute legal advice. 
              While reviewed by legal professionals, you should consult with an attorney familiar with your 
              jurisdiction's laws before using any legal document. Laws vary by state and country, and your 
              specific situation may require modifications to this template.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NDATemplatePage;