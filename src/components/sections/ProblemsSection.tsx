import styles from './ProblemsSection.module.css';

export default function ProblemsSection() {
  const problems = [
    '考えていることがわからない 急に辞める',
    '本音で話してくれない',
    <>丁寧に育成する<br />リソースがない</>,
    '忍耐力がない 主体的に動かない',
    '飲み会に来ない',
  ];

  const firstRow = problems.slice(0, 3);
  const secondRow = problems.slice(3, 5);

  return (
    <section id="problems" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Z世代にこんなお悩みありませんか？</h2>
        <div className={styles.problemsList}>
          {/* モバイル版：すべてを1つのグリッドに */}
          <div className={styles.problemsListMobile}>
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className={`${styles.problemItem} ${index === 2 ? styles.problemItemCenter : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src="/nayami_transparent.png" 
                    alt="悩み" 
                    className={styles.nayamiImage}
                  />
                  <div className={styles.problemText}>
                    {problem}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* PC版：1行目と2行目に分ける */}
          <div className={styles.problemsRow}>
            {firstRow.map((problem, index) => (
              <div key={index} className={styles.problemItem}>
                <div className={styles.imageWrapper}>
                  <img 
                    src="/nayami_transparent.png" 
                    alt="悩み" 
                    className={styles.nayamiImage}
                  />
                  <div className={styles.problemText}>
                    {problem}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles.problemsRow} ${styles.problemsRowSecond}`}>
            {secondRow.map((problem, index) => (
              <div key={index} className={styles.problemItem}>
                <div className={styles.imageWrapper}>
                  <img 
                    src="/nayami_transparent.png" 
                    alt="悩み" 
                    className={styles.nayamiImage}
                  />
                  <div className={styles.problemText}>
                    {problem}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* 広いPC版：5つすべてを1行に */}
          <div className={`${styles.problemsRow} ${styles.problemsRowAll}`}>
            {problems.map((problem, index) => (
              <div key={index} className={styles.problemItem}>
                <div className={styles.imageWrapper}>
                  <img 
                    src="/nayami_transparent.png" 
                    alt="悩み" 
                    className={styles.nayamiImage}
                  />
                  <div className={styles.problemText}>
                    {problem}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.solution}>
          <div className={styles.solutionIcon}>⇩</div>
          <p className={styles.solutionText}>Naritaiがすべて解決します</p>
        </div>
      </div>
    </section>
  );
}



