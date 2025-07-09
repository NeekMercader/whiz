import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { getBlogPost, BlogPost, getStrapiImageUrl } from '../services/strapi';
import Markdown from 'markdown-to-jsx';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        setError(null);
        const fetchedPost = await getBlogPost(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Blog post not found');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead 
          title="Post Not Found | Whiz Blog"
          description="The blog post you're looking for doesn't exist or has been moved."
          canonicalUrl="https://whiz.so/blog"
        />
        <Header />
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate article structured data
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.attributes.title,
    "description": post.attributes.excerpt,
    "image": post.attributes.cover ?
      getStrapiImageUrl(post.attributes.cover.url) :
      "https://whiz.so/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": "Neek",
      "url": "https://whiz.so"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Whiz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://whiz.so/logo.png"
      }
    },
    "datePublished": post.attributes.publishedAt,
    "dateModified": post.attributes.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://whiz.so/blog/${post.attributes.slug}`
    },
    "articleSection": post.attributes.category,
    "keywords": post.attributes.seo?.keywords || `${post.attributes.category}, app development, business automation`
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.attributes.seo?.metaTitle || post.attributes.title}
        description={post.attributes.seo?.metaDescription || post.attributes.excerpt}
        keywords={post.attributes.seo?.keywords}
        canonicalUrl={post.attributes.seo?.canonicalURL || `https://whiz.so/blog/${post.attributes.slug}`}
        ogType="article"
        ogImage={post.attributes.seo?.metaImage?.data ? 
          getStrapiImageUrl(post.attributes.seo.metaImage.data.attributes.url) : 
          (post.attributes.cover ?
            getStrapiImageUrl(post.attributes.cover.url) :
            undefined
          )
        }
        structuredData={articleStructuredData}
        author="Neek"
        publishedTime={post.attributes.publishedAt}
        modifiedTime={post.attributes.publishedAt}
        articleSection={post.attributes.category}
        articleTags={post.attributes.seo?.keywords?.split(',').map(k => k.trim()) || [post.attributes.category]}
      />
      <Header />
      
      <article className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {post.attributes.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.attributes.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">{new Date(post.attributes.publishedAt).toLocaleDateString()}</span>
              <Clock className="h-5 w-5 mr-2" />
              <span className="mr-6">{post.attributes.readTime}</span>
              <BookOpen className="h-5 w-5 mr-2" />
              <span>By Neek</span>
            </div>

            <img
              src={post.attributes.cover ?
                getStrapiImageUrl(post.attributes.cover.url) :
                "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              }
              alt={post.attributes.cover?.alternativeText || `Featured image for: ${post.attributes.title}`}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
          >
            <Markdown>{post.attributes.content}</Markdown>
          </div>

          {/* Share & CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                Let's discuss how a custom app can transform your business like the examples in this article.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
              >
                Get My Free Proposal
              </Link>
              <Link
                to="/book-call"
                className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;