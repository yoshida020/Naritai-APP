'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { NavigationConfig } from './types';

// body要素のスクロール位置を取得（globals.cssでbodyがスクロールコンテナになっているため）
const getScrollY = () => document.body.scrollTop;

interface HeaderProps {
  config: NavigationConfig;
}

export default function Header({ config }: HeaderProps) {
  const router = useRouter();
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
        const elementTop = element.getBoundingClientRect().top + getScrollY();
        const targetPosition = elementTop - headerHeight;
        const currentScrollY = getScrollY();

        if (Math.abs(targetPosition - currentScrollY) > 1) {
          document.body.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(getScrollY() > 50);
    };

    document.body.addEventListener('scroll', handleScroll, { passive: true });

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
      if (getScrollY() < 100) {
        const firstSection = sections[0];
        if (firstSection) {
          setActiveSection(firstSection);
        }
      }
    };

    checkTopSection();
    document.body.addEventListener('scroll', checkTopSection, { passive: true });

    const handleHashScroll = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const isReload = navigation?.type === 'reload';

      if (isReload && window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
        document.body.scrollTo({ top: 0, behavior: 'instant' });
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
      document.body.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('scroll', checkTopSection);
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

    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    // 内部リンク（/で始まるパス）の場合はNext.jsルーターで遷移
    if (href.startsWith('/') && !href.startsWith('/#')) {
      router.push(href);
      return;
    }

    // 現在のページがbasePathでない場合はbasePathに遷移してからスクロール
    if (window.location.pathname !== config.basePath) {
      router.push(config.basePath + href);
      return;
    }

    // 現在のページにいる場合は通常のスクロール
    scrollToSection(href);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push('/');
  };

  const customBgStyle = headerColors?.backgroundColor ? { backgroundColor: headerColors.backgroundColor } : {};

  const backgroundClass = headerColors?.backgroundColor
    ? (isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-[#E6EAEE]' : 'shadow-[0_2px_10px_rgba(0,0,0,0.1)] border-transparent')
    : (isScrolled ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-[#E6EAEE]' : 'bg-white/95 backdrop-blur-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] border-transparent');

  return (
    <>
      <div 
        className="fixed top-0 right-0 w-[60px] h-[60px] min-[1025px]:w-[160px] min-[1025px]:h-[90px] xl:w-[175px] xl:h-[100px] z-[1001] rounded-bl-3xl flex flex-col items-center justify-center overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
        style={{ backgroundColor: headerBtnBgColor }}
      >
        {config.documentRequestLink && config.documentRequestLabel ? (
          <a
            href={config.documentRequestLink}
            className="hidden min-[1025px]:flex flex-col items-center justify-center w-full h-full"
            onClick={(e) => handleLinkClick(e, config.documentRequestLink!)}
          >
            <span className="text-white font-bold text-base" style={{ fontFamily: '"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif' }}>{config.documentRequestLabel.line1}</span>
            <span className="text-white font-bold text-base" style={{ fontFamily: '"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif' }}>{config.documentRequestLabel.line2}</span>
          </a>
        ) : (
          <div className="hidden min-[1025px]:block" />
        )}
        <button
          className="flex min-[1025px]:hidden items-center justify-center w-full h-full relative"
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
            href="/"
            className="flex items-center transition-opacity duration-300 hover:opacity-80 pl-4 min-[1025px]:pl-8"
            onClick={handleLogoClick}
          >
            <img
              src="/images/logo/naritai.png"
              alt="Naritai"
              className="h-[30px] min-[1025px]:h-[50px] xl:h-[60px] w-auto object-contain"
            />
          </a>
          <nav className="hidden min-[1025px]:block pr-[180px] xl:pr-[195px]">
            <ul className="flex list-none gap-8 items-center flex-wrap justify-end m-0 p-0">
              {config.headerLinks.map((link) => (
                <li key={link.href} className="flex items-center relative group/nav">
                  <a
                    href={link.href}
                    className={`text-[17px] font-medium no-underline transition-colors duration-300 relative py-2 whitespace-nowrap flex items-center gap-1 group hover:text-[var(--header-active)] ${activeSection === link.href ? 'text-[var(--header-active)]' : 'text-[var(--header-text)]'
                      }`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                    {link.subLinks && link.subLinks.length > 0 && (
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover/nav:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className={`absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform -translate-x-1/2 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </a>
                  {link.subLinks && link.subLinks.length > 0 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200">
                      <ul className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-3 px-2 min-w-[140px]">
                        {link.subLinks.map((subLink, index) => (
                          <li key={subLink.href}>
                            <a
                              href={subLink.href}
                              className="block px-4 py-2.5 text-[15px] font-medium text-[var(--header-text)] hover:text-[var(--header-active)] transition-all duration-200 whitespace-nowrap text-center relative group/sub"
                              onClick={(e) => handleLinkClick(e, subLink.href)}
                            >
                              {subLink.label}
                              <span className="absolute bottom-1 left-1/2 h-[1px] w-0 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] transition-all duration-300 ease-out transform -translate-x-1/2 group-hover/sub:w-[80%]"></span>
                            </a>
                            {index < link.subLinks!.length - 1 && (
                              <div className="mx-3 my-1 border-b border-gray-100"></div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white z-[999] flex items-center justify-center min-[1025px]:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen
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
                    {link.subLinks && link.subLinks.length > 0 && (
                      <div className="flex flex-col items-center gap-2 mt-3 pl-4 border-l-2 border-gray-200 ml-auto mr-auto w-fit">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.href}
                            href={subLink.href}
                            className="flex items-center gap-2 text-[15px] font-medium text-[var(--header-text)] hover:text-[var(--header-active)] transition-all duration-200 py-1.5 px-3 rounded-lg hover:bg-gray-50"
                            onClick={(e) => handleLinkClick(e, subLink.href)}
                          >
                            <svg className="w-4 h-4 text-[var(--header-active)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    )}
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
