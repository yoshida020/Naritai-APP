'use client';

import { useRef } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function CoachingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="coaching-section"
      className="w-full min-h-screen py-20 px-4 flex items-center justify-center md:py-12 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center flex flex-col items-center">
        <div className="mb-16">
          <SectionTitle enTitle="COACHING" jaTitle="コーチングとは？" enColor="text-[#9DCBE8]" />
          <p className="mt-4 text-xl md:text-2xl text-[#2C3E50] font-medium">
            1分でわかるNaritaiのコーチング
          </p>
        </div>
        <div className="w-full max-w-[1200px] mx-auto mb-20 space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#517CA2] mb-4 md:mb-6">
                コーチングとは
              </h3>
              <div className="text-base md:text-lg leading-relaxed text-[#2C3E50] text-center">
                <p id="coaching-trigger" className="mb-4">
                  一方的に答えを教えるティーチングや<br />コンサルティングとは異なり、<br /> 
                  コーチとの対話を通じて、社員一人ひとりが<br />
                  自らのキャリアや課題に対する「気づき」を得て、<br />
                  主体的な「行動」へつなげるプロセスです。
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src="/images/coaching/コーチング02.png"
                alt=""
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          <div id="naritai-coaching" className="mb-8 md:mb-12">
            <h3 className="text-[24px] md:text-[48px] font-semibold text-[#517CA2] text-center">
              Naritaiのコーチング
            </h3>
          </div>

          {/* Naritaiのコーチングセクション */}
          <div className="w-full text-base md:text-lg leading-relaxed text-[#2C3E50] text-center space-y-6">
            <p className="mb-4 text-center">
              Naritaiが提供するのは、
              特にZ世代の価値観や思考特性に最適化されたコーチングです。<br />
              上から指導するのではなく同じ目線で伴走し、<br className="md:hidden" />価値観・強み・不安を言語化して、<br />
              「納得できる選択」と「次の一歩」を明確にします。
            </p>
            {/* 横並びテキスト */}
            <div className="flex flex-col md:flex-row justify-center items-start md:items-start gap-4 md:gap-8 max-w-5xl mx-auto my-6">
              <div className="flex flex-col items-center">
                {/* 画像エリア */}
                <div className="w-full mb-4 flex items-center justify-center">
                  <img
                    src="/images/coaching/コーチング03.png"
                    alt=""
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <p className="text-center">
                  若手社員が抱えがちな「このままでいいのか」<br />という将来の不安を整理し、<br />今の環境で伸ばす軸／次に選ぶ軸を明確にする
                </p>
              </div>
              <div className="flex flex-col items-center">
                {/* 画像エリア */}
                <div className="w-full mb-4 flex items-center justify-center">
                  <img
                    src="/images/coaching/コーチング04.png"
                    alt=""
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <p className="text-center">
                  会社を転々としてしまう理由<br />（合わない／人間関係／評価への不満など）<br />を構造化し、同じ悩みを繰り返さない<br />選び方・行動・伝え方に落とし込む
                </p>
              </div>
            </div>
            <p className="mt-18 text-center">
              さらに、この対話プロセスを「個人カルテ」として可視化・体系化することで、<br />
              感覚的になりがちな育成を再現性のある仕組みへ。<br />
              若手の成長を組織の成果につなげます。
            </p>
            {/* 画像 */}
            <div className="w-full flex items-center justify-center mt-6">
              <img
                id="coaching-image-trigger"
                src="/images/coaching/コーチング01.png"
                alt=""
                className="w-full h-auto object-contain rounded-lg max-w-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

