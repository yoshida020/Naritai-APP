'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // URLハッシュを更新
      window.history.pushState(null, '', href);

      // ヘッダーの高さを取得
      const header = headerRef.current;
      const headerHeight = header ? header.offsetHeight : 100;

      // scrollIntoViewを使用してスクロール
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // ヘッダーの高さ分だけ調整（スクロール完了後に実行）
      setTimeout(() => {
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const targetPosition = elementTop - headerHeight;
        const currentScrollY = window.pageYOffset;
        
        // 目標位置と現在位置が異なる場合のみ調整
        if (Math.abs(targetPosition - currentScrollY) > 1) {
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // ページ読み込み時にハッシュがある場合、スクロール
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash;
        const scrollToHash = () => {
          scrollToSection(hash);
        };
        // ページが完全に読み込まれるまで待つ
        if (document.readyState === 'complete') {
          setTimeout(scrollToHash, 200);
        } else {
          window.addEventListener('load', () => setTimeout(scrollToHash, 200));
        }
      }
    };

    handleHashScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollToSection]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobileMenu();
    scrollToSection(href);
  };

  return (
    <header 
      ref={headerRef} 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white/98 shadow-md border-[#E6EAEE]' 
          : 'bg-white/95 backdrop-blur-[10px] border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-4">
        <a 
          href="/" 
          className="flex items-center transition-opacity duration-300 hover:opacity-80"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
        >
          <img 
            src="/20251113-1222_2c7cdaaec151d3d5e7aabdec1966c120.png" 
            alt="Naritai"
            className="h-[60px] w-auto object-contain"
          />
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex list-none gap-3 m-0 p-0 items-center flex-wrap justify-end">
            <li>
              <a 
                href="#top" 
                className="text-sm font-medium text-[#2C3E50] no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group"
                onClick={(e) => handleLinkClick(e, '#top')}
              >
                TOP
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-sm font-medium text-[#2C3E50] no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0]"
                onClick={(e) => handleLinkClick(e, '#about')}
              >
                ABOUT US
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#message" 
                className="text-sm font-medium text-[#2C3E50] no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0]"
                onClick={(e) => handleLinkClick(e, '#message')}
              >
                Message
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#business" 
                className="text-sm font-medium text-[#2C3E50] no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0]"
                onClick={(e) => handleLinkClick(e, '#business')}
              >
                Business
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#news" 
                className="text-sm font-medium text-[#2C3E50] no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0]"
                onClick={(e) => handleLinkClick(e, '#news')}
              >
                News
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="text-sm font-medium text-[#2C3E50] no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0]"
                onClick={(e) => handleLinkClick(e, '#faq')}
              >
                FAQ
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#company" 
                className="text-sm font-medium text-[#2C3E50] no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0]"
                onClick={(e) => handleLinkClick(e, '#company')}
              >
                Company
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-sm font-medium text-[#2C3E50] no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0]"
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                Contact
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1 bg-transparent border-none p-2 cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="メニューを開く"
        >
          <span className="w-6 h-0.5 bg-[#2C3E50] transition-all duration-300 rounded-sm"></span>
          <span className="w-6 h-0.5 bg-[#2C3E50] transition-all duration-300 rounded-sm"></span>
          <span className="w-6 h-0.5 bg-[#2C3E50] transition-all duration-300 rounded-sm"></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[999] flex items-start justify-end pt-20 md:hidden"
          onClick={closeMobileMenu}
        >
          <nav 
            className="bg-white w-[280px] h-full shadow-[-2px_0_8px_rgba(0,0,0,0.1)] px-6 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
              <li>
                <a 
                  href="#top" 
                  className="text-lg font-medium text-[#2C3E50] no-underline py-4 block transition-colors duration-300 border-b border-[#E6EAEE] hover:text-[#5AB1E0]"
                  onClick={(e) => handleLinkClick(e, '#top')}
                >
                  TOP
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-lg font-medium text-[#2C3E50] no-underline py-4 block transition-colors duration-300 border-b border-[#E6EAEE] hover:text-[#5AB1E0]"
                  onClick={(e) => handleLinkClick(e, '#about')}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a 
                  href="#message" 
                  className="text-lg font-medium text-[#2C3E50] no-underline py-4 block transition-colors duration-300 border-b border-[#E6EAEE] hover:text-[#5AB1E0]"
                  onClick={(e) => handleLinkClick(e, '#message')}
                >
                  Message
                </a>
              </li>
              <li>
                <a 
                  href="#business" 
                  className="text-lg font-medium text-[#2C3E50] no-underline py-4 block transition-colors duration-300 border-b border-[#E6EAEE] hover:text-[#5AB1E0]"
                  onClick={(e) => handleLinkClick(e, '#business')}
                >
                  Business
                </a>
              </li>
              <li>
                <a 
                  href="#news" 
                  className="text-lg font-medium text-[#2C3E50] no-underline py-4 block transition-colors duration-300 border-b border-[#E6EAEE] hover:text-[#5AB1E0]"
                  onClick={(e) => handleLinkClick(e, '#news')}
                >
                  News
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-lg font-medium text-[#2C3E50] no-underline py-4 block transition-colors duration-300 border-b border-[#E6EAEE] hover:text-[#5AB1E0]"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#company" 
                  className="text-lg font-medium text-[#2C3E50] no-underline py-4 block transition-colors duration-300 border-b border-[#E6EAEE] hover:text-[#5AB1E0]"
                  onClick={(e) => handleLinkClick(e, '#company')}
                >
                  Company
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-lg font-medium text-[#2C3E50] no-underline py-4 block transition-colors duration-300 border-b border-[#E6EAEE] hover:text-[#5AB1E0]"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

