프레임워크: Next.js
<br/>
언어: typescript
<br/><br/>
사용 라이브러리 목록
<br/>
react-modal(https://www.npmjs.com/package/react-modal)
<br/>
slick(https://kenwheeler.github.io/slick/)



추가할 내용 

auction-crawler
차후 제작할 웹 어플리케이션 사이드 프로젝트를 위해 제작한 웹 스크래핑 도구입니다.
법원 경매 사이트에 최소한의 부하를 주는 건전한 스크래핑을 위해 24시간에 한번, 법원경매() 사이트에서 14일 후에 진행 되는 전국 경매물건 목록을 가져 온 뒤 psql db에 저장합니다.
요청을 보내기 위해 reqwest(https://crates.io/crates/reqwest)를, 
html 구문 분석을 위해 scraper(https://crates.io/crates/scraper)를 사용했으며,
html 태그에서 특정 attribute의 값을 취득하기 위해 loa(https://crates.io/crates/loa)의 코드를 일부 참조했습니다.

(rust, psql)
(동작 과정 사진)
(데이터 예시를 테이블로 보여줌)

React 블로그(Spring Boot 이식)

리액트를 처음 배울때 실습용으로 만든 웹 어플리케이션으로, 
CRA로 작성 됐고 react-redux를 사용해서 상태관리를 했으며, 백엔드 작업은 express.js를 통해 수행하였습니다.
해당 프로젝트는 차후 Spring Boot로 이식 돼었으며, Spring Security를 통한 권한 별 접근 제어와 REST API 분리(Swagger-UI 사용), JWT 인증 등의 기능이 추가돼었습니다.

Chain-Cho-v1

스마트 포인터나 unsafe rust 등의 실습과 차후 개인적인 사용을 위해 작성한 프로젝트로, 
()에서 참조한 블록체인 채굴 로직을 사용했고, 블록 채굴 현황을 libp2p()를 통해 공유하도록 작성돼었습니다.
tower-web을 통한 rest api 기능을 지원하며, 해당 Rest API에서 채굴됀 블록과 접속해있는 피어 등을 확인 가능합니다.

과외커넥터

과외커넥터는 부산IT학원 재학 중 작성한 팀 프로젝트로, 과외 선생님과 학생의 1:1 매칭을 도와주는 JSP 웹 어플리케이션입니다.
다중 조건/다중 항목 검색과 랜덤 추천, 개인 페이지 조회, 1:1 채팅 등의 기능이 있습니다.
Cafe24를 통한 웹 호스팅 서비스를 하고 있었으나, 현재 지원 종료돼었습니다.
(검색기능, 마이페이지, 채팅 알림, 채팅 사진 등 보여줌)
(채팅의 경우 웹소켓이 아닌 Ajax 폴링을 사용했다는걸 적어야함)

다음 사이드 프로젝트 예정
Spring BOOT Rest Highlevel Client 엘라스틱서치 쿼리및 집계 툴
