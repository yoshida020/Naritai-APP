import FeatherBackground from './FeatherBackground';

export default function Footer() {
  return (
    <footer className="bg-[#517CA2] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#5AB1E0] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#517CA2] rounded-full blur-3xl"></div>
      </div>
      
      <FeatherBackground />
      
      <div className="relative max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <img 
                src="/naritai.png" 
                alt="Naritai"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Naritai株式会社</h3>
            <p className="text-sm text-gray-200 leading-relaxed mb-6">
              あなたの「なりたい」を実現する
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/naritai_career" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5AB1E0] flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/naritai_career/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5AB1E0] flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://line.me/R/ti/p/@099yapgw?oat_content=url&ts=07191130" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5AB1E0] flex items-center justify-center transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48">
                  <path fillRule="evenodd" clipRule="evenodd" d="M39.2 23.1237C39.2 16.549 32.561 11.2 24.3999 11.2C16.2398 11.2 9.6 16.549 9.6 23.1237C9.6 29.018 14.8652 33.9543 21.9775 34.8878C22.4595 34.9909 23.1155 35.2033 23.2814 35.6122C23.4307 35.9838 23.379 36.5657 23.3291 36.9409C23.3291 36.9409 23.1555 37.9777 23.118 38.1986C23.0536 38.5701 22.8207 39.6514 24.3999 38.9906C25.9796 38.3298 32.9233 34.0081 36.0283 30.4599C38.1732 28.1248 39.2 25.7551 39.2 23.1237ZM21.3144 20H20.2859C20.1282 20 20 20.1323 20 20.2949V26.9051C20 27.068 20.1282 27.2 20.2859 27.2H21.3144C21.4721 27.2 21.6 27.068 21.6 26.9051V20.2949C21.6 20.1323 21.4721 20 21.3144 20ZM28.4994 20H27.4166C27.2506 20 27.116 20.1323 27.116 20.2949V24.2221L24.0337 20.1312C24.0266 20.1207 24.0186 20.1108 24.0104 20.1012L24.0083 20.0995C24.0024 20.0928 23.9964 20.087 23.9902 20.0811C23.9885 20.0794 23.9867 20.0779 23.9846 20.0762C23.9796 20.0715 23.9743 20.0672 23.9686 20.0631C23.9663 20.0608 23.9636 20.059 23.9609 20.057C23.9556 20.0535 23.9506 20.0497 23.9453 20.0465C23.9423 20.0445 23.9393 20.0428 23.9361 20.0413C23.9308 20.0381 23.9254 20.0349 23.9201 20.0323C23.9168 20.0308 23.9139 20.0291 23.9106 20.0279C23.905 20.0253 23.8994 20.0227 23.8935 20.0206C23.8899 20.0195 23.887 20.0183 23.8837 20.0172C23.8778 20.0151 23.8719 20.0131 23.8657 20.0116C23.8624 20.0105 23.8588 20.0099 23.8553 20.0087C23.8494 20.0076 23.8438 20.0061 23.8381 20.0049C23.834 20.0044 23.8296 20.0038 23.8254 20.0035C23.8201 20.0023 23.8148 20.002 23.8094 20.0015C23.8044 20.0009 23.7994 20.0009 23.794 20.0006C23.7902 20.0006 23.7872 20 23.7834 20H22.7009C22.5349 20 22.4 20.1323 22.4 20.2949V26.9051C22.4 27.068 22.5349 27.2 22.7009 27.2H23.7834C23.9497 27.2 24.0843 27.068 24.0843 26.9051V22.9791L27.1704 27.0752C27.1917 27.1049 27.2181 27.129 27.2468 27.1482C27.2476 27.1488 27.2488 27.1497 27.2497 27.1506C27.2559 27.1543 27.2621 27.1581 27.2684 27.1616C27.2713 27.1634 27.274 27.1645 27.2769 27.166C27.2814 27.1686 27.2864 27.1709 27.2911 27.173C27.2962 27.175 27.3006 27.177 27.3059 27.1791C27.3089 27.1802 27.3119 27.1814 27.3148 27.1823C27.3219 27.1849 27.3284 27.1869 27.3352 27.1889C27.3367 27.1889 27.3382 27.1895 27.3397 27.1898C27.3642 27.1962 27.39 27.2 27.4166 27.2H28.4994C28.6657 27.2 28.8 27.068 28.8 26.9051V20.2949C28.8 20.1323 28.6657 20 28.4994 20ZM18.9076 25.5447H16.0409V20.2955C16.0409 20.1323 15.9097 20 15.7483 20H14.693C14.5312 20 14.4 20.1323 14.4 20.2955V26.9043C14.4 26.9836 14.4314 27.0561 14.4819 27.109C14.483 27.1104 14.4842 27.1119 14.4859 27.1133C14.4874 27.1148 14.4888 27.116 14.4902 27.1174C14.543 27.1686 14.6139 27.2 14.6927 27.2H18.9076C19.0694 27.2 19.2 27.0674 19.2 26.9043V25.8402C19.2 25.6771 19.0694 25.5447 18.9076 25.5447ZM34.1076 21.6553C34.2694 21.6553 34.4 21.5232 34.4 21.3598V20.2957C34.4 20.1326 34.2694 20 34.1076 20H29.893C29.8139 20 29.7422 20.032 29.6894 20.0835C29.6882 20.0846 29.6868 20.0855 29.6859 20.0867C29.6842 20.0884 29.6828 20.0901 29.6813 20.0919C29.6311 20.1448 29.6 20.2164 29.6 20.2955V26.9045C29.6 26.9839 29.6314 27.0561 29.6819 27.109C29.683 27.1104 29.6845 27.1122 29.6859 27.1133C29.6871 27.1148 29.6888 27.1162 29.6903 27.1174C29.7427 27.1683 29.8139 27.2 29.8924 27.2H34.1076C34.2694 27.2 34.4 27.0674 34.4 26.9045V25.8402C34.4 25.6774 34.2694 25.5447 34.1076 25.5447H31.2412V24.4275H34.1076C34.2694 24.4275 34.4 24.2952 34.4 24.132V23.068C34.4 22.9048 34.2694 22.7722 34.1076 22.7722H31.2412V21.6553H34.1076Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contents</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#top" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#5AB1E0] opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-150"></span>
                  トップ
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#5AB1E0] opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-150"></span>
                  Naritaiについて
                </a>
              </li>
              <li>
                <a href="#message" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#5AB1E0] opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-150"></span>
                  代表メッセージ
                </a>
              </li>
              <li>
                <a href="#business" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#5AB1E0] opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-150"></span>
                  事業内容
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#news" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#5AB1E0] opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-150"></span>
                  ニュース
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#5AB1E0] opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-150"></span>
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#company" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#5AB1E0] opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-150"></span>
                  会社概要
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#5AB1E0] opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-150"></span>
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-200">
            <p>&copy; 2025 Naritai株式会社. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/legal/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

