import React from 'react';
import { Link } from 'react-router-dom';
import { List2 } from './ui/list-2';

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            "Why Don't I Just Use Bubble or Webflow?"
          </h2>
          <p className="text-xl text-gray-400 italic">
            Great question. Here's the honest truth about DIY app builders.
          </p>
        </div>

        <List2 />

        {/* Hidden Costs */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-red-900/20 rounded-xl p-8 border border-red-800">
            <h3 className="text-2xl font-bold text-red-400 mb-6">Real DIY Hidden Costs</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-red-300">Your time: 40-80 hours to learn</span>
                <span className="font-bold text-red-400">$2,000-4,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-300">Monthly fees: $29 + $49 + $99</span>
                <span className="font-bold text-red-400">$177/month forever</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-300">Limitations: Can't do custom logic</span>
                <span className="font-bold text-red-400">Priceless frustration</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-300">Support: You're on your own</span>
                <span className="font-bold text-red-400">Stress & delays</span>
              </div>
              <hr className="border-red-800" />
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-red-400">First Year Total:</span>
                <span className="font-bold text-red-400">$4,000-6,000+</span>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 rounded-xl p-8 border border-green-800">
            <h3 className="text-2xl font-bold text-green-400 mb-6">The Whiz Way</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-green-300">Your time investment</span>
                <span className="font-bold text-green-400">15 minutes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-300">App development</span>
                <span className="font-bold text-green-400">$197-3,997</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-300">Custom features</span>
                <span className="font-bold text-green-400">Included</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-300">Direct support</span>
                <span className="font-bold text-green-400">Me, personally</span>
              </div>
              <hr className="border-green-800" />
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-green-400">Total Cost:</span>
                <span className="font-bold text-green-400">$197-3,997</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Verdict */}
        <div className="text-center bg-blue-900/20 rounded-xl p-8 border border-blue-800">
          <h3 className="text-2xl font-bold text-white mb-4">The Verdict</h3>
          <p className="text-lg text-gray-300 mb-6">
            DIY tools are great for hobbyists with unlimited time. For business owners who need 
            results now, not after 80 hours of tutorials? That's where I come in.
          </p>
          <Link to="/blog/diy-vs-done-for-you-hidden-costs" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            See the Full DIY vs. Done-For-You Comparison →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;