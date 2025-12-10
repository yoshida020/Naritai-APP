"use client";

import React, { useEffect, useState } from 'react';

interface FeatherProps {
  style: React.CSSProperties;
  variant: 'rounded' | 'sharp';
}

const Feather: React.FC<FeatherProps> = ({ style, variant }) => (
  <div
    className="absolute text-white/20 pointer-events-none"
    style={style}
  >
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))' }}
    >
      {variant === 'rounded' ? (
        <path d="M 28 0 L 107 40 L 185 94 L 257 159 L 311 218 L 324 237 L 238 159 L 163 105 L 158 127 L 157 153 L 158 159 L 167 145 L 177 137 L 172 159 L 171 182 L 174 204 L 183 230 L 196 250 L 205 230 L 218 218 L 212 242 L 212 260 L 218 277 L 228 289 L 237 253 L 255 222 L 255 294 L 260 311 L 268 323 L 278 331 L 281 313 L 294 290 L 295 324 L 306 346 L 322 360 L 327 339 L 337 323 L 340 349 L 349 370 L 364 387 L 396 412 L 414 431 L 410 400 L 400 373 L 401 371 L 407 377 L 427 412 L 431 429 L 430 452 L 445 481 L 455 511 L 468 484 L 476 458 L 482 426 L 482 406 L 478 384 L 466 356 L 457 343 L 434 322 L 458 326 L 483 343 L 462 310 L 423 274 L 437 275 L 454 282 L 464 289 L 478 306 L 469 273 L 446 237 L 420 214 L 388 198 L 415 196 L 427 199 L 450 213 L 439 193 L 419 171 L 402 159 L 368 143 L 393 141 L 411 146 L 383 119 L 352 104 L 308 96 L 268 99 L 271 92 L 291 74 L 307 67 L 322 65 L 293 51 L 268 44 L 240 42 L 215 47 L 196 57 L 163 36 L 119 16 L 70 3 Z" />
      ) : (
        <path d="M435.0,460.5 L336.0,418.5 L323.0,436.5 L321.0,424.5 L306.0,431.5 L326.5,418.0 L294.0,424.5 L314.5,413.0 L291.5,414.0 L321.5,410.0 L313.0,403.5 L276.0,427.5 L294.5,403.0 L270.5,412.0 L305.0,396.5 L247.0,398.5 L262.0,381.5 L200.0,385.5 L216.5,382.0 L176.0,372.5 L201.5,366.0 L167.0,359.5 L126.5,324.0 L110.0,293.5 L173.0,325.5 L229.5,311.0 L146.0,311.5 L74.5,239.0 L93.5,243.0 L62.5,206.0 L47.5,144.0 L62.5,157.0 L46.5,131.0 L70.5,153.0 L47.5,115.0 L55.0,86.5 L78.5,110.0 L58.5,79.0 L80.0,42.5 L90.0,55.5 L92.0,33.5 L106.0,47.5 L103.0,28.5 L122.0,23.5 L127.0,35.5 L140.0,19.5 L153.0,34.5 L154.0,20.5 L183.5,31.0 L197.5,90.0 L177.0,161.5 L203.5,121.0 L204.0,50.5 L220.5,69.0 L247.5,121.0 L248.5,169.0 L256.0,123.5 L264.0,188.5 L274.5,176.0 L265.5,291.0 L285.0,239.5 L284.5,311.0 L292.0,289.5 L305.5,313.0 L301.5,373.0 L326.0,342.5 L309.5,367.0 L313.0,386.5 L330.5,348.0 L319.5,395.0 L338.0,367.5 L324.5,388.0 L339.5,386.0 L333.0,406.5 L443.0,449.5 L435.0,460.5 Z" />
      )}
    </svg>
  </div>
);

export default function FeatherBackground() {
  const [feathers, setFeathers] = useState<Array<{ id: number; style: React.CSSProperties; variant: 'rounded' | 'sharp' }>>([]);

  useEffect(() => {
    const count = 15;
    const newFeathers = Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const duration = 15 + Math.random() * 20;
      const delay = Math.random() * -30;
      const size = 40 + Math.random() * 60;
      const rotate = Math.random() * 360;
      const variant: 'rounded' | 'sharp' = Math.random() > 0.5 ? 'rounded' : 'sharp';

      return {
        id: i,
        variant,
        style: {
          left: `${left}%`,
          top: '-100px',
          width: `${size}px`,
          height: `${size}px`,
          animation: `fall ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          transform: `rotate(${rotate}deg)`,
          opacity: 0.4 + Math.random() * 0.4,
        },
      };
    });
    setFeathers(newFeathers);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(50vh) translateX(50px) rotate(180deg);
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) translateX(-50px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      {feathers.map((feather) => (
        <Feather key={feather.id} style={feather.style} variant={feather.variant} />
      ))}
    </div>
  );
}

