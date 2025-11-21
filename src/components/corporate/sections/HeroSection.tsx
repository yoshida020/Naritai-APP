'use client';

import Button from '../../common/Button';

export default function HeroSection() {
  return (
    <div
      id="top"
      className="relative w-full min-h-screen m-0 pt-20 box-border bg-[#F5F5F5] flex items-center justify-center text-[#2C3E50] overflow-hidden scroll-mt-20 md:pt-20"
    >
      <div className="max-w-[1400px] w-full flex flex-col gap-6 items-center p-8 px-4 mx-auto h-full md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] xl:grid-cols-[minmax(0,1fr)_minmax(0,640px)] md:items-center md:gap-10 md:p-6 md:px-4">
        <div className="order-1 text-center flex flex-col items-center justify-center gap-4 md:items-center md:text-center md:col-start-1 md:row-start-1">
          <h1 className="font-bold leading-tight tracking-tight text-[#2C3E50] hero-slide-up">
            <span className="block text-[clamp(32px,8vw,72px)] whitespace-normal leading-[1.2] mt-8 md:mt-0 md:text-[32px] md:leading-[1.2]">
              企業と若手の代弁者
            </span>
          </h1>
        </div>
        <div className="order-2 relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[50vw] lg:max-w-[560px] xl:max-w-[640px] aspect-[4/3] rounded-2xl overflow-hidden mx-auto md:col-start-2 md:row-span-3 md:w-full md:min-h-0 md:ml-auto md:mr-0">
          <div 
            className="w-full h-full bg-[url('/20251113-1220_ededb35b97201851bab8a364f84a4e32.jpg')] bg-contain bg-center bg-no-repeat"
          />
        </div>
        <p className="order-3 text-[clamp(18px,4vw,32px)] leading-relaxed mb-0 max-w-full text-[#2C3E50] break-words text-center hero-slide-up hero-slide-up-soft md:text-[18px] md:mb-0 md:leading-normal md:col-start-1 md:row-start-2">
          何も生まれない1on1
          <br />
          飲みニケーションも必要ない
        </p>
        <div className="order-4 flex gap-4 items-center justify-center flex-wrap hero-slide-up w-full md:gap-3 md:justify-center md:col-start-1 md:row-start-3">
          <div className="w-[280px] flex-none">
            <Button
              variant="secondary"
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
