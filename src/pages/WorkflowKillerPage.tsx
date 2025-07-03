import React from 'react';
import { ArrowLeft, Zap, Clock, CheckCircle, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const WorkflowKillerPage = () => {
  const examples = [
    {
      title: "Lead Qualification Chatbot",
      problem: "Spending 8 hours/week screening unqualified leads",
      solution: "24/7 intelligent chatbot that pre-qualifies prospects",
      timeSaved: "8 hours/week",
      moneySaved: "$1,600/month",
      payback: "1 week"
    },
    {
      title: "Appointment Reminder System",
      problem: "20% no-show rate costing $2,000/month in lost revenue",
      solution: "Automated SMS/email reminders with confirmation",
      timeSaved: "5 hours/week",
      moneySaved: "$1,400/month",
      payback: "1 week"
    },
    {
      title: "Invoice Follow-up Automation",
      problem: "Chasing late payments manually for 6 hours/week",
      solution: "Automated payment reminders and follow-up sequences",
      timeSaved: "6 hours/week",
      moneySaved: "$1,200/month",
      payback: "1 week"
    }
  ];

  const process = [
    {
      step: 1,
      title: "1-Hour Deep Dive",
      description: "We analyze your most time-consuming process together"
    },
    {
      step: 2,
      title: "Custom Solution Design",
      description: "I design a micro-app specifically for your workflow"
    },
    {
      step: 3,
      title: "72-Hour Build",
      description: "Your app is built and ready for testing"
    },
    {
      step: 4,
      title: "5-Hour Guarantee",
      description: "Save 5+ hours in month one or get a full refund"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Workflow Killer App - Save 5+ Hours Per Week | Whiz"
        description="Eliminate your worst workflow in 72 hours. Guaranteed to save 5+ hours per week or full refund. Starting at $297."
        canonicalUrl="https://whiz.so/workflow-killer"
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
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5 mr-2" />
              <span className="font-semibold">72-Hour Guarantee</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Kill Your Worst Workflow
              <br />
              <span className="text-orange-600">In 72 Hours</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Identify your biggest time-waster and get a custom micro-app that eliminates it. 
              Guaranteed to save 5+ hours per week or full refund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors"
              >
                Kill My Workflow - $297
              </Link>
              <Link
                to="/book-call"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors"
              >
                Discuss My Workflow
              </Link>
            </div>
          </div>

          {/* The Guarantee */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-16">
            <div className="text-center">
              <Target className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The 5-Hour Guarantee
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Your Workflow Killer app must save you at least 5 hours in the first month, 
                or you get a complete refund. No questions asked.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                  <div className="text-gray-700">Hours Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">72</div>
                  <div className="text-gray-700">Hour Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-700">Money Back</div>
                </div>
              </div>
            </div>
          </div>

          {/* Real Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Real Workflow Killers I've Built
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {examples.map((example, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{example.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                      <p className="text-gray-700 text-sm">{example.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                      <p className="text-gray-700 text-sm">{example.solution}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="font-bold text-green-600">{example.timeSaved}</div>
                          <div className="text-xs text-gray-600">Time Saved</div>
                        </div>
                        <div>
                          <div className="font-bold text-green-600">{example.payback}</div>
                          <div className="text-xs text-gray-600">Payback</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How the Workflow Killer Process Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Calculate Your ROI
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  If you save just 5 hours per week at $50/hour:
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Weekly savings:</span>
                    <span className="font-bold">$250</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly savings:</span>
                    <span className="font-bold">$1,083</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual savings:</span>
                    <span className="font-bold">$13,000</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg">
                    <span>Workflow Killer cost:</span>
                    <span className="font-bold">$297</span>
                  </div>
                  <div className="flex justify-between text-xl">
                    <span className="font-bold">Payback period:</span>
                    <span className="font-bold text-green-600">1.2 weeks</span>
                  </div>
                  <div className="flex justify-between text-xl">
                    <span className="font-bold">Year 1 ROI:</span>
                    <span className="font-bold text-green-600">4,276%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Perfect If You...
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Spend 5+ hours/week on repetitive tasks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Want to test Whiz with a small project first</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Need results fast (within 72 hours)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Have one specific pain point to solve</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Want guaranteed ROI before investing more</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Prefer to start small and scale up</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Value time over money</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span>Want to see what's possible with automation</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Kill Your Worst Workflow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started today and see results in 72 hours. Guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Start My Workflow Killer
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/book-call"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Discuss My Workflow First
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkflowKillerPage;