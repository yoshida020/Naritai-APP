'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // ブラウザ環境のチェック
    if (typeof window === 'undefined') return;

    // マウスの位置を追跡
    const updateMousePosition = (e: MouseEvent) => {
      try {
        mousePosition.current = { x: e.clientX, y: e.clientY };
        cursorPosition.current = { x: e.clientX, y: e.clientY };
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
      } catch (error) {
        // エラーを無視（SSR環境など）
      }
    };

    // スムーズなアニメーションでカーソルを追従させる
    const animateCursor = () => {
      try {
        const dx = mousePosition.current.x - cursorPosition.current.x;
        const dy = mousePosition.current.y - cursorPosition.current.y;
        
        // 距離が小さい場合は即座に移動
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 0.1) {
          cursorPosition.current.x = mousePosition.current.x;
          cursorPosition.current.y = mousePosition.current.y;
        } else {
          cursorPosition.current.x += dx * 0.15;
          cursorPosition.current.y += dy * 0.15;
        }
        
        setPosition({
          x: cursorPosition.current.x,
          y: cursorPosition.current.y,
        });
        
        rafId.current = requestAnimationFrame(animateCursor);
      } catch (error) {
        // エラーを無視して続行
        if (rafId.current !== null) {
          rafId.current = requestAnimationFrame(animateCursor);
        }
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

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // アニメーションループを開始
    rafId.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`${styles.cursor} ${isHovering ? styles.hover : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        aria-hidden="true"
      />
      <div
        className={`${styles.cursorDot} ${isHovering ? styles.hover : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        aria-hidden="true"
      />
    </>
  );
}

