import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">プライバシーポリシー</h1>
        
        <div className="text-gray-600 leading-relaxed">
          <p className="mb-8">
            本ウェブサイトでは、利用者の個人情報の重要性を認識し、その保護に努めます。以下に当サイトにおける個人情報の取り扱いについて記載いたします。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">1. 個人情報の取得について</h2>
            <p>
              当サイトでは、お問い合わせ、サービスの利用、メールでの連絡等の際に、必要に応じて氏名、メールアドレス、電話番号等の個人情報を取得することがあります。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">2. 個人情報の利用目的について</h2>
            <p className="mb-4">取得した個人情報は、以下の目的で利用いたします。</p>
            <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li>お問い合わせへの対応</li>
              <li>ご依頼いただいたサービスの提供</li>
              <li>新サービス・キャンペーン等のご案内</li>
              <li>利用状況の分析・改善のための統計資料の作成</li>
              <li>その他、あらかじめご本人の同意を得た目的のため</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">3. 個人情報の第三者提供について</h2>
            <p className="mb-4">取得した個人情報は、以下の場合を除き、第三者に提供することはありません。</p>
            <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li>本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体または財産の保護のために必要がある場合で、本人の同意を得ることが困難な場合</li>
              <li>公衆衛生の向上や児童の健全な育成の推進のために特に必要がある場合で、本人の同意を得ることが困難な場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が、法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">4. 個人情報の安全管理について</h2>
            <p>
              当サイトは、個人情報の漏えい、滅失、毀損などを防止し、適切な管理を行うために必要かつ適切な安全対策を講じます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">5. クッキー（Cookie）等の使用について</h2>
            <p>
              本サイトはWix.comのプラットフォームを使用しており、Wixによって自動的にCookieが設定されることがあります。詳細はWixのCookieポリシーをご確認ください。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">6. プライバシーポリシーの改定について</h2>
            <p>
              本ポリシーの内容は、法令の変更や運用方針の変更に伴い、事前の予告なく改定されることがあります。改定後のプライバシーポリシーは、本ページにて速やかに公開いたします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">7. 個人情報に関するお問い合わせ</h2>
            <p className="mb-6">
              個人情報の取り扱いに関するご質問や、開示・訂正・削除等のご希望がございましたら、以下の窓口までご連絡ください。
            </p>
            <div className="bg-[#F8F9FA] border border-gray-200 p-6 rounded-lg">
              <dl className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-gray-900 min-w-[120px]">問合せ窓口：</dt>
                  <dd>Naritai</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-gray-900 min-w-[120px]">所在地：</dt>
                  <dd>東京都港区南青山3丁目1番36号青山丸竹ビル6F</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-gray-900 min-w-[120px]">メールアドレス：</dt>
                  <dd><a href="mailto:info@naritai-career.jp" className="text-[#5AB1E0] hover:underline">info@naritai-career.jp</a></dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

