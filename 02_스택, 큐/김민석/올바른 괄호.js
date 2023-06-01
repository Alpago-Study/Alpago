// [문제 이름]
// : 올바른 괄호

// [문제 설명]
// : 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
// 예를 들어 "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12909

const solution = (arr) => {
  if (arr.length === 1 || arr[0] === ')') return false;

  const stack = [];

  // ⭐ 처음에 for of 문으로 풀었더니 효율성 테스트 실패
  // : 일반적으로 for문보다 for of 문의 시간 복잡도가 더 크다고 함
  arr.split('').forEach((bracket) => {
    if (bracket === '(') stack.push(bracket);

    if (bracket === ')') {
      if (!stack.length) return false;
      stack.pop();
    }
  });

  return !stack.length;
};

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
