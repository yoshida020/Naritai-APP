import styles from './InstructorsSection.module.css';

export default function InstructorsSection() {
  const instructors = [
    {
      name: '山田 太郎',
      role: 'キャリア開発コンサルタント',
      experience: '15年のキャリア開発支援経験',
      specialties: ['人材育成', '組織開発', '離職防止'],
      description: '多数の企業で若手社員の定着と成長を支援してきました。',
    },
    {
      name: '佐藤 花子',
      role: '組織心理コンサルタント',
      experience: '10年の組織活性化支援経験',
      specialties: ['モチベーション向上', 'チームビルディング', '生産性向上'],
      description: '組織全体の活性化と生産性向上を実現する専門家です。',
    },
    {
      name: '鈴木 一郎',
      role: '人材開発スペシャリスト',
      experience: '12年の人材開発経験',
      specialties: ['研修プログラム設計', 'キャリアパス設計', 'メンタリング'],
      description: '一人ひとりの成長をサポートする個別対応が得意です。',
    },
  ];

  return (
    <section id="instructors" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>講師紹介</h2>
        <p className={styles.subtitle}>
          経験豊富な講師陣が、お客様の組織に最適なサポートを提供します。
        </p>
        <div className={styles.instructorsGrid}>
          {instructors.map((instructor, index) => (
            <div key={index} className={styles.instructorCard}>
              <div className={styles.instructorImage}>
                <div className={styles.imagePlaceholder}>
                  {instructor.name.charAt(0)}
                </div>
              </div>
              <div className={styles.instructorInfo}>
                <h3 className={styles.instructorName}>{instructor.name}</h3>
                <p className={styles.instructorRole}>{instructor.role}</p>
                <p className={styles.instructorExperience}>{instructor.experience}</p>
                <div className={styles.specialties}>
                  {instructor.specialties.map((specialty, specialtyIndex) => (
                    <span key={specialtyIndex} className={styles.specialtyTag}>
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className={styles.instructorDescription}>{instructor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





