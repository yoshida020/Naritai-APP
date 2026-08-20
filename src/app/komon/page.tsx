'use client';

import { useEffect } from 'react';
import './komon.css';

export default function KomonPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.komon-page .reveal');
    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((en) => {
        en.forEach((x) => { if (x.isIntersecting && io) { x.target.classList.add('in'); io.unobserve(x.target); } });
      }, { threshold: 0.12 });
      els.forEach((e) => io && io.observe(e));
    } else {
      els.forEach((e) => e.classList.add('in'));
    }

    const g = document.getElementById('cglow');
    let raf = 0;
    let onMove: ((e: MouseEvent) => void) | undefined;
    let onLeave: (() => void) | undefined;
    if (g && !(window.matchMedia && window.matchMedia('(pointer:coarse)').matches)) {
      const cg = g;
      let tx = window.innerWidth / 2, ty = window.innerHeight * 0.35, x = tx, y = ty, shown = false;
      onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; if (!shown) { shown = true; cg.style.opacity = '1'; } };
      onLeave = () => { cg.style.opacity = '0'; shown = false; };
      window.addEventListener('mousemove', onMove);
      document.addEventListener('mouseleave', onLeave);
      const loop = () => { x += (tx - x) * 0.12; y += (ty - y) * 0.12; cg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; raf = requestAnimationFrame(loop); };
      loop();
    }

    const el = document.getElementById('ticker');
    let timer: ReturnType<typeof setInterval> | undefined;
    if (el) {
      const te = el;
      const items = ['若手のリアルな視点','忖度なしの外の声','評価制度への若手目線','採用・面接の見極め','オンボーディング設計','1on1の型づくり','世代間ギャップの翻訳','最新トレンドの経営翻訳','社長の壁打ち相手','若手が続く仕組み'];
      let i = 0;
      timer = setInterval(() => {
        i = (i + 1) % items.length;
        te.style.transform = 'translateY(-130%)'; te.style.opacity = '0';
        setTimeout(() => {
          te.textContent = items[i];
          te.style.transition = 'none'; te.style.transform = 'translateY(130%)';
          requestAnimationFrame(() => requestAnimationFrame(() => {
            te.style.transition = ''; te.style.transform = 'none'; te.style.opacity = '1';
          }));
        }, 420);
      }, 2000);
    }

    return () => {
      if (io) io.disconnect();
      if (onMove) window.removeEventListener('mousemove', onMove);
      if (onLeave) document.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className="komon-page">
      <div className="cursor-glow" id="cglow"></div>
      
      <nav className="nav">
        <div className="nav-inner">
          <span className="brand"><b>Naritai</b><span>Z世代顧問</span></span>
          <a href="#cta" className="btn btn-lime">無料で相談</a>
        </div>
      </nav>
      
      
      <header className="hero">
        <div className="grid-bg"></div>
        <div className="glow glow-p"></div>
        <div className="glow glow-b"></div>
        <div className="wrap hero-inner">
          <span className="badge"><i />NEW ／ はじめました</span>
          <h1 className="grad-text">Z世代顧問</h1>
          <p className="subtitle">社長のための、若手 × 時代の相談役。</p>
          <p className="lead"><b>若手のことは、若手にしか分からない。</b><br />忖度のない“外の本音”を、社長のとなりへ。</p>
          <div className="hero-cta">
            <a href="#cta" className="btn btn-lime">お問い合わせ</a>
            <a href="#answer" className="btn btn-ghost">役割を見る</a>
          </div>
        </div>
      </header>
      
      
      <section className="section" id="answer">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Our role — 役割</span>
            <h2>「経営コンサル」ではなく、<br />「若手のリアルな視点提供」。</h2>
            <p>社長からは見えにくい“今の若手の感覚・本音”を、忖度なしでお届けする<span className="nowrap">ポジションです。</span></p>
          </div>
          <div className="role-list reveal">
            <div className="rcard"><span className="rn">01</span><div><h3>古い運営方法には、ハッキリ違和感を。</h3><p>時代に合わない“古い運営方法”には、率直に違和感をお伝えし、<b>改善案まで提示</b>します。</p></div></div>
            <div className="rcard"><span className="rn">02</span><div><h3>人材課題には、現場目線の改善案を。</h3><p>若手まわりの人材課題に、<b>現場目線の具体的な改善案</b>まで提示します。</p></div></div>
            <div className="rcard"><span className="rn">03</span><div><h3>判断は社長、そのための精度の高い判断材料を提供。</h3><p>最終的に決めるのは、社長。<b>Naritai</b>はそのための材料をそろえます。</p></div></div>
          </div>
        </div>
      </section>
      
      
      <section className="section why" style={{background:'var(--bg-2)'}}>
        <div className="glow glow-g"></div>
        <div className="wrap why-inner reveal">
          <span className="eyebrow">Why Z世代</span>
          <h2>これができるのは、<br /><span className="lime">Z世代の当事者</span>だけ。</h2>
          <p className="sub">社長のとなりで、率直に声を届ける若手として。</p>
        </div>
        <div className="wrap reveal" style={{position:'relative', zIndex:'2', marginTop:'clamp(32px,5vw,48px)'}}>
          <div className="vgrid">
            <div className="vcard"><span className="qmark">01</span><p className="q">「周りは、イエスマンばかり」</p><div className="divider"></div><p className="resp"><span className="arw">→</span><span>忖度なしの<b>“外の声”</b>を、社長のとなりから直接お伝えします。</span></p></div>
            <div className="vcard"><span className="qmark">02</span><p className="q">「時代の変化に、ついていきたい」</p><div className="divider"></div><p className="resp"><span className="arw">→</span><span>時代に合わない<b>“古い運営方法”</b>を、改善します。</span></p></div>
            <div className="vcard"><span className="qmark">03</span><p className="q">「若手のリアルな感覚を、知りたい」</p><div className="divider"></div><p className="resp"><span className="arw">→</span><span>若手の<b>現場感覚</b>をベースに、育成・定着の仕組みを改善します。</span></p></div>
            <div className="vcard"><span className="qmark">04</span><p className="q">「若手育成を“社内で回る”形に」</p><div className="divider"></div><p className="resp"><span className="arw">→</span><span>育成・<b>オンボーディングの型</b>を、再設計します。</span></p></div>
          </div>
        </div>
      </section>
      
      
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal" style={{textAlign:'center', maxWidth:'680px', margin:'0 auto clamp(26px,4vw,40px)'}}>
            <span className="eyebrow">What I cover — 対応テーマ</span>
            <h2>会社ごとに、必要なことを。</h2>
          </div>
          <div className="ticker-row reveal">
            <div className="ticker">
              <span className="tick-label">いま、対応中：</span>
              <span className="tick-stage"><span className="tick-item grad-text" id="ticker">若手のリアルな視点</span></span>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="cta-sec" id="cta">
        <div className="wrap">
          <div className="cta-card reveal">
            <div className="grid-bg"></div>
            <div className="cta-card-inner">
              <h2><span className="neon">“うちの当たり前”</span>が、<br />若手を遠ざけているかもしれません。</h2>
              <p>時代とのズレは、数年後の採用・定着に効いてきます。<br />「今の自社のやり方が世代に合っているか確かめたい」経営者様、<b style={{color:'var(--fg)'}}>ご相談は無料です。</b></p>
              <a href="https://www.naritai-career-official.com/contact" className="btn btn-lime">お問い合わせ</a>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="wrap foot">
          <span className="brand"><b>Naritai</b>　Z世代顧問</span>
          <a href="https://www.naritai-career-official.com/" target="_blank" rel="noopener" className="foot-link">会社概要（Naritai公式サイト）</a>
          <span>© 2026 Naritai. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
