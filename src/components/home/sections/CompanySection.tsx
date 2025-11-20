export default function CompanySection() {
  const companyInfo = [
    { icon: '🏢', label: '会社名', value: 'Naritai株式会社' },
    { icon: '📅', label: '設立', value: '2024年1月' },
    { icon: '📍', label: '所在地', value: '東京都渋谷区神南1-1-1' },
    { icon: '👤', label: '代表者', value: '代表取締役 ○○ ○○' },
    { icon: '💼', label: '事業内容', value: '教育事業、コンサルティング事業、システム開発' },
    { icon: '👥', label: '従業員数', value: '50名' },
    { icon: '📧', label: 'メール', value: 'info@naritai.co.jp' },
    { icon: '📞', label: '電話', value: '03-XXXX-XXXX' },
  ];

  return (
    <section id="company" className="py-24 bg-gradient-to-b from-[#F9FCFF] to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-4 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#517CA2]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1200px] mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4">
            Company
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4">
            会社情報
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E6EAEE] overflow-hidden">
            {/* ヘッダー */}
            <div className="h-2 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed]"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                {companyInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl hover:bg-[#F9FCFF] transition-colors border border-transparent hover:border-[#E6EAEE]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#517CA2] to-[#5AB1E0] flex items-center justify-center flex-shrink-0 text-2xl shadow-md">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <dt className="text-sm font-semibold text-[#919CB7] uppercase tracking-wide mb-2">
                        {info.label}
                      </dt>
                      <dd className="text-lg font-semibold text-[#2C3E50]">
                        {info.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 地図プレースホルダー */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl border border-[#E6EAEE] overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-[#F9FCFF] to-white flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="text-[#919CB7] font-medium">地図がここに表示されます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

