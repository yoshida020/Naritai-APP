export default function HeroSection() {
  return (
    <div 
      id="top" 
      className="relative w-full h-screen min-h-screen max-h-screen m-0 pt-20 box-border bg-[#F5F5F5] flex items-center justify-center text-[#2C3E50] overflow-hidden scroll-mt-20 md:pt-20"
    >
      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-[1fr_700px] gap-8 items-center p-8 px-4 mx-auto h-full md:grid-cols-1 md:gap-6 md:p-6 md:px-4 md:flex md:flex-col md:justify-between">
        <div className="flex flex-col items-center gap-8 w-full min-w-0 overflow-hidden md:items-stretch md:gap-4 md:flex-1 md:min-h-0">
          <div className="flex flex-col items-center gap-8 w-full min-w-0 text-center md:grid md:grid-cols-2 md:gap-3 md:items-start">
            <h1 className="font-bold leading-tight mb-0 tracking-tight text-[#2C3E50] flex flex-col items-center gap-0 text-center mb-0 md:mb-0 md:gap-0">
              <span className="block text-[clamp(22px,5vw,56px)] text-[#2C3E50] whitespace-normal leading-[1.3] mt-8 md:mt-0 md:text-[22px] md:leading-[1.3]">
                企業と若手の代弁者
              </span>
            </h1>
            <p className="text-[clamp(15px,2.2vw,28px)] leading-relaxed opacity-95 mb-0 max-w-full text-[#2C3E50] break-words animate-[slideInUp_0.8s_ease-out_forwards] opacity-0 animation-delay-[0.2s] md:text-[15px] md:mb-0 md:leading-normal">
              何も生まれない1on1
              <br />
              飲みニケーションも必要ない
            </p>
            <div className="flex gap-4 items-center justify-center flex-wrap animate-[slideInUp_0.8s_ease-out_forwards] opacity-0 animation-delay-[0.4s] md:gap-3 md:justify-start">
              <button className="px-8 py-3 text-lg font-semibold text-white bg-[#007FFF] border-none rounded-[32px] cursor-pointer transition-all w-fit hover:bg-[#0066CC] hover:-translate-y-[2px] active:translate-y-0 md:px-5 md:text-sm md:rounded-[24px] md:hover:translate-y-0">
                資料請求（無料）
              </button>
              <button className="px-8 py-3 text-lg font-semibold text-[#007FFF] bg-transparent border-2 border-[#007FFF] rounded-[32px] cursor-pointer transition-all w-fit hover:bg-[#007FFF] hover:text-white hover:-translate-y-[2px] active:translate-y-0 md:px-5 md:text-sm md:rounded-[24px] md:hover:translate-y-0">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-[700px] max-w-full aspect-[4/3] rounded-2xl overflow-hidden mx-auto md:w-full md:max-w-[600px] md:min-h-0 md:flex-shrink-0 md:order-[-1] md:max-w-[400px]">
          <div 
            className="w-full h-full bg-[url('/20251113-1220_ededb35b97201851bab8a364f84a4e32.jpg')] bg-contain bg-center bg-no-repeat"
          />
        </div>
      </div>
    </div>
  );
}
