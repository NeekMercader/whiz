import React from 'react';
import { Gift, Calendar, Star, Video } from 'lucide-react';

const FreeAppFridaySection = () => {
  const pastWinners = [
    {
      week: "Week 1",
      project: "Booking widget for massage therapist",
      value: "$197"
    },
    {
      week: "Week 2", 
      project: "ROI calculator for marketing agency",
      value: "$299"
    },
    {
      week: "Week 3",
      project: "Order form for food truck",
      value: "$197"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <Gift className="h-5 w-5 mr-2" />
            <span className="font-semibold">Free App Friday</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Win a Free App Every Friday!
          </h2>
          <p className="text-xl text-gray-600">
            One lucky business owner gets a complete app build at no cost
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* How It Works */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">How It Works:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Apply by Thursday</h4>
                  <p className="text-gray-600">Tell me your biggest business pain point and how an app could solve it</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Winner Selected Friday</h4>
                  <p className="text-gray-600">Based on impact potential and business need</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">App Built Next Week</h4>
                  <p className="text-gray-600">Full development with daily updates and live streaming</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">You Get Everything</h4>
                  <p className="text-gray-600">Complete app, training, 30-day support - all you give is a video testimonial</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4">What Winners Receive:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700">Complete micro-app (worth $197-299)</span>
                </div>
                <div className="flex items-center">
                  <Video className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-gray-700">Live build experience</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">30 days of support</span>
                </div>
                <div className="flex items-center">
                  <Gift className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">All you give: A video testimonial</span>
                </div>
              </div>
            </div>
          </div>

          {/* Past Winners & CTA */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Winners:</h3>
              
              <div className="space-y-4">
                {pastWinners.map((winner, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{winner.week}</div>
                      <div className="text-sm text-gray-600">{winner.project}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{winner.value}</div>
                      <div className="text-xs text-gray-500">Value</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">This Week's Prize</h3>
                <div className="text-4xl font-bold mb-2">$299</div>
                <p className="text-lg opacity-90 mb-6">Workflow Killer App</p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Enter This Week's Free App Friday →
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                * Winners announced every Friday at 5 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAppFridaySection;