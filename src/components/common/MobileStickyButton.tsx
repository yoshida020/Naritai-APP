'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function MobileStickyButton() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const getScrollY = () => document.body.scrollTop;

    const handleScroll = () => {
      const currentScrollY = getScrollY();
      const scrollDiff = currentScrollY - lastScrollY.current;

      if (Math.abs(scrollDiff) >= 5) {
        setIsVisible(scrollDiff < 0);
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
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 from-white via-white to-transparent md:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <Link
        href="/blank"
        className="block w-full bg-[#202D5F] text-white font-bold py-4 px-6 rounded-xl shadow-[0_8px_20px_rgba(32,45,95,0.4)] hover:bg-[#1a2449] active:scale-[0.98] transition-all duration-200 text-center"
      >
        資料請求
      </Link>
    </div>
  );
}
