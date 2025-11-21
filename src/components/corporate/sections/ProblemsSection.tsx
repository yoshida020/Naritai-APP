export default function ProblemsSection() {
  const problems = [
    <>
      考えていることがわからない
      <br />
      急に辞める
    </>,
    '本音で話してくれない',
    <>丁寧に育成する<br />リソースがない</>,
    <>
      忍耐力がない
      <br />
      主体的に動かない
    </>,
    '飲み会に来ない',
  ];

  const firstRow = problems.slice(0, 3);
  const secondRow = problems.slice(3, 5);

  return (
    <section 
      id="problems" 
      className="w-full min-h-screen py-8 px-4 bg-white flex items-center justify-center md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="corporate-section-title text-[#2c3e50] mb-6 md:mb-8">
          Z世代にこんなお悩みありませんか？
        </h2>
        <div className="w-full">
          {/* モバイル版：すべてを1つのグリッドに（2列、3つ目は中央） */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 justify-items-center items-start w-full md:hidden">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className={`flex justify-center items-center ${index === 2 ? 'col-span-2 justify-self-center' : ''}`}
              >
                <div className="relative w-[min(220px,36vw)] aspect-square flex justify-center items-center">
                  <img 
                    src="/nayami_transparent.png" 
                    alt="悩み" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[clamp(11px,2.2vw,16px)] font-medium text-center max-w-[clamp(110px,22vw,170px)] leading-[1.35] px-2 whitespace-normal break-words">
                    {problem}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PC版：1行目と2行目に分ける（タブレット・中サイズPC 768px-1535px） */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-5 md:items-center 2xl:hidden">
            {firstRow.map((problem, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="relative w-[min(260px,18vw)] aspect-square flex justify-center items-center">
                  <img 
                    src="/nayami_transparent.png" 
                    alt="悩み" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[clamp(15px,1.3vw,20px)] font-medium text-center max-w-[clamp(170px,13vw,200px)] leading-[1.35] px-2 whitespace-normal break-words">
                    {problem}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex md:justify-center md:items-center md:gap-20 2xl:hidden">
            {secondRow.map((problem, index) => (
              <div 
                key={index} 
                className="flex justify-center items-center"
              >
                <div className="relative w-[min(260px,18vw)] aspect-square flex justify-center items-center">
                  <img 
                    src="/nayami_transparent.png" 
                    alt="悩み" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[clamp(15px,1.3vw,20px)] font-medium text-center max-w-[clamp(170px,13vw,200px)] leading-[1.35] px-2 whitespace-normal break-words">
                    {problem}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 広いPC版：5つすべてを1行に（1400px以上） */}
          <div className="hidden 2xl:grid 2xl:grid-cols-5 2xl:gap-5 2xl:items-center 2xl:w-full 2xl:justify-items-center">
          {problems.map((problem, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="relative w-[min(220px,14vw)] aspect-square flex justify-center items-center">
                  <img 
                    src="/nayami_transparent.png" 
                    alt="悩み" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[clamp(15px,1.1vw,18px)] font-medium text-center max-w-[clamp(150px,11vw,190px)] leading-[1.35] px-2 whitespace-normal break-words">
              {problem}
                  </div>
                </div>
            </div>
          ))}
          </div>
        </div>
        <div className="mt-0 text-center flex flex-col items-center gap-4">
          <div className="text-[clamp(36px,4.5vw,48px)] text-[#517ca2] leading-none">
            ⇩
          </div>
          <p className="text-[clamp(20px,3.5vw,48px)] font-bold text-[#517ca2] m-0">
            Naritaiがすべて解決します
          </p>
        </div>
      </div>
    </section>
  );
}
