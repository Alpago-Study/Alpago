// [문제 이름]
// : 올바른 괄호

// [문제 설명]
// : 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
//  "()()" 또는 "(())()" 는 올바른 괄호입니다.
//  ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
//  '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let result = '';
  // ) 로 시작하는경우는 무조건 false
  if (s[0] === ')') {
    return false;
  }

  // ( 다음에 ) 가 나오면 없애버리기
  // 배열 메서드를 사용하기 위해서 문자열을 배열로 변환
  let sArray = Array.from(s);

  for (let i = 0; i < sArray.length - 1; i++) {
    if (sArray[i] === '(' && sArray[i + 1] === ')') {
      sArray.splice(i, 2); // 반복문 중첩이라 효율성테스트 통과 못한듯
      i = -1; // 반복문 원점으로 돌리기
    }
  }

  if (sArray.length === 0) {
    return true;
  }
  return false;
}

console.log(solution('()()'));
console.log(solution('(()('));
