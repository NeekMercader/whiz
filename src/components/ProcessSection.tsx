import React from 'react';
import { MessageSquare, FileText, Code, TestTube, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Quick Discovery",
      duration: "15 minutes",
      description: "We talk. You explain what you need. I confirm I can build it and when.",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Proposal & Agreement",
      duration: "Same day",
      description: "Clear scope, fixed price, delivery date. No surprises.",
      color: "bg-green-500"
    },
    {
      icon: Code,
      title: "Development Sprint",
      duration: "1-10 days",
      description: "I build your app using AI tools. Daily progress updates via email with screenshots.",
      color: "bg-purple-500"
    },
    {
      icon: TestTube,
      title: "Demo & Refinement",
      duration: "1 day",
      description: "You test the app. We make adjustments. You approve or get a full refund.",
      color: "bg-orange-500"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      duration: "Ongoing",
      description: "Your app goes live. Optional maintenance keeps it running smoothly.",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="process" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How I Build Your App So Fast
          </h2>
          <p className="text-xl text-gray-600">
            A streamlined, transparent process that gets results
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300 z-0" />
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Step Icon */}
                  <div className={`${step.color} rounded-full p-3 text-white relative z-10`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          Step {index + 1}: {step.title}
                        </h3>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Advantage */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Unique Advantage: Complete Transparency
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Get daily progress updates with screenshots and explanations - you're never in the dark about your project status.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">Daily</div>
              <div className="text-sm text-gray-600">Progress Updates</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">Real-time</div>
              <div className="text-sm text-gray-600">Screenshots</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-600 mb-2">Direct</div>
              <div className="text-sm text-gray-600">Communication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;