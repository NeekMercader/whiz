import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Phone, Award } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why I Started Whiz (And Why You Can Trust Me)
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <div className="bg-gray-700 rounded-xl p-8 mb-8">
              <Heart className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">The Story That Started It All</h3>
              <p className="text-gray-300 mb-4">
                I watched my friend's contractor business struggle for 6 months waiting for a simple 
                ordering app. The developer wanted <strong>$12,000</strong> with features that weren't 
                crucial and a completion date that kept moving.
              </p>
              <p className="text-gray-300 mb-4">
                I built it for him in a weekend using AI tools. I am a software developer by trade 
                but AI now helps me work incredibly faster and so much cheaper.
              </p>
              <p className="text-gray-300 font-semibold">
                That's when I realized: AI has changed everything about app development, but most 
                developers are still charging like it's 2010.
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl text-white font-semibold mb-4">I'm here to change that.</p>
              <Link to="/portfolio" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                See My Portfolio & Case Studies →
              </Link>
            </div>
          </div>

          {/* Proof Points */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600/20 rounded-lg p-3 mr-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">20+ Years Experience</h4>
                <p className="text-gray-400">
                  Two decades of software development across multiple industries and technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-600/20 rounded-lg p-3 mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Real Case Studies</h4>
                <p className="text-gray-400">
                  Measurable ROI results from actual client projects, not theoretical examples.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-600/20 rounded-lg p-3 mr-4">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Direct Access</h4>
                <p className="text-gray-400">
                  No middlemen, account managers, or phone trees. Just me, personally committed to your success.
                </p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch Directly</h4>
              <div className="space-y-2">
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">📧 Contact Form</Link>
                <p className="text-gray-300">📞 Phone: 1-800-WHIZ-APP</p>
                <p className="text-gray-300">💬 Live Chat: Available 9-5 EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;