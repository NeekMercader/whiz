import { Link } from 'react-router-dom';
import { Scene } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MessageSquare, Clock, DollarSign, Flame, Zap } from "lucide-react";

const whizFeatures = [
  {
    icon: DollarSign,
    title: "Apps from $297",
    description: "No hidden fees. No surprises. Just honest pricing.",
  },
  {
    icon: Clock,
    title: "7-Day Delivery",
    description: "Most apps delivered within a week, guaranteed.",
  },
  {
    icon: CheckCircle,
    title: "Demo First",
    description: "See your working app before you pay a single dollar.",
  },
  {
    icon: Zap,
    title: "AI-Powered",
    description: "Cutting-edge AI tools for lightning-fast development.",
  },
];

const ThreeDHeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8 relative">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="backdrop-blur-sm bg-gray-500/20 border border-gray-400/30 text-gray-200 hover:bg-gray-500/30 px-4 py-2 rounded-full">
            🚀 Real Apps. Real Fast. Real Affordable.
          </Badge>
          
          <div className="space-y-6 flex items-center justify-center flex-col">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
              A Custom App for Your Business.
              <br />
              <span className="text-blue-400">Built in 7 Days.</span>
              <br />
              <span className="text-orange-400">For $297.</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
              I've replaced the slow, expensive agency model with a streamlined, AI-powered process. 
              You get a dedicated developer (me!), transparent progress, and a finished app that solves 
              your exact problem, in a fraction of the time and for a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link to="/contact" className="text-lg px-12 py-5 rounded-lg bg-blue-600 text-white border border-blue-500/20 shadow-none hover:bg-blue-700 transition-colors inline-flex items-center">
                Get My Free App Proposal
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link to="/book-call" className="text-lg px-12 py-5 rounded-lg bg-transparent text-white border border-white/20 shadow-none hover:bg-white/10 transition-colors inline-flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Chat with Neek Directly
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {whizFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3 hover:bg-white/10 transition-colors"
            >
              <feature.icon size={20} className="text-blue-400 md:w-6 md:h-6" />
              <h3 className="text-sm md:text-base font-semibold">{feature.title}</h3>
              <p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* The Whiz Founder's Offer */}
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            The Whiz Founder's Offer (100% Risk-Free):
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-white/90">
                <strong>See a working demo before you pay a dollar.</strong> If you don't love 
                the initial design and prototype, you walk away owing nothing. No questions asked.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-white/90">
                <strong>Lock in 50% Off, Forever.</strong> As one of my first 50 clients, you'll 
                receive a permanent 50% discount on my standard rates—for this project and any future work.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-white/90">
                <strong>Launch in Days, Not Months.</strong> Your first version will be ready 
                for review in 7 days or less. Guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Neek Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <img
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                alt="Neek, Founder of Whiz - Your dedicated custom app developer"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-white">👋 Hi, I'm Neek</h3>
                <p className="text-neutral-300">Your dedicated developer</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6">
              I'm not an agency; I'm your partner. I started Whiz because I saw too many great 
              businesses get locked out by big-tech prices. My mission is simple: to give you 
              the exact tools you need to grow, without the typical tech headaches.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm text-neutral-300">20+ years in software development</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm text-neutral-300">Certified in leading AI development tools</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm text-neutral-300">Direct access - no middlemen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm text-neutral-300">Real phone number: 1-800-WHIZ-APP</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Zero Risk. All Reward.</h3>
              <p className="text-neutral-300 mb-6">
                I'm so confident in my work that I'm willing to take all the risk. You only pay when you're completely satisfied.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">0%</div>
                <div className="text-xs text-neutral-400">Upfront Payment</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-xs text-neutral-400">Satisfaction Required</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
                <div className="text-xs text-neutral-400">Peace of Mind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='absolute inset-0'>
        <Scene />
      </div>
    </div>
  );
};

export default ThreeDHeroSection;