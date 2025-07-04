import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, CheckCircle, Clock, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const CalendlyBookingPage = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "15-Minute Quick Chat",
      description: "No long sales pitches. Just honest answers to your questions."
    },
    {
      icon: CheckCircle,
      title: "Instant Ballpark Estimate",
      description: "Get a rough cost and timeline estimate on the spot."
    },
    {
      icon: Video,
      title: "See Real Examples",
      description: "I'll show you similar apps I've built for other businesses."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Book a Free 15-Minute Call with Neek - Custom App Consultation | Whiz"
        description="Schedule a free consultation to discuss your app idea. Get instant feedback, ballpark pricing, and see real examples of similar projects. No sales pressure."
        keywords="free consultation, app consultation, book call, custom app discussion, project consultation"
        canonicalUrl="https://whiz.so/book-call"
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

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Talk About Your App Idea
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book a free 15-minute call to discuss your project. No sales pressure, 
              just honest feedback and actionable advice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What You'll Get From Our Call
              </h2>
              
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}

              <div className="bg-green-50 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Past Callers Say:
                </h3>
                <blockquote className="text-gray-700 italic mb-4">
                  "Neek gave me more valuable insights in 15 minutes than I got from 
                  3 other consultations. He's honest about what will and won't work."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                    alt="Sarah Williams"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Williams</div>
                    <div className="text-sm text-gray-600">Boutique Owner</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Before Our Call, Think About:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• What's your biggest time-wasting process?</li>
                  <li>• How many hours per week does it take?</li>
                  <li>• What would success look like?</li>
                  <li>• What's your rough budget range?</li>
                </ul>
              </div>
            </div>

            {/* Calendly Widget */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Schedule Your Free Call
                </h3>
                <p className="text-gray-600">
                  Pick a time that works for you. All times shown in your local timezone.
                </p>
              </div>

              {/* Calendly Inline Widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/whiz-neek/15min"
                style={{ minWidth: '320px', height: '630px' }}
              ></div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Can't find a good time? <Link to="/contact" className="text-blue-600 hover:text-blue-700">Send me a message</Link> and I'll work around your schedule.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Quick Call FAQ
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Will you try to sell me something?</h4>
                <p className="text-gray-600 text-sm">
                  Nope. I'll give you honest feedback about whether an app makes sense for your situation. 
                  Sometimes the answer is "don't build an app yet."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What if I'm not ready to start?</h4>
                <p className="text-gray-600 text-sm">
                  That's fine! Many of my best clients called months before they were ready. 
                  I'm here to help you plan, not pressure you.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Do you really answer personally?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, it's actually me (Neek) on every call. No sales reps, no account managers. 
                  Just direct access to the person who will build your app.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What if I go over 15 minutes?</h4>
                <p className="text-gray-600 text-sm">
                  Don't worry about it. If we're having a productive conversation, 
                  I'm not watching the clock. Good discussions take as long as they take.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CalendlyBookingPage;