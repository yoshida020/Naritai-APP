import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      title: 'キャリア開発支援',
      description: '社員一人ひとりのキャリアパスを設計し、成長をサポートします。',
    },
    {
      title: '離職防止プログラム',
      description: '早期離職を防ぐための包括的なサポートプログラムを提供します。',
    },
    {
      title: '組織活性化',
      description: '組織全体の活性化と生産性向上を実現するソリューションを提供します。',
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





