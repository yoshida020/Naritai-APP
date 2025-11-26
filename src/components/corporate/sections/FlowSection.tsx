
export default function FlowSection() {
  const steps = [
    {
      number: '01',
      title: 'お問い合わせ',
      description: 'まずはお気軽にお問い合わせください。',
      image: '/Contact.png',
    },
    {
      number: '02',
      title: 'ヒアリング',
      description: 'お客様の課題やニーズを詳しくヒアリングします。',
      image: '/Hearing.png',
    },
    {
      number: '03',
      title: '提案',
      description: 'お客様に最適なソリューションを提案します。',
      image: '/Suggestion.png',
    },
    {
      number: '04',
      title: '実施・フォローアップ',
      description: 'プログラムを実施し、継続的にサポートします。',
      image: '/FollowUp.png',
    },
  ];

  return (
    <section
      id="flow"
      className="w-full min-h-screen py-20 px-4 bg-white flex items-center justify-center md:min-h-auto md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="corporate-section-title text-[#2C3E50] mb-12 md:mb-6">
          ご利用の流れ
        </h2>
        <div className="flex flex-col gap-10 md:gap-6 relative md:flex-row md:justify-between md:items-start md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="w-full flex flex-col items-center relative md:flex-1 md:flex-row md:items-center md:gap-4 border border-black rounded-lg p-4">
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
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* デスクトップ版：縦レイアウト（既存のスタイル） */}
              <div className="hidden md:flex md:flex-col md:items-center md:w-full">
                <div className="w-20 h-20 flex items-center justify-center bg-[#517CA2] text-white rounded-full text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-[#919CB7]">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute bottom-[-48px] left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center md:hidden">
                  <img 
                    src="/allow.png" 
                    alt="矢印" 
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





