import React from 'react';
import { Star, Clock, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start Small or Go Big - Your Choice
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing. No hidden fees. No surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Workflow Killer - Featured */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  BEST VALUE TO START
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">THE WORKFLOW KILLER</h3>
                  <div className="text-4xl font-bold mb-4">$297</div>
                  <p className="text-xl mb-4 opacity-90">
                    Guaranteed to Save You 5 Hours a Month
                  </p>
                  <div className="flex items-center mb-6">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Delivery: 72 hours</span>
                  </div>
                  <Link to="/workflow-killer" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                    Kill My Worst Workflow
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">What You Get:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span>1-hour deep-dive audit of your most inefficient process</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span>Custom Micro-App built specifically to automate that process</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span><strong>Our Guarantee:</strong> Save 5+ hours in month one or full refund</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <p className="text-sm">
                      <strong>Perfect For:</strong> Testing if Whiz is right for you • Solving one specific pain point • Getting a quick win
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Micro-Apps */}
          <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 bg-blue-200 px-2 py-1 rounded">
                QUICK START
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">MICRO-APPS</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">$297</div>
            <p className="text-gray-600 mb-4">Perfect for testing the waters</p>
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <Clock className="h-4 w-4 mr-1" />
              <span>Delivery: 24-48 hours</span>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Single-function tool</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Professional design</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Mobile responsive</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>30-day warranty</span>
              </div>
            </div>
            
            <Link to="/contact" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center">
              Order Micro-App
            </Link>
          </div>

          {/* Starter Apps */}
          <div className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <CheckCircle className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-green-600 bg-green-200 px-2 py-1 rounded">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">STARTER APPS</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">$1,997</div>
            <p className="text-gray-600 mb-4">Most popular for small businesses</p>
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <Clock className="h-4 w-4 mr-1" />
              <span>Delivery: 3-5 days</span>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Multi-page application</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>User accounts/login</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Database functionality</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>60-day warranty</span>
              </div>
            </div>
            
            <Link to="/contact" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block text-center">
              Start My App
            </Link>
          </div>

          {/* Business Apps */}
          <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-600 text-white p-2 rounded-lg">
                <CheckCircle className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-purple-600 bg-purple-200 px-2 py-1 rounded">
                GROWING BIZ
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">BUSINESS APPS</h3>
            <div className="text-3xl font-bold text-purple-600 mb-2">$3,997</div>
            <p className="text-gray-600 mb-4">For growing companies</p>
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <Clock className="h-4 w-4 mr-1" />
              <span>Delivery: 5-7 days</span>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Complex workflows</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Multiple user types</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Advanced integrations</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>90-day warranty</span>
              </div>
            </div>
            
            <Link to="/contact" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block text-center">
              Scale My Business
            </Link>
          </div>

          {/* System Apps */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gray-600 text-white p-2 rounded-lg">
                <CheckCircle className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded">
                ENTERPRISE
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">SYSTEM APPS</h3>
            <div className="text-3xl font-bold text-gray-600 mb-2">$7,997+</div>
            <p className="text-gray-600 mb-4">Enterprise-grade solutions</p>
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <Clock className="h-4 w-4 mr-1" />
              <span>Delivery: 10-14 days</span>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Unlimited complexity</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Custom architecture</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Advanced security</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>120-day warranty</span>
              </div>
            </div>
            
            <Link to="/contact" className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors block text-center">
              Let's Talk Strategy
            </Link>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Limited-Time Launch Specials</h3>
            <p className="text-xl opacity-90">Get more value with these exclusive offers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">📦 Portfolio Builder</h4>
              <div className="text-2xl font-bold mb-2">$497</div>
              <p className="text-sm opacity-90 mb-4">3 Apps for the Price of 2.5</p>
              <p className="text-sm">Contact form + Calculator + Landing page</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">🔄 App Swap Rescue</h4>
              <div className="text-2xl font-bold mb-2">25% Off</div>
              <p className="text-sm opacity-90 mb-4">Failed project from another dev?</p>
              <p className="text-sm">I'll rebuild it right</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">🤝 Revenue Share</h4>
              <div className="text-2xl font-bold mb-2">50% Now</div>
              <p className="text-sm opacity-90 mb-4">15% revenue share for 12 months</p>
              <p className="text-sm">Perfect for funded startups</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">🎯 Referral Reward</h4>
              <div className="text-2xl font-bold mb-2">30%</div>
              <p className="text-sm opacity-90 mb-4">Commission on every referral</p>
              <p className="text-sm">Lifetime 10% on maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;