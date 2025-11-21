
export default function NaritaiSection() {
  return (
    <section
      id="naritai"
      className="w-full min-h-screen py-20 px-4 bg-[#202D5F] flex items-center justify-center md:min-h-auto md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto">
        <h2 className="corporate-section-title mb-12 text-left flex items-center md:mb-6 md:text-center md:justify-center">
          <img 
            src="/20251113-1222_0c6fac0955ae27ab6afae3f84537df2d.png" 
            alt="Naritai" 
            className="h-[200px] w-auto object-contain md:h-[100px]"
          />
        </h2>
        <div className="grid grid-cols-3 gap-12 text-left md:grid-cols-1 md:gap-6 md:text-center">
          <div className="flex flex-col p-6 border border-white md:p-5">
            <h3 className="text-xl font-semibold text-white mb-6 md:text-lg md:mb-4">
              サービス
            </h3>
            <ul className="list-none flex flex-col gap-4">
              <li>
                <a 
                  href="/services/individual" 
                  className="text-base leading-relaxed text-white no-underline transition-opacity duration-200 opacity-90 cursor-pointer hover:opacity-100 hover:underline md:hover:opacity-90 md:hover:no-underline"
                >
                  個人向けサービス
                </a>
              </li>
              <li>
                <a 
                  href="/services/corporate" 
                  className="text-base leading-relaxed text-white no-underline transition-opacity duration-200 opacity-90 cursor-pointer hover:opacity-100 hover:underline md:hover:opacity-90 md:hover:no-underline"
                >
                  企業向けサービス
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col p-6 border border-white md:p-5">
            <h3 className="text-xl font-semibold text-white mb-6 md:text-lg md:mb-4">
              会社情報
            </h3>
            <ul className="list-none flex flex-col gap-4">
              <li>
                <a 
                  href="/about" 
                  className="text-base leading-relaxed text-white no-underline transition-opacity duration-200 opacity-90 cursor-pointer hover:opacity-100 hover:underline md:hover:opacity-90 md:hover:no-underline"
                >
                  会社概要
                </a>
              </li>
              <li>
                <a 
                  href="/news" 
                  className="text-base leading-relaxed text-white no-underline transition-opacity duration-200 opacity-90 cursor-pointer hover:opacity-100 hover:underline md:hover:opacity-90 md:hover:no-underline"
                >
                  お知らせ
                </a>
              </li>
              <li>
                <a 
                  href="/corporate" 
                  className="text-base leading-relaxed text-white no-underline transition-opacity duration-200 opacity-90 cursor-pointer hover:opacity-100 hover:underline md:hover:opacity-90 md:hover:no-underline"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col p-6 border border-white md:p-5">
            <h3 className="text-xl font-semibold text-white mb-6 md:text-lg md:mb-4">
              法的事項
            </h3>
            <ul className="list-none flex flex-col gap-4">
              <li>
                <a 
                  href="/privacy" 
                  className="text-base leading-relaxed text-white no-underline transition-opacity duration-200 opacity-90 cursor-pointer hover:opacity-100 hover:underline md:hover:opacity-90 md:hover:no-underline"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-base leading-relaxed text-white no-underline transition-opacity duration-200 opacity-90 cursor-pointer hover:opacity-100 hover:underline md:hover:opacity-90 md:hover:no-underline"
                >
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

