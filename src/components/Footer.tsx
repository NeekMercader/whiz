import React from 'react';
import { Zap, Mail, Phone, MessageSquare, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Whiz</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making business apps stupid simple since 2025.
            </p>
            <div className="space-y-2">
              <Link to="/contact" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm">Contact Us</span>
              </Link>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm">1-800-WHIZ-APP</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm">Live Chat: 9-5 EST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => handleScrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors text-left w-full">Services</button>
              <button onClick={() => handleScrollToSection('process')} className="block text-gray-400 hover:text-white transition-colors text-left w-full">Process</button>
              <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              <button onClick={() => handleScrollToSection('faq')} className="block text-gray-400 hover:text-white transition-colors text-left w-full">FAQ</button>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Free Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Free Resources</h4>
            <div className="space-y-2">
              <Link to="/resources/app-audit-checklist" className="block text-gray-400 hover:text-white transition-colors">App Audit Checklist</Link>
              <Link to="/resources/diy-vs-done-for-you" className="block text-gray-400 hover:text-white transition-colors">DIY vs Done-For-You Guide</Link>
              <Link to="/blog/10-apps-every-small-business-needs" className="block text-gray-400 hover:text-white transition-colors">10 Apps Every Business Needs</Link>
              <Link to="/roi-calculator" className="block text-gray-400 hover:text-white transition-colors">ROI Calculator</Link>
              <Link to="/resources/free-app-audit" className="block text-gray-400 hover:text-white transition-colors">Free App Audit</Link>
            </div>
          </div>

          {/* Follow & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow the Journey</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
            <div className="space-y-2">
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link to="/refund" className="block text-gray-400 hover:text-white transition-colors text-sm">Refund Policy</Link>
              <Link to="/resources/nda-template" className="block text-gray-400 hover:text-white transition-colors text-sm">NDA Template</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Whiz. Making business apps stupid simple since 2025.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Newsletter: 2,000+ subscribers • Real Apps. Real Fast. Real Affordable.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;