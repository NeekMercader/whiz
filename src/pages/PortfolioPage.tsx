import React from 'react';
import { ArrowLeft, ExternalLink, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  const projects = [
    {
      title: "Yoga Studio Booking System",
      client: "Zen Flow Yoga",
      category: "Micro-App",
      cost: "$297",
      timeline: "48 hours",
      description: "Automated booking system that eliminated double-bookings and reduced admin time by 15 hours per week.",
      results: [
        "15 hours/week time savings",
        "Zero double-bookings",
        "30% increase in bookings",
        "Paid for itself in 2 weeks"
      ],
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "Calendar API"],
      link: "#"
    },
    {
      title: "Restaurant Online Ordering",
      client: "Tony's Pizza Palace",
      category: "Starter App",
      cost: "$1,997",
      timeline: "5 days",
      description: "Complete online ordering system with payment processing, reducing phone order chaos and increasing average order value.",
      results: [
        "25 hours/week time savings",
        "40% increase in order accuracy",
        "25% higher average order value",
        "ROI achieved in 6 weeks"
      ],
      image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tech: ["React", "Stripe", "SMS API"],
      link: "#"
    },
    {
      title: "Contractor Estimate Generator",
      client: "BuildRight Construction",
      category: "Business App",
      cost: "$3,997",
      timeline: "7 days",
      description: "Automated pricing calculator that generates professional estimates in minutes instead of hours.",
      results: [
        "12 hours/week time savings",
        "50% faster quote turnaround",
        "20% increase in quote accuracy",
        "15% higher close rate"
      ],
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tech: ["React", "PDF Generation", "Database"],
      link: "#"
    },
    {
      title: "Inventory Management Dashboard",
      client: "Boutique Threads",
      category: "Business App",
      cost: "$3,997",
      timeline: "6 days",
      description: "Real-time inventory tracking with low-stock alerts and automated reorder suggestions.",
      results: [
        "20 hours/week time savings",
        "90% reduction in stockouts",
        "30% improvement in cash flow",
        "Eliminated manual counting"
      ],
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tech: ["React", "Real-time DB", "Analytics"],
      link: "#"
    },
    {
      title: "Client Portal & Project Tracker",
      client: "Creative Agency Co",
      category: "System App",
      cost: "$7,997",
      timeline: "10 days",
      description: "Complete client management system with project tracking, file sharing, and automated invoicing.",
      results: [
        "35 hours/week time savings",
        "100% on-time project delivery",
        "50% reduction in client emails",
        "Automated 90% of invoicing"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tech: ["React", "File Storage", "Payment API", "Email Automation"],
      link: "#"
    },
    {
      title: "Lead Qualification Chatbot",
      client: "Solar Solutions Inc",
      category: "Workflow Killer",
      cost: "$297",
      timeline: "72 hours",
      description: "Intelligent chatbot that qualifies leads 24/7, saving hours of manual screening calls.",
      results: [
        "8 hours/week time savings",
        "300% increase in qualified leads",
        "24/7 lead capture",
        "60% reduction in unqualified calls"
      ],
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tech: ["Chatbot API", "Lead Scoring", "CRM Integration"],
      link: "#"
    }
  ];

  const stats = [
    { label: "Apps Built", value: "47", icon: TrendingUp },
    { label: "Avg Delivery", value: "5.2 days", icon: Clock },
    { label: "Client Satisfaction", value: "4.9/5", icon: "⭐" },
    { label: "Total Time Saved", value: "2,400+ hrs", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Link 
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Apps, Real Results
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Whiz has helped businesses save time, increase revenue, and eliminate manual processes 
              with custom apps built in days, not months.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <a
                        href={project.link}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                    
                    <p className="text-gray-600 mb-2">{project.client}</p>
                    <p className="text-gray-700 mb-6">{project.description}</p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                        <span className="font-semibold">{project.cost}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="font-semibold">{project.timeline}</span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technology:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join These Success Stories?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build an app that transforms your business like these real examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get My Free Proposal
              </Link>
              <Link
                to="/roi-calculator"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Calculate My ROI
              </Link>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 italic mb-4">
                  "Neek delivered exactly what he promised. The booking system has saved me 15 hours 
                  per week and eliminated all the scheduling headaches."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                    alt="Maria Santos"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Maria Santos</div>
                    <div className="text-sm text-gray-600">Zen Flow Yoga</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 italic mb-4">
                  "The ROI was incredible. The app paid for itself in 6 weeks and now saves us 
                  25 hours per week. Best investment we've made."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                    alt="Tony Ricci"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Tony Ricci</div>
                    <div className="text-sm text-gray-600">Tony's Pizza Palace</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 italic mb-4">
                  "Finally, someone who delivers on time and on budget. The estimate generator 
                  has transformed how we quote projects."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                    alt="Sarah Williams"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Mike Johnson</div>
                    <div className="text-sm text-gray-600">BuildRight Construction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioPage;