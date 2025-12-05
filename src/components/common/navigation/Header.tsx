'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { NavigationConfig } from './types';

interface HeaderProps {
  config: NavigationConfig;
}

export default function Header({ config }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const headerRef = useRef<HTMLElement>(null);

  const headerColors = config.colors?.header;
  const headerTextColor = headerColors?.textColor || '#2C3E50';
  const headerActiveColor = headerColors?.activeTextColor || '#517CA2';
  const headerBtnBgColor = headerColors?.buttonBackgroundColor || '#202D5F';
  const cssVars = {
    '--header-text': headerTextColor,
    '--header-active': headerActiveColor,
    '--header-btn-bg': headerBtnBgColor,
  } as React.CSSProperties;

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

    // セクションIDをconfigから取得
    const sections = config.headerLinks.map(link => link.href);
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

      const visibleSections = Array.from(sectionStates.entries())
        .filter(([_, isVisible]) => isVisible)
        .map(([id, _]) => id);

      if (visibleSections.length > 0) {
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

    sections.forEach(sectionId => {
      const section = document.querySelector(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    const checkTopSection = () => {
      if (window.scrollY < 100) {
        const firstSection = sections[0];
        if (firstSection) {
          setActiveSection(firstSection);
        }
      }
    };

    checkTopSection();
    window.addEventListener('scroll', checkTopSection, { passive: true });

    const handleHashScroll = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const isReload = navigation?.type === 'reload';

      if (isReload && window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }

      if (!isReload && window.location.hash) {
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
  }, [scrollToSection, config.headerLinks]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobileMenu();

    // 外部リンク（/で始まるパス）の場合は通常遷移
    if (href.startsWith('/') && !href.startsWith('/#')) {
      window.location.href = href;
      return;
    }

    // 現在のページがbasePathでない場合はbasePathに遷移してからスクロール
    if (window.location.pathname !== config.basePath) {
      window.location.href = config.basePath + href;
      return;
    }

    // 現在のページにいる場合は通常のスクロール
    scrollToSection(href);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = config.basePath;
  };

  const customBgStyle = headerColors?.backgroundColor ? { backgroundColor: headerColors.backgroundColor } : {};

  const backgroundClass = headerColors?.backgroundColor
    ? (isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-[#E6EAEE]' : 'border-transparent shadow-none')
    : (isScrolled ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-[#E6EAEE]' : 'bg-white/95 backdrop-blur-[10px] border-transparent shadow-none');

  return (
    <>
      <div 
        className="fixed top-0 right-0 w-[60px] h-[60px] lg:w-[160px] lg:h-[90px] xl:w-[175px] xl:h-[100px] z-[1001] rounded-bl-3xl flex flex-col items-center justify-center overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
        style={{ backgroundColor: headerBtnBgColor }}
      >
        {config.documentRequestLink && config.documentRequestLabel ? (
          <a
            href={config.documentRequestLink}
            className="hidden lg:flex flex-col items-center justify-center w-full h-full"
            onClick={(e) => handleLinkClick(e, config.documentRequestLink!)}
          >
            <span className="text-white font-bold text-base" style={{ fontFamily: '"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif' }}>{config.documentRequestLabel.line1}</span>
            <span className="text-white font-bold text-base" style={{ fontFamily: '"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif' }}>{config.documentRequestLabel.line2}</span>
          </a>
        ) : (
          <div className="hidden lg:block" />
        )}
        <button
          className="lg:hidden flex items-center justify-center w-full h-full relative"
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
        style={{ ...cssVars, ...customBgStyle }}
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out border-b ${backgroundClass}`}
      >
        <div className="w-full py-2 flex items-center justify-between flex-wrap gap-4">
          <a
            href={config.basePath}
            className="flex items-center transition-opacity duration-300 hover:opacity-80 pl-4 lg:pl-8"
            onClick={handleLogoClick}
          >
            <img
              src="/naritai.png"
              alt="Naritai"
              className="h-[30px] lg:h-[50px] xl:h-[60px] w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:block pr-[180px] xl:pr-[195px]">
            <ul className="flex list-none gap-8 items-center flex-wrap justify-end m-0 p-0">
              {config.headerLinks.map((link, index) => (
                <li key={link.href} className="flex items-center">
                  <a
                    href={link.href}
                    className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap block group hover:text-[var(--header-active)] ${activeSection === link.href ? 'text-[var(--header-active)]' : 'text-[var(--header-text)]'
                      }`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white z-[999] flex items-center justify-center lg:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full pointer-events-none'
            }`}
          onClick={closeMobileMenu}
        >
          <nav
            className="w-full h-screen overflow-y-auto flex flex-col items-center justify-center px-6 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-md flex flex-col h-full">
              <ul className="list-none m-0 p-0 flex flex-col gap-3 flex-1">
                {config.headerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[21px] font-medium text-[var(--header-text)] no-underline py-3 block transition-colors duration-300 hover:text-[var(--header-active)] text-center"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      <div className="flex flex-col items-center">
                        <span>{link.label}</span>
                        {link.labelEn && (
                          <span className="text-[11px] font-normal mt-1">{link.labelEn}</span>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              {config.documentRequestLink && (
                <div className="mt-auto pb-8">
                  <a
                    href={config.documentRequestLink}
                    style={{ backgroundColor: headerBtnBgColor }}
                    className="block w-full hover:opacity-90 text-white text-center py-4 px-6 rounded-3xl transition-colors duration-300 font-medium"
                    onClick={(e) => handleLinkClick(e, config.documentRequestLink!)}
                  >
                    資料請求
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
