import React from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle, DollarSign, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DIYVsDoneForYouPage = () => {
  const comparisonData = [
    {
      category: "Initial Cost",
      diy: "$0-29/month",
      diyHidden: "40-80 hours learning = $2,000-4,000",
      whiz: "$197-3,997",
      whizValue: "One-time payment, you own it forever"
    },
    {
      category: "Time to Launch",
      diy: "\"Hours to launch!\"",
      diyHidden: "Reality: 2-6 months learning + building",
      whiz: "1-7 days",
      whizValue: "Guaranteed delivery timeline"
    },
    {
      category: "Monthly Fees",
      diy: "$29-199/month",
      diyHidden: "Forever, increases with usage",
      whiz: "$0",
      whizValue: "No ongoing fees, ever"
    },
    {
      category: "Customization",
      diy: "Template-based",
      diyHidden: "Limited to what the platform allows",
      whiz: "100% custom",
      whizValue: "Built exactly for your workflow"
    },
    {
      category: "Support",
      diy: "Community forums",
      diyHidden: "You're on your own for problems",
      whiz: "Direct developer access",
      whizValue: "Personal support from Neek"
    },
    {
      category: "Scalability",
      diy: "Pay more for more",
      diyHidden: "Costs increase with users/data",
      whiz: "Unlimited",
      whizValue: "No limits on users or data"
    }
  ];

  const realCosts = {
    year1: {
      diy: 7920,
      whiz: 2997
    },
    year3: {
      diy: 15840,
      whiz: 2997
    },
    year5: {
      diy: 23760,
      whiz: 2997
    }
  };

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
              DIY vs Done-For-You: The Complete Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The honest truth about building your own app vs hiring a professional. 
              Real costs, hidden fees, and time investments revealed.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-900/20 border border-red-800 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-red-400">DIY Reality Check</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Learning time:</span>
                  <span className="font-bold">40-80 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>5-year total cost:</span>
                  <span className="font-bold">${realCosts.year5.diy.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Limitations:</span>
                  <span className="font-bold">Many</span>
                </div>
                <div className="flex justify-between">
                  <span>Support:</span>
                  <span className="font-bold">You're alone</span>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-800 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-green-400">Whiz Advantage</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Your time investment:</span>
                  <span className="font-bold">15 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>5-year total cost:</span>
                  <span className="font-bold">${realCosts.year5.whiz.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Limitations:</span>
                  <span className="font-bold">None</span>
                </div>
                <div className="flex justify-between">
                  <span>Support:</span>
                  <span className="font-bold">Direct access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800 rounded-xl overflow-hidden">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left text-red-400">DIY Promise</th>
                    <th className="px-6 py-4 text-left text-red-300">DIY Reality</th>
                    <th className="px-6 py-4 text-left text-green-400">Whiz Solution</th>
                    <th className="px-6 py-4 text-left text-green-300">Whiz Value</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="px-6 py-4 font-semibold">{row.category}</td>
                      <td className="px-6 py-4 text-red-400">{row.diy}</td>
                      <td className="px-6 py-4 text-red-300">{row.diyHidden}</td>
                      <td className="px-6 py-4 text-green-400">{row.whiz}</td>
                      <td className="px-6 py-4 text-green-300">{row.whizValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cost Over Time */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Total Cost of Ownership</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Year 1</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-red-400 font-bold text-2xl">${realCosts.year1.diy.toLocaleString()}</div>
                    <div className="text-sm text-red-300">DIY Total</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-2xl">${realCosts.year1.whiz.toLocaleString()}</div>
                    <div className="text-sm text-green-300">Whiz Total</div>
                  </div>
                  <div className="text-green-400 font-bold">
                    Save ${(realCosts.year1.diy - realCosts.year1.whiz).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Year 3</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-red-400 font-bold text-2xl">${realCosts.year3.diy.toLocaleString()}</div>
                    <div className="text-sm text-red-300">DIY Total</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-2xl">${realCosts.year3.whiz.toLocaleString()}</div>
                    <div className="text-sm text-green-300">Whiz Total</div>
                  </div>
                  <div className="text-green-400 font-bold">
                    Save ${(realCosts.year3.diy - realCosts.year3.whiz).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Year 5</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-red-400 font-bold text-2xl">${realCosts.year5.diy.toLocaleString()}</div>
                    <div className="text-sm text-red-300">DIY Total</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-2xl">${realCosts.year5.whiz.toLocaleString()}</div>
                    <div className="text-sm text-green-300">Whiz Total</div>
                  </div>
                  <div className="text-green-400 font-bold">
                    Save ${(realCosts.year5.diy - realCosts.year5.whiz).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When DIY Makes Sense */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">When DIY Makes Sense</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                  <span>You have 40+ hours to learn and build</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                  <span>Your needs fit perfectly into templates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                  <span>You enjoy learning new technology</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                  <span>You don't mind ongoing monthly fees</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                  <span>You can handle technical issues yourself</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">When Whiz Makes Sense</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <span>You want to focus on your business, not tech</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <span>You need custom features and workflows</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <span>You want results in days, not months</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <span>You prefer one-time costs over subscriptions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <span>You want direct developer support</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Skip the DIY Headaches?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a custom app built for your exact needs without the learning curve, 
              monthly fees, or technical frustrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get My Free Proposal
              </Link>
              <Link
                to="/roi-calculator"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Calculate My Savings
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DIYVsDoneForYouPage;