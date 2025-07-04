import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const AppAuditChecklistPage = () => {
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service and provide the download
    console.log('Email for download:', email);
    setIsDownloaded(true);
  };

  const checklistItems = [
    {
      category: "Current Process Analysis",
      items: [
        "List all manual tasks taking more than 30 minutes per week",
        "Identify repetitive data entry processes",
        "Document current software subscriptions and costs",
        "Calculate time spent on administrative tasks",
        "Note pain points and bottlenecks in workflows"
      ]
    },
    {
      category: "App Opportunity Assessment",
      items: [
        "Identify processes that could be automated",
        "Calculate potential time savings per process",
        "Estimate cost of current inefficiencies",
        "Prioritize processes by impact and complexity",
        "Consider integration needs with existing systems"
      ]
    },
    {
      category: "ROI Calculation",
      items: [
        "Calculate hourly cost of manual processes",
        "Estimate monthly time savings from automation",
        "Project annual cost savings",
        "Compare against app development costs",
        "Factor in productivity gains and error reduction"
      ]
    },
    {
      category: "Technical Requirements",
      items: [
        "Define must-have features vs nice-to-have",
        "Identify required integrations (payment, email, etc.)",
        "Consider mobile vs desktop usage patterns",
        "Determine user access levels needed",
        "Plan for data backup and security requirements"
      ]
    },
    {
      category: "Implementation Planning",
      items: [
        "Set realistic timeline expectations",
        "Plan for team training and adoption",
        "Identify potential resistance points",
        "Create rollout strategy",
        "Plan for ongoing maintenance and updates"
      ]
    }
  ];

  if (isDownloaded) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <SEOHead 
          title="Download Sent - App Audit Checklist | Whiz"
          description="Your free app audit checklist has been sent to your email. Check your inbox for the comprehensive 25-point audit guide."
          canonicalUrl="https://whiz.so/resources/app-audit-checklist"
        />
        <Header />
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">
              Check Your Email!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your App Audit Checklist is on its way. Check your inbox for the download link.
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
        title="Free App Audit Checklist - 25-Point Business Process Analysis | Whiz"
        description="Download our comprehensive 25-point app audit checklist. Identify which business processes could benefit from automation and calculate potential ROI."
        keywords="app audit checklist, business process analysis, automation assessment, ROI calculation, process optimization"
        canonicalUrl="https://whiz.so/resources/app-audit-checklist"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free App Audit Checklist
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A comprehensive 25-point checklist to identify exactly which processes in your business 
                could benefit from custom app development and calculate the potential ROI.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">What You'll Get:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>25-point comprehensive audit checklist</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>ROI calculation worksheets</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Process prioritization framework</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Real client examples and case studies</span>
                  </div>
                </div>
              </div>

              {/* Preview of checklist items */}
              <div className="space-y-6">
                {checklistItems.slice(0, 2).map((category, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-bold mb-4">{category.category}</h4>
                    <div className="space-y-2">
                      {category.items.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                      {category.items.length > 3 && (
                        <p className="text-gray-500 italic">+ {category.items.length - 3} more items...</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Form */}
            <div className="bg-gray-800 rounded-xl p-8 h-fit">
              <div className="text-center mb-6">
                <Download className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Download Your Free Checklist</h3>
                <p className="text-gray-300">
                  Enter your email to get instant access to the complete 25-point audit checklist.
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
                  Download Free Checklist
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  No spam, ever. Unsubscribe with one click.
                  <br />
                  <strong>2,000+ downloads</strong> • <strong>4.9/5 rating</strong>
                </p>
              </div>

              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <h4 className="font-bold mb-2">Bonus: Free 15-Minute Consultation</h4>
                <p className="text-sm text-gray-300">
                  Download the checklist and get a free 15-minute call to discuss your specific needs.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-gray-800 rounded-xl p-8 text-center">
            <p className="text-lg italic mb-4">
              "This checklist helped me identify $50k in annual savings opportunities. 
              The ROI calculations were spot-on and helped me prioritize which apps to build first."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Sarah Williams"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <div className="font-semibold">Sarah Williams</div>
                <div className="text-sm text-gray-400">Boutique Owner, Austin TX</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AppAuditChecklistPage;