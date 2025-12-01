export default function CompanySection() {
  const companyInfo = [
    { label: '会社名', value: 'Naritai' },
    { label: '所在地', value: '東京都港区南青山3丁目1番36号' },
    { label: '事業内容', value: 'コーチング業' },
    { label: 'メールアドレス', value: 'info@naritai-career.jp' },
    { label: '代表', value: '吉田 明加' },
  ];

  return (
    <section id="company" className="py-24 bg-gradient-to-b from-[#FFFFFF] to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#517CA2]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* セクションタイトル */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4">
            Company
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4"
            style={{ fontFamily: 'Catchy Mager, serif' }}
          >
            会社情報
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
        </div>

        {/* 会社情報と地図 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* 会社情報 */}
          <div>
            {companyInfo.map((info, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-4 md:py-6 ${index !== companyInfo.length - 1 ? 'border-b border-[#E6EAEE]' : ''}`}
              >
                <div className="md:col-span-1">
                  <h3 className="text-sm sm:text-base font-semibold text-[#5AB1E0] uppercase tracking-wider">
                    {info.label}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-base sm:text-lg md:text-xl font-medium text-[#2C3E50] break-words">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 地図 */}
          <div className="w-full">
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.3344654315949!2d139.71529876959264!3d35.66868198780384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9e8fbe57dd%3A0x6fae5f045e870918!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yT5LiB55uu77yR4oiS77yT77yW!5e0!3m2!1sja!2sjp!4v1764575784277!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

