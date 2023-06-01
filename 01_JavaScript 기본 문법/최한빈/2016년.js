// [문제 이름]
// : 2016년

// [문제 설명]
// : 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
  // 요일 배열 (2016년 1월 1일 기준 -> 금요일 부터 시작)
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  // 달별 일 수 배열(1월 ~ 12월)
  const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 지난 일 수 계산용 변수
  let count = 0;

  // 달 계산 -> 현재 달에서 1 뺸 달까지 일 수 계산
  for (let i = 0; i < a - 1; i++) {
    count += monthDay[i];
  }
  // 일 계산 -> 현재 일 - 1
  count += b - 1;

  // 지난 일 수를 7로 나눈 후 days배열의 인덱스로 접근
  return days[count % 7];
}

console.log(solution(5, 24));
