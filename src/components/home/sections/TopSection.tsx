"use client";

import { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import ZoomSlideShow from "@/components/home/ZoomSlideShow";

const desktopImages = [
  "/images/hero/hero-city.webp",
  "/images/hero/hero-coaching.jpeg",
  "/images/hero/hero-commute.jpeg"];

const mobileImages = [
  "/images/hero/hero-city.webp",
  "/images/hero/hero-coaching-mobile.png",
  "/images/hero/hero-commute.jpeg"];

export default function TopSection() {
  const [animationData, setAnimationData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/animations/scroll-down.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-[100dvh] min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FCFF] via-white to-[#E6EAEE] z-0"></div>
      <div className="absolute left-0 top-0 w-[5%] h-full z-[2] hidden md:block" style={{ overflow: 'visible' }}>
        <div
          className="absolute top-0 left-0 w-full bg-white"
          style={{
            height: 'calc(50% + 1.45vw)',
            zIndex: 3,
            clipPath: 'polygon(0 0, 0 calc(100% - 1.45vw), 16.67% 100%, 33.33% calc(100% - 1.45vw), 50% 100%, 66.67% calc(100% - 1.45vw), 83.33% 100%, 100% calc(100% - 1.45vw), 100% 0)'
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full bg-[#F0F0F0] flex flex-col items-center justify-end pb-4 sm:pb-6 md:pb-8 lg:pb-10"
          style={{ height: '50%', zIndex: 2 }}
        >
          {animationData && (
            <div className="w-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
              <Lottie animationData={animationData} loop={true} autoplay={true} />
            </div>
          )}
        </div>
      </div>
      <div className="absolute left-0 md:left-[5%] top-0 w-full md:w-[95%] h-full z-0 overflow-hidden bg-[#F0F0F0]">
        <ZoomSlideShow
          images={images}
          duration={7000}
          zoomScale={1.2}
          className="h-full"
          paused={!isVisible}
        />
      </div>
      <div className="absolute right-4 md:right-0 bottom-40 md:top-0 w-[28%] md:w-[22%] h-auto md:h-full z-[3] flex items-end md:items-center justify-center pointer-events-none px-1 md:px-0 pb-8 md:pb-0">
        <div
          className="flex flex-col items-center gap-3 md:gap-6 md:mt-20"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright"
          }}
        >
          <div
            className="bg-white rounded-md shadow-md px-2 py-1 md:px-4 md:py-2 animate-text-fade-in-down"
            style={{
              fontFamily: `'花鳥風月', serif`,
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 4rem)",
              letterSpacing: "0.05em",
              lineHeight: 1.8,
              whiteSpace: "nowrap",
              display: "inline-block"
            }}
          >
            あなたのなりたいを
          </div>
          <div
            className="bg-white rounded-md shadow-md px-2 py-1 md:px-4 md:py-2 animate-text-fade-in-down delay-600"
            style={{
              fontFamily: `'花鳥風月', serif`,
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 4rem)",
              letterSpacing: "0.05em",
              lineHeight: 1.8,
              whiteSpace: "nowrap",
              display: "inline-block"
            }}
          >
            実現する
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-4 sm:left-8 md:left-[5%] md:ml-8 z-[4]">
        <h1
          className="drop-shadow-2xl inline-block text-white animate-text-fade-in-down delay-1800"
          style={{
            fontFamily: "'Catchy Mager', serif",
            fontWeight: 'bold',
            fontSize: 'clamp(4rem, 12vw, 12rem)',
            letterSpacing: "0.1em",
            color: '#FFFFFF',
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)"
          }}
        >
          Naritai
        </h1>
      </div>
    </section>
  );
}
