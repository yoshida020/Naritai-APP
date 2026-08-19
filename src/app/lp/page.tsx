'use client';

import { useEffect } from 'react';
import './lp.css';

export default function LpPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.lp-page .reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (en) => {
        en.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add('in');
            io.unobserve(x.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <div className="lp-page">
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: '.reveal{opacity:1!important;transform:none!important}' }} />
      </noscript>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top"><b>NARITAI</b><span>CAREER KARTE</span></a>
          <div className="nav-links">
            <a href="#costs">課題</a>
            <a href="#see">見える化</a>
            <a href="#method">1on1メソッド</a>
            <a href="#pillars">2つの柱</a>
            <a href="#effect">導入効果</a>
            <a href="#flow">導入ステップ</a>
          </div>
          <a href="https://www.naritai-career-official.com/contact?from=lp" className="btn btn-gold" style={{padding:'11px 20px',fontSize:'.9rem'}}>無料相談</a>
          <button className="nav-toggle" aria-label="メニュー">≡</button>
        </div>
      </nav>
      
      
      <header className="hero" id="top">
        <div className="hero-inner">
          <span className="kick"><i />人材投資の"回収率"を、見える化する</span>
          <h1>採用した人材の<br /><span className="r">離職コスト</span><br /><span className="g">採用コスト</span><br /><span>回収コスト</span>、<br /><span className="q">言えますか？</span></h1>
          <p className="hero-lead">採用・育成した若手が、どれだけ定着し自走できているか（＝人材投資の回収率）を可視化。数値化して終わりにせず、独自メソッドで"引き上げ"まで伴走します。</p>
          <div className="hero-cta">
            <a href="https://www.naritai-career-official.com/contact?from=lp" className="btn btn-gold btn-lg">無料で相談する →</a>
            <a href="#see" className="btn btn-ghost-d btn-lg">仕組みを知る</a>
          </div>
          <div className="hero-badges">
            <span className="badge">初期費用 <b>0円</b></span>
            <span className="badge">サーベイで<b>終わらせない</b></span>
          </div>
        </div>
      
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>採用コスト</span><span className="on">未回収投資</span><span>早期離職</span><span className="on">静かな退職</span><span>回収率</span><span className="on">損益分岐点</span><span>離職の予兆</span><span className="on">想定損失</span>
            <span>採用コスト</span><span className="on">未回収投資</span><span>早期離職</span><span className="on">静かな退職</span><span>回収率</span><span className="on">損益分岐点</span><span>離職の予兆</span><span className="on">想定損失</span>
          </div>
        </div>
      </header>
      
      
      <section className="costs" id="costs">
        <div className="wrap">
          <div className="lead-q reveal">
            <h2>回収率と<em>損失</em>、言えますか？</h2>
            <p>人にかけたお金が回収できているかは、感覚ではなく数字で捉えられます。</p>
          </div>
          <div className="cost-grid reveal">
            <div className="cost"><div className="q">¥?</div><h3>離職コスト</h3><p>辞めた若手の採用・育成にかけた投資。回収されないまま失われた金額は、いくらですか。</p></div>
            <div className="cost"><div className="q">¥?</div><h3>採用コスト</h3><p>一人を採るのにかかる費用。それが生産性で回収され始めるのは、入社何ヶ月目からですか。</p></div>
            <div className="cost"><div className="q">¥?</div><h3>回収コスト</h3><p>いま在籍する社員のうち、投資を回収しきれていないのは誰で、全社でいくらの想定損失ですか。</p></div>
          </div>
        </div>
      </section>
      
      
      <section className="see" id="see">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Visualize</span>
            <h2>人材投資の<span className="u">未回収額</span>を、<br />ひと目で。</h2>
            <p>誰が損失を生み、どこに未回収が眠っているのか。感覚ではなくデータで、先手を打つための管理画面です。</p>
          </div>
          <div className="see-grid">
            <div className="feat-list reveal">
              <div className="fitem"><div className="fi">01</div><div><h4>未回収投資額の可視化</h4><p>社員ごとの回収率／全社の想定損失を算出し、どこに損失があるかを明確化。</p></div></div>
              <div className="fitem"><div className="fi">02</div><div><h4>損益分岐点の数値化</h4><p>採用コスト回収カーブで、生産性の立ち上がりを可視化。</p></div></div>
              <div className="fitem"><div className="fi">03</div><div><h4>退職者分析</h4><p>総合推移レポートで、打った施策の効果を検証。</p></div></div>
              <div className="fitem"><div className="fi">04</div><div><h4>定着リスクの早期アラート</h4><p>離職の予兆を検知し、辞める前に手を打てる状態に。</p></div></div>
            </div>
            <div className="reveal showcase">
              <figure className="frame-main">
                <img src="/images/lp/kaishu.png" alt="個人カルテの回収率ページ：採用コスト回収カーブ・損益分岐点・回収率（サンプル）" />
              </figure>
              <figure className="frame-float">
                <img src="/images/lp/karte.png" alt="全社の定着モニタリング画面（サンプル）" />
              </figure>
              <p className="laptop-cap">▲ 個人カルテ「回収率」ページ ＋ 全社モニタリング（サンプルデータ）</p>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="method-sec" id="method">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">1on1 Method</span>
            <h2>見える化して、<span className="g">終わらせない。</span></h2>
          </div>
          <div className="mflow reveal">
            <div className="mflow-item"><span className="mflow-num">01</span><h4>見る</h4><p>カルテで一人ひとりの現在地と、投資の回収状況を可視化する。</p></div>
            <div className="mflow-item"><span className="mflow-num">02</span><h4>向き合う</h4><p>本人の"なりたい"と、成長を止めている課題を見つける。</p></div>
            <div className="mflow-item"><span className="mflow-num">03</span><h4>動かす</h4><p>課題を具体的な行動に落とし、回収率が上がるまで伴走する。</p></div>
          </div>
          <div className="method-statement reveal">
            <p className="ms-line">「測って終わり」のサーベイでは、人は動きません。<br /><b>設計して、伴走して、回収率を引き上げる。</b></p>
            <div className="method-facts">
              <span className="mchip"><i />1on1はNaritaiが実施</span>
              <span className="mchip"><i />社内でも回せる（面接サポート付き）</span>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="pillars-sec" id="pillars">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Our approach</span>
            <h2><span className="g">2つの柱</span>で応えます。</h2>
            <p>「見える化」して終わりにしない。可視化する仕組みと、回収率を引き上げるメソッド。両輪で回します。</p>
          </div>
          <div className="pillars reveal">
            <div className="pillar">
              <span className="tagnum">01</span>
              <span className="kicker">VISUALIZE — 見える化</span>
              <h3>カルテ</h3>
              <p>採用・育成した若手が、どれだけ定着し自走できているか。未回収の投資と損失を、社員ごと・全社で数字にします。</p>
              <ul>
                <li>未回収投資額・回収率の可視化</li>
                <li>採用コスト回収カーブ（損益分岐点）</li>
                <li>退職者分析／定着リスクの早期アラート</li>
              </ul>
            </div>
            <div className="pillar">
              <span className="tagnum">02</span>
              <span className="kicker">METHOD — 引き上げ</span>
              <h3>独自の1on1メソッド</h3>
              <p>数値化して終わりにしない。独自の1on1メソッドで若手と向き合い、現場のマネージャーが自分で回せる状態へ。定着と回収率を引き上げます。</p>
              <ul>
                <li>独自の1on1フレーム・問いの設計</li>
                <li>マネージャーが自分で回せる状態へ（内製化）</li>
                <li>カルテと連動し、対話の"次の一手"を提示</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="survey">
        <div className="wrap">
          <div className="survey-card reveal">
            <h2>サーベイは入れた。<br />でも、<em>現場は変わらなかった。</em></h2>
            <p>アンケートで満足度を測っても、数字が出るだけで人は動きません。"測って終わり"に心当たりのある企業様こそ、ご相談ください。</p>
            <div className="hero-cta"><a href="https://www.naritai-career-official.com/contact?from=lp" className="btn btn-gold btn-lg">現状を相談する →</a></div>
          </div>
        </div>
      </section>
      
      
      <section className="effect" id="effect">
        <div className="wrap">
          <div className="outcome-grid reveal">
            <div className="outcome-lead">
              <span className="eyebrow">Outcome</span>
              <h2>導入すると、<br />こう変わる。</h2>
              <p>数字を出すことがゴールではありません。現場と経営の"打ち手"が変わります。</p>
            </div>
            <ul className="outcome-list">
              <li><span className="oc-n">01</span><div><h4>「なんとなく不安」が確信に変わる</h4><p>感覚で語っていた人材の状態が、根拠を持って語れるようになる。</p></div></li>
              <li><span className="oc-n">02</span><div><h4>損失の"在り処"が特定できる</h4><p>どの社員・どの部署に未回収が眠っているかが見え、優先順位がつく。</p></div></li>
              <li><span className="oc-n">03</span><div><h4>辞める前に手を打てる</h4><p>予兆をアラートで捉え、後手の退職対応から先手の定着支援へ。</p></div></li>
              <li><span className="oc-n">04</span><div><h4>サーベイで終わらせない</h4><p>測るだけでなく、独自メソッドで現場が実際に動く状態をつくる。</p></div></li>
              <li><span className="oc-n">05</span><div><h4>人が育つ仕組みが社内に残る</h4><p>属人的な"できる上司頼み"を脱し、内製化で再現できる形に。</p></div></li>
              <li><span className="oc-n">06</span><div><h4>経営に"若手の本音"が届く</h4><p>独自の1on1メソッドを通じて、現場の声とトレンドが経営に上がる。</p></div></li>
            </ul>
          </div>
        </div>
      </section>
      
      
      <section className="flow-sec" id="flow">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Flow</span>
            <h2>導入ステップ</h2>
            <p>立ち上げ期は密に、定着後は頻度を下げる。時給での切り売りはしません。</p>
          </div>
          <div className="steps-track reveal">
            <div className="strack-item"><div className="strack-node">01</div><h4>お問い合わせ</h4><p>まずは無料相談・資料請求から。現状をお聞かせください。</p></div>
            <div className="strack-item"><div className="strack-node">02</div><h4>現状診断</h4><p>人材投資の回収状況と、定着・育成の課題を可視化します。</p></div>
            <div className="strack-item"><div className="strack-node">03</div><h4>設計・導入</h4><p>ダッシュボードの初期設定と、独自メソッドの設計・導入。</p></div>
            <div className="strack-item"><div className="strack-node">04</div><h4>運用・引き上げ</h4><p>データを見ながら回収率を引き上げ、仕組みを社内に定着。</p></div>
          </div>
        </div>
      </section>
      
      
      <section className="final" id="final">
        <div className="wrap">
          <div className="final-card reveal">
            <h2>その"未回収"、<br />放置していいですか。</h2>
            <p>人材投資の回収率を見える化し、引き上げるところまで。まずは無料相談から始めましょう。</p>
            <div className="hero-cta">
              <a href="https://www.naritai-career-official.com/contact?from=lp" className="btn btn-dark btn-lg">無料相談を予約する</a>
              <a href="https://www.naritai-career-official.com/blank?from=lp" className="btn btn-ghost-d btn-lg" style={{background:'oklch(96% 0.05 84 / .4)',borderColor:'oklch(40% 0.06 70 / .4)',color:'oklch(26% 0.06 70)'}}>資料を請求する</a>
            </div>
          </div>
        </div>
      </section>
      
      
      <footer>
        <div className="wrap">
          <div className="foot">
            <a className="brand" href="#top"><b>NARITAI</b><span>CAREER KARTE</span></a>
            <div className="foot-links">
              <a href="#see">見える化</a>
              <a href="#pillars">2つの柱</a>
              <a href="#effect">導入効果</a>
              <a href="#flow">導入ステップ</a>
              <a href="#final">お問い合わせ</a>
              <a href="https://www.naritai-career-official.com/" target="_blank" rel="noopener">会社概要</a>
            </div>
          </div>
          <div className="foot-bottom">© 2026 Naritai Career. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
