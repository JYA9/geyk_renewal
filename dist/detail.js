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
    <figcaption>${photo.caption} · 자료 GEYK</figcaption>
  </figure>`;
}

function originalBody(key) {
  return `<div class="record-original-body" data-original="${key}" aria-busy="true">
    <p>원문을 불러오는 중입니다.</p>
  </div>`;
}

if (activity) {
  const detail = activityDetails[activity.id];
  const [cover, ...gallery] = detail.photos ?? [];
  const hasOriginal = activity.id !== 'un';
  content.innerHTML = `${recordHeading(activity, activity.category)}
    ${cover ? recordFigure(cover) : ''}
    <div class="record-body">
      ${hasOriginal ? originalBody(activity.id) : '<p>2020.7.4-7.5. 기후변화협상 모의유엔 진행</p>'}
      ${gallery.length ? `<section aria-labelledby="record-gallery-title">
        <h2 id="record-gallery-title">현장 사진</h2>
        <div class="record-gallery">${gallery.map(photo => recordFigure(photo, true)).join('')}</div>
      </section>` : ''}
      ${!hasOriginal || detail.tag ? `<div class="record-sources">
        ${!hasOriginal ? recordSource(activity.url, 'GEYK 공식 연혁') : ''}
        ${detail.tag ? recordSource(`https://geyk.org/tag/${encodeURIComponent(detail.tag)}/`, `GEYK ${detail.tag} 게시글 모아보기`) : ''}
      </div>` : ''}
    </div>`;
} else if (notice) {
  const detail = recruitmentDetails[notice.id];
  back.href = 'index.html#news';
  back.textContent = '← 소식';
  content.innerHTML = `${recordHeading(notice, '멤버 모집 · 접수 마감')}
    ${recordFigure(detail.photo)}
    <div class="record-body">
      ${originalBody(`recruit-${notice.id}`)}
      <div class="record-sources">
        ${recordSource(detail.officialAnnouncement ?? notice.url, 'GEYK 공식 모집공고')}
        ${detail.form ? `<a class="text-link" href="${detail.form}">지난 지원서 양식 다운로드 ↓</a>` : ''}
      </div>
    </div>`;
} else {
  content.innerHTML = '<h1>상세 글을 찾을 수 없습니다</h1><p>활동 아카이브나 소식에서 글을 다시 선택해 주세요.</p><a class="text-link" href="index.html#news">모집 소식 보기 ↗</a>';
}

async function loadOriginal(body) {
  try {
    const response = await fetch(`originals/${body.dataset.original}.html`);
    if (!response.ok) throw new Error('Original article could not be loaded');
    // Only same-origin, sanitized fragments stored in the repository are inserted.
    body.innerHTML = await response.text();
  } catch {
    body.textContent = '원문을 불러오지 못했습니다. 페이지를 새로고침해 주세요.';
  } finally {
    body.removeAttribute('aria-busy');
  }
}

const original = content.querySelector('.record-original-body');
if (original) loadOriginal(original);
