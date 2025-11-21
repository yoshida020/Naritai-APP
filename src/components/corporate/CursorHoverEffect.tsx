'use client';

import { useEffect, useState, useRef } from 'react';

export default function CursorHoverEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const rafId = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 初期位置を設定
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    cursorPosition.current = { x: initialX, y: initialY };
    mousePosition.current = { x: initialX, y: initialY };
    
    // 初期状態を設定
    setPosition({ x: initialX, y: initialY });
    setIsVisible(true);
    isVisibleRef.current = true;

    // マウスの位置を追跡
    const updateMousePosition = (e: MouseEvent) => {
      try {
        mousePosition.current = { x: e.clientX, y: e.clientY };
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
      } catch (error) {
        // エラーを無視
      }
    };

    // スムーズかつ常時カーソルを追従させる
    const animateCursor = () => {
      try {
        const dx = mousePosition.current.x - cursorPosition.current.x;
        const dy = mousePosition.current.y - cursorPosition.current.y;
        const easing = 0.35;
        const snapThreshold = 0.05;
        cursorPosition.current.x += dx * easing;
        cursorPosition.current.y += dy * easing;

        // 十分近づいた場合のみスナップ
        if (Math.abs(dx) < snapThreshold && Math.abs(dy) < snapThreshold) {
          cursorPosition.current = { ...mousePosition.current };
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

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    
    // アニメーションループを開始
    rafId.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  const transitionDuration = '1s';
  const transitionTiming = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div
      className={`fixed w-6 h-6 aspect-square bg-[#5AB1E0] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-normal opacity-50 will-change-transform hidden lg:block ${
        isHovering ? 'w-10 h-10 bg-transparent border-2 border-[#5AB1E0] opacity-70' : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: [
          `width ${transitionDuration} ${transitionTiming}`,
          `height ${transitionDuration} ${transitionTiming}`,
          `border ${transitionDuration} ${transitionTiming}`,
          `background-color ${transitionDuration} ${transitionTiming}`,
          `opacity ${transitionDuration} ${transitionTiming}`,
        ].join(', '),
      }}
      aria-hidden="true"
    />
  );
}
