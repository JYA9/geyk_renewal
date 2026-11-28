const activities=[
{id:'cop24',team:'COP팀',title:siteText('UNFCCC COP24, 청년의 목소리를 세계로', "UNFCCC COP24: Bringing Youth Voices to the World"),category:'국제 연대',date:'2018.12',year:'2018',visual:'COP24',color:'#dce8d2',description:siteText('폴란드 카토비체에서 개최된 UN기후변화협약 당사국총회(COP24)에 참관하고, Korea Pavilion 부대행사 주최 및 청년활동에 참여했습니다.', "GEYK attended COP24 in Katowice, Poland, organized a side event at the Korea Pavilion, and joined youth actions."),url:'https://geyk.org/2019/01/07/unfccc-기후변화협약-cop24-참석한-geyk/'},
{id:'power2019',title:siteText('Power Shift Korea 2019 : 재생에너지 맛집', "Power Shift Korea 2019: Serving Up Renewable Energy"),category:'교육·행사',date:'2019.09.28',year:'2019',visual:'POWER\nSHIFT',color:'#e8d9bf',description:siteText('제5회 Power Shift Korea 2019는 ‘재생에너지 맛집’을 주제로 개최한 행사입니다. 청년과 전문가가 석탄투자 철회와 재생에너지 전환을 함께 논의했습니다.', "Young people and experts discussed coal divestment and the transition to renewable energy at Power Shift Korea."),url:'https://geyk.org/2019/10/21/재생에너지-맛집psk-개최/'},
{id:'camp',title:siteText('동아시아 청년과 함께한 기후 리더십 캠프', "East Asia Climate Leadership Camp"),category:'국제 연대',date:'2017.08.17 – 08.21',year:'2017',image:'assets/camp.jpg',description:siteText('대만에서 열린 East Asia Climate Leadership Camp #3에 참여하며 동아시아 청년들과 기후변화 대응을 위한 경험과 생각을 나눴습니다.', "GEYK joined youth from across East Asia in Taiwan to share ideas and experiences on climate action."),url:'https://geyk.org/2017/08/29/eaclc-3-east-asia-climate-leadership-camp-참석/'},
{id:'march',title:siteText('국민의 기후행진, 함께 내딛는 한 걸음', "People’s Climate March in Seoul"),category:'캠페인',date:'2014.09.21',year:'2014',visual:'PEOPLE’S\nCLIMATE\nMARCH',color:'#d1dfdb',description:siteText('GEYK는 2014년 9월 21일 People’s Climate March in Seoul 행사를 주최했습니다. 시민과 함께 기후변화 대응의 필요성을 이야기했습니다.', "GEYK organized the People’s Climate March in Seoul on September 21, 2014."),url:'https://geyk.org/2014/09/22/국민의-기후행진-peoples-climate-march-in-seoul/'},
{id:'bee',title:siteText('제2회 꿀벌 프로젝트', "The Second Bee Project"),category:'캠페인',date:'2016.07.09',year:'2016',visual:'BEE\nTHE CHANGE',color:'#efe7b8',description:siteText('2016년 7월 9일 개최한 제2회 꿀벌 프로젝트. 시민과 함께 꿀벌, 기후변화, 야생화의 관계를 살펴봤습니다.', "On July 9, 2016, participants learned about bees, climate change, and wildflowers."),url:'https://geyk.org/2016/11/23/제2회-꿀벌-프로젝트-bee-project-2/'},
{id:'cop-in-my-city-2017',title:siteText('COP in My City in Seoul 개최', "COP in My City in Seoul"),category:'교육·행사',date:'2017.08.25 – 08.26',year:'2017',visual:'COP IN\nMY CITY',color:'#dce8d2',tags:['모의협상','모의 COP23'],url:'https://geyk.org/2017/08/29/cop-in-my-city-in-seoul-개최/'},
{id:'after-cop24-in-my-city',title:siteText('After COP24 in My City', "After COP24 in My City"),category:'교육·행사',date:'2019.01.05',year:'2019',visual:'AFTER\nCOP24',color:'#d1dfdb',tags:['모의협상'],url:'https://geyk.org/2019/01/07/after-cop24-in-my-city/'},
{id:'un',title:siteText('기후변화협상 모의유엔', "Model UN Climate Negotiations"),category:'교육·행사',date:'2020.07.04 – 07.05',year:'2020',visual:'CLIMATE\nNEGOTIATION',color:'#dce1ed',description:siteText('2020년 7월 4일부터 5일까지 기후변화협상 모의유엔을 진행했습니다. 국제 기후협상과 청년 참여를 연결하는 활동입니다.', "GEYK held a model UN climate negotiation on July 4 and 5, 2020."),url:'https://geyk.org/history/'}
];
const recruitUrl=(n,date)=>`https://geyk.org/${date}/기후변화청년단체geyk의-${n}기-${n===23?'멤버':'신입멤버'}를-모집합니다/`;
const recruitment=[{id:25,date:'2026.08.11',url:recruitUrl(25,'2026/08/11'),title:siteText('GEYK 25기 신입 멤버를 모집합니다', "GEYK Cohort 25: New Member Recruitment"),deadline:'2026.08.21'},{id:24,date:'2026.02.06',url:recruitUrl(24,'2026/02/06'),title:siteText('GEYK 24기 신입 멤버를 모집합니다', "GEYK Cohort 24: New Member Recruitment")},{id:23,date:'2025.08.22',url:recruitUrl(23,'2025/08/22'),title:siteText('GEYK 23기 멤버를 모집합니다', "GEYK Cohort 23: Member Recruitment")}];

