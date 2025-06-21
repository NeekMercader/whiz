import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
  const posts = [
    {
      title: "10 Apps Every Small Business Needs (And How Much They Really Cost)",
      excerpt: "Stop overpaying for software subscriptions. Here are the 10 essential apps every business needs, with honest pricing and ROI calculations.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Business Apps",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      slug: "10-apps-every-small-business-needs"
    },
    {
      title: "Why I Charge $197 When Others Charge $20,000 (The Real Story)",
      excerpt: "The truth about app development pricing, why most quotes are inflated, and how AI has changed everything.",
      date: "2025-01-12",
      readTime: "6 min read",
      category: "Pricing",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      slug: "why-i-charge-197-when-others-charge-20000"
    },
    {
      title: "DIY vs Done-For-You: The Hidden Costs of Building Your Own App",
      excerpt: "Thinking about using Bubble or Webflow? Here's what they don't tell you about the real time and money investment.",
      date: "2025-01-10",
      readTime: "10 min read",
      category: "DIY vs Professional",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      slug: "diy-vs-done-for-you-hidden-costs"
    },
    {
      title: "Case Study: How a $197 App Saved a Yoga Studio 15 Hours Per Week",
      excerpt: "Real numbers from a real client. See exactly how a simple booking system transformed a small business.",
      date: "2025-01-08",
      readTime: "5 min read",
      category: "Case Study",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      slug: "yoga-studio-case-study"
    },
    {
      title: "The 5-Hour Guarantee: How I Build Apps So Fast",
      excerpt: "Behind the scenes of my development process and how AI tools have revolutionized custom app development.",
      date: "2025-01-05",
      readTime: "7 min read",
      category: "Process",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      slug: "5-hour-guarantee-how-i-build-apps-fast"
    },
    {
      title: "ROI Calculator: Is a Custom App Worth It for Your Business?",
      excerpt: "Use this simple framework to calculate if a custom app makes financial sense for your specific situation.",
      date: "2025-01-03",
      readTime: "4 min read",
      category: "ROI",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      slug: "roi-calculator-custom-app-worth-it"
    }
  ];

  const categories = ["All", "Business Apps", "Case Study", "Pricing", "Process", "ROI", "DIY vs Professional"];

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
              The Whiz Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Honest insights about app development, business automation, and the real costs 
              of building vs buying software solutions.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 text-white">
                <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Post
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center text-sm opacity-75 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{new Date(posts[0].date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{posts[0].readTime}</span>
                </div>
                <Link 
                  to={`/blog/${posts[0].slug}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="lg:p-8">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss a Post
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get weekly insights about app development, business automation, and real client case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Join 2,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>

          {/* Popular Topics */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Popular Topics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">App Pricing</h3>
                <p className="text-sm text-gray-600">Honest breakdowns of development costs</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-sm text-gray-600">Real client results and ROI data</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Business Tips</h3>
                <p className="text-sm text-gray-600">Automation strategies that work</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Behind the Scenes</h3>
                <p className="text-sm text-gray-600">How I build apps so fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;