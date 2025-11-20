'use client';

export default function TopSection() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FCFF] via-white to-[#E6EAEE]"></div>
      
      {/* 装飾的な背景要素 */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#5AB1E0]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#517CA2]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-[1200px] mx-auto px-4 text-center z-10">
        {/* メインタイトル */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#2C3E50] via-[#517CA2] to-[#5AB1E0] bg-clip-text text-transparent">
              Naritai株式会社
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
        </div>
        
        {/* サブタイトル */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#517CA2] mb-6 animate-fade-in-up">
          あなたの「なりたい」を実現する
        </p>
        
        {/* 説明文 */}
        <p className="text-base sm:text-lg md:text-xl text-[#919CB7] max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200 px-4">
          革新的なソリューションで、お客様のビジネス成長をサポートします。
          私たちは、あなたの「なりたい」を実現するパートナーです。
        </p>
        
        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300 px-4">
          <a
            href="#contact"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#517CA2] to-[#5AB1E0] text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
          >
            <span className="relative z-10">お問い合わせ</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5AB1E0] to-[#517CA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#about"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#517CA2] text-sm sm:text-base font-semibold rounded-full border-2 border-[#517CA2] hover:bg-[#517CA2] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto text-center"
          >
            詳しく見る
          </a>
        </div>
        
        {/* スクロールインジケーター */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#517CA2] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#517CA2] rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

