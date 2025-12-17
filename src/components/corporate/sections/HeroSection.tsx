'use client';

import Button from '../../common/Button';

export default function HeroSection() {
  return (
    <div
      id="top"
      className="relative w-full min-h-screen m-0 pt-20 box-border bg-[url('/images/hero/hero-bg.png')] bg-[length:auto_100%] bg-[position:77%_center] bg-no-repeat md:bg-cover md:bg-center flex items-center md:items-center justify-center md:justify-start text-[#2C3E50] overflow-hidden scroll-mt-20 md:pt-20 pb-8 md:pb-0"
    >
      <div className="relative z-10 max-w-[1400px] w-full flex flex-col gap-6 items-center p-8 px-4 mx-auto md:items-start md:gap-10 md:p-6 md:px-4">
        <div className="flex flex-col gap-4 md:gap-4 max-w-2xl mx-auto md:ml-12">
          <h1 className="font-bold leading-tight tracking-tight text-[#2C3E50] hero-slide-up">
            <span 
              className="block text-[32px] whitespace-normal leading-[1.2] mt-8 md:mt-0 md:text-[clamp(48px,5vw,64px)] md:leading-[1.2] text-center px-3 py-2 rounded-lg bg-white/60 backdrop-blur-sm md:px-0 md:py-0 md:rounded-none md:bg-transparent md:backdrop-blur-none" 
              style={{ 
                textShadow: '0 2px 10px rgba(255,255,255,0.8), 0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              企業と若手の代弁者
            </span>
          </h1>
          <p 
            className="text-[clamp(24px,4vw,36px)] leading-relaxed mb-0 text-[#2C3E50] break-words text-center hero-slide-up hero-slide-up-soft md:text-[clamp(22px,2.5vw,28px)] md:mb-0 md:leading-normal px-3 py-2 rounded-lg bg-white/60 backdrop-blur-sm md:px-0 md:py-0 md:rounded-none md:bg-transparent md:backdrop-blur-none" 
            style={{ 
              textShadow: '0 2px 20px rgba(255,255,255,1), 0 2px 25px rgba(255,255,255,0.6), 0 2px 20px rgba(0,0,0,0.3)'
            }}
          >
            何も生まれない1on1
            <br />
            飲みニケーションも必要ない
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center flex-wrap hero-slide-up w-full md:justify-start md:ml-12 md:gap-3">
          <div className="w-[280px] flex-none">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="whitespace-nowrap"
            >
              資料請求（無料）
            </Button>
          </div>
          <div className="w-[280px] flex-none">
            <Button
              variant="ghost"
              size="lg"
              fullWidth
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
