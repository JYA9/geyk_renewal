// Dates are publication dates confirmed by the publisher or its syndication partner.
const todayArticle = id =>
  `https://www.ntoday.co.kr/news/articleView.html?idxno=${id}`;

const pressArticles = [
  { team: 'COP팀', category: '국제 연대', publisher: '투데이신문', date: '2026-08-10',
    title: '“정책은 있는데, 시민은 닿는가”…GEYK, 서울의 ‘마지막 1km’ 점검',
    url: 'https://m.newspic.kr/view.html?cp=D7tev39p&nid=2026081010531487738&pn=564' },
  { team: '생물 다양성팀', category: '교육·행사', publisher: '머니투데이', date: '2026-02-04',
    title: '주한EU대표부·GEYK, 재생에너지-생물다양성 상생 논의',
    url: 'https://www.mt.co.kr/industry/2026/02/04/2026020413563817596' },
  { team: '생물 다양성팀', category: '교육·행사', publisher: '헤럴드경제', date: '2026-02-03',
    title: 'GEYK, 유럽연합과 제3회 생물다양성 청년 포럼 개최',
    url: 'https://biz.heraldcorp.com/article/10668590' },
  { team: '기타', publisher: 'YTN', date: '2025-08-14',
    title: 'YTN 연중캠페인: 기후변화청년단체 GEYK 김지윤 활동가',
    url: 'https://m.ytn.co.kr/replay/replay_view.php?idx=279&key=202508141058580220&m_cd=0538' },
  { team: '기타', publisher: '연합뉴스', date: '2024-06-05',
    title: '서울시 환경상 대상에 기후변화청년단체 GEYK',
    url: 'https://www.yna.co.kr/view/AKR20240605030600004' },
  { team: '기타', category: '교육·행사', publisher: '국가기후위기대응위원회', date: '2024-06-04',
    title: '기후위기와 청년참여: GEYK 김지윤 대표의 이야기',
    url: 'https://www.pcccr.go.kr/base/board/read?boardManagementNo=65&boardNo=3382&menuLevel=3&menuNo=15&page=1&searchCategory=&searchType=&searchWord=' },
  { team: 'COP팀', category: '국제 연대', publisher: '투데이신문', date: '2026-11-20',
    title: "[GEYK의 COP31 탐방기 in 안탈리아③] 아이들이 자라는 동안, 기후적응은 어디까지 왔을까",
    url: todayArticle(131000) },
  { team: 'COP팀', category: '국제 연대', publisher: '투데이신문', date: '2026-11-19',
    title: "[GEYK의 COP31 탐방기 in 안탈리아 ②] 이상기후에 흔들리는 식탁, ‘이행의 COP’는 무엇을 바꿔야 할까",
    url: todayArticle(130967) },
  { team: 'COP팀', category: '국제 연대', publisher: '투데이신문', date: '2026-11-17',
    title: "[GEYK의 COP31 탐방기 in 안탈리아①] 세계 정상들의 약속, 어디까지 왔을까",
    url: todayArticle(130904) },
  { team: '정의팀', publisher: '투데이신문', date: '2026-09-02',
    title: "[GEYK 정의로운 이야기] 기후 재난, 도시 결정 권한의 주인을 묻다",
    url: todayArticle(129088) },
  { team: '정의팀', publisher: '투데이신문', date: '2026-08-29',
    title: "[GEYK 정의로운 이야기] 청년 1인 가구로 본 기후부정의...폭염은 인간다움을 어떻게 훼손하는가",
    url: todayArticle(129024) },
  { team: '정의팀', publisher: '투데이신문', date: '2026-08-25',
    title: "[GEYK 정의로운 이야기] 폭염에도 관계를 잇는 곳...‘무더위쉼터’라는 이름 너머",
    url: todayArticle(128952) },
  { team: '정의팀', publisher: '한겨레', date: '2026-10-30',
    title: "책은 책, 나는 나? 책 한권이 ‘기후정의 편지’로! [.txt]",
    url: 'https://www.hani.co.kr/arti/culture/book/1284955.html' },
  { team: '생물 다양성팀', publisher: '투데이신문', date: '2026-07-15',
    title: "[기고] 평가를 위한 평가를 넘어, 살아 있는 생물다양성 정책으로",
    url: todayArticle(128175) },
  { team: '생물 다양성팀', publisher: '투데이신문', date: '2026-02-04',
    title: "GEYK, ‘제3회 생물다양성 청년 포럼’ 개최...재생에너지-자연 보호 상생 해법 논의",
    url: todayArticle(124934) },
  { team: '생물 다양성팀', publisher: '산업인뉴스', date: '2026-02-09',
    title: "주한 EU 대표부ㆍ청년단체 GEYK, ‘재생에너지-생물다양성 상생’ 포럼",
    url: 'https://www.sanupin-news.kr/news/curationView.html?idxno=13491' },
].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

function renderPress(pressList, list) {
  pressList.replaceChildren();
  if (!list.length) {
    pressList.textContent = '조건에 맞는 언론 보도가 없습니다.';
    return;
  }

  for (const article of list) {
    const link = document.createElement('a');
    link.className = 'news-row';
    link.href = article.url;
    link.target = '_blank';
    link.rel = 'noopener';

    const label = document.createElement('small');
    label.textContent = `${article.team} · ${article.publisher}`;
    const title = document.createElement('strong');
    title.textContent = article.title;
    const date = document.createElement(article.date ? 'time' : 'span');
    date.className = 'press-date';
    date.textContent = article.date?.replaceAll('-', '.') || '발행일 미확인';
    if (article.date) date.dateTime = article.date;
    link.append(label, title, date);
    pressList.append(link);
  }
}

const fullPressList = document.querySelector('[data-press-all]');
if (fullPressList) renderPress(fullPressList, pressArticles);
