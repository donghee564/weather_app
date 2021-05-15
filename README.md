### OpenWeatherMAp API 를 활용한 weather-app
(create-react-app)
데모 - https://donghee564.github.io/weather_app/<br>
API 출처 - OpenWeatherMap: https://openweathermap.org/

#### 구조와 기능 요약
API calls - 현재의 위도 경도를 통한 현재 날씨 세부정보, 검색 인풋에 입력한 도시의 7일 날씨 세부정보

1. 헤더
   - 온도 표시 단위 선택 radio 버튼 (섭씨, 화씨)
   - 현재 위치의 도시 이름, 날짜
   - 날씨 검색 인풋 - 검색한 도시의 7일간의 날씨 정보창이 하단에 생성된다.
2. 현재 날씨 정보
   - 브라우저에서 받아온 현재 위치의 위도와 경도를 통해 현재의 날씨 정보 표시.
   - 현재 날씨 상태의 아이콘과 기온, 그리고 세부 날씨 정보(바람세기, 습도, 압력, visibility)를 보여준다.
3. 다음 6일 날씨 정보
   - 다음날 부터 7일 동안의 데일리 날씨 세부 정보. 비나 눈이오면 강수량 표시.
4. 검색한 도시 날씨 정보
   - 검색한 도시가 있으면 그 도시의 7일간의 날씨 정보 표시.
   
#### 사용 라이브러리
 - react-bootstrap-icons
 - moment

#### 개선 해야할 것들
