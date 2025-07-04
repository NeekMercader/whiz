import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { getBlogPosts, getFeaturedPosts, BlogPost, getStrapiImageUrl } from '../services/strapi';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ["All", "Business Apps", "Case Study", "Pricing", "Process", "ROI", "DIY vs Professional"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const [postsResponse, featuredPosts] = await Promise.all([
          getBlogPosts(1, 20),
          getFeaturedPosts(1)
        ]);
        
        setPosts(postsResponse.data);
        if (featuredPosts.length > 0) {
          setFeaturedPost(featuredPosts[0]);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Fallback to static data if Strapi is not available
        setFeaturedPost(null);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.attributes.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Blog - App Development Insights | Whiz"
        description="Honest insights about app development, business automation, and the real costs of building vs buying software solutions."
        canonicalUrl="https://whiz.so/blog"
      />
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
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden mb-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="p-8 text-white">
                  <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured Post
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    {featuredPost.attributes.title}
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    {featuredPost.attributes.excerpt}
                  </p>
                  <div className="flex items-center text-sm opacity-75 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(featuredPost.attributes.publishedAt).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.attributes.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.attributes.slug}`}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                <div className="lg:p-8">
                  <img
                    src={featuredPost.attributes.featuredImage?.data ? 
                      getStrapiImageUrl(featuredPost.attributes.featuredImage.data.attributes.url) : 
                      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                    }
                    alt={featuredPost.attributes.featuredImage?.data?.attributes.alternativeText || featuredPost.attributes.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog posts...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.attributes.featuredImage?.data ? 
                      getStrapiImageUrl(post.attributes.featuredImage.data.attributes.url) : 
                      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                    }
                    alt={post.attributes.featuredImage?.data?.attributes.alternativeText || post.attributes.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.attributes.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.attributes.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.attributes.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.attributes.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.attributes.publishedAt).toLocaleDateString()}
                      </div>
                      <Link 
                        to={`/blog/${post.attributes.slug}`}
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
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts found for this category.</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss a Post
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get weekly insights about app development, business automation, and real client case studies.
            </p>
            <BlogNewsletterForm />
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

// Newsletter form component for blog page
const BlogNewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { subscribeToNewsletter } = await import('../services/email');
      await subscribeToNewsletter({ 
        email,
        tags: ['whiz-newsletter', 'blog-signup']
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

  if (isSubscribed) {
    return (
      <div className="text-center">
        <p className="text-lg text-green-600 font-semibold mb-2">✅ Successfully subscribed!</p>
        <p className="text-sm text-gray-500">Check your email for your welcome message.</p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg max-w-md mx-auto">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      <p className="text-sm text-gray-500 mt-3">
        Join 2,000+ subscribers. No spam, unsubscribe anytime.
      </p>
    </>
  );
};
export default BlogPage;