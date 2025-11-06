import styles from './ProblemsSection.module.css';

export default function ProblemsSection() {
  const problems = [
    '若手社員の早期離職率が高い',
    '社員のモチベーションが上がらない',
    'キャリア開発の機会が不足している',
    '組織の活性化が進まない',
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>こんな悩みはありませんか？</h2>
        <div className={styles.problemsList}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.problemItem}>
              {problem}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



