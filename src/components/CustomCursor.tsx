'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

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
        className={`${styles.cursor} ${isHovering ? styles.hover : ''}`}
        aria-hidden="true"
      />
      <div
        ref={cursorDotRef}
        className={`${styles.cursorDot} ${isHovering ? styles.hover : ''}`}
        aria-hidden="true"
      />
    </>
  );
}

