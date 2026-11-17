# Pretendard 변경 및 Playwright QA

검증일: 2026-11-17

## 변경

- Pretendard Variable v1.3.9를 로컬 WOFF2 파일로 제공한다.
- 본문과 메뉴, 버튼, 입력창, 선택창, 상세 창에 글꼴을 상속한다.
- 글꼴 preload와 SIL Open Font License 사본을 포함한다.

## 검증 방식

브라우저의 Playwright locator API로 실제 클릭·입력·선택을 수행하고 결과를 검증했다. 독립 Playwright Test 러너는 사용하지 않았다.
뷰포트 요청은 데스크톱 1440×900, 모바일 390×844이며 브라우저 읽기 결과의 실제 CSS 폭은 각각 1200px, 325px였다. 가로 넘침 검증은 실제 CSS 폭 기준이다.

## 결과

- PASS — Pretendard loaded and inherited
- PASS — Desktop no horizontal overflow
- PASS — Category filter
- PASS — Combined year filter
- PASS — Empty state
- PASS — Reset restores all activities
- PASS — Activity dialog opens
- PASS — Dialog accessible name
- PASS — Dialog closes
- PASS — Recruitment date and closed state
- PASS — Mobile menu opens
- PASS — Mobile menu closes after navigation
- PASS — Mobile no horizontal overflow
- PASS — Mobile recruitment dialog opens
- PASS — No browser errors

총 15개 검증 통과. JavaScript 문법 검사 통과.

검색 입력 자동화 도중 브라우저 입력 도구 오류가 1회 발생했으나, 상태를 확인한 결과 입력과 검색은 적용되어 있었다. 나머지 동작 검증을 이어서 완료했다.

## 기록

- pretendard-playwright-results.json: 검증 결과와 실제 화면 폭
- pretendard-desktop.jpg: 변경 후 데스크톱 화면
- pretendard-mobile.jpg: 모바일 모집 상세 화면

화면 확인과 핵심 상호작용 QA이며 전체 접근성 감사나 외부 원문 링크 전수 검증은 포함하지 않는다.
