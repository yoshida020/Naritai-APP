export default function BusinessSection() {
  const businesses = [
    {
      icon: '💼',
      title: 'コンサルティング事業',
      description: 'ビジネス戦略から実行まで、トータルサポートを提供します。',
      gradient: 'from-[#517CA2] to-[#5AB1E0]',
      bgGradient: 'from-[#F9FCFF] to-[#E6EAEE]',
    },
    {
      icon: '💻',
      title: 'システム開発',
      description: '最新技術を活用した、高品質なシステム開発サービスです。',
      gradient: 'from-[#5AB1E0] to-[#517CA2]',
      bgGradient: 'from-[#F9FCFF] to-white',
    },
    {
      icon: '📈',
      title: 'デジタルマーケティング',
      description: 'データドリブンなアプローチで、成果を最大化します。',
      gradient: 'from-[#517CA2] to-[#6AA5CE]',
      bgGradient: 'from-[#E6EAEE] to-[#F9FCFF]',
    },
  ];

  return (
    <section id="business" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#517CA2]/5 rounded-full blur-3xl">      </div>
      
      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4">
            Business
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4"
            style={{ fontFamily: 'Catchy Mager, serif' }}
          >
            事業内容
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-[#919CB7] max-w-2xl mx-auto">
            お客様のビジネス成長をサポートする、多様なサービスを提供しています
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-[#E6EAEE] overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${business.gradient}`}></div>
              
              <div className="p-8">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${business.gradient} flex items-center justify-center text-2xl sm:text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {business.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 group-hover:text-[#517CA2] transition-colors">
                  {business.title}
                </h3>
                
                <p className="text-[#919CB7] leading-relaxed mb-6">
                  {business.description}
                </p>
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-[#517CA2] font-semibold group-hover:text-[#5AB1E0] transition-colors"
                >
                  詳しく見る
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-br ${business.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#517CA2] to-[#5AB1E0] rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              お客様のビジネスをサポートします
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              どのサービスも、お客様の成功を第一に考えて提供しています。
              お気軽にお問い合わせください。
            </p>
            <a
              href="#contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#517CA2] font-semibold rounded-full hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              お問い合わせはこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

