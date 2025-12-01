
export default function FlowSection() {
  const steps = [
    {
      number: '01',
      title: 'お問い合わせ',
      description: ['まずはお気軽に', 'お問い合わせください。'],
      image: '/Contact.png',
    },
    {
      number: '02',
      title: 'ヒアリング',
      description: ['お客様の課題やニーズを', '詳しくヒアリングします。'],
      image: '/Hearing.png',
    },
    {
      number: '03',
      title: '提案',
      description: ['お客様に最適なソリューション', 'を提案します。'],
      image: '/Suggestion.png',
    },
    {
      number: '04',
      title: '実施・フォローアップ',
      description: ['プログラムを実施し、', '継続的にサポートします。'],
      image: '/FollowUp.png',
    },
  ];

  return (
    <section
      id="flow"
      className="w-full min-h-screen py-20 px-4 bg-white flex items-center justify-center md:min-h-screen md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="corporate-section-title text-[#2C3E50] mb-12 md:mb-6">
          ご利用の流れ
        </h2>
        <div className="flex flex-col gap-10 md:flex-row md:gap-4 md:justify-between relative md:flex-wrap md:justify-center">
          {steps.map((step, index) => (
            <div key={index} className="w-full md:flex-1 md:min-w-0 md:max-w-[250px] flex flex-col items-center relative">
              {/* PC・タブレット版：アイコンをカードの外側上部に配置（もっと大きく、レスポンシブ） */}
              <div className="hidden md:flex w-40 h-40 md:w-48 md:h-48 flex items-center justify-center overflow-hidden mb-4 flex-shrink-0">
                {step.image ? (
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-400 text-xs">画像</span>
                )}
              </div>
              
              {/* カード（モバイル版：最大幅400px、PC・タブレット版：正方形、横幅を小さく、レスポンシブ） */}
              <div className="w-full max-w-[400px] md:max-w-none md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] flex flex-col items-center justify-center relative border border-black rounded-lg p-4 flex-shrink-0">
              {/* モバイル版：左右レイアウト */}
              <div className="w-full flex flex-row items-center gap-4 md:hidden">
                {/* 左側：画像フィールド（中央揃え） */}
                <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center overflow-hidden">
                  {step.image ? (
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400 text-xs">画像</span>
                  )}
                </div>
                
                {/* 右側：STEP番号と本文（中央揃え） */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  {/* STEP番号表示（上部） */}
                  <div className="w-auto h-auto flex items-center justify-center bg-transparent text-[#517CA2] text-lg font-semibold mb-2">
                    STEP {step.number}
                  </div>
                  {/* タイトルと説明（下部） */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#919CB7] text-center">
                        {Array.isArray(step.description) ? (
                          <>
                            {step.description[0]}
                            <br />
                            {step.description[1]}
                          </>
                        ) : (
                          step.description
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* PC・タブレット版：縦レイアウト */}
                <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:w-full md:h-full">
                  {/* STEP番号表示（上部） */}
                  <div className="w-auto h-auto flex items-center justify-center bg-transparent text-[#517CA2] text-lg font-semibold mb-2">
                    STEP {step.number}
                  </div>
                  {/* タイトルと説明（下部） */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#919CB7] text-center">
                      {Array.isArray(step.description) ? (
                        <>
                          {step.description[0]}
                          <br />
                          {step.description[1]}
                        </>
                      ) : (
                        step.description
                      )}
                    </p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <>
                  {/* モバイル版：下向き矢印 */}
                  <div className="absolute bottom-[-48px] left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center md:hidden">
                  <img 
                    src="/allow.png" 
                    alt="矢印" 
                    className="w-full h-full object-contain"
                  />
                </div>
                  {/* PC・タブレット版：左向き矢印（カードの中央に配置、レスポンシブ、少し低め） */}
                  <div className="hidden md:flex absolute right-[-30px] top-[calc(160px+16px+90px+20px)] lg:top-[calc(192px+16px+100px+20px)] transform -translate-y-1/2 w-12 h-12 items-center justify-center">
                    <img 
                      src="/allow.png" 
                      alt="矢印" 
                      className="w-full h-full object-contain -rotate-90"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





