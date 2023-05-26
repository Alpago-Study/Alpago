// [문제 이름]
// : 올바른 괄호

// [문제 설명]
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  // 실패한 코드
  let count = 0;
  // 마지막이 '(' 이면 바로 리턴
  if (s[s.length - 1] === '(') return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      // ')' 이전에 '('가 없다면 false 리턴
      if (count === 0) return false;
      else {
        // ')' 이전에 '('가 있다면 count - 1
        count--;
      }
    } else {
      // '(' 나오면 count + 1
      count++;
    }
  }
  // count가 0 이면 true, 아니라면 false 리턴
  return count ? false : true;
}
// 질문하기 보고 수정한 코드
// function solution(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     s[i] === '(' ? count++ : count--;

//     if (count === -1) return false;
//   }
//   return count === 0;
// }
// 삼항연산자가 if-else문 보다 성능이 좋다고 한다... 삼항연산자로 바꾸니 효율성 테스트가 통과됨.
// 가독성 = if-else > 삼항연산자,  성능 = if-else < 삼항연산자

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
