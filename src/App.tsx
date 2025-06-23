import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import ThreeDHeroSection from './components/ThreeDHeroSection';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import GuaranteeSection from './components/GuaranteeSection';
import SocialProofSection from './components/SocialProofSection';
import FreeAppFridaySection from './components/FreeAppFridaySection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import ROICalculatorPage from './pages/ROICalculatorPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import AppAuditChecklistPage from './pages/resources/AppAuditChecklistPage';
import DIYVsDoneForYouPage from './pages/resources/DIYVsDoneForYouPage';
import FreeAppAuditPage from './pages/resources/FreeAppAuditPage';
import NDATemplatePage from './pages/resources/NDATemplatePage';
import NewsletterSection from './components/NewsletterSection';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { useEffect } from 'react'; // Import useEffect

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]); // Re-run effect if hash changes

  return (
    <>
      <AnnouncementBar />
      <Header />
      <ThreeDHeroSection />
      <main>
        <TrustSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <GuaranteeSection />
        <SocialProofSection />
        <FreeAppFridaySection />
        <NewsletterSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/resources/app-audit-checklist" element={<AppAuditChecklistPage />} />
          <Route path="/resources/diy-vs-done-for-you" element={<DIYVsDoneForYouPage />} />
          <Route path="/resources/free-app-audit" element={<FreeAppAuditPage />} />
          <Route path="/resources/nda-template" element={<NDATemplatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;