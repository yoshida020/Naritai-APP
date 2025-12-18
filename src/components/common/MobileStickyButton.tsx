'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function MobileStickyButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const getScrollY = () => document.body.scrollTop;

    const handleScroll = () => {
      const currentScrollY = getScrollY();
      const scrollDiff = currentScrollY - lastScrollY.current;

      if (Math.abs(scrollDiff) >= 5) {
        setIsExpanded(scrollDiff < 0);
        lastScrollY.current = currentScrollY;
      }
    };

    document.body.addEventListener('scroll', handleScroll, { passive: true });
    lastScrollY.current = getScrollY();

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Link
        href="/blank"
        className={`flex items-center justify-center bg-[#202D5F] text-white font-bold shadow-[0_8px_20px_rgba(32,45,95,0.4)] hover:bg-[#1a2449] active:scale-[0.98] transition-all duration-300 ease-out overflow-hidden whitespace-nowrap rounded-full ${
          isExpanded
            ? 'w-[calc(100vw-32px)] h-14 text-base'
            : 'w-20 h-20 text-xs'
        }`}
      >
        資料請求
      </Link>
    </div>
  );
}
