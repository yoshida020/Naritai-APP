import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div id="top" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={`${styles.title} ${styles.slideInUp}`}>
              <span className={styles.titleLine}>若手社員の</span>
              <span className={styles.titleLine}>定着と成長を</span>
              <span className={`${styles.titleLine} ${styles.titleLineLast}`}>
                <span className={styles.highlight}>組織の力</span>に変える
              </span>
            </h1>
            <p className={`${styles.subtitle} ${styles.slideInUp} ${styles.slideInUpDelay1}`}>
              早期離職を防ぎ、
              <br />
              社員一人ひとりのキャリア開発を通じて、
              <br />
              組織全体の活性化と生産性向上を実現します。
            </p>
            <button className={`${styles.ctaButton} ${styles.slideInUp} ${styles.slideInUpDelay2}`}>
              資料請求(無料)
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImagePlaceholder} />
        </div>
      </div>
    </div>
  );
}
