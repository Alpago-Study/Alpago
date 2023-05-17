// [문제 이름]
// : 문자열의 뒤의 n글자

// [문제 설명]
// : 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/181910


function solution(my_string, n) {
  var answer = '';
  
  // 자르는거니 slice를 이용해보자.
  // 자르는데 n에 따라 달라지는것은 slice의 '시작지점'이다.
  
  // 문자열의 길이를 변수로 저장
  let answerLen = my_string.length;
  
  // slice의 첫번째 인자인 시작지점이 (문자열의 길이 - n) 임
  answer = my_string.slice(answerLen - n);
  
  return answer;
}

console.log(solution('ProgrammerS123', 11))
console.log(solution('He110W0r1d', 5))