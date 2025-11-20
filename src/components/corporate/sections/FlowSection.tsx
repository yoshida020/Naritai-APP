
export default function FlowSection() {
  const steps = [
    {
      number: '01',
      title: 'お問い合わせ',
      description: 'まずはお気軽にお問い合わせください。',
    },
    {
      number: '02',
      title: 'ヒアリング',
      description: 'お客様の課題やニーズを詳しくヒアリングします。',
    },
    {
      number: '03',
      title: '提案',
      description: 'お客様に最適なソリューションを提案します。',
    },
    {
      number: '04',
      title: '実施・フォローアップ',
      description: 'プログラムを実施し、継続的にサポートします。',
    },
  ];

  return (
    <section 
      id="flow" 
      className="w-full h-screen min-h-screen max-h-screen py-20 px-4 bg-white flex items-center justify-center md:min-h-auto md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2C3E50] mb-12 md:text-2xl md:mb-6 md:leading-[1.3]">
          ご利用の流れ
        </h2>
        <div className="flex flex-row justify-between items-start gap-4 relative md:flex-col md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative md:w-full">
              <div className="w-20 h-20 flex items-center justify-center bg-[#517CA2] text-white rounded-full text-2xl font-bold mb-4 md:w-[60px] md:h-[60px] md:text-xl">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2 md:text-lg">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-[#919CB7]">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute top-10 right-[-20px] text-2xl text-[#517CA2] md:hidden">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





