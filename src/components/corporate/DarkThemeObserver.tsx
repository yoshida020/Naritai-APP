'use client';

import { useEffect } from 'react';

export default function DarkThemeObserver() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let checkElementInterval: NodeJS.Timeout | null = null;
    let handleScroll: (() => void) | null = null;

    const setupObserver = () => {
      // 要素の取得
      const sectionElement = document.getElementById('coaching-section');
      const corporateSectionElement = document.getElementById('corporate');

      if (!sectionElement || !corporateSectionElement) return;
      if (checkElementInterval) clearInterval(checkElementInterval);

      console.log('DarkThemeObserver: Setup start');

      // ■ 初期設定：トランジション設定
      const transitionClasses = ['transition-colors', 'duration-1000', 'ease-in-out'];
      
      // body全体にトランジション付与
      document.body.classList.add(...transitionClasses);
      document.documentElement.classList.add(...transitionClasses);

      // すべてのセクションとその内側のdivにトランジションを適用
      const allSections = document.querySelectorAll('section');
      allSections.forEach((section) => {
        (section as HTMLElement).style.transition = 'background-color 1s ease-in-out';
        const innerDiv = section.querySelector(':scope > div');
        if (innerDiv) {
          (innerDiv as HTMLElement).style.transition = 'background-color 1s ease-in-out';
        }
      });

      const checkDarkMode = () => {
        const headerHeight = 100; // ヘッダーの高さを考慮
        
        // 座標計算
        const sectionRect = sectionElement.getBoundingClientRect();
        const corporateRect = corporateSectionElement.getBoundingClientRect();

        // ゾーン判定：
        // - セクションの先頭がビューポート上部（ヘッダー下）に入った時点で反転開始
        // - 導入効果セクションの先頭がビューポート上部（ヘッダー下）に入った時点で反転終了
        const isPastSectionStart = sectionRect.top < headerHeight;
        const isBeforeCorporate = corporateRect.top > headerHeight;
        const isInDarkModeZone = isPastSectionStart && isBeforeCorporate;

        // すべてのセクションとその内側のdivを取得
        const allSections = document.querySelectorAll('section');
        
        if (isInDarkModeZone) {
          // ▼ ダークモード ON
          // body/htmlをダーク色に変更
          document.documentElement.classList.add('is-dark-theme');
          document.body.classList.add('is-dark-theme');

          // すべてのセクションとその内側のdivの背景色を透明にする
          allSections.forEach((section) => {
            (section as HTMLElement).style.backgroundColor = 'transparent';
            const innerDiv = section.querySelector(':scope > div');
            if (innerDiv) {
              (innerDiv as HTMLElement).style.backgroundColor = 'transparent';
            }
          });

        } else {
          // ▼ ダークモード OFF
          // body/htmlを元の色に戻す
          document.documentElement.classList.remove('is-dark-theme');
          document.body.classList.remove('is-dark-theme');

          // すべてのセクションとその内側のdivの背景色を元に戻す（style属性を削除してCSSに戻す）
          allSections.forEach((section) => {
            (section as HTMLElement).style.backgroundColor = '';
            const innerDiv = section.querySelector(':scope > div');
            if (innerDiv) {
              (innerDiv as HTMLElement).style.backgroundColor = '';
            }
          });
        }
      };

      // スクロールイベントでリアルタイムにチェック
      handleScroll = () => {
        checkDarkMode();
      };

      // 初期チェック
      checkDarkMode();

      // スクロールイベントリスナーを追加
      document.body.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });

      // IntersectionObserverも使用（要素が表示範囲に入った時にもチェック）
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.1, 0.5, 1],
      };

      const observerCallback = () => {
        checkDarkMode();
      };

      observer = new IntersectionObserver(observerCallback, options);
      observer.observe(sectionElement);
      observer.observe(corporateSectionElement);
    };

    checkElementInterval = setInterval(() => {
      const s = document.getElementById('coaching-section');
      const c = document.getElementById('corporate');
      if (s && c) {
        setupObserver();
      }
    }, 100);

    return () => {
      if (checkElementInterval) clearInterval(checkElementInterval);
      if (observer) observer.disconnect();
      // スクロールイベントリスナーを削除
      if (handleScroll) {
        document.body.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScroll);
      }
      // クリーンアップ：スタイルを元に戻す
      document.documentElement.classList.remove('is-dark-theme');
      document.body.classList.remove('is-dark-theme');
    };
  }, []);

  return null;
}
