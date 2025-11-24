"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function TopSection() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/scroll%20down.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FCFF] via-white to-[#E6EAEE] z-0"></div>
      <div className="absolute left-0 top-0 w-[5%] h-full bg-white z-[2] hidden md:flex flex-col items-center justify-end pb-4 sm:pb-6 md:pb-8 lg:pb-10">
        {animationData && (
          <div className="w-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          </div>
        )}
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 md:left-[5%] top-0 w-full md:w-[95%] h-full object-cover z-0"
        preload="auto"
      >
        <source src="/TopHp.mp4" type="video/mp4" />
      </video>
      <div className="absolute right-0 bottom-0 md:top-0 w-[28%] md:w-[22%] h-auto md:h-full z-[3] flex items-end md:items-center justify-center pointer-events-none px-1 md:px-0 pb-8 md:pb-0">
        <div
          className="flex flex-col items-center gap-3 md:gap-6"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright"
          }}
        >
          <div
            className="bg-white rounded-md shadow-md px-2 py-1 md:px-4 md:py-2"
            style={{
              fontFamily: `'Noto Sans JP', 'Montserrat', 'Bebas Neue', 'Oswald', sans-serif`,
              fontWeight: 700,
              fontSize: "clamp(1rem, 3vw, 2.3rem)",
              letterSpacing: "0.05em",
              lineHeight: 1.8,
              whiteSpace: "nowrap",
              display: "inline-block"
            }}
          >
            あなたのなりたいを
          </div>
          <div
            className="bg-white rounded-md shadow-md px-2 py-1 md:px-4 md:py-2"
            style={{
              fontFamily: `'Noto Sans JP', 'Montserrat', 'Bebas Neue', 'Oswald', sans-serif`,
              fontWeight: 700,
              fontSize: "clamp(1rem, 3vw, 2.3rem)",
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
      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#5AB1E0]/10 rounded-full blur-3xl animate-pulse z-[1]"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#517CA2]/10 rounded-full blur-3xl animate-pulse delay-1000 z-[1]"></div>
      
      {/* Naritai ロゴ - 中央 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[4]">
        <h1
          className="text-white drop-shadow-2xl inline-block"
          style={{
            fontFamily: "'Catchy Mager', serif",
            fontWeight: 'normal',
            fontSize: 'clamp(4rem, 12vw, 12rem)',
            letterSpacing: "-0.05em",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)"
          }}
        >
          {['N', 'a', 'r', 'i', 't', 'a', 'i'].map((char, index) => (
            <span
              key={index}
              className="inline-block animate-handwriting"
              style={{
                animationDelay: `${index * 0.15}s`,
                display: 'inline-block'
              }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
