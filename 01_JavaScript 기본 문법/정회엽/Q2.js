//문제이름 : 문자열 뒤의 n글자

// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

//문제링크
//https://school.programmers.co.kr/learn/courses/30/lessons/120821

function solution(my_string, n) {
  let answer = [];
  answer = my_string.slice(my_string.length - n);
  return answer;
}
console.log(solution('My Name Is JHY', 5));
console.log(solution('Our team is Alpago', 6));
