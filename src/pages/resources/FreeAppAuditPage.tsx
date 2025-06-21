import React, { useState } from 'react';
import { ArrowLeft, Search, CheckCircle, Calendar, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FreeAppAuditPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    currentChallenges: '',
    monthlyRevenue: '',
    teamSize: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Audit request submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const auditIncludes = [
    {
      icon: Search,
      title: "Process Analysis",
      description: "I'll identify your biggest time-wasting manual processes and calculate the cost of inefficiency."
    },
    {
      icon: TrendingUp,
      title: "ROI Projections",
      description: "Get specific numbers on potential time and cost savings from automation."
    },
    {
      icon: CheckCircle,
      title: "Custom Recommendations",
      description: "Receive a prioritized list of app opportunities tailored to your business."
    },
    {
      icon: Calendar,
      title: "Implementation Roadmap",
      description: "A step-by-step plan for automating your processes, starting with the highest impact items."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">
              Audit Request Received!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I'll personally review your submission and send you a detailed audit within 48 hours. 
              Check your email for confirmation and next steps.
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

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free App Audit
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a personalized analysis of your business processes and discover exactly 
              how much time and money you could save with custom automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* What's Included */}
            <div>
              <h2 className="text-3xl font-bold mb-8">What's Included in Your Free Audit</h2>
              
              <div className="space-y-6 mb-8">
                {auditIncludes.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600/20 rounded-lg p-3 mr-4">
                      <item.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Recent Audit Results:</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Yoga Studio:</span>
                    <span className="font-bold text-green-400">15 hours/week saved</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Restaurant:</span>
                    <span className="font-bold text-green-400">$3,200/month saved</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Contractor:</span>
                    <span className="font-bold text-green-400">50% faster quotes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Boutique:</span>
                    <span className="font-bold text-green-400">90% fewer stockouts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Request Form */}
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Request Your Free Audit</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    >
                      <option value="">Select your industry</option>
                      <option value="retail">Retail</option>
                      <option value="restaurant">Restaurant/Food Service</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="construction">Construction</option>
                      <option value="fitness">Fitness/Wellness</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
                      Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    >
                      <option value="">Select team size</option>
                      <option value="1">Just me</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="11-25">11-25 people</option>
                      <option value="25+">25+ people</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="monthlyRevenue" className="block text-sm font-medium mb-2">
                      Monthly Revenue
                    </label>
                    <select
                      id="monthlyRevenue"
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    >
                      <option value="">Select range</option>
                      <option value="0-10k">$0 - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="currentChallenges" className="block text-sm font-medium mb-2">
                    Current Challenges *
                  </label>
                  <textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Describe your biggest time-wasting processes, manual tasks, or business challenges..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Get My Free Audit
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  <strong>100% Free</strong> • <strong>No Obligation</strong> • <strong>48-Hour Turnaround</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mt-16 bg-gray-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-12">How the Audit Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Submit Request</h3>
                <p className="text-gray-300 text-sm">Fill out the form with your business details and challenges</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Analysis</h3>
                <p className="text-gray-300 text-sm">I personally review your processes and identify opportunities</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Custom Report</h3>
                <p className="text-gray-300 text-sm">Receive detailed findings with ROI projections and recommendations</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Optional Call</h3>
                <p className="text-gray-300 text-sm">15-minute call to discuss findings and answer questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreeAppAuditPage;