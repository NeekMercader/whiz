import React from 'react';
import { Shield, Clock, Wrench, DollarSign, Target } from 'lucide-react';

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "The Demo-First Guarantee",
      description: "You pay nothing until you see and approve a working demo of your app. No deposits. No risk. If you don't love it, you don't pay.",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "The On-Time Guarantee",
      description: "If I'm late, you save. 1 day late = 10% off, 2 days late = 25% off, 3+ days late = 50% off.",
      color: "bg-green-500"
    },
    {
      icon: Wrench,
      title: "The 90-Day Peace of Mind",
      description: "If your app breaks due to my code within 90 days, I fix it free. No questions. No fees. No hassle.",
      color: "bg-purple-500"
    },
    {
      icon: DollarSign,
      title: "The Fair Price Promise",
      description: "Find a comparable quote that's lower? I'll match it or refer you. I believe in fair pricing for everyone.",
      color: "bg-orange-500"
    },
    {
      icon: Target,
      title: "The 5-Hour Guarantee",
      description: "If your Workflow Killer app doesn't save 5 hours in month one, full refund. Track your time. Show me the numbers.",
      color: "bg-red-500",
      badge: "Workflow Killer Only"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            My "No BS" Guarantees
          </h2>
          <p className="text-xl text-gray-600">
            I put my money where my mouth is. These aren't just promises - they're guarantees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow relative">
              {guarantee.badge && (
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {guarantee.badge}
                </div>
              )}
              
              <div className={`${guarantee.color} rounded-lg p-3 w-fit mb-4`}>
                <guarantee.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {guarantee.title}
              </h3>
              
              <p className="text-gray-700">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Risk Reversal Statement */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Zero Risk. All Reward.
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            I'm so confident in my work that I'm willing to take all the risk. You only pay when you're completely satisfied.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-gray-700">Upfront Payment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Satisfaction Required</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-gray-700">Peace of Mind</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;