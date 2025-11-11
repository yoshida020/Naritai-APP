import styles from './NaritaiSection.module.css';

export default function NaritaiSection() {
  return (
    <section id="naritai" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Naritai</h2>
        <div className={styles.content}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Service</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/services/individual" className={styles.link}>
                  個人向けサービス
                </a>
              </li>
              <li>
                <a href="/services/corporate" className={styles.link}>
                  企業向けサービス
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/about" className={styles.link}>
                  会社概要
                </a>
              </li>
              <li>
                <a href="/news" className={styles.link}>
                  お知らせ
                </a>
              </li>
              <li>
                <a href="/corporate" className={styles.link}>
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Privacy policy</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/privacy" className={styles.link}>
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/terms" className={styles.link}>
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

