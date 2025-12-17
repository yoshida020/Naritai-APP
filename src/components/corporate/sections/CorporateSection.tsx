'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function CorporateSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [itemsVisible, setItemsVisible] = useState(false);

  // アイテム用のIntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setItemsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (itemsRef.current) {
      observer.observe(itemsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const effects = [
    {
      title: '人材定着',
      image: '/images/corporate/人材定着.jpeg',
    },
    {
      title: '静かな退職防止',
      image: '/images/corporate/静かな退職防止.jpeg',
    },
    {
      title: '早期離職防止',
      image: '/images/corporate/早期離職防止.png',
    },
    {
      title: '生産性向上',
      image: '/images/corporate/生産性向上.jpeg',
    },
    {
      title: '組織全体の成長',
      image: '/images/corporate/組織全体の成長.jpeg',
    },
  ];

  // PC表示用の接続線のパスを生成（ジグザグ配置）
  // 5つのノードを順番につなぐ（奇数番目は上段、偶数番目は下段）
  const generateConnectionPath = () => {
    // 各ノードの中心位置を計算（簡易版：実際のレイアウトに合わせて調整が必要）
    const nodePositions = effects.map((_, index) => {
      const x = (index + 1) * 20; // 20%間隔で配置
      const y = index % 2 === 0 ? 30 : 70; // 奇数番目（0-indexedなので偶数）は上段(30%)、偶数番目は下段(70%)
      return { x, y };
    });

    // パスを生成
    let path = `M ${nodePositions[0].x} ${nodePositions[0].y}`;
    for (let i = 1; i < nodePositions.length; i++) {
      path += ` L ${nodePositions[i].x} ${nodePositions[i].y}`;
    }
    return path;
  };

  return (
    <section
      id="corporate"
      className="relative w-full pt-24 pb-16 md:pb-36 px-4 bg-gradient-to-b from-white to-blue-50 text-slate-800"
    >
      <div className="max-w-[1200px] w-full mx-auto relative" ref={containerRef}>
        {/* タイトルエリア */}
        <div className="text-center mb-16 relative z-10">
          <SectionTitle enTitle="Effects" jaTitle="導入による効果" enColor="text-[#9DCBE8]" />
        </div>

        {/* PC用の接続線（SVG背景） - 右肩上がりの基準線 */}
        <svg 
          className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line 
            x1="0" 
            y1="80" 
            x2="100" 
            y2="20" 
            className="stroke-blue-200"
            strokeWidth="2" 
            strokeDasharray="6 4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* モバイル・タブレット用の接続線（縦線・中央） */}
        <div className="lg:hidden absolute left-1/2 top-20 bottom-20 w-0.5 bg-blue-200 -translate-x-1/2"></div>

        {/* アイテムリスト */}
        <div 
          ref={itemsRef}
          className="flex flex-col lg:grid lg:grid-cols-5 gap-16 lg:gap-6 xl:gap-10 relative z-10 px-6 lg:px-0 items-center"
        >
          {effects.map((effect, index) => {
            // モバイル・タブレット用: 偶数番目（index 1, 3）は右寄せ、奇数番目（index 0, 2, 4）は左寄せ
            const isEven = index % 2 !== 0; // index 1, 3 (2番目, 4番目)
            
            // PC表示用の上下交互配置（基準線を挟んで上下交互に配置、被らないように間隔を調整）
            let pcTranslate = '';
            if (index === 0) pcTranslate = 'lg:translate-y-24'; // 1番目: 線より下
            if (index === 1) pcTranslate = 'lg:-translate-y-8'; // 2番目: 線より上
            if (index === 2) pcTranslate = 'lg:translate-y-16'; // 3番目: 線より下
            if (index === 3) pcTranslate = 'lg:-translate-y-16'; // 4番目: 線より上
            if (index === 4) pcTranslate = 'lg:translate-y-4'; // 5番目: 線より下
            
            return (
              // 外側のdiv: レイアウト配置（静的）を担当
              <div
                key={index}
                className={`
                  relative group
                  /* モバイル・タブレット: 左右ジグザグ配置 */
                  w-[75%] md:w-[60%]
                  ${isEven ? 'ml-auto' : 'mr-auto'}
                  /* PC: 右肩上がり配置 */
                  lg:w-full lg:max-w-[400px] xl:max-w-[500px] lg:mx-auto
                  lg:flex lg:flex-col lg:items-center
                  ${pcTranslate}
                `}
              >
                {/* 内側のdiv: アニメーションを担当 */}
                <div
                  className={`
                    transition-all duration-[1500ms] ease-out
                    ${itemsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                {/* 画像エリア（コンテナ） - PCでサイズアップ、アスペクト比維持 */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md lg:w-full lg:aspect-[4/3] z-10 bg-white">
                  {/* モバイル・タブレット用画像 */}
                  <Image
                    src={effect.image}
                    alt={effect.title}
                    width={400}
                    height={300}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105 image-bottom-fade lg:hidden object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* PC用画像（モバイル版と同じスタイル） */}
                  <Image
                    src={effect.image}
                    alt={effect.title}
                    width={256}
                    height={256}
                    className="hidden lg:block w-full h-full transition-transform duration-500 group-hover:scale-105 image-bottom-fade object-cover"
                  />

                  {/* テキストエリア（全サイズ共通：画像内部の右下に配置） */}
                  <div className="absolute bottom-0 right-0 z-20 w-[90%] p-4 rounded-tl-2xl">
                    <h3 className="font-bold text-base md:text-lg lg:text-xl text-black leading-tight text-right">
                      {effect.title}
                    </h3>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
    </section>
  );
}

