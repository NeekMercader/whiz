import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Gift } from 'lucide-react';
import { subscribeToNewsletter } from '../services/email';

const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await subscribeToNewsletter({ 
        email,
        tags: ['whiz-newsletter', 'final-cta-signup']
      });
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Failed to subscribe:', error);
      setError(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Stop Waiting and Start Building?
        </h2>
        <p className="text-xl mb-12 opacity-90">
          Choose your path to getting the app your business needs
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Option 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Try the Workflow Killer</h3>
            <div className="text-3xl font-bold mb-4">$297</div>
            <p className="mb-6">Perfect first project. 5-hour guarantee.</p>
            <Link to="/workflow-killer" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full flex items-center justify-center">
              Kill My Worst Workflow
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          {/* Option 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Book a Free Call</h3>
            <div className="text-3xl font-bold mb-4">15 Min</div>
            <p className="mb-6">Let's discuss your specific needs honestly.</p>
            <Link to="/book-call" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-full flex items-center justify-center">
              Schedule with Neek
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          {/* Option 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
            <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Enter Free App Friday</h3>
            <div className="text-3xl font-bold mb-4">$0</div>
            <p className="mb-6">Win a complete app build at no cost.</p>
            <Link to="/free-app-friday" className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors w-full flex items-center justify-center">
              Enter This Week
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Not Ready Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Not Ready Yet?</h3>
          {!isSubscribed ? (
            <>
              <p className="text-lg mb-6 opacity-90">
                That's fine! Join 2,000+ business owners getting weekly automation tips:
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Get Free Guide'}
                </button>
              </form>
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg max-w-md mx-auto">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              <p className="text-sm opacity-75 mt-3">
                Get "10 Apps Every Business Needs" - Free guide worth $47
              </p>
            </>
          ) : (
            <div className="text-center">
              <p className="text-lg mb-4">✅ Thanks for subscribing!</p>
              <p className="text-sm opacity-75">Check your email for your free guide.</p>
            </div>
          )}
        </div>

        {/* Final Trust Elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">0%</div>
            <div className="opacity-90">Risk to you</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="opacity-90">Satisfaction guaranteed</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="opacity-90">Direct access to Neek</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;