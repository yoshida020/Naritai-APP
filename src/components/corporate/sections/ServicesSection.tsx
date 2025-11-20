export default function ServicesSection() {
  const services = [
    {
      title: '個人コーチングセッション',
      description: (
        <>
          若手社員1人ひとりに専属コーチが伴走し、
          <br />
          価値観・不安・強み・目標を整理。
        </>
      ),
    },
    {
      title: 'カルテ設計・可視化シート',
      description: (
        <>
          各セッションで抽出した想いや目標を「個人カルテ」にまとめ、
          <br />
          上司・人事に共有できる形で可視化します。
          <br />
          配属後の1on1・評価・育成にそのまま活用可能。
          <br />
          <br />
          外部の人間だから本音を話せる環境を提供します。
        </>
      ),
    },
    {
      title: 'フォローアップセッション',
      description: (
        <>
          セッションから一定期間後に再面談を実施。
          <br />
          成長の定着やモチベーション変化を確認し、
          <br />
          現場への適応・再設定を支援します。
        </>
      ),
    },
  ];

  return (
    <section 
      id="services" 
      className="w-full h-screen min-h-screen max-h-screen py-20 px-4 bg-[#F9FCFF] flex items-center justify-center md:min-h-auto md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2C3E50] mb-12 md:text-2xl md:mb-6 md:leading-[1.3]">
          サービス内容
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 md:gap-6 md:grid-cols-1">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-2xl shadow-lg transition-all cursor-pointer hover:-translate-y-1 hover:shadow-xl md:p-6 md:hover:translate-y-0 md:hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#517CA2] mb-4 md:text-xl">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





