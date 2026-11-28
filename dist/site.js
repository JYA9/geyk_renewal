const siteEnglish = document.documentElement.lang === 'en';
const siteText = (korean, english) => siteEnglish ? english : korean;
const sitePage = name => `${name}${siteEnglish ? '.en' : ''}.html`;

const englishLabels = {
  '국제 연대': 'International Solidarity',
  '캠페인': 'Campaigns',
  '교육·행사': 'Education & Events',
  'COP팀': 'COP Team',
  '정의팀': 'Climate Justice Team',
  '생물 다양성팀': 'Biodiversity Team',
  '기타': 'Other',
  '모의협상': 'Mock Negotiations',
  '모의 COP23': 'Mock COP23',
  '투데이신문': 'Today Newspaper',
  '머니투데이': 'Money Today',
  '헤럴드경제': 'Herald Business',
  '연합뉴스': 'Yonhap News Agency',
  '국가기후위기대응위원회': 'National Climate Crisis Response Committee',
  '한겨레': 'The Hankyoreh',
  '산업인뉴스': 'Sanupin News',
};
const siteLabel = label => siteEnglish ? (englishLabels[label] ?? label) : label;

const languageSwitch = document.querySelector('.language-switch');
if (languageSwitch) {
  const alternatePage = new URL(languageSwitch.href);
  const syncLanguageLink = () => {
    alternatePage.search = location.search;
    alternatePage.hash = location.hash;
    languageSwitch.href = alternatePage.href;
  };
  syncLanguageLink();
  languageSwitch.addEventListener('click', syncLanguageLink);
  window.addEventListener('hashchange', syncLanguageLink);
  window.addEventListener('pageshow', syncLanguageLink);
}
