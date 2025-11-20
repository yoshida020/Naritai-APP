import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div id="top" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={`${styles.title} ${styles.slideInUp}`}>
              <span className={styles.titleLine}>企業と若手の代弁者</span>
            </h1>
            <p className={`${styles.subtitle} ${styles.slideInUp} ${styles.slideInUpDelay1}`}>
              何も生まれない1on1
              <br />
              飲みニケーションも必要ない
            </p>
            <div className={`${styles.buttonGroup} ${styles.slideInUp} ${styles.slideInUpDelay2}`}>
              <button className={styles.ctaButton}>
                資料請求（無料）
              </button>
              <button className={styles.ctaButtonSecondary}>
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImagePlaceholder} />
        </div>
      </div>
    </div>
  );
}
