import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <Flame className="h-5 w-5 mr-2 animate-pulse" />
        <span className="font-medium text-sm md:text-base">
          <strong>Founder's Deal:</strong> The first 50 clients get 50% OFF... FOR LIFE. Only 27 spots left.
        </span>
        <button className="ml-4 inline-flex items-center text-sm font-semibold hover:text-orange-200 transition-colors">
          Claim Yours
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;