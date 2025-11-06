import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        {/* オフィス背景画像 - 実際の画像ファイルに置き換えてください */}
        <div className={styles.heroImagePlaceholder} />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>若手社員の</span>
          <span className={styles.titleLine}>定着と成長を</span>
          <span className={`${styles.titleLine} ${styles.titleLineLast}`}>
            <span className={styles.highlight}>組織の力</span>に変える
          </span>
        </h1>
        <p className={styles.subtitle}>
          早期離職を防ぎ、
          <br />
          社員一人ひとりのキャリア開発を通じて、
          <br />
          組織全体の活性化と生産性向上を実現します。
        </p>
        <button className={styles.ctaButton}>
          資料請求(無料)
        </button>
      </div>
    </div>
  );
}



