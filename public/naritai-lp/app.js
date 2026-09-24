'use strict';
// Every member and session below is fictional. No production API or storage is used.
const demoData = {is_demo:true, people:[
 {id:'a',name:'メンバーA',dept:'営業部',year:'入社1年目',vision:'お客様に、自分なりの提案ができるように。',strength:'「商談のあと、お客様が困っていたことをメモしている」。相手への関心が、提案の土台になっています。',coach:'お客様の言葉を残す習慣は、あなたならではの提案につながります。メモから見つけた問いを、大切にしていきましょう。',months:[
 {title:'まずは、自分の目標を言葉に。',copy:'先輩の商談を見ながら、どんな営業になりたいかを考えている段階。お客様への関心を、本人の目標につなげます。',company:'次の同行後に、印象に残ったお客様の言葉を一緒に振り返る。',member:'次の同行で、先輩の質問をひとつメモしてみる。',growth:'目標を見つける'},
 {title:'気づきを、自分の問いに変える。',copy:'お客様の話を記録する習慣ができ、「自分なら何を聞くか」を考え始めました。考えを試す機会が次の一歩になります。',company:'次の商談の前に、本人が考えた質問を聞く時間をつくる。',member:'お客様に聞いてみたい質問を準備する。',growth:'強みを知る'},
 {title:'提案への意欲を、試せる機会へ。',copy:'「提案を考えたい。でも、どこまで自分で決めてよいか迷う」。任せる範囲をすり合わせることが、挑戦につながります。',company:'次の商談前に、本人の提案とその理由を聞く時間をつくる。',member:'次の商談で聞きたいことと、提案のたたき台をひとつ準備する。',growth:'小さく試す'}]},
 {id:'b',name:'メンバーB',dept:'開発部',year:'入社2年目',vision:'使う人の気持ちがわかる開発者になりたい。',strength:'「問い合わせの内容を見て、使いづらかった理由を考えている」。利用者の視点で考える姿勢が強みです。',coach:'コードの外側にある、使う人の体験に目が向いています。その気づきを、まず一つの改善案にしてみましょう。',months:[
 {title:'開発の先にある、使う人を知る。',copy:'担当機能を覚えながら、利用者の使い方に関心を持ち始めています。顧客の声に触れる場が、目標を具体化する助けになります。',company:'利用者から届いた問い合わせを、一件一緒に読み解く。',member:'担当機能で、利用者が困りそうな場面をひとつ挙げる。',growth:'目標を見つける'},
 {title:'利用者の声を、改善のヒントに。',copy:'問い合わせの背景を考え、使いづらさを具体的に説明できるようになりました。本人の着眼点を言葉にする機会を増やします。',company:'週次の振り返りで、本人が気づいた使いづらさを聞く。',member:'問い合わせをひとつ選び、改善案を考えてみる。',growth:'強みを知る'},
 {title:'小さな改善を、自分の提案から。',copy:'「画面の説明を変えれば、迷う人が減ると思う」。利用者の視点と、品質を高めたい会社の期待が重なっています。',company:'本人の改善案について、試せる範囲と確認方法を一緒に決める。',member:'画面の説明文の改善案を、次のレビューに持っていく。',growth:'小さく試す'}]},
 {id:'c',name:'メンバーC',dept:'CS部',year:'入社1年目',vision:'お客様が安心して相談できる担当者になりたい。',strength:'「お問い合わせの最後に、ほかに不安がないか確認している」。相手の気持ちを確かめる丁寧さが強みです。',coach:'最後のひと言で相手の不安を確かめる姿勢は、信頼につながる力です。あなたが大事にしている対応を、言葉に残してみましょう。',months:[
 {title:'安心して話せる関係を目指す。',copy:'対応手順を学ぶなかで、お客様が安心する話し方に関心を持っています。自分が大事にしたい対応を整理する段階です。',company:'対応後に、本人が大事にしたいと思った場面を一緒に振り返る。',member:'先輩の対応から、安心につながる言葉をひとつメモする。',growth:'目標を見つける'},
 {title:'相手を気づかう工夫が見えてきた。',copy:'対応の最後に不安を確認する工夫が生まれました。本人が大切にしている関わり方を、強みとして言葉にします。',company:'具体的な対応をひとつ取り上げ、どんな意図があったか聞く。',member:'お客様に安心してもらえた対応を、ひとつ振り返る。',growth:'強みを知る'},
 {title:'丁寧な対応を、チームの学びにも。',copy:'「ほかの人の工夫も知りたい」。自分の実践を共有する機会が、本人の学びとチームの対応力の両方につながります。',company:'次のチーム共有で、本人の対応の工夫をひとつ紹介する機会をつくる。',member:'安心につながった言葉を、次のチーム共有で伝える。',growth:'小さく試す'}]}
]};
const extraPeople=[
 {id:'d',name:'メンバーD',dept:'営業部',year:'入社2年目',vision:'自分の強みを活かした営業のスタイルを見つけたい。',strength:'相手の説明を急がずに聞き、質問を整理する丁寧さ。',coach:'じっくり聞けることも、あなたの力です。うまく話せた場面を一緒に探しましょう。',action:'商談で相手の話を引き出せた場面を、本人と一緒に振り返る。',step:'うまく聞けた質問を一つ、面談に持っていく。'},
 {id:'e',name:'メンバーE',dept:'企画部',year:'入社1年目',vision:'自分のアイデアを、形にできるようになりたい。',strength:'日常の小さな不便に気づき、アイデアをメモに残していること。',coach:'まだまとまっていなくても大丈夫。気づいたことを一つ、言葉にしてみましょう。',action:'本人のアイデアを聞き、小さく試せる企画の範囲を決める。',step:'試してみたいアイデアを、一枚のメモにまとめる。'},
 {id:'f',name:'メンバーF',dept:'人事部',year:'入社2年目',vision:'周りに相談しながら、自分で仕事を進められるようになりたい。',strength:'困っている人に気づき、声をかけられること。',coach:'人を助けるように、あなた自身も助けを求めていい。相談するタイミングを一緒に考えましょう。',action:'一人で抱えずに相談できるよう、短い確認の時間を決める。',step:'進め方に迷っていることを、一つ相談してみる。'}
];
for(const p of extraPeople)demoData.people.push({...p,months:[{title:'大切にしたいことを、言葉にする。',copy:'面談で、仕事で大切にしたいことを話した段階。本人が目指す姿を一緒に整理します。',company:'本人がうれしかった仕事の場面を聞き、目標を一緒に整理する。',member:'仕事でうれしかった場面を、一つ書き出す。',growth:'目標を見つける'},{title:'自分の良さに、気づき始める。',copy:p.strength+' その良さを活かせた具体的な場面を振り返っています。',company:'本人の工夫が活きた場面を、具体的な言葉で伝える。',member:'自分なりに工夫できたことを、一つ記録する。',growth:'強みを知る'},{title:'自分らしい一歩を、試してみる。',copy:'本人の「'+p.vision+'」という言葉を起点に、次に試せることを相談しています。',company:p.action,member:p.step,growth:'小さく試す'}]});
const voices=['もっと、自分なりの提案がしたい。','使う人の気持ちがわかる開発者に。','安心して相談できる担当者になりたい。','自分の強みって、何だろう。','このアイデア、形にしてみたい。','一人で抱えず、相談できるように。'];
const concreteCases=[["「お客様の困りごとはメモしている。でも、自分の案を出してよい範囲がわからず、先輩の指示を待ってしまう」。提案への意欲はあるものの、任される範囲が曖昧なケースです。", "次の商談前に10分。「お客様の困りごとは？」「あなたならどう提案する？」を聞く。", "今回は課題の確認と提案の冒頭を本人に任せ、価格・条件の判断は上司が担うと決める。商談後に「相手の反応」「次に変えたいこと」を一緒に振り返る。"], ["問い合わせを読んで改善案を考えているが、どこまで変更してよいか迷っているケースです。", "次のレビューで、困っている利用者と改善したい箇所を一つずつ聞く。", "まず説明文一か所の改善案を本人に任せる。公開判断は上司が行い、公開後に問い合わせ内容の変化を一緒に確認する。"], ["丁寧に対応したい気持ちが強く、判断に迷うと一人で対応を続けてしまうケースです。", "直近の問い合わせ一件を振り返り、どの場面で判断に迷ったかを聞く。", "本人だけで回答できる範囲と、上司へ引き継ぐ条件を決める。次の週に、相談できた場面と残った迷いを確認する。"], ["相手の話を丁寧に聞ける一方、成果につながる自分の強みがわからないケースです。", "直近の商談から、お客様が詳しく話してくれた場面を一緒に探す。", "次の商談では課題を聞く役を本人に任せる。終了後、どの質問で情報を引き出せたかを具体的に伝える。"], ["改善アイデアはあるが、企画として整っていないため発言を控えているケースです。", "週次の打ち合わせ前に、困っている人と試したい案を一つ聞く。", "社内向けの小さな試作を本人に任せ、期限と確認相手を決める。試した反応をもとに、続けるか見直すかを一緒に判断する。"], ["周りを助ける一方、自分の仕事は相談せず抱え込みがちなケースです。", "週の初めに、今週の仕事と一人では判断できない点を一緒に確認する。", "優先順位と相談する条件を決め、週の途中に短く確認する。相談したことを責めず、早く共有できた点を具体的に伝える。"]];
const actionDetails=[["今回は課題の確認と提案の冒頭を本人に任せる。価格・条件の判断は上司が担うと決める。", "商談後に「相手の反応」「次に変えたいこと」を一緒に振り返る。"], ["まず説明文一か所の改善案を本人に任せる。公開前に上司が確認する。", "公開後に問い合わせ内容の変化を一緒に確認し、次の改善点を考える。"], ["本人だけで回答できる範囲と、上司へ引き継ぐ条件を決める。", "次の週に、相談できた場面と残った迷いを確認する。"], ["次の商談では、お客様の課題を聞く役を本人に任せる。", "終了後、どの質問で情報を引き出せたかを具体的に伝える。"], ["社内向けの小さな試作を本人に任せ、期限と確認相手を決める。", "試した反応をもとに、続けるか見直すかを一緒に判断する。"], ["今週は本人が進める仕事を一つ決める。優先順位と、迷ったときの相談先を明確にする。", "週の途中に短く確認する。相談したことを責めず、早く共有できた点を具体的に伝える。"]];
const state={person:0};
const $=id=>document.getElementById(id),art=window.NaritaiArt;
function setText(id,value){$(id).textContent=value;}
const menuItems=[['dashboard','ダッシュボード'],['alerts','アラート'],['trend','総合推移'],['org','組織構図'],['mbti','メンバーのMBTI'],['logs','対応ログ一覧'],['box','匿名の改善提案ボックス'],['retire','退職者分析'],['support','面談サポート'],['cost','採用コスト設定']];
function updateVoice(){setText('voice-index',String(state.person+1).padStart(2,'0')+' / 06');const p=demoData.people[state.person];setText('voice-person',p.name+' · '+p.dept+' / '+p.year);setText('voice-quote','「'+voices[state.person]+'」');document.querySelectorAll('[data-character]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.character)===state.person)));setText('case-person',p.name+' · '+p.dept+' / '+p.year+'の活用例');setText('case-quote','「'+voices[state.person]+'」');const example=concreteCases[state.person];setText('case-strength',example[0]);setText('case-action',example[1]);setText('case-delegate',actionDetails[state.person][0]);setText('case-followup',actionDetails[state.person][1]);}
for(const [index,person] of demoData.people.entries()){
 const character=document.createElement('button');character.type='button';character.className='crowd-person';character.dataset.character=index;character.setAttribute('aria-label',person.name+'の言葉を見る');character.setAttribute('aria-pressed',String(index===0));character.innerHTML=art.person(index)+'<span class="character-label">'+person.name+' <span aria-hidden="true">↗</span></span>';
 character.addEventListener('click',()=>{state.person=index;updateVoice();});$('crowd').append(character);
}
for(const [index,person] of demoData.people.entries()){
 const button=document.createElement('button');button.type='button';button.className='case-character';button.dataset.character=index;button.setAttribute('aria-label',person.name+'・'+person.dept+'・'+person.year+'の活用例を表示');button.setAttribute('aria-pressed',String(index===state.person));button.innerHTML='<span class="case-figure">'+art.person(index)+'</span><span class="case-character-label"><b>'+person.name+'</b><small>'+person.dept+'<br>'+person.year+'</small></span>';
 button.addEventListener('click',()=>{state.person=index;updateVoice();});$('case-picker').append(button);
}
const casePicker=$('case-picker');
for(const button of casePicker.children){
 let timer;const down=()=>{clearTimeout(timer);button.classList.remove('is-looking');};
 button.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')button.classList.add('is-looking');});
 button.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')down();});
 button.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'){clearTimeout(timer);button.classList.add('is-looking');timer=setTimeout(down,4000);}});
 button.addEventListener('focus',()=>{if(button.matches(':focus-visible'))button.classList.add('is-looking');});button.addEventListener('blur',down);
}
updateVoice();
const dialog=$('image-dialog');let imageTrigger=null;for(const trigger of document.querySelectorAll('[data-image]'))trigger.addEventListener('click',()=>{imageTrigger=trigger;const copy=trigger.querySelector('img').cloneNode(true);$('dialog-content').replaceChildren(copy);setText('dialog-caption',trigger.dataset.caption);dialog.showModal();});$('close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>imageTrigger?.focus({preventScroll:true}));
// Six followers with different response speeds; only transform changes during motion.
const playground=$('people-playground'),hero=document.querySelector('.people-hero'),motionButton=$('motion-toggle'),reduced=matchMedia('(prefers-reduced-motion: reduce)');let motionOn=!reduced.matches,raf=0,target=null,visible=true;
const followers=[...document.querySelectorAll('.crowd-person')].map((el,i)=>({el,x:0,y:0,tx:0,ty:0,speed:[.065,.095,.055,.085,.06,.075][i],i}));
function updateMotionButton(){motionButton.setAttribute('aria-pressed',String(motionOn));motionButton.textContent=motionOn?'動き ON ◉':'動き OFF ○';hero.classList.toggle('motion-off',!motionOn||reduced.matches);}
function tick(){raf=0;let moving=false;for(const f of followers){f.x+=(f.tx-f.x)*f.speed;f.y+=(f.ty-f.y)*f.speed;if(Math.abs(f.tx-f.x)>.08||Math.abs(f.ty-f.y)>.08)moving=true;const tilt=Math.max(-7,Math.min(7,(f.tx-f.x)*.08));f.el.style.transform=`translate3d(${f.x.toFixed(2)}px,${f.y.toFixed(2)}px,0) rotate(${tilt.toFixed(2)}deg)`;}if(moving&&motionOn&&visible)raf=requestAnimationFrame(tick);}
function resetCrowd(immediate=false){target=null;for(const f of followers){f.tx=0;f.ty=0;f.el.style.setProperty('--look-x','0px');f.el.style.setProperty('--look-y','0px');if(immediate){f.x=0;f.y=0;f.el.style.transform='';}}if(immediate){cancelAnimationFrame(raf);raf=0;}else if(!raf&&motionOn&&visible)raf=requestAnimationFrame(tick);}
function follow(event){if(event.target.closest('.crowd-person'))return;if(!motionOn||reduced.matches||!visible)return;const r=playground.getBoundingClientRect(),mobile=matchMedia('(max-width:540px)').matches;const x=Math.max(0,Math.min(r.width,event.clientX-r.left)),y=Math.max(0,Math.min(r.height,event.clientY-r.top));target={x,y};for(const f of followers){const original=mobile?((f.i%3)+.5)*r.width/3:(f.i+.5)*r.width/6;const spread=mobile?82:118;const desired=x+(mobile?(f.i%3)-1:f.i-2.5)*spread;const bounded=Math.max(12,Math.min(r.width-f.el.offsetWidth-12,desired-f.el.offsetWidth/2));const natural=original-f.el.offsetWidth/2;f.tx=Math.max(-r.width*.28,Math.min(r.width*.28,bounded-natural));f.ty=Math.max(-28,Math.min(24,(y-r.height*.55)*.16+(f.i%2?8:-5)));f.el.style.setProperty('--look-x',Math.max(-3,Math.min(3,(x-original)/90))+'px');f.el.style.setProperty('--look-y',Math.max(-2,Math.min(2,(event.clientY-r.top-90)/90))+'px');}if(!raf)raf=requestAnimationFrame(tick);}
hero.addEventListener('pointermove',e=>{if(e.pointerType!=='touch')follow(e);});playground.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')follow(e);});hero.addEventListener('pointerleave',()=>resetCrowd());motionButton.addEventListener('click',()=>{motionOn=!motionOn;resetCrowd(true);updateMotionButton();});reduced.addEventListener('change',()=>{motionOn=!reduced.matches;resetCrowd(true);updateMotionButton();});window.addEventListener('resize',()=>resetCrowd(true));document.addEventListener('visibilitychange',()=>{if(document.hidden)resetCrowd(true);});new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible)resetCrowd(true);}).observe(hero);updateMotionButton();if(matchMedia('(pointer:coarse)').matches)setText('play-hint','タップした場所へ、みんなが集まります。');

// Decorative residents stay outside the product frame and never intercept input.
const residents=[['.product',1,'edge-left'],['.support',2,'edge-right'],['.faq',4,'edge-sit'],['.closing',2,'edge-footer']].map(([selector,index,pose],i)=>{
 const section=document.querySelector(selector),el=document.createElement('div');el.className='edge-mascot '+pose;el.setAttribute('aria-hidden','true');el.innerHTML=art.person(index,'edge-'+i);section.append(el);return {section,el};
});
const edgeObserver=new IntersectionObserver(entries=>{for(const entry of entries)entry.target.classList.toggle('is-seen',entry.isIntersecting);},{rootMargin:'80px'});residents.forEach(({el})=>edgeObserver.observe(el));
let edgeRAF=0;
function moveResidents(){edgeRAF=0;for(const {section,el} of residents){const r=section.getBoundingClientRect();const amount=motionOn&&!reduced.matches?Math.max(-16,Math.min(16,(innerHeight*.5-r.top)*.035)):0;el.style.setProperty('--edge-y',amount+'px');}}
window.addEventListener('scroll',()=>{if(!edgeRAF)edgeRAF=requestAnimationFrame(moveResidents);},{passive:true});motionButton.addEventListener('click',moveResidents);reduced.addEventListener('change',moveResidents);moveResidents();

// Keep hover separate from selection: mouse leaves -> E; touch -> F briefly.
const poseTimers=new Map();
function lowerHead(el){clearTimeout(poseTimers.get(el));poseTimers.delete(el);el.classList.remove('is-looking');}
function raiseHead(el){clearTimeout(poseTimers.get(el));poseTimers.delete(el);el.classList.add('is-looking');cancelAnimationFrame(raf);raf=0;for(const f of followers){f.tx=f.x;f.ty=f.y;}}
for(const {el} of followers){
 el.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'||e.pointerType==='pen')raiseHead(el);});
 el.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')lowerHead(el);});
 el.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'){followers.forEach(f=>lowerHead(f.el));raiseHead(el);poseTimers.set(el,setTimeout(()=>lowerHead(el),4000));}});
 el.addEventListener('focus',()=>{if(el.matches(':focus-visible'))raiseHead(el);});
 el.addEventListener('blur',()=>lowerHead(el));
 // Keyboard activation and assistive technology clicks also reveal the face.
 el.addEventListener('click',e=>{if(e.detail===0)raiseHead(el);});
}
hero.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')followers.forEach(f=>lowerHead(f.el));});
document.addEventListener('visibilitychange',()=>{if(document.hidden)followers.forEach(f=>lowerHead(f.el));});
setText('play-hint',matchMedia('(pointer:coarse)').matches?'タップすると、顔を上げます。':'カーソルを合わせると、顔を上げます。');

// Continuous testimonial strip; no hover, focus or button pause.
const evidenceTrack=$('evidence-track');
const evidenceOriginals=[...evidenceTrack.children];
evidenceOriginals.forEach(card=>{const clone=card.cloneNode(true);clone.setAttribute('aria-hidden','true');clone.inert=true;evidenceTrack.appendChild(clone);});
let evidenceLast=0,evidenceRemainder=0;
function animateEvidence(now){const elapsed=evidenceLast?Math.min(now-evidenceLast,50):0;evidenceLast=now;if(!document.hidden&&!reduced.matches){const span=evidenceTrack.children[evidenceOriginals.length].offsetLeft-evidenceTrack.children[0].offsetLeft;evidenceRemainder+=elapsed*.025;const step=Math.floor(evidenceRemainder);evidenceRemainder-=step;evidenceTrack.scrollLeft+=step;if(span>0&&evidenceTrack.scrollLeft>=span)evidenceTrack.scrollLeft-=span;}requestAnimationFrame(animateEvidence);}
requestAnimationFrame(animateEvidence);

// Mobile reading hierarchy: keep every feature, reveal its detail on demand.
const mobileReading=matchMedia('(max-width:768px)');
function syncReadingDetails(){document.querySelectorAll('.support-detail').forEach(el=>el.open=!mobileReading.matches);}
document.querySelectorAll('.feature-detail').forEach(el=>el.open=false);
syncReadingDetails();mobileReading.addEventListener('change',syncReadingDetails);
document.querySelectorAll('[data-concern-art]').forEach(el=>el.innerHTML=window.NaritaiArt.person(Number(el.dataset.concernArt),'concern'));
