const params = new URLSearchParams(location.search);
const activityId = params.get('activity');
const activity = activities.find(item => item.id === (activityId === 'be' ? 'bee' : activityId));
const notice = recruitment.find(item => String(item.id) === params.get('recruit'));
const back = document.querySelector('#record-back');
const content = document.querySelector('#record-content');

// The URL only selects existing source-controlled records.
function recordHeading(record, label) {
  document.title = `${record.title} — GEYK`;
  return `<div class="record-heading">
    <p class="record-meta">${label} <span>·</span> ${record.date}</p>
    <h1>${record.title}</h1>
  </div>`;
}

function recordSource(url, label) {
  return `<a class="text-link" href="${url.replaceAll('&', '&amp;')}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
}

function recordFigure(photo, lazy = false) {
  return `<figure class="record-photo">
    <img src="${photo.src}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}"${lazy ? ' loading="lazy"' : ''}>
    <figcaption>${photo.caption} · ${siteText('자료 GEYK', 'Source: GEYK')}</figcaption>
  </figure>`;
}

function originalBody(key) {
  return `<div class="record-original-body" data-original="${key}" aria-busy="true">
    <p>${siteText('원문을 불러오는 중입니다.', 'Loading the article…')}</p>
  </div>`;
}

if (activity) {
  const detail = activityDetails[activity.id];
  const [cover, ...gallery] = detail.photos ?? [];
  const hasOriginal = activity.id !== 'un';
  content.innerHTML = `${recordHeading(activity, siteLabel(activity.category))}
    ${cover ? recordFigure(cover) : ''}
    <div class="record-body">
      ${hasOriginal ? originalBody(activity.id) : siteText('<p>2020.7.4-7.5. 기후변화협상 모의유엔 진행</p>', '<p>GEYK held a Model UN climate negotiation on July 4–5, 2020.</p>')}
      ${gallery.length ? `<section aria-labelledby="record-gallery-title">
        <h2 id="record-gallery-title">${siteText('현장 사진','Event Photos')}</h2>
        <div class="record-gallery">${gallery.map(photo => recordFigure(photo, true)).join('')}</div>
      </section>` : ''}
      ${!hasOriginal || detail.tag ? `<div class="record-sources">
        ${!hasOriginal ? recordSource(activity.url, siteText('GEYK 공식 연혁','GEYK’s Official History')) : ''}
        ${detail.tag ? recordSource(`https://geyk.org/tag/${encodeURIComponent(detail.tag)}/`, siteText(`GEYK ${detail.tag} 게시글 모아보기`, `GEYK ${siteLabel(detail.tag)} Posts`)) : ''}
      </div>` : ''}
    </div>`;
} else if (notice) {
  const detail = recruitmentDetails[notice.id];
  back.href = `${sitePage('index')}#news`;
  back.textContent = siteText('← 소식','← News');
  content.innerHTML = `${recordHeading(notice, siteText('멤버 모집 · 접수 마감', 'Recruitment · Applications Closed'))}
    ${recordFigure(detail.photo)}
    <div class="record-body">
      ${originalBody(`recruit-${notice.id}`)}
      <div class="record-sources">
        ${recordSource(detail.officialAnnouncement ?? notice.url, siteText('GEYK 공식 모집공고', 'Official GEYK Recruitment Notice'))}
        ${detail.form ? `<a class="text-link" href="${detail.form}">${siteText('지난 지원서 양식 다운로드 ↓','Download the archived application form ↓')}</a>` : ''}
      </div>
    </div>`;
} else {
  content.innerHTML = siteText(
    '<h1>상세 글을 찾을 수 없습니다</h1><p>활동 아카이브나 소식에서 글을 다시 선택해 주세요.</p><a class="text-link" href="index.html#news">모집 소식 보기 ↗</a>',
    '<h1>Page not found</h1><p>Choose another post from the archive or news section.</p><a class="text-link" href="index.en.html#news">View recruitment news ↗</a>'
  );
}

async function loadOriginal(body) {
  try {
    const response = await fetch(`originals/${siteEnglish ? 'en/' : ''}${body.dataset.original}.html`);
    if (!response.ok) throw new Error('Original article could not be loaded');
    // Only same-origin, sanitized fragments stored in the repository are inserted.
    body.innerHTML = await response.text();
  } catch {
    body.textContent = siteText('원문을 불러오지 못했습니다. 페이지를 새로고침해 주세요.', 'The article could not load. Please refresh the page.');
  } finally {
    body.removeAttribute('aria-busy');
  }
}

const original = content.querySelector('.record-original-body');
if (original) loadOriginal(original);
