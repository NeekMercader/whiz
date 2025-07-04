import React, { useState } from 'react';
import { Mail, Gift, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { subscribeToNewsletter } from '../services/email';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await subscribeToNewsletter({ 
        email,
        tags: ['whiz-newsletter', 'website-signup']
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

  const benefits = [
    {
      icon: Gift,
      title: "Free Weekly App Ideas",
      description: "Get 3 profitable app ideas delivered every Tuesday"
    },
    {
      icon: TrendingUp,
      title: "ROI Case Studies",
      description: "Real client results and revenue impact stories"
    },
    {
      icon: Users,
      title: "Exclusive Founder Updates",
      description: "Behind-the-scenes insights from building Whiz"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the Whiz Community! 🎉
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Check your email for your welcome gift: "10 Apps Every Business Needs" guide
            </p>
            <p className="text-gray-500">
              You'll receive your first weekly app ideas this Tuesday at 9 AM EST
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Mail className="h-5 w-5 mr-2" />
            <span className="font-semibold">Join 2,000+ Business Owners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Weekly App Ideas That Actually Make Money
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Every Tuesday, I send 3 profitable app ideas with real ROI data, implementation costs, 
            and step-by-step breakdowns. Plus exclusive case studies from actual Whiz clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">What You'll Get Every Week:</h3>
            
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mr-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="opacity-90">{benefit.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8">
              <h4 className="text-lg font-bold mb-4">🎁 Instant Welcome Gift</h4>
              <p className="opacity-90">
                "10 Apps Every Business Needs" - A $47 value guide with detailed ROI projections, 
                implementation timelines, and real client success stories.
              </p>
            </div>
          </div>

          {/* Signup Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Start Getting Profitable App Ideas
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Gift className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Subscribing...' : 'Get My Free Guide + Weekly Ideas'}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm opacity-75">
                No spam, ever. Unsubscribe with one click. 
                <br />
                <strong>2,000+ subscribers</strong> • <strong>4.9/5 rating</strong>
              </p>
            </div>

            {/* Social Proof */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">2,000+</div>
                <div className="text-xs opacity-75">Subscribers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-xs opacity-75">Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold">$2.3M</div>
                <div className="text-xs opacity-75">Client Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
          <p className="text-lg italic mb-4">
            "Neek's weekly emails are pure gold. I've implemented 3 of his app ideas and they've 
            generated over $50k in new revenue this year alone."
          </p>
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Sarah Williams"
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div className="text-left">
              <div className="font-semibold">Sarah Williams</div>
              <div className="text-sm opacity-75">Boutique Owner, Austin TX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;