import styles from './ProblemsSection.module.css';

export default function ProblemsSection() {
  const problems = [
    '考えていることがわからない、急に辞める',
    '本音で話してくれない',
    '丁寧に育成するリソースがない',
    '忍耐力がない、主体的に動かない',
    '飲み会に来ない',
  ];

  return (
    <section id="problems" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Z世代にこんなお悩みありませんか？</h2>
        <div className={styles.problemsList}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.problemItem}>
              {problem}
            </div>
          ))}
        </div>
        <div className={styles.solution}>
          <div className={styles.solutionIcon}>⇩</div>
          <p className={styles.solutionText}>Naritaiがすべて解決します</p>
        </div>
      </div>
    </section>
  );
}



