'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // ブラウザ環境のチェック
    if (typeof window === 'undefined') return;

    // マウスの位置を追跡（時差なく直接DOM操作で反映）
    const updateMousePosition = (e: MouseEvent) => {
      try {
        const x = e.clientX;
        const y = e.clientY;
        // DOMを直接操作して時差なく更新
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        }
        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        }
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
      } catch (error) {
        // エラーを無視（SSR環境など）
      }
    };

    // ホバー可能な要素を検出
    const checkHoverable = (target: HTMLElement | null): boolean => {
      if (!target) return false;
      
      const tagName = target.tagName;
      
      // タグ名で直接チェック
      if (tagName === 'A' || tagName === 'BUTTON') {
        return true;
      }
      
      // 親要素にリンクやボタンがあるかチェック
      const interactiveParent = target.closest('a, button, [role="button"]');
      if (interactiveParent) {
        return true;
      }
      
      // その他のインタラクティブ要素
      if (target.hasAttribute('onclick') || target.getAttribute('tabindex') === '0') {
        return true;
      }
      
      // CSSクラスでカーソルがpointerに設定されている要素をチェック
      // ただし、globals.cssでcursor: noneが設定されているため、computedStyleは使わない
      // 代わりに、特定のクラス名やデータ属性で判定
      if (target.classList.contains('cursor-pointer') || 
          target.dataset.cursor === 'pointer') {
        return true;
      }
      
      return false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement;
        if (target && checkHoverable(target)) {
          setIsHovering(true);
        }
      } catch (error) {
        // エラーを無視
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      try {
        const relatedTarget = e.relatedTarget as HTMLElement;
        if (!relatedTarget || !checkHoverable(relatedTarget)) {
          setIsHovering(false);
        }
      } catch (error) {
        // エラーを無視
      }
    };

    // マウスがビューポート外に出たときに非表示にする
    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed left-0 top-0 w-10 h-10 border-2 border-[#517CA2] rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-[99999] mix-blend-difference opacity-80 will-change-transform ${
          isHovering ? 'w-[60px] h-[60px] border-[#5AB1E0] opacity-100' : ''
        }`}
        aria-hidden="true"
      />
      <div
        ref={cursorDotRef}
        className={`fixed left-0 top-0 w-2 h-2 bg-[#517CA2] rounded-full pointer-events-none transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] z-[100000] mix-blend-difference will-change-transform ${
          isHovering ? 'w-3 h-3 bg-[#5AB1E0]' : ''
        }`}
        aria-hidden="true"
      />
    </>
  );
}

