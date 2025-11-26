'use client';

import Button from '../../common/Button';

export default function HeroSection() {
  return (
    <div
      id="top"
      className="relative w-full min-h-screen m-0 pt-20 box-border bg-gradient-to-b from-[#F8FAFF] to-[#EFF3FF] flex items-center justify-center text-[#2C3E50] overflow-hidden scroll-mt-20 md:pt-20"
    >
      {/* 背景イラスト：企業・若手・代弁者を表現する抽象的な図形 */}
      {/* モバイル版 */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full md:hidden"
        viewBox="0 0 400 800"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 左上の大きめの円（企業）- ネイビー系 */}
        <circle
          cx="80"
          cy="150"
          r="100"
          fill="#517CA2"
          opacity="0.12"
        />
        {/* 右下の小さめの円（若手）- 淡いブルー系 */}
        <circle
          cx="320"
          cy="650"
          r="70"
          fill="#6AA5CE"
          opacity="0.15"
        />
        {/* 中間の小さな丸（代弁者）- わずかに明るい色 */}
        <circle
          cx="200"
          cy="400"
          r="18"
          fill="#5AB1E0"
          opacity="0.25"
        />
        {/* 左上の円から中間の丸への線 */}
        <line
          x1="80"
          y1="150"
          x2="200"
          y2="400"
          stroke="#517CA2"
          strokeWidth="1.5"
          opacity="0.15"
        />
        {/* 中間の丸から右下の円への線 */}
        <line
          x1="200"
          y1="400"
          x2="320"
          y2="650"
          stroke="#6AA5CE"
          strokeWidth="1.5"
          opacity="0.15"
        />
        {/* 左上の円から右下の円への線（3点を結ぶ） */}
        <line
          x1="80"
          y1="150"
          x2="320"
          y2="650"
          stroke="#517CA2"
          strokeWidth="1"
          opacity="0.1"
          strokeDasharray="4 4"
        />
      </svg>
      
      {/* PC版 */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full hidden md:block"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 左上の大きめの円（企業）- ネイビー系 */}
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="#517CA2"
          opacity="0.12"
        />
        {/* 右下の小さめの円（若手）- 淡いブルー系 */}
        <circle
          cx="1050"
          cy="650"
          r="80"
          fill="#6AA5CE"
          opacity="0.15"
        />
        {/* 中間の小さな丸（代弁者）- わずかに明るい色 */}
        <circle
          cx="600"
          cy="400"
          r="20"
          fill="#5AB1E0"
          opacity="0.25"
        />
        {/* 左上の円から中間の丸への線 */}
        <line
          x1="150"
          y1="150"
          x2="600"
          y2="400"
          stroke="#517CA2"
          strokeWidth="1.5"
          opacity="0.15"
        />
        {/* 中間の丸から右下の円への線 */}
        <line
          x1="600"
          y1="400"
          x2="1050"
          y2="650"
          stroke="#6AA5CE"
          strokeWidth="1.5"
          opacity="0.15"
        />
        {/* 左上の円から右下の円への線（3点を結ぶ） */}
        <line
          x1="150"
          y1="150"
          x2="1050"
          y2="650"
          stroke="#517CA2"
          strokeWidth="1"
          opacity="0.1"
          strokeDasharray="4 4"
        />
      </svg>
      
      <div className="max-w-[1400px] w-full flex flex-col gap-6 items-center p-8 px-4 mx-auto h-full md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] xl:grid-cols-[minmax(0,1fr)_minmax(0,640px)] md:items-center md:gap-10 md:p-6 md:px-4">
        <div className="order-2 text-center flex flex-col items-center justify-center gap-4 md:items-center md:text-center md:col-start-1 md:row-start-1">
          <h1 className="font-bold leading-tight tracking-tight text-[#2C3E50] hero-slide-up">
            <span className="block text-[clamp(40px,8vw,80px)] whitespace-normal leading-[1.2] mt-8 md:mt-0 md:text-[clamp(48px,5vw,64px)] md:leading-[1.2]">
              企業と若手の代弁者
            </span>
          </h1>
        </div>
        <div className="order-1 relative w-full max-w-full md:max-w-[50vw] lg:max-w-[560px] xl:max-w-[640px] aspect-[4/3] rounded-2xl overflow-hidden hero-slide-up md:col-start-2 md:row-span-3 md:w-full md:min-h-0 md:ml-auto md:mr-0">
          <div 
            className="w-full h-full bg-[url('/20251113-1220_ededb35b97201851bab8a364f84a4e32.jpg')] bg-contain bg-center bg-no-repeat"
          />
        </div>
        <p className="order-3 text-[clamp(24px,4vw,36px)] leading-relaxed mb-0 max-w-full text-[#2C3E50] break-words text-center hero-slide-up hero-slide-up-soft md:text-[clamp(22px,2.5vw,28px)] md:mb-0 md:leading-normal md:col-start-1 md:row-start-2">
          何も生まれない1on1
          <br />
          飲みニケーションも必要ない
        </p>
        <div className="order-4 flex gap-4 items-center justify-center flex-wrap hero-slide-up w-full md:gap-3 md:justify-center md:col-start-1 md:row-start-3">
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
