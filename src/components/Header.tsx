'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Header.module.css';

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
    <header ref={headerRef} className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo} onClick={(e) => handleLinkClick(e, '#top')}>
          <img 
            src="/20251113-1222_2c7cdaaec151d3d5e7aabdec1966c120.png" 
            alt="Naritai" 
            className={styles.logoImage}
          />
        </a>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#problems" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#problems')}>
                課題
              </a>
            </li>
            <li>
              <a href="#services" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#services')}>
                サービス内容
              </a>
            </li>
            <li>
              <a href="#instructors" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#instructors')}>
                講師紹介
              </a>
            </li>
            <li>
              <a href="#corporate" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#corporate')}>
                企業向け
              </a>
            </li>
            <li>
              <a href="#strong-points" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#strong-points')}>
                強み
              </a>
            </li>
            <li>
              <a href="#flow" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#flow')}>
                ご利用の流れ
              </a>
            </li>
            <li>
              <a href="#pricing" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#pricing')}>
                料金
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#contact')}>
                お問い合わせ
              </a>
            </li>
            <li>
              <a href="#naritai" className={styles.navLink} onClick={(e) => handleLinkClick(e, '#naritai')}>
                会社情報
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="メニューを開く"
        >
          <span className={styles.mobileMenuIcon}></span>
          <span className={styles.mobileMenuIcon}></span>
          <span className={styles.mobileMenuIcon}></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}>
          <nav className={styles.mobileNav} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.mobileNavList}>
              <li>
                <a href="#problems" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#problems')}>
                  課題
                </a>
              </li>
              <li>
                <a href="#services" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#services')}>
                  サービス内容
                </a>
              </li>
              <li>
                <a href="#instructors" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#instructors')}>
                  講師紹介
                </a>
              </li>
              <li>
                <a href="#corporate" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#corporate')}>
                  企業向け
                </a>
              </li>
              <li>
                <a href="#strong-points" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#strong-points')}>
                  強み
                </a>
              </li>
              <li>
                <a href="#flow" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#flow')}>
                  ご利用の流れ
                </a>
              </li>
              <li>
                <a href="#pricing" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#pricing')}>
                  料金
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#contact')}>
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#naritai" className={styles.mobileNavLink} onClick={(e) => handleLinkClick(e, '#naritai')}>
                  会社情報
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

