'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onLoad = () => setIsVisible(false);
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
  
      <Image
        src="/loader.gif"               
        alt="Loading E-Cell Haldia"
        width={280}
        height={120}
        className="animate-pulse"
        unoptimized                    
        priority                     
      />

      {/* Tailwind pulse (optional) */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}