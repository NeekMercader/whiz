import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can you charge so little?",
      answer: "No office. No employees. No investor demands. Just me, AI tools, and a commitment to fair pricing. I'd rather build 100 apps at fair prices than 10 at inflated rates."
    },
    {
      question: "What if I need changes later?",
      answer: "Small tweaks are free within the warranty period. Bigger changes are charged fairly - usually $197-497. Or grab a maintenance plan for ongoing updates."
    },
    {
      question: "Are you really just one person?",
      answer: "Yes! That's why I limit projects and show my availability calendar. When you work with Whiz, you work directly with me, Neek."
    },
    {
      question: "What about hosting and domains?",
      answer: "I'll help you set these up (you pay hosting directly - usually $10-50/month). Or I can host it for you with a maintenance plan."
    },
    {
      question: "Can AI really build good apps?",
      answer: "AI handles the repetitive coding. I handle the strategy, design, and custom logic. It's the perfect combination - AI speed with human insight."
    },
    {
      question: "What if my business grows?",
      answer: "Your app grows with you! We can add features, users, and capacity as needed. Many clients start with a micro-app and expand over time."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Absolutely. Your ideas are safe with me. I can use my standard NDA or review yours."
    },
    {
      question: "Why not just use Bubble, Webflow, or no-code tools?",
      answer: "Great for hobbyists with time to learn! But most business owners need results now, not after 80 hours of tutorials. Plus, you'll hit limitations fast and still pay $200+/month forever."
    },
    {
      question: "How do I know you're legit?",
      answer: "Fair question! Check my portfolio, read detailed case studies, call my references, or just give me a call. Every project includes a demo before payment, so there's zero risk to you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real Questions, Honest Answers
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with Whiz
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            I personally answer every email and take every call. No chatbots, no phone trees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Book a Free 15-Minute Call
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Email Me Directly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;