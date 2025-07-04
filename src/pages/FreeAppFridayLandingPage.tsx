import React, { useState } from 'react';
import { ArrowLeft, Gift, Calendar, Star, Video, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const FreeAppFridayLandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    painPoint: '',
    impact: '',
    currentSolution: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Free App Friday submission:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const pastWinners = [
    {
      week: "Week 1",
      winner: "Maria Santos - Zen Flow Yoga",
      project: "Automated booking system",
      value: "$297",
      result: "15 hours/week saved"
    },
    {
      week: "Week 2", 
      winner: "James Chen - Elite Barber Shop",
      project: "Customer waitlist app",
      value: "$297",
      result: "Zero walk-away customers"
    },
    {
      week: "Week 3",
      winner: "Sarah Williams - Boutique Threads",
      project: "Inventory alert system",
      value: "$297",
      result: "90% fewer stockouts"
    }
  ];

  const requirements = [
    "Must be a real business with a genuine pain point",
    "Willing to provide a video testimonial after completion",
    "Available for a 30-minute discovery call if selected",
    "Committed to using the app for at least 30 days"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead 
          title="Application Submitted - Free App Friday Contest | Whiz"
          description="Your Free App Friday application has been submitted. Winners announced every Friday at 5 PM EST. Good luck!"
          canonicalUrl="https://whiz.so/free-app-friday"
        />
        <Header />
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Application Submitted! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your Free App Friday application is in! Winners are announced every Friday at 5 PM EST. 
              Check your email for confirmation and follow-up details.
            </p>
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What Happens Next?</h3>
              <div className="text-left space-y-2">
                <p className="text-gray-700">• I'll review all applications by Thursday evening</p>
                <p className="text-gray-700">• Winner announced Friday at 5 PM EST via email</p>
                <p className="text-gray-700">• If selected, we'll schedule a discovery call</p>
                <p className="text-gray-700">• App development starts the following Monday</p>
              </div>
            </div>
            <Link 
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
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
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Free App Friday - Win a Custom App Every Week | $297 Value"
        description="Enter to win a free custom app every Friday. Real businesses, real solutions, real results. One lucky winner gets a $297 app at no cost. Apply now!"
        keywords="free app friday, win free app, app contest, free custom app, business app giveaway"
        canonicalUrl="https://whiz.so/free-app-friday"
      />
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
              <Gift className="h-5 w-5 mr-2" />
              <span className="font-semibold">Free App Friday</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Win a Free App
              <br />
              <span className="text-purple-600">Every Friday</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              One lucky business owner gets a complete custom app build at no cost. 
              Real businesses, real solutions, real results.
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 inline-block">
              <div className="text-2xl font-bold mb-2">This Week's Prize</div>
              <div className="text-4xl font-bold mb-2">$297</div>
              <div className="text-lg">Workflow Killer App</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Apply for This Week's Free App
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="painPoint" className="block text-sm font-medium text-gray-700 mb-2">
                    What's your biggest business pain point? *
                  </label>
                  <textarea
                    id="painPoint"
                    name="painPoint"
                    value={formData.painPoint}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Describe the manual process that wastes the most time or causes the most frustration..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="impact" className="block text-sm font-medium text-gray-700 mb-2">
                    How would solving this impact your business? *
                  </label>
                  <textarea
                    id="impact"
                    name="impact"
                    value={formData.impact}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Time saved, money saved, stress reduced, growth enabled..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="currentSolution" className="block text-sm font-medium text-gray-700 mb-2">
                    How do you handle this currently?
                  </label>
                  <textarea
                    id="currentSolution"
                    name="currentSolution"
                    value={formData.currentSolution}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Manual process, spreadsheets, multiple tools..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
                >
                  Submit My Application
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Applications close Thursday at 11:59 PM EST
                  <br />
                  Winner announced Friday at 5 PM EST
                </p>
              </div>
            </div>

            {/* How It Works & Past Winners */}
            <div className="space-y-8">
              {/* How It Works */}
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Apply by Thursday</h4>
                      <p className="text-gray-600">Submit your biggest business pain point and impact description</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Winner Selected Friday</h4>
                      <p className="text-gray-600">Based on impact potential, business need, and story quality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">App Built Next Week</h4>
                      <p className="text-gray-600">Complete development with daily updates and live streaming</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">You Get Everything</h4>
                      <p className="text-gray-600">Complete app, training, 30-day support - just provide a testimonial</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements to Win</h3>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Winners Get */}
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Winners Receive</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Complete micro-app (worth $297)</span>
                  </div>
                  <div className="flex items-center">
                    <Video className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-gray-700">Live build experience (streamed)</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">30 days of support</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Training and onboarding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Winners */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Recent Winners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pastWinners.map((winner, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {winner.week}
                    </span>
                    <span className="font-bold text-green-600">{winner.value}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{winner.winner}</h3>
                  <p className="text-gray-600 mb-3">{winner.project}</p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm font-semibold text-green-800">Result:</div>
                    <div className="text-sm text-green-700">{winner.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Free App Friday Stats
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">47</div>
                <div className="text-gray-600">Apps Given Away</div>
              </div>
              <div>
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">1,200+</div>
                <div className="text-gray-600">Applications</div>
              </div>
              <div>
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">2,400+</div>
                <div className="text-gray-600">Hours Saved</div>
              </div>
              <div>
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
                <div className="text-gray-600">Winner Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreeAppFridayLandingPage;