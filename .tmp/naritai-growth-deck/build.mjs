import { Presentation, PresentationFile } from "@oai/artifact-tool";

const OUT = "/Users/tsugaruakiraka/Documents/GitHub/Naritai-APP/deliverables/naritai-growth-karte.pptx";
const W = 1280, H = 720;
const C = { navy: "0A1128", ink: "F4F7FB", muted: "AAB7CF", line: "25345B", gold: "F59E0B", emerald: "10B981", surface: "111D3B", soft: "17264A", white: "FFFFFF", red: "FB7185" };
const FONT = "Arial";

function add(slide, text, x, y, w, h, size, color = C.ink, bold = false, opts = {}) {
  const s = slide.shapes.add({ geometry: "textbox", position: { left:x, top:y, width:w, height:h }, fill:"none", line:{style:"solid",fill:"none",width:0} });
  s.text = text;
  s.text.style = { fontFace: FONT, fontSize:size, color, bold, alignment: opts.align || "left", verticalAlignment: opts.valign || "top", breakLine: false, marginLeft:0, marginRight:0, marginTop:0, marginBottom:0 };
  return s;
}
function rect(slide, x,y,w,h, fill, radius=18, line=C.line) {
  return slide.shapes.add({ geometry: radius ? "roundRect" : "rect", position:{left:x,top:y,width:w,height:h}, fill, line:{style:"solid",fill:line,width:1}, borderRadius: radius ? "rounded-2xl" : undefined });
}
function line(slide,x,y,w,h,fill){ return slide.shapes.add({geometry:"rect",position:{left:x,top:y,width:w,height:h},fill,line:{style:"solid",fill,width:0}}); }
function dot(slide,x,y,fill,size=10){ rect(slide,x,y,size,size,fill,999,fill); }
function base(slide, n, label) {
  slide.background.fill = C.navy;
  line(slide,64,42,44,3,C.gold); add(slide, label.toUpperCase(), 120,32,500,22,12,C.muted,true);
  add(slide,`Naritai / 成長カルテ`, 64,680,240,16,11,C.muted);
  add(slide,String(n).padStart(2,"0"),1160,676,56,18,12,C.muted,true,{align:"right"});
}
function title(slide, text, sub="") { add(slide,text,64,78,1080,94,42,C.white,true); if(sub) add(slide,sub,64,183,980,36,18,C.muted); }
function label(slide, text, x,y, color=C.gold){ add(slide,text,x,y,300,20,12,color,true); }
function metric(slide,x,y,w,number,caption,color=C.gold){ rect(slide,x,y,w,172,C.surface); add(slide,number,x+24,y+28,w-48,66,46,color,true); add(slide,caption,x+24,y+112,w-48,38,16,C.ink,true); }

const deck = Presentation.create({ slideSize:{width:W,height:H} });

// 1
{ const s=deck.slides.add(); base(s,1,"Investment recovery / 01");
  add(s,"人材投資を\n「掛け捨て」にしない。",64,148,700,160,60,C.white,true);
  add(s,"未回収コストをゼロにする組織へ。",64,330,730,50,30,C.gold,true);
  add(s,"若手の離職リスクを見える化し、独自の1on1で\n成長力へ変える『成長カルテ』",68,422,570,70,19,C.muted);
  rect(s,850,136,300,390,C.surface); label(s,"RECOVERY DASHBOARD",882,170); add(s,"未回収\nコスト",882,218,210,100,40,C.white,true);
  line(s,882,346,220,2,C.line); add(s,"RISK",882,374,80,20,12,C.muted,true); add(s,"早期検知",882,404,140,36,25,C.emerald,true); dot(s,1070,412,C.emerald,14);
  add(s,"成長カルテ",64,574,440,40,28,C.white,true); add(s,"Business introduction",64,624,280,20,14,C.muted);
}
// 2
{ const s=deck.slides.add(); base(s,2,"Issue / 02"); title(s,"「戦力化する直前」に辞められる。", "一番高い教育費の掛け捨てが、静かに利益を削る。");
  const xs=[64,386,708,1030], heads=["採用","教育","戦力化","離職"], subs=["コスト発生","時間投資","成果が出る直前","投資がリセット"];
  xs.forEach((x,i)=>{ dot(s,x,335,i===3?C.gold:C.muted,14); line(s,x+14,341,i<3?270:110,2,i===3?C.gold:C.line); add(s,heads[i],x,375,190,34,25,i===3?C.gold:C.white,true); add(s,subs[i],x,420,215,28,15,C.muted); });
  rect(s,64,520,1084,92,C.surface); add(s,"採用費・教育費をかけても、成果が出る前にリセットされる。",92,544,780,34,23,C.white,true); add(s,"止めるべきは「感情的な離職」ではなく、財務的損失。",92,580,800,22,15,C.gold,true);
}
// 3
{ const s=deck.slides.add(); base(s,3,"Financial KPI / 03"); title(s,"辞めた社員に、いくら投資して、いくら未回収ですか？", "人材投資を「費用」ではなく、回収すべき資産として捉え直す。");
  metric(s,64,295,330,"¥ —","① 離職コスト（回収不能額）",C.gold); metric(s,417,295,330,"— ヶ月","② 損益分岐点（回収まで）",C.white); metric(s,770,295,378,"¥ —","③ 全社想定損失",C.gold);
  add(s,"まずは無料診断で、貴社固有の未回収コストを可視化します。",64,526,780,28,18,C.muted); add(s,"INPUT → 採用・教育・配置・離職データ",64,578,620,18,13,C.emerald,true);
}
// 4
{ const s=deck.slides.add(); base(s,4,"Root cause / 04"); title(s,"社内の1on1やサーベイだけでは、防げない。", "水面下にある「本音」と「キャリアの迷い」が、離職の予兆になる。");
  line(s,64,398,1084,3,C.muted); add(s,"水面",64,374,70,18,12,C.muted,true);
  // iceberg geometric abstraction
  s.shapes.add({geometry:"triangle",position:{left:175,top:244,width:380,height:150},fill:C.soft,line:{style:"solid",fill:C.line,width:1}}); add(s,"10%  業務報告",246,300,240,30,24,C.white,true); add(s,"社内上司の1on1が見える領域",202,341,330,20,14,C.muted);
  s.shapes.add({geometry:"triangle",position:{left:175,top:402,width:380,height:195},fill:"142A51",line:{style:"solid",fill:C.line,width:1}}); add(s,"90%",315,455,105,48,36,C.gold,true); add(s,"本音・キャリア・葛藤",244,505,260,26,20,C.white,true);
  rect(s,680,294,468,262,C.surface); label(s,"NARITAI'S ROLE",714,326,C.emerald); add(s,"第三者だから届く\n「働く理由」へ再接続",714,366,360,76,31,C.white,true); add(s,"プロが引き出し、組織が動ける言葉に翻訳する。",714,475,350,42,16,C.muted);
}
// 5
{ const s=deck.slides.add(); base(s,5,"Solution / 05"); title(s,"データで先手を打つ、人材投資ダッシュボード。", "「誰が危ないか」ではなく、「どの投資が未回収か」を見える化。");
  const cards=[["01","未回収額の可視化","投資残高を一人ひとり追う"],["02","損益分岐点カーブ","回収までの距離を示す"],["03","定着リスク早期アラート","兆候を行動前に拾う"],["04","施策効果の検証","打ち手を学習資産にする"]];
  cards.forEach((d,i)=>{const x=64+(i%2)*548,y=290+Math.floor(i/2)*150;rect(s,x,y,516,122,C.surface);add(s,d[0],x+22,y+24,46,28,18,i===2?C.gold:C.emerald,true);add(s,d[1],x+84,y+22,380,30,22,C.white,true);add(s,d[2],x+84,y+62,380,22,15,C.muted);});
}
// 6
{ const s=deck.slides.add(); base(s,6,"Solution / 06"); title(s,"見る → 向き合う → 動かす。", "「測って終わり」にしない、現場で自走するまでの伴走。");
  const steps=[["01","第三者1on1","本音を可視化"],["02","未来接続","3〜5年ビジョンと\n今の業務をつなぐ"],["03","自走伴走","現場で行動が続く\n状態まで支える"]];
  steps.forEach((d,i)=>{const x=64+i*363;rect(s,x,300,316,225,C.surface);add(s,d[0],x+24,326,80,28,18,C.gold,true);add(s,d[1],x+24,372,250,34,24,C.white,true);add(s,d[2],x+24,426,248,54,17,C.muted);if(i<2){add(s,"→",x+326,389,28,30,24,C.emerald,true);}});
  add(s,"“本人の納得” が、組織に残る理由と主体的な行動をつくる。",64,586,900,28,20,C.emerald,true);
}
// 7
{ const s=deck.slides.add(); base(s,7,"Advisory / 07"); title(s,"社長のための「若手 × 時代」の相談役。", "経営コンサルではなく、Z世代当事者のリアルを経営判断の材料に。");
  rect(s,64,286,432,258,C.surface); label(s,"Z GENERATION ADVISORY",98,320); add(s,"若手の違和感を\n“経営が動ける言葉”に。",98,365,330,82,31,C.white,true); add(s,"相談無料",98,488,150,25,17,C.emerald,true);
  const ys=[304,378,452]; ["採用・定着の打ち手","育成とマネジメント","組織の見えない摩擦"].forEach((t,i)=>{dot(s,632,ys[i]+8,C.gold,10);add(s,t,662,ys[i],355,28,22,C.white,true);add(s,"若手当事者の視点で整理",662,ys[i]+34,330,20,14,C.muted);});
}
// 8
{ const s=deck.slides.add(); base(s,8,"Case study / 08"); title(s,"辞める理由を、残る意思と行動に変えた。", "ケースは個人を特定しない形で要約しています。");
  const cases=[["営業代行 / 24歳","転職サイト登録・消耗","3年後の理想から逆算","在籍継続・主体化"],["飲食店舗 / 27歳","抱え込み・部下と摩擦","他責を脱し、対話を再設計","任せるリーダーへ\n（役員候補）"]];
  cases.forEach((c,i)=>{const x=64+i*548;rect(s,x,287,516,264,C.surface);add(s,c[0],x+28,316,230,24,15,C.muted,true);add(s,"BEFORE",x+28,360,100,18,12,C.gold,true);add(s,c[1],x+28,386,195,42,19,C.white,true);add(s,"→",x+235,389,38,30,23,C.emerald,true);add(s,"AFTER",x+292,360,100,18,12,C.emerald,true);add(s,c[3],x+292,386,188,52,19,C.white,true);line(s,x+28,455,460,1,C.line);add(s,c[2],x+28,477,440,34,15,C.muted);});
}
// 9
{ const s=deck.slides.add(); base(s,9,"Operational value / 09"); title(s,"管理職の負担を増やさず、育成を資産にする。", "現場に「新しい仕事」を足さないから、仕組みが続く。");
  const vals=[["0","面談準備","カルテに効く問いが表示"],["→","やりっぱなし防止","次回までの変化を追える"],["∞","育成履歴の資産化","内製化できる育成知見へ"]];
  vals.forEach((v,i)=>{const x=64+i*363;rect(s,x,300,316,218,C.surface);add(s,v[0],x+25,327,75,50,38,i===0?C.emerald:C.gold,true);add(s,v[1],x+25,398,260,32,22,C.white,true);add(s,v[2],x+25,446,260,26,15,C.muted);});
  add(s,"管理職は「聞くべきこと」に集中。育成は属人化せず、再現可能になる。",64,577,980,28,19,C.emerald,true);
}
// 10
{ const s=deck.slides.add(); base(s,10,"Plan & CTA / 10");
  add(s,"人材投資の回収を、\n始めましょう。",64,122,660,135,55,C.white,true); add(s,"初期費用 0 円。まずは3ヶ月・3名から。",68,285,600,32,22,C.gold,true);
  rect(s,64,364,344,154,C.surface); label(s,"STANDARD",92,396); add(s,"月額 165,000円",92,430,270,32,24,C.white,true); add(s,"3ヶ月パイロット",92,477,220,22,15,C.muted);
  rect(s,430,364,344,154,"142A51",18,C.emerald); label(s,"PREMIUM",458,396,C.emerald); add(s,"月額 150,000円",458,430,270,32,24,C.white,true); add(s,"継続導入プラン",458,477,220,22,15,C.muted);
  rect(s,842,330,306,230,C.gold,18,C.gold); add(s,"無料診断",872,366,220,27,18,C.navy,true); add(s,"自社の離職・\n未回収コストを\n診断してみる",872,406,230,94,28,C.navy,true); add(s,"CONTACT →",872,520,180,18,13,C.navy,true);
  add(s,"Naritai / 成長カルテ",64,603,350,30,20,C.white,true); add(s,"人材投資を、回収できる組織へ。",64,638,460,22,15,C.muted);
}

const pptx = await PresentationFile.exportPptx(deck);
await pptx.save(OUT);
