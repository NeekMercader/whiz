import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Search, User, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import SearchModal from './SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first then scroll
      navigate(`/#${sectionId}`);
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearchModal(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
    <header className={`bg-gray-900 text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Zap className={`text-blue-400 mr-2 transition-all duration-300 ${
              isScrolled ? 'h-6 w-6' : 'h-8 w-8'
            }`} />
            <span className={`font-bold text-white transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>Whiz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
            >
              Process
            </button>
            <Link to="/portfolio" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Portfolio
            </Link>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
            >
              FAQ
            </button>
            <Link to="/blog" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/roi-calculator" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              ROI Calculator
            </Link>
            
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setShowSearchModal(true)}
                className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
                title="Search (Cmd+K)"
              >
                <Search className="h-5 w-5" />
              </button>

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span className="hidden md:block">{user.user_metadata?.full_name || user.email}</span>
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      <Link
                        to="/portal"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Client Portal
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-blue-400 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-300 hover:text-blue-400 font-medium text-left"
              >
                Process
              </button>
              <Link to="/portfolio" className="text-gray-300 hover:text-blue-400 font-medium">
                Portfolio
              </Link>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-300 hover:text-blue-400 font-medium text-left"
              >
                FAQ
              </button>
              <Link to="/blog" className="text-gray-300 hover:text-blue-400 font-medium">
                Blog
              </Link>
              <Link to="/roi-calculator" className="text-gray-300 hover:text-blue-400 font-medium">
                ROI Calculator
              </Link>
              
              {user ? (
                <>
                  <Link to="/portal" className="text-gray-300 hover:text-blue-400 font-medium">
                    Client Portal
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-300 hover:text-blue-400 font-medium text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="text-gray-300 hover:text-blue-400 font-medium text-left"
                  >
                    Sign In
                  </button>
                  <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full text-center">
                    Get Started
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
    
    {/* Modals */}
    <AuthModal 
      isOpen={showAuthModal} 
      onClose={() => setShowAuthModal(false)} 
    />
    <SearchModal 
      isOpen={showSearchModal} 
      onClose={() => setShowSearchModal(false)} 
    />
    </>
  );
};

export default Header;