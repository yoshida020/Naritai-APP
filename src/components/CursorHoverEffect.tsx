'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CursorHoverEffect.module.css';

export default function CursorHoverEffect() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 初期位置を設定
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    
    // 初期状態を設定
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${initialX}px, ${initialY}px) translate(-50%, -50%)`;
    }
    setIsVisible(true);
    isVisibleRef.current = true;

    // マウスの位置を追跡（時差なく直接DOM操作で反映）
    const updateMousePosition = (e: MouseEvent) => {
      try {
        const x = e.clientX;
        const y = e.clientY;
        // DOMを直接操作して時差なく更新
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        }
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
      } catch (error) {
        // エラーを無視
      }
    };

    // ホバー可能な要素を検出
    const checkHoverable = (target: HTMLElement | null): boolean => {
      if (!target) return false;
      
      const tagName = target.tagName;
      
      if (tagName === 'A' || tagName === 'BUTTON') {
        return true;
      }
      
      const interactiveParent = target.closest('a, button, [role="button"]');
      if (interactiveParent) {
        return true;
      }
      
      if (target.hasAttribute('onclick') || target.getAttribute('tabindex') === '0') {
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

    const handleMouseLeave = () => {
      try {
        isVisibleRef.current = false;
        setIsVisible(false);
      } catch (error) {
        // エラーを無視
      }
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
    <div
      ref={cursorRef}
      className={`${styles.cursorEffect} ${isHovering ? styles.hover : ''}`}
      aria-hidden="true"
    />
  );
}
