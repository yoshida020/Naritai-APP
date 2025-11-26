"use client";

import { useEffect, useState, useRef } from "react";

interface ZoomSlideShowProps {
  images: string[];
  duration?: number;
  zoomScale?: number;
  className?: string;
  paused?: boolean;
}

export default function ZoomSlideShow({
  images,
  duration = 7000,
  zoomScale = 1.2,
  className = "",
  paused = false,
}: ZoomSlideShowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const styleIdRef = useRef<string>(`zoom-slideshow-${zoomScale}-${duration}`);

  // 動的にアニメーションスタイルを生成
  useEffect(() => {
    if (typeof window === "undefined") return;

    const styleId = styleIdRef.current;
    let styleSheet = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleSheet) {
      styleSheet = document.createElement("style");
      styleSheet.id = styleId;
      document.head.appendChild(styleSheet);
    }

    const animationDuration = duration / 1000; // ミリ秒を秒に変換
    const sanitizedId = styleId.replace(/[^a-zA-Z0-9]/g, "-");
    const keyframeName = `zoomIn-${sanitizedId}`;

    styleSheet.textContent = `
      @keyframes ${keyframeName} {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(${zoomScale});
        }
      }
    `;

    return () => {
      // クリーンアップはしない（他のインスタンスで使用される可能性があるため）
    };
  }, [duration, zoomScale]);

  // 画像の切り替えとクロスフェード
  useEffect(() => {
    if (images.length === 0 || paused) return;

    // クロスフェード開始タイミング（duration - 2000ms = 最後の2秒）
    const fadeStartTime = duration - 2000;

    const fadeTimeout = setTimeout(() => {
      setIsTransitioning(true);
      setNextIndex((currentIndex + 1) % images.length);
    }, fadeStartTime);

    // 画像切り替えタイミング
    const switchTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, duration);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(switchTimeout);
    };
  }, [images.length, duration, currentIndex, paused]);

  if (images.length === 0) {
    return null;
  }

  const sanitizedId = styleIdRef.current.replace(/[^a-zA-Z0-9]/g, "-");
  const animationName = `zoomIn-${sanitizedId}`;
  const animationDuration = duration / 1000;

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#F0F0F0] md:rounded-bl-[4rem] ${className}`}>
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isNext = index === nextIndex && isTransitioning;

        // 現在の画像と次の画像（クロスフェード中）のみ表示
        const isVisible = isActive || isNext;

        if (!isVisible) return null;

        return (
          <div
            key={`slide-${index}-${isActive ? currentIndex : nextIndex}`}
            className="absolute inset-0 w-full h-full md:rounded-bl-[4rem] overflow-hidden bg-[#F0F0F0]"
            style={{
              zIndex: isActive ? 10 : 5,
              opacity: isActive ? (isTransitioning ? 0 : 1) : (isTransitioning ? 1 : 0),
              transition: isTransitioning ? "opacity 2s ease-in-out" : "none",
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                transform: `scale(1)`,
                animation: `${animationName} ${animationDuration}s ease-out forwards`,
                animationPlayState: paused ? 'paused' : 'running',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
