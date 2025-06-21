import React from 'react';
import { Star, Quote, TrendingUp, Users, Clock } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Yoga Instructor",
      badge: "Beta Tester",
      content: "I was skeptical about the $197 micro-app, but my contact form has already generated 12 new leads. Best ROI ever.",
      avatar: "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "James Chen",
      role: "Barber Shop Owner",
      badge: "Beta Tester",
      content: "Neek delivered exactly what he promised - a working booking system in 3 days. The ROI has been incredible.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Williams",
      role: "Boutique Owner",
      badge: "Beta Tester",
      content: "After getting quotes for $15k+, finding Whiz was a lifesaver. My inventory app paid for itself in two weeks.",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Beta Testers Are Saying
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from real clients during our beta testing phase
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {testimonial.badge}
                  </span>
                </div>
              </div>
              
              <Quote className="h-6 w-6 text-gray-400 mb-3" />
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Dashboard */}
        <div className="bg-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Coming Soon: Live Client Results Dashboard
          </h3>
          <p className="text-gray-600 mb-8">
            Track real metrics as Whiz grows. Transparency is our commitment.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-2">Apps Built</div>
              <div className="text-sm text-gray-600">Launching July 2025</div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-2">Avg Delivery</div>
              <div className="text-sm text-gray-600">Tracking Soon</div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-2">Satisfaction</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-2">Wait Time</div>
              <div className="text-sm text-gray-600">Check Back Soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;