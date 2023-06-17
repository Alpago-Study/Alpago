//문제이름 : 2016년

/*문제설명 : 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요. */

//문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = new Date(`2016-${a}-${b}`);
  //특정 날짜 생성.
  let result = date.getDay();
  //특정요일 추출(0=SUN)
  return days[result];
}

function solution(a, b) {
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  //요일별 배열생성
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //달별 날짜 배열
  let needDays = b - 1;
  //필요한 날짜는 b일-1일 (왜냐면 1월1일부터 계산하기때문에)
  for (let i = 0; i < a - 1; i++) {
    needDays += months[i];
  }
  //몇월까지 지나가서 일을 더해야 하는지 계산.
  return days[needDays % 7];
  //7로 나눴을때 나머지가 0이라면 같은 요일. 즉 금요일.
}
console.log(solution(5, 24));
console.log(solution(11, 1));
console.log(solution(6, 30));
