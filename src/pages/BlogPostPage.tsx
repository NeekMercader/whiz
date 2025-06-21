import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would come from a CMS or API
  const posts = {
    "10-apps-every-small-business-needs": {
      title: "10 Apps Every Small Business Needs (And How Much They Really Cost)",
      content: `
        <p>Running a small business without the right apps is like trying to build a house with just a hammer. You might get somewhere, but it's going to take forever and cost you way more than it should.</p>

        <p>After building apps for 100+ small businesses, I've identified the 10 essential apps every business needs. More importantly, I'll show you the real costs - not just the sticker price, but the hidden fees, setup time, and ongoing maintenance.</p>

        <h2>1. Customer Relationship Management (CRM)</h2>
        <p><strong>What it does:</strong> Tracks leads, manages customer relationships, automates follow-ups</p>
        <p><strong>DIY Options:</strong> HubSpot ($45/month), Salesforce ($25/month), Pipedrive ($15/month)</p>
        <p><strong>Hidden Costs:</strong> Setup time (20-40 hours), training ($500-2000), integrations ($200-500/month)</p>
        <p><strong>Whiz Custom Solution:</strong> $1,997 one-time, includes all integrations and training</p>

        <h2>2. Appointment Scheduling</h2>
        <p><strong>What it does:</strong> Automates booking, reduces no-shows, syncs with calendar</p>
        <p><strong>DIY Options:</strong> Calendly ($8/month), Acuity ($14/month), Square Appointments ($29/month)</p>
        <p><strong>Hidden Costs:</strong> Payment processing fees (2.9%), limited customization, branding restrictions</p>
        <p><strong>Whiz Custom Solution:</strong> $197-497, fully branded, no monthly fees</p>

        <h2>3. Inventory Management</h2>
        <p><strong>What it does:</strong> Tracks stock levels, automates reordering, prevents stockouts</p>
        <p><strong>DIY Options:</strong> TradeGecko ($39/month), Zoho Inventory ($29/month), inFlow ($71/month)</p>
        <p><strong>Hidden Costs:</strong> Per-location fees, user limits, integration costs</p>
        <p><strong>Whiz Custom Solution:</strong> $3,997, unlimited users and locations</p>

        <h2>4. Project Management</h2>
        <p><strong>What it does:</strong> Organizes tasks, tracks deadlines, manages team collaboration</p>
        <p><strong>DIY Options:</strong> Asana ($11/month), Monday.com ($8/month), Trello ($5/month)</p>
        <p><strong>Hidden Costs:</strong> User limits, storage limits, advanced features locked behind higher tiers</p>
        <p><strong>Whiz Custom Solution:</strong> $1,997, unlimited everything</p>

        <h2>5. Invoicing & Payments</h2>
        <p><strong>What it does:</strong> Creates professional invoices, processes payments, tracks receivables</p>
        <p><strong>DIY Options:</strong> QuickBooks ($25/month), FreshBooks ($15/month), Wave (Free + 2.9% fees)</p>
        <p><strong>Hidden Costs:</strong> Payment processing fees, accountant integration costs, tax compliance</p>
        <p><strong>Whiz Custom Solution:</strong> $1,997 + payment processing at cost</p>

        <h2>The Real Cost Comparison</h2>
        <p>Let's look at the 5-year total cost of ownership:</p>

        <h3>DIY Route (5 years):</h3>
        <ul>
          <li>Monthly subscriptions: $132/month × 60 months = $7,920</li>
          <li>Setup and training time: 100 hours × $50/hour = $5,000</li>
          <li>Integration costs: $2,000</li>
          <li>Payment processing fees: $3,000</li>
          <li><strong>Total: $17,920</strong></li>
        </ul>

        <h3>Whiz Custom Apps (5 years):</h3>
        <ul>
          <li>5 custom apps: $8,985</li>
          <li>Setup and training: Included</li>
          <li>Integrations: Included</li>
          <li>Payment processing: $3,000</li>
          <li><strong>Total: $11,985</strong></li>
        </ul>

        <p><strong>Savings: $5,935 over 5 years</strong></p>

        <h2>Why Custom Apps Win</h2>
        <p>Beyond the cost savings, custom apps give you:</p>
        <ul>
          <li>No monthly fees forever</li>
          <li>Unlimited users and data</li>
          <li>Perfect fit for your workflow</li>
          <li>No vendor lock-in</li>
          <li>Direct support from the developer</li>
        </ul>

        <h2>Ready to Stop Overpaying?</h2>
        <p>If you're tired of subscription fees and want apps that actually fit your business, let's talk. I'll audit your current app stack for free and show you exactly how much you could save.</p>
      `,
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Business Apps",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    },
    "why-i-charge-197-when-others-charge-20000": {
      title: "Why I Charge $197 When Others Charge $20,000 (The Real Story)",
      content: `
        <p>Last week, a potential client told me they got a quote for $18,000 for a simple booking app. The same app I would build for $197.</p>

        <p>They asked me: "What's the catch? Why are you so much cheaper?"</p>

        <p>Fair question. Here's the honest answer.</p>

        <h2>The Traditional Agency Model is Broken</h2>
        <p>Most agencies are stuck in 2010. They quote based on:</p>
        <ul>
          <li>Manual coding everything from scratch</li>
          <li>Layers of project managers and account executives</li>
          <li>Fancy offices in expensive cities</li>
          <li>Profit margins of 300-500%</li>
        </ul>

        <p>A typical $20,000 project breaks down like this:</p>
        <ul>
          <li>Actual development: $3,000</li>
          <li>Project management: $4,000</li>
          <li>Sales and marketing: $3,000</li>
          <li>Office overhead: $2,000</li>
          <li>Profit margin: $8,000</li>
        </ul>

        <h2>How AI Changed Everything</h2>
        <p>AI tools have revolutionized development. What used to take 100 hours now takes 10. But most agencies haven't passed those savings to clients.</p>

        <p>Here's what I can do with AI that agencies do manually:</p>
        <ul>
          <li>Generate boilerplate code in minutes</li>
          <li>Create responsive designs automatically</li>
          <li>Handle database setup and optimization</li>
          <li>Implement security best practices</li>
          <li>Test and debug faster than ever</li>
        </ul>

        <h2>My Overhead is Minimal</h2>
        <p>I work from home. No fancy office, no employees, no investors demanding returns. My only overhead is:</p>
        <ul>
          <li>Software licenses: $200/month</li>
          <li>Internet and phone: $100/month</li>
          <li>Insurance: $150/month</li>
        </ul>

        <p>That's it. $450/month total overhead.</p>

        <h2>Volume Over Margin</h2>
        <p>I'd rather build 100 apps at $2,000 each than 10 apps at $20,000 each. Why?</p>
        <ul>
          <li>More businesses get the help they need</li>
          <li>I get more diverse experience</li>
          <li>Word-of-mouth marketing is incredible</li>
          <li>I sleep better at night</li>
        </ul>

        <h2>The Quality Question</h2>
        <p>"But surely cheaper means lower quality?"</p>

        <p>Not necessarily. Here's what you get with Whiz:</p>
        <ul>
          <li>Direct access to the developer (me)</li>
          <li>Modern, secure code</li>
          <li>Mobile-responsive design</li>
          <li>90-day warranty</li>
          <li>No vendor lock-in</li>
        </ul>

        <p>Compare that to agencies where you never meet the actual developer and get passed between account managers.</p>

        <h2>When You Should Pay More</h2>
        <p>I'm not right for everyone. You should pay agency prices if you need:</p>
        <ul>
          <li>Enterprise-level security compliance</li>
          <li>Integration with legacy systems</li>
          <li>24/7 support teams</li>
          <li>Dedicated project managers</li>
          <li>Complex, multi-year projects</li>
        </ul>

        <h2>The Real Catch</h2>
        <p>There is one catch: I can only take on limited projects. I'm one person, not a team of 50.</p>

        <p>But for most small businesses, that's actually a feature, not a bug. You get:</p>
        <ul>
          <li>Consistent communication</li>
          <li>Faster decisions</li>
          <li>Personal investment in your success</li>
          <li>No bureaucracy</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>I charge $197-$3,997 because that's what it actually costs to build great apps in 2025. Everyone else is charging 2010 prices for 2025 technology.</p>

        <p>The question isn't why I'm so cheap. It's why everyone else is so expensive.</p>
      `,
      date: "2025-01-12",
      readTime: "6 min read",
      category: "Pricing",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    }
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <article className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-400 mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">{new Date(post.date).toLocaleDateString()}</span>
              <Clock className="h-5 w-5 mr-2" />
              <span className="mr-6">{post.readTime}</span>
              <BookOpen className="h-5 w-5 mr-2" />
              <span>By Neek</span>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share & CTA */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Share this article</h3>
              <button className="flex items-center text-blue-400 hover:text-blue-300">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how a custom app can transform your business like the examples in this article.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get My Free Proposal
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