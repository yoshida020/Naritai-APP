import styles from './FlowSection.module.css';

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
      title: '実施',
      description: 'プログラムを実施し、継続的にサポートします。',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>ご利用の流れ</h2>
        <div className={styles.flow}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < steps.length - 1 && <div className={styles.arrow}>→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



