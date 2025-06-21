import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageSquare, Clock, DollarSign } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Pre-headline */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-lg italic">
            Tired of outrageous agency quotes and endless delays?
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headlines and Offer */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              A Custom App for Your Business.
              <br />
              <span className="text-blue-600">Built in 7 Days.</span>
              <br />
              <span className="text-orange-600">For $197.</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I've replaced the slow, expensive agency model with a streamlined, AI-powered process. 
              You get a dedicated developer (me!), transparent progress, and a finished app that solves 
              your exact problem, in a fraction of the time and for a fraction of the cost.
            </p>

            {/* The Offer */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Whiz Founder's Offer (100% Risk-Free):
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong>See a working demo before you pay a dollar.</strong> If you don't love 
                    the initial design and prototype, you walk away owing nothing. No questions asked.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong>Lock in 50% Off, Forever.</strong> As one of my first 50 clients, you'll 
                    receive a permanent 50% discount on my standard rates—for this project and any future work.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong>Launch in Days, Not Months.</strong> Your first version will be ready 
                    for review in 7 days or less. Guaranteed.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Get My Free App Proposal
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link to="/contact" className="border-2 border-blue-600 text-blue-400 px-12 py-5 rounded-lg font-semibold text-lg hover:bg-blue-600/10 transition-colors flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Chat with Neek Directly
              </Link>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="font-semibold text-white">Apps starting at $197</p>
                  <p className="text-sm text-gray-400">(seriously)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="font-semibold text-white">Most delivered</p>
                  <p className="text-sm text-gray-400">within 7 days</p>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="font-semibold text-white">Pay only after</p>
                  <p className="text-sm text-gray-400">you approve the demo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Trust */}
          <div className="relative">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Neek - Whiz Founder"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">👋 Hi, I'm Neek</h3>
                  <p className="text-gray-400">Your dedicated developer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                I'm not an agency; I'm your partner. I started Whiz because I saw too many great 
                businesses get locked out by big-tech prices. My mission is simple: to give you 
                the exact tools you need to grow, without the typical tech headaches.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-300">20+ years in software development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-300">Certified in leading AI development tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-300">Direct access - no middlemen</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-300">Real phone number: 1-800-WHIZ-APP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;