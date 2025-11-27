export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 bg-[#F0F0F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#517CA2]/5 rounded-full blur-3xl"></div>

      <div className="relative w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4 text-center" style={{ fontFamily: 'Catchy Mager, serif' }}>
            Naritaiについて
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch justify-center">
          <div className="flex-1 flex flex-col justify-between items-center md:items-start gap-8 md:gap-12 h-full w-full md:pl-4 lg:pl-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-relaxed text-center md:text-left w-full md:max-w-[620px] md:ml-auto md:pr-6">
              <span className="relative inline-block pr-2">
                <span className="absolute left-0 bottom-1 h-5 w-full bg-[#5AB1E0]/55 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
                <span className="relative">個人</span>
              </span>
              の「
              <span className="relative inline-block px-1">
                <span className="absolute left-0 bottom-0 h-5 w-full bg-[#C3AED6]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
                <span className="relative">Naritai</span>
              </span>
              」を、<br />
              <span className="relative inline-block pr-2">
                <span className="absolute left-0 bottom-1 h-5 w-full bg-[#8FD3F4]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
                <span className="relative">組織</span>
              </span>
              の「
              <span className="relative inline-block px-1">
                <span className="absolute left-0 bottom-0 h-5 w-full bg-[#C3AED6]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
                <span className="relative">成長力</span>
              </span>
              」へ
            </h3>
            <div className="hidden sm:flex w-full flex-1 min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[620px] bg-gradient-to-t from-[#cfdcee] via-[#dfe9f6] to-[#f4f7fb] items-center justify-center rounded-[32px] overflow-hidden relative">
              <img
                src="/hp/aboutUs/cloud.png"
                alt="Cloud illustration"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-white/90 via-[#E2F1FB]/90 to-[#D9E7F2]/90 blur-xl"></div>
              <div
                className="relative rounded-[32px] px-6 py-8 md:px-8 md:py-10 border border-white/70 bg-white/80 shadow-[0_20px_45px_rgba(81,124,162,0.18)] backdrop-blur-sm"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(255,255,255,0.94), rgba(226,241,251,0.92)), url(/hp/aboutUs/cloud.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div
                  className="text-lg md:text-xl lg:text-2xl text-[#2C3E50] leading-loose"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    height: 'auto',
                    maxHeight: '600px',
                    fontFamily: '"Noto Serif JP", serif'
                  }}
                >
                  正解がない時代。<br />
                  誰かと比べて焦り、<br />
                  将来に不安を感じてもがいている人がいる。<br />
                  <span
                    className="inline-block font-semibold text-[#2C3E50]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transformOrigin: 'center',
                      letterSpacing: '0.08em'
                    }}
                  >
                    Naritai
                  </span>
                  は、一人ひとりに"なりたい自分"を見つけて<br />
                  自分の道を歩いてほしい。<br />
                  なんとなく働く毎日から抜け出してほしい。<br />
                  心から納得できる人生を、<br />
                  自分の足で歩けるように。<br />
                  <br />
                  時間は有限。<br />
                  だからこそ、今を大切に。<br />
                  あなたの
                  <span
                    className="inline-block font-semibold text-[#2C3E50]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transformOrigin: 'center',
                      letterSpacing: '0.08em'
                    }}
                  >
                    "Naritai"
                  </span>
                  から未来が動き出します。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

