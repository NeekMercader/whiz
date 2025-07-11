import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary'; // Import ErrorBoundary
import { getBlogPosts, getFeaturedPosts, BlogPost, getStrapiImageUrl } from '../services/strapi';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ["All", "Business Apps", "Case Study", "Pricing", "Process", "ROI", "DIY vs Professional"];

  useEffect(() => {
    const fetchPostsData = async () => {
      setLoading(true);
      try {
        // Fetch Featured Posts
        console.log("BlogPage: Attempting to fetch featured posts...");
        const featuredLogPosts = await getFeaturedPosts(1); // Returns BlogPost[]
        console.log("BlogPage: Raw featuredLogPosts received:", JSON.parse(JSON.stringify(featuredLogPosts)));
        if (featuredLogPosts && featuredLogPosts.length > 0) {
          console.log("BlogPage: Setting featured post with:", JSON.parse(JSON.stringify(featuredLogPosts[0])));
          setFeaturedPost(featuredLogPosts[0]);
        } else {
          console.log("BlogPage: No featured posts found or array empty, setting featuredPost to null.");
          setFeaturedPost(null);
        }

        // Fetch Regular Blog Posts
        console.log("BlogPage: Attempting to fetch regular blog posts...");
        const postsResponse = await getBlogPosts(1, 20); // Returns StrapiResponse<BlogPost[]>
        console.log("BlogPage: Raw postsResponse received:", JSON.parse(JSON.stringify(postsResponse)));
        if (postsResponse && postsResponse.data) {
          console.log("BlogPage: Setting posts with:", JSON.parse(JSON.stringify(postsResponse.data)));
          setPosts(postsResponse.data);
        } else {
          console.warn("BlogPage: postsResponse or postsResponse.data is undefined/null. Setting posts to empty array.");
          console.log("BlogPage: Problematic postsResponse:", postsResponse);
          setPosts([]);
        }

      } catch (error) {
        console.error('Error fetching blog data in BlogPage (sequential fetch):', error);
        // Fallback states
        if (typeof featuredPost === 'undefined') setFeaturedPost(null); // Only set if not already set by a partial success
        if (typeof posts === 'undefined' || posts.length === 0) setPosts([]); // Only set if not already set
      } finally {
        setLoading(false);
        console.log("BlogPage: Finished fetching all data, setLoading to false.");
      }
    };

    fetchPostsData();
  }, []);

  // Defensive filtering
  const validPosts = posts.filter(p => p && p.attributes);
  const filteredPosts = selectedCategory === 'All'
    ? validPosts
    : validPosts.filter(post => post.attributes.category === selectedCategory);

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
          <ErrorBoundary fallbackMessage="There was an error rendering the featured post.">
            {featuredPost && featuredPost.attributes && (
              <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
                <h2>Featured Post (Simplified)</h2>
                {/* Minimal rendering to test title access */}
                <p>Title: {featuredPost.attributes.title}</p>
                {/* <p>Excerpt: {featuredPost.attributes.excerpt}</p> */}
                {/* <img
                  src={featuredPost.attributes.cover ? getStrapiImageUrl(featuredPost.attributes.cover.url) : "placeholder.jpg"}
                  alt={featuredPost.attributes.cover?.alternativeText || featuredPost.attributes.title || 'Featured image'}
                  style={{width: "100px", height: "100px"}}
                /> */}
              </div>
            )}
          </ErrorBoundary>

          {/* Blog Posts Grid */}
          <ErrorBoundary fallbackMessage="There was an error rendering the blog post list.">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading blog posts...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts && filteredPosts.length > 0 && filteredPosts.map((post, index) => {
                  console.log("DEBUG BlogPage: Rendering Post in map. ID:", post.id, "Object:", JSON.parse(JSON.stringify(post)));
                  // Ensure post and post.attributes are valid before trying to access deeper properties.
                  // The `validPosts` filter should already guarantee `post && post.attributes`.
                  // This explicit check is an additional safeguard during simplification.
                  if (!post || !post.attributes) {
                    console.error("DEBUG BlogPage: Post or post.attributes is undefined in map despite filters. Post ID:", post?.id);
                    return <div key={post?.id || index}>Error: Post data incomplete.</div>;
                  }
                  return (
                    <article key={post.id} style={{border: '1px solid green', padding: '10px', margin: '5px'}}>
                      {/* Minimal rendering to test title access */}
                      <h3>Title: {post.attributes.title}</h3>
                      {/* <p>ID: {post.id}</p> */}
                      {/* <p>Excerpt: {post.attributes.excerpt}</p> */}
                      {/* <img
                        src={post.attributes.cover ? getStrapiImageUrl(post.attributes.cover.url) : "placeholder.jpg"}
                        alt={post.attributes.cover?.alternativeText || post.attributes.title || 'Blog post image'}
                        style={{width: "100px", height: "100px"}}
                      /> */}
                    </article>
                  );
                })}
              </div>
            )}
          </ErrorBoundary>

          {!loading && (!filteredPosts || filteredPosts.length === 0) && (
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
