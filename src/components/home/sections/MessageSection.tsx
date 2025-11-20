export default function MessageSection() {
  return (
    <section id="message" className="py-24 bg-gradient-to-b from-[#F9FCFF] to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-4 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#517CA2] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#5AB1E0] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-[1200px] mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4">
            Message
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4">
            代表メッセージ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E6EAEE]">
            {/* グラデーションヘッダー */}
            <div className="h-2 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed]"></div>
            
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              {/* 代表者情報 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 pb-8 border-b border-[#E6EAEE]">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#517CA2] to-[#5AB1E0] flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">
                  N
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-1">
                    代表取締役
                  </h3>
                  <p className="text-[#919CB7]">Naritai株式会社</p>
                </div>
              </div>

              {/* メッセージ本文 */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-[#2C3E50] leading-relaxed font-medium">
                  「なりたい」を実現する。これは、私たちNaritai株式会社の根幹にある想いです。
                </p>
                <p className="text-base md:text-lg text-[#2C3E50] leading-relaxed">
                  お客様一人ひとりが持つ「なりたい」という想いを、私たちは真摯に受け止め、共に実現への道を歩んでいきます。
                  単なるサービス提供ではなく、お客様の成功を共に喜び、共に成長していくパートナーでありたいと考えています。
                </p>
                <p className="text-base md:text-lg text-[#2C3E50] leading-relaxed">
                  最新のテクノロジーと豊富な経験、そして何よりお客様への誠実な姿勢で、
                  これからもお客様の「なりたい」を実現するお手伝いをさせていただきます。
                </p>
                <p className="text-base md:text-lg text-[#919CB7] leading-relaxed italic pt-4 border-t border-[#E6EAEE]">
                  皆様と共に、より良い未来を創っていきたいと願っています。
                </p>
              </div>

              {/* 署名 */}
              <div className="mt-12 pt-8 border-t border-[#E6EAEE] text-right">
                <p className="text-[#517CA2] font-semibold">Naritai株式会社</p>
                <p className="text-[#919CB7] text-sm">代表取締役</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

