const activities=[
{id:'cop24',team:'COP팀',title:'UNFCCC COP24, 청년의 목소리를 세계로',category:'국제 연대',date:'2018.12',year:'2018',visual:'COP24',color:'#dce8d2',description:'폴란드 카토비체에서 개최된 UN기후변화협약 당사국총회(COP24)에 참관하고, Korea Pavilion 부대행사 주최 및 청년활동에 참여했습니다.',url:'https://geyk.org/2019/01/07/unfccc-기후변화협약-cop24-참석한-geyk/'},
{id:'power2019',title:'Power Shift Korea 2019 : 재생에너지 맛집',category:'교육·행사',date:'2019.09.28',year:'2019',visual:'POWER\nSHIFT',color:'#e8d9bf',description:'제5회 Power Shift Korea 2019는 ‘재생에너지 맛집’을 주제로 개최한 행사입니다. GEYK의 활동 연혁에서 행사 기록을 확인할 수 있습니다.',url:'https://geyk.org/2019/10/21/재생에너지-맛집psk-개최/'},
{id:'camp',title:'동아시아 청년과 함께한 기후 리더십 캠프',category:'국제 연대',date:'2017.08.17 – 08.21',year:'2017',image:'assets/camp.jpg',description:'대만에서 열린 East Asia Climate Leadership Camp #3에 참여하며 동아시아 청년들과 기후변화 대응을 위한 경험과 생각을 나눴습니다.',url:'https://geyk.org/2017/08/29/eaclc-3-east-asia-climate-leadership-camp-참석/'},
{id:'march',title:'국민의 기후행진, 함께 내딛는 한 걸음',category:'캠페인',date:'2014.09.21',year:'2014',visual:'PEOPLE’S\nCLIMATE\nMARCH',color:'#d1dfdb',description:'GEYK는 2014년 9월 21일 People’s Climate March in Seoul 행사를 주최했습니다. 시민과 함께 기후변화 대응의 필요성을 이야기했습니다.',url:'https://geyk.org/2014/09/22/국민의-기후행진-peoples-climate-march-in-seoul/'},
{id:'bee',title:'제2회 꿀벌 프로젝트',category:'캠페인',date:'2016.07.09',year:'2016',visual:'BEE\nTHE CHANGE',color:'#efe7b8',description:'2016년 7월 9일 개최한 제2회 꿀벌 프로젝트. GEYK가 이어온 시민 참여 활동의 기록을 만나보세요.',url:'https://geyk.org/2016/11/23/제2회-꿀벌-프로젝트-bee-project-2/'},
{id:'un',title:'기후변화협상 모의유엔',category:'교육·행사',date:'2020.07.04 – 07.05',year:'2020',visual:'CLIMATE\nNEGOTIATION',color:'#dce1ed',description:'2020년 7월 4일부터 5일까지 기후변화협상 모의유엔을 진행했습니다. 국제 기후협상과 청년 참여를 연결하는 활동입니다.',url:'https://geyk.org/history/'}
];
const recruitUrl=(n,date)=>`https://geyk.org/${date}/기후변화청년단체geyk의-${n}기-${n===23?'멤버':'신입멤버'}를-모집합니다/`;
const recruitment=[{id:25,date:'2026.08.11',url:recruitUrl(25,'2026/08/11'),title:'GEYK 25기 신입 멤버를 모집합니다',deadline:'2026.08.21'},{id:24,date:'2026.02.06',url:recruitUrl(24,'2026/02/06'),title:'GEYK 24기 신입 멤버를 모집합니다'},{id:23,date:'2025.08.22',url:recruitUrl(23,'2025/08/22'),title:'GEYK 23기 멤버를 모집합니다'}];
let category='전체';const results=document.querySelector('#results'),search=document.querySelector('#search'),year=document.querySelector('#year');
// Render only source-controlled content. Search input never becomes HTML.
function matchesArchive(item, keyword) {
  const tags = [item.category, item.team || '기타'];
  return (category === '전체' || tags.includes(category))
    && (!year.value || (item.year || item.date?.slice(0, 4)) === year.value)
    && [item.title, item.description, item.publisher, ...tags].join(' ').toLocaleLowerCase().includes(keyword);
}

const pressList = document.querySelector('#press-list');
const pressMore = document.querySelector('#press-more');
const initialPressLimit = 5;
let pressLimit = initialPressLimit;

pressMore.addEventListener('click', () => {
  pressLimit = 10;
  render();
  pressList.children[initialPressLimit]?.focus();
});

