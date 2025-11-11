import styles from './ProblemsSection.module.css';

export default function ProblemsSection() {
  const problems = [
    ['何を考えているか分からない', '急に辞める'],
    ['丁寧に育成する', 'リソースがない'],
    ['すぐに辞めたがるのは', '忍耐力がないから？'],
    ['何で', '飲み会に来ないの？'],
  ];

  return (
    <section id="problems" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>こんな悩みはありませんか？</h2>
        <div className={styles.problemsList}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.problemItem}>
              {problem[0]}
              <br />
              {problem[1]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



