'use client';

import { useEffect } from 'react';

export default function DarkThemeObserver() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let checkElementInterval: NodeJS.Timeout | null = null;

    const setupObserver = () => {
      // 要素の取得
      const textElement = document.getElementById('coaching-trigger');
      const imageElement = document.getElementById('coaching-image-trigger');
      const sectionElement = document.getElementById('coaching-section');

      if (!textElement || !imageElement || !sectionElement) return;
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

      const options = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      };

      const callback = () => {
        const viewportCenter = window.innerHeight / 2;
        
        // 座標計算
        const textRect = textElement.getBoundingClientRect();
        const imageRect = imageElement.getBoundingClientRect();

        // ゾーン判定
        const isPastText = textRect.top < viewportCenter;
        const isBeforeImage = imageRect.top > viewportCenter;
        const isInDarkModeZone = isPastText && isBeforeImage;

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

      observer = new IntersectionObserver(callback, options);
      observer.observe(textElement);
      observer.observe(imageElement);
    };

    checkElementInterval = setInterval(() => {
      const t = document.getElementById('coaching-trigger');
      const i = document.getElementById('coaching-image-trigger');
      const s = document.getElementById('coaching-section');
      if (t && i && s) {
        setupObserver();
      }
    }, 100);

    return () => {
      if (checkElementInterval) clearInterval(checkElementInterval);
      if (observer) observer.disconnect();
      // クリーンアップ：スタイルを元に戻す
      document.documentElement.classList.remove('is-dark-theme');
      document.body.classList.remove('is-dark-theme');
    };
  }, []);

  return null;
}
