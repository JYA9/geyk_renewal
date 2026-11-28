let category='전체';const results=document.querySelector('#results'),search=document.querySelector('#search'),year=document.querySelector('#year');
// Render only source-controlled content. Search input never becomes HTML.
function matchesArchive(item, keyword) {
  const tags = [item.category, item.team || '기타'];
  return (category === '전체' || tags.includes(category))
    && (!year.value || (item.year || item.date?.slice(0, 4)) === year.value)
    && [item.title, item.description, item.publisher, siteLabel(item.publisher), ...tags, ...tags.map(siteLabel), ...(item.tags ?? []), ...(item.tags ?? []).map(siteLabel)].join(' ').toLocaleLowerCase().includes(keyword);
}

const pressList = document.querySelector('#press-list');
const pressMore = document.querySelector('#press-more');
const initialPressLimit = 5;
let pressLimit = initialPressLimit;

pressMore.addEventListener('click', () => {
  pressLimit = 10;
  render();
  pressList.children[initialPressLimit]?.focus();
  window.amplitude?.track('Press List Expanded');
});

function render(){const q=search.value.trim().toLocaleLowerCase();
const list=activities.filter(a=>matchesArchive(a,q));
const articles=pressArticles.filter(a=>matchesArchive(a,q));
document.querySelector('#count').textContent=siteText(`활동 ${list.length}건 · 언론 보도 ${articles.length}건`, `Activities: ${list.length} · Press articles: ${articles.length}`);
renderPress(pressList, articles.slice(0, pressLimit));
pressMore.hidden = pressLimit > initialPressLimit || articles.length <= initialPressLimit;
document.querySelector('.archive-note').hidden=!list.length;
results.innerHTML=list.length?list.map(a=>`<a class="activity" href="${sitePage('detail')}?activity=${a.id}"><div class="activity-visual" style="background:${a.color||'#dce8d2'}">${a.image?`<img src="${a.image}" alt="${activityDetails[a.id].photos[0].alt}" loading="lazy">`:`<span class="poster-title">${a.visual.replaceAll('\n','<br>')}</span><span class="poster-circle"></span>`}</div><small>${siteLabel(a.category)}</small><h3>${a.title}</h3><div class="activity-meta"><time>${a.date}</time><span aria-hidden="true">↗</span></div></a>`).join(''):articles.length?'':siteText('<div class="empty"><strong>검색 결과가 없습니다.</strong><p>다른 키워드나 연도로 다시 찾아보세요.</p><button id="reset">필터 초기화</button></div>', '<div class="empty"><strong>No results found.</strong><p>Try another keyword or year.</p><button id="reset">Reset filters</button></div>');}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render()}));search.addEventListener('input',render);year.addEventListener('change',render);
results.addEventListener('click', event => {
  if (event.target.closest('#reset')) {
    search.value = '';
    year.value = '';
    document.querySelector('[data-filter="전체"]').click();
  }
});

document.querySelector('#news-list').innerHTML = recruitment.map(record =>
  `<a class="news-row" href="${sitePage('detail')}?recruit=${record.id}"><small>${siteText('멤버 모집 · 마감', 'Recruitment · Closed')}</small><strong>${record.title}</strong><time>${record.date}</time><span aria-hidden="true">↗</span></a>`
).join('');

document.querySelectorAll('.nav-social-link, .hero-actions .pill').forEach(link => {
  link.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch' && event.isPrimary) {
      link.classList.add('is-pressed');
    }
  });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture', 'pointerleave']) {
    link.addEventListener(type, () => link.classList.remove('is-pressed'));
  }
});

const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');function setMenu(open){nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?siteText('메뉴 닫기','Close menu'):siteText('메뉴 열기','Open menu'));menu.textContent=open?'✕':'☰'}menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));nav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});const header=document.querySelector('#header');function updateHeader(){header.classList.toggle('scrolled',window.scrollY>0)}window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();render();
