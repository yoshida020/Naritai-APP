import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.backgroundImage} />
      </div>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.subtitle}>お問い合わせ</p>
          <p className={styles.text}>
            サービスについてのご相談・ご質問、お見積もり依頼など、
            <br />
            お気軽にお問い合わせください。
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>資料請求</button>
            <button className={styles.button}>無料相談</button>
          </div>
        </div>
      </div>
    </section>
  );
}

