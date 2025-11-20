export default function AboutUsSection() {
  const features = [
    { icon: '🎯', title: '明確なビジョン', desc: 'お客様の目標達成を第一に考えます' },
    { icon: '🚀', title: '革新的なアプローチ', desc: '最新技術を活用したソリューション' },
    { icon: '🤝', title: '信頼のパートナー', desc: '長期的な関係を大切にします' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[#F9FCFF] relative overflow-hidden">
      {/* 装飾要素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#517CA2]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1200px] mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4">
            私たちについて
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* 左側: テキストコンテンツ */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] leading-tight">
              あなたの「なりたい」を<br className="hidden sm:block" />
              実現するパートナー
            </h3>
            <p className="text-lg text-[#2C3E50] leading-relaxed">
              Naritai株式会社は、お客様のビジネス成長をサポートすることを使命としています。
              私たちは単なるサービス提供者ではなく、お客様の成功を共に目指すパートナーです。
            </p>
            <p className="text-base text-[#919CB7] leading-relaxed">
              最新のテクノロジーと豊富な経験を活かし、お客様の課題解決と目標達成をサポートします。
              私たちのチームは、常にお客様の視点に立ち、最適なソリューションを提供します。
            </p>
            
            {/* 統計情報 */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E6EAEE]">
              <div>
                <div className="text-3xl font-bold text-[#517CA2] mb-1">100+</div>
                <div className="text-sm text-[#919CB7]">プロジェクト</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#517CA2] mb-1">50+</div>
                <div className="text-sm text-[#919CB7]">お客様</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#517CA2] mb-1">10+</div>
                <div className="text-sm text-[#919CB7]">年の実績</div>
              </div>
            </div>
          </div>

          {/* 右側: ビジュアル要素 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#F9FCFF] to-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#E6EAEE] hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#517CA2] to-[#5AB1E0] rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-lg font-semibold">ビジュアルコンテンツ</p>
                </div>
              </div>
            </div>
            {/* 装飾的な要素 */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5AB1E0]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#517CA2]/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* 特徴カード */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl border border-[#E6EAEE] hover:border-[#5AB1E0] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-[#2C3E50] mb-3">
                {feature.title}
              </h4>
              <p className="text-[#919CB7] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