function render(){const q=search.value.trim().toLocaleLowerCase();
const list=activities.filter(a=>matchesArchive(a,q));
const articles=pressArticles.filter(a=>matchesArchive(a,q));
document.querySelector('#count').textContent=`활동 ${list.length}건 · 언론 보도 ${articles.length}건`;
renderPress(pressList, articles.slice(0, pressLimit));
pressMore.hidden = pressLimit > initialPressLimit || articles.length <= initialPressLimit;
document.querySelector('.archive-note').hidden=!list.length;
results.innerHTML=list.length?list.map(a=>`<button class="activity" data-activity="${a.id}" aria-label="${a.title} 상세 보기"><div class="activity-visual" style="background:${a.color||'#dce8d2'}">${a.image?`<img src="${a.image}" alt="동아시아 기후 리더십 캠프 현장" loading="lazy">`:`<span class="poster-title">${a.visual.replaceAll('\n','<br>')}</span><span class="poster-circle"></span>`}</div><small>${a.category}</small><h3>${a.title}</h3><div class="activity-meta"><time>${a.date}</time><span aria-hidden="true">↗</span></div></button>`).join(''):articles.length?'':'<div class="empty"><strong>검색 결과가 없습니다.</strong><p>다른 키워드나 연도로 다시 찾아보세요.</p><button id="reset">필터 초기화</button></div>';}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render()}));search.addEventListener('input',render);year.addEventListener('change',render);
results.addEventListener('click',e=>{const button=e.target.closest('[data-activity]');if(button){const a=activities.find(a=>a.id===button.dataset.activity);openDetail(`<div class="detail-label">${a.category} / ${a.date}</div><h2>${a.title}</h2>${a.image?`<img src="${a.image}" alt="기후 리더십 캠프 현장">`:''}<p>${a.description}</p><p class="muted">GEYK 공식 활동 연혁을 바탕으로 재구성한 요약입니다.</p><a class="source" href="${a.url}" target="_blank" rel="noopener">GEYK 활동 원문 확인 ↗</a>`,button)}if(e.target.closest('#reset')){search.value='';year.value='';document.querySelector('[data-filter="전체"]').click()}});
document.querySelector('#news-list').innerHTML=recruitment.map(r=>`<button class="news-row" data-recruit="${r.id}"><small>멤버 모집 · 마감</small><strong>${r.title}</strong><time>${r.date}</time><span aria-hidden="true">↗</span></button>`).join('');
const dialog=document.querySelector('#detail');let lastFocus;function openDetail(html,trigger){lastFocus=trigger;document.querySelector('#detail-content').innerHTML=html;document.querySelector('#detail-content h2').id='detail-title';dialog.showModal();document.body.classList.add('modal-open');}function closeDetail(){dialog.close()}document.querySelector('.close').addEventListener('click',closeDetail);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDetail()}});dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastFocus?.focus()});
document.addEventListener('click',e=>{const b=e.target.closest('[data-recruit]');if(!b)return;const r=recruitment.find(x=>x.id===Number(b.dataset.recruit));openDetail(`<div class="detail-label">MEMBER RECRUITMENT · 접수 마감</div><h2>${r.title}</h2>${r.id===25?`<p>“우리의 손으로 기후위기를 끝내는 내일!”<br>기후위기 해결의 실마리를 모색하고, 청년의 시각으로 변화를 만들어갈 동료를 모집한 공고입니다.</p><dl class="detail-info"><dt>서류 접수</dt><dd>2026.08.11 – 2026.08.21 · 마감</dd><dt>비대면 면접</dt><dd>2026.08.24 – 08.28</dd><dt>최종 합격자 발표 / 신입 OT</dt><dd>2026.08.31 / 2026.09.05 (필수 참석)</dd><dt>모집 팀</dt><dd>당사국총회 · 기후정서 · EMU레터 · 도시농업 · 생물다양성</dd></dl><p>전공·직업과 관계없이 기후변화에 뜻이 있는 청년들과 함께합니다. COP 현장 참관은 상황과 조건에 따라 선별·운영될 수 있습니다.</p><a class="source" href="https://geyk.org/wp-content/uploads/2026/08/GEYK-25기-지원서_홍길동.docx">지원서 양식 다운로드 ↗</a>`:`<p>${r.date}에 게시된 지난 모집공고입니다. 모집 자격과 활동 팀 등 자세한 내용은 GEYK 공식 공고 원문에서 확인해 주세요.</p>`}<a class="source" href="${r.url}" target="_blank" rel="noopener">공식 모집공고 원문 보기 ↗</a><p class="muted">2026.11.17 업데이트</p>`,b)});
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');function setMenu(open){nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');menu.textContent=open?'✕':'☰'}menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));nav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});const header=document.querySelector('#header');function updateHeader(){header.classList.toggle('scrolled',window.scrollY>0)}window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();render();
