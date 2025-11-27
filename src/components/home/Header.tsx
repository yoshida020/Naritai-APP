'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const headerRef = useRef<HTMLElement>(null);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.history.pushState(null, '', href);

      const header = headerRef.current;
      const headerHeight = header ? header.offsetHeight : 100;

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const targetPosition = elementTop - headerHeight;
        const currentScrollY = window.pageYOffset;

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

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observerでセクションの表示状態を監視
    const sections = ['#top', '#about', '#message', '#business', '#news', '#faq', '#company', '#contact'];
    const header = headerRef.current;
    const headerHeight = header ? header.offsetHeight : 100;
    const rootMargin = `-${headerHeight + 100}px 0px -60% 0px`;

    const observerOptions = {
      root: null,
      rootMargin: rootMargin,
      threshold: [0, 0.1, 0.5, 1]
    };

    const sectionStates = new Map<string, boolean>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        sectionStates.set(entry.target.id, entry.isIntersecting);
      });

      // ビューポートに入っているセクションを取得
      const visibleSections = Array.from(sectionStates.entries())
        .filter(([_, isVisible]) => isVisible)
        .map(([id, _]) => id);

      if (visibleSections.length > 0) {
        // セクションの順序を考慮して、最後のセクションを優先
        let activeId = '';
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i].replace('#', '');
          if (visibleSections.includes(sectionId)) {
            activeId = sections[i];
            break;
          }
        }
        if (activeId) {
          setActiveSection(activeId);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 各セクションを監視対象に追加
    sections.forEach(sectionId => {
      const section = document.querySelector(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    // トップセクションの初期判定とスクロール時の判定
    const checkTopSection = () => {
      if (window.scrollY < 100) {
        setActiveSection('#top');
      }
    };

    checkTopSection();
    window.addEventListener('scroll', checkTopSection, { passive: true });

    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash;
        const scrollToHash = () => {
          scrollToSection(hash);
        };
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
      window.removeEventListener('scroll', checkTopSection);
      observer.disconnect();
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
    <>
      <div className="fixed top-0 right-0 w-[60px] h-[60px] md:w-[160px] md:h-[90px] lg:w-[175px] lg:h-[100px] bg-[#202D5F] z-[1001] rounded-bl-3xl flex flex-col items-center justify-center overflow-hidden hover:bg-[#2a3a6f] hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <a
          href="#contact"
          className="hidden md:flex flex-col items-center justify-center w-full h-full"
          onClick={(e) => handleLinkClick(e, '#contact')}
        >
          <span className="text-white font-bold text-base" style={{ fontFamily: '"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif' }}>INVOICE</span>
          <span className="text-white font-bold text-base" style={{ fontFamily: '"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif' }}>資料請求</span>
        </a>
        <button
          className="md:hidden flex items-center justify-center w-full h-full relative"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 rounded-sm absolute ${isMobileMenuOpen
              ? 'rotate-45 top-1/2 -translate-y-1/2'
              : 'rotate-0 top-0'
              }`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 rounded-sm absolute top-1/2 -translate-y-1/2 ${isMobileMenuOpen
              ? 'opacity-0'
              : 'opacity-100'
              }`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 rounded-sm absolute ${isMobileMenuOpen
              ? '-rotate-45 top-1/2 -translate-y-1/2'
              : 'rotate-0 bottom-0'
              }`}></span>
          </div>
        </button>
      </div>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out border-b ${isScrolled
          ? 'bg-white/98 shadow-md border-[#E6EAEE]'
          : 'bg-white/95 backdrop-blur-[10px] border-transparent'
          }`}
      >
        <div className="w-full py-2 flex items-center justify-between flex-wrap gap-4">
          <a
            href="/"
            className="flex items-center transition-opacity duration-300 hover:opacity-80 pl-4 md:pl-8"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
          >
            <img
              src="/naritai.png"
              alt="Naritai"
              className="h-[30px] md:h-[50px] lg:h-[60px] w-auto object-contain"
            />
          </a>
          <nav className="hidden md:block pr-[180px] lg:pr-[195px]">
            <ul className="flex list-none gap-0 m-0 p-0 items-center flex-wrap justify-end">
              <li className="flex items-center">
                <a
                  href="#top"
                  className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0] ${activeSection === '#top' ? 'text-[#5AB1E0]' : 'text-[#2C3E50]'
                    }`}
                  onClick={(e) => handleLinkClick(e, '#top')}
                >
                  トップ
                  <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === '#top' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
                <span className="text-[17px] text-[#2C3E50] mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#about"
                  className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0] ${activeSection === '#about' ? 'text-[#5AB1E0]' : 'text-[#2C3E50]'
                    }`}
                  onClick={(e) => handleLinkClick(e, '#about')}
                >
                  Naritaiについて
                  <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === '#about' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
                <span className="text-[17px] text-[#2C3E50] mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#message"
                  className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0] ${activeSection === '#message' ? 'text-[#5AB1E0]' : 'text-[#2C3E50]'
                    }`}
                  onClick={(e) => handleLinkClick(e, '#message')}
                >
                  メッセージ
                  <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === '#message' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
                <span className="text-[17px] text-[#2C3E50] mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#business"
                  className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0] ${activeSection === '#business' ? 'text-[#5AB1E0]' : 'text-[#2C3E50]'
                    }`}
                  onClick={(e) => handleLinkClick(e, '#business')}
                >
                  事業内容
                  <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === '#business' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
                <span className="text-[17px] text-[#2C3E50] mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#news"
                  className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0] ${activeSection === '#news' ? 'text-[#5AB1E0]' : 'text-[#2C3E50]'
                    }`}
                  onClick={(e) => handleLinkClick(e, '#news')}
                >
                  News
                  <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === '#news' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
                <span className="text-[17px] text-[#2C3E50] mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#faq"
                  className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0] ${activeSection === '#faq' ? 'text-[#5AB1E0]' : 'text-[#2C3E50]'
                    }`}
                  onClick={(e) => handleLinkClick(e, '#faq')}
                >
                  よくある質問
                  <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === '#faq' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
                <span className="text-[17px] text-[#2C3E50] mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#company"
                  className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0] ${activeSection === '#company' ? 'text-[#5AB1E0]' : 'text-[#2C3E50]'
                    }`}
                  onClick={(e) => handleLinkClick(e, '#company')}
                >
                  会社概要
                  <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === '#company' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
                <span className="text-[17px] text-[#2C3E50] mx-2">/</span>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[#5AB1E0] ${activeSection === '#contact' ? 'text-[#5AB1E0]' : 'text-[#2C3E50]'
                    }`}
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  お問い合わせ
                  <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === '#contact' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white z-[999] flex items-center justify-center md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full pointer-events-none'
            }`}
          onClick={closeMobileMenu}
        >
          <nav
            className="w-full h-full flex flex-col items-center justify-center px-6 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-md flex flex-col h-full">
              <ul className="list-none m-0 p-0 flex flex-col gap-3 flex-1">
                <li>
                  <a
                    href="#top"
                    className="text-[21px] font-medium text-[#2C3E50] no-underline py-3 block transition-colors duration-300 hover:text-[#5AB1E0] text-center"
                    onClick={(e) => handleLinkClick(e, '#top')}
                  >
                    <div className="flex flex-col items-center">
                      <span>トップ</span>
                      <span className="text-[11px] font-normal mt-1">Top</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-[21px] font-medium text-[#2C3E50] no-underline py-3 block transition-colors duration-300 hover:text-[#5AB1E0] text-center"
                    onClick={(e) => handleLinkClick(e, '#about')}
                  >
                    <div className="flex flex-col items-center">
                      <span>Naritaiについて</span>
                      <span className="text-[11px] font-normal mt-1">About</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#message"
                    className="text-[21px] font-medium text-[#2C3E50] no-underline py-3 block transition-colors duration-300 hover:text-[#5AB1E0] text-center"
                    onClick={(e) => handleLinkClick(e, '#message')}
                  >
                    <div className="flex flex-col items-center">
                      <span>メッセージ</span>
                      <span className="text-[11px] font-normal mt-1">Message</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#business"
                    className="text-[21px] font-medium text-[#2C3E50] no-underline py-3 block transition-colors duration-300 hover:text-[#5AB1E0] text-center"
                    onClick={(e) => handleLinkClick(e, '#business')}
                  >
                    <div className="flex flex-col items-center">
                      <span>事業内容</span>
                      <span className="text-[11px] font-normal mt-1">Business</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    className="text-[21px] font-medium text-[#2C3E50] no-underline py-3 block transition-colors duration-300 hover:text-[#5AB1E0] text-center"
                    onClick={(e) => handleLinkClick(e, '#news')}
                  >
                    <div className="flex flex-col items-center">
                      <span>News</span>
                      <span className="text-[11px] font-normal mt-1">News</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-[21px] font-medium text-[#2C3E50] no-underline py-3 block transition-colors duration-300 hover:text-[#5AB1E0] text-center"
                    onClick={(e) => handleLinkClick(e, '#faq')}
                  >
                    <div className="flex flex-col items-center">
                      <span>よくある質問</span>
                      <span className="text-[11px] font-normal mt-1">FAQ</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#company"
                    className="text-[21px] font-medium text-[#2C3E50] no-underline py-3 block transition-colors duration-300 hover:text-[#5AB1E0] text-center"
                    onClick={(e) => handleLinkClick(e, '#company')}
                  >
                    <div className="flex flex-col items-center">
                      <span>会社概要</span>
                      <span className="text-[11px] font-normal mt-1">Company</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[21px] font-medium text-[#2C3E50] no-underline py-3 block transition-colors duration-300 hover:text-[#5AB1E0] text-center"
                    onClick={(e) => handleLinkClick(e, '#contact')}
                  >
                    <div className="flex flex-col items-center">
                      <span>お問い合わせ</span>
                      <span className="text-[11px] font-normal mt-1">Contact</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="mt-auto pb-8">
                <a
                  href="#contact"
                  className="block w-full bg-[#202D5F] hover:bg-[#1a2449] text-white text-center py-4 px-6 rounded-3xl transition-colors duration-300 font-medium"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  資料請求
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}