const activityDetails = {
  cop24: {
    photos: [
      { src: 'assets/records/cop24-delegation.webp', width: 1440, height: 810, alt: siteText('COP24 회의장 무대 앞에서 태극기와 GEYK 현수막을 펼친 참가단', "The GEYK delegation holds its banner and the Korean flag in front of the COP24 stage"), caption: siteText('폴란드 카토비체 COP24에 참가한 GEYK', "GEYK at COP24 in Katowice, Poland") },
      { src: 'assets/records/cop24-coy-room.webp', width: 1440, height: 808, alt: siteText('광장에서 함께 대형을 만든 청년회의 참가자들', "Conference of Youth participants form a shape together in a square"), caption: siteText('COP24에 앞서 열린 청년회의(COY)', "Conference of Youth (COY), held ahead of COP24") },
      { src: 'assets/records/cop24-coy-group.webp', width: 1440, height: 808, alt: siteText('태극기와 기후행동 현수막을 든 GEYK 청년회의 참가자들', "GEYK participants hold a Korean flag and a climate action banner at the Conference of Youth"), caption: siteText('청년회의에서 기후행동 메시지를 전한 GEYK', "GEYK shares a climate action message at COY") },
      { src: 'assets/records/cop24-march-group.webp', width: 1440, height: 1080, alt: siteText('카토비체 거리에서 GEYK 현수막을 든 기후행진 참가단', "The GEYK delegation carries its banner through the streets of Katowice during the climate march"), caption: siteText('12월 8일 카토비체 기후행진에 참여한 GEYK', "GEYK joins the Katowice climate march on December 8") },
      { src: 'assets/records/cop24-march.webp', width: 809, height: 1440, alt: siteText('카토비체 기후행진에서 손팻말을 든 참가자들', "Participants hold signs at the Katowice climate march"), caption: siteText('카토비체 기후행진 현장', "The Katowice climate march") },
    ],
  },
  power2019: {
    photos: [
      { src: 'assets/records/power-shift-2019.webp', width: 1440, height: 810, alt: siteText('재생에너지 맛집 토크콘서트 현수막을 든 참가자들', "Participants hold a banner at the Serving Up Renewable Energy event"), caption: siteText('KB청춘마루에서 열린 재생에너지 맛집 토크콘서트', "Serving Up Renewable Energy at KB Youth Maru") },
    ],
  },
  camp: {
    photos: [
      { src: 'assets/camp.jpg', width: 1200, height: 800, alt: siteText('대만에서 열린 동아시아 기후 리더십 캠프 현장', "Participants at the East Asia Climate Leadership Camp in Taiwan"), caption: siteText('제3회 동아시아 기후 리더십 캠프', "Third East Asia Climate Leadership Camp") },
    ],
  },
  march: {
    photos: [
      { src: 'assets/records/climate-march-2014.webp', width: 852, height: 640, alt: siteText('서울 도심을 걸으며 기후행동 팻말을 든 시민들', "People carrying climate action signs march through central Seoul"), caption: siteText('2014년 서울 국민의 기후행진', "The 2014 People’s Climate March in Seoul") },
      { src: 'assets/records/climate-march-2014-2.webp', width: 640, height: 852, alt: siteText('온실가스 감축을 촉구하는 손팻말을 든 서울 기후행진 참가자', "A Seoul climate marcher holds a sign calling for emissions cuts"), caption: siteText('서울 국민의 기후행진 참가자의 메시지', "A message from a Seoul climate marcher") },
    ],
  },
  bee: {
    photos: [
      { src: 'assets/records/bee-project-2.webp', width: 600, height: 960, alt: siteText('제2회 꿀벌 프로젝트 강연과 야생화 심기 안내 포스터', "Poster for the second Bee Project, advertising talks and wildflower planting"), caption: siteText('제2회 꿀벌 프로젝트 공식 포스터', "Official poster for the second Bee Project") },
    ],
  },
  'cop-in-my-city-2017': { tag: '모의협상' },
  'after-cop24-in-my-city': { tag: '모의협상' },
  un: {},
};

const recruitmentDetails = {
  25: {
    officialAnnouncement: 'https://www.instagram.com/p/Db51mAaAX85/?utm_source=ig_web_copy_link&gwpx=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==',
    photo: { src: 'assets/records/recruit-25.webp', width: 1080, height: 1350, alt: siteText('기후변화에 대응할 청년을 찾습니다. GEYK 25기 모집 카드뉴스 표지', "GEYK cohort 25 recruitment poster calling on young people to take climate action"), caption: siteText('GEYK 25기 모집 카드뉴스 표지', "GEYK cohort 25 recruitment cover") },
    form: 'https://geyk.org/wp-content/uploads/2026/08/GEYK-25기-지원서_홍길동.docx',
  },
  24: {
    photo: { src: 'assets/records/recruit-24.webp', width: 1080, height: 1350, alt: siteText('기후변화에 대응할 청년을 찾습니다. GEYK 24기 모집 카드뉴스 표지', "GEYK cohort 24 recruitment poster calling on young people to take climate action"), caption: siteText('GEYK 24기 모집 카드뉴스 표지', "GEYK cohort 24 recruitment cover") },
  },
  23: {
    photo: { src: 'assets/records/recruit-23.webp', width: 1080, height: 1350, alt: siteText('기후변화에 대응할 청년을 찾습니다. GEYK 23기 모집 카드뉴스 표지', "GEYK cohort 23 recruitment poster calling on young people to take climate action"), caption: siteText('GEYK 23기 모집 카드뉴스 표지', "GEYK cohort 23 recruitment cover") },
  },
};
