import styles from './ServicesSection.module.css';

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
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>サービス内容</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





