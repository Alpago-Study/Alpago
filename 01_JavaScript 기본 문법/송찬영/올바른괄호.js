function solution(s) {
  // 카운트할 변수 하나 생성
  // ) 먼저 들어오면 false
  // 마지막 배열이 ( 면 false
  // ( 가 들어가면 1씩 카운트
  // ) 가 들어가면 1씩 디스카운트
  // 카운트가 0이 아닐경우 false
  // 스택 큐 문제인데 push를 사용하지 않은게 문제점...
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[0] === ')' || s[s.length - 1] === '(') {
      return false;
    } else if (s[i] === '(') {
      count++;
    } else if (s[i] === ')') {
      count--;
    }
  }
  return count === 0;
}

// 스택 큐 방식으로 작성 gpt
// function solution(s) {
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[0] === ')' || s[s.length - 1] === '(') {
//       return false;
//     } else if (s[i] === '(') {
//       stack.push('('); // ( 일 경우 스택에 추가
//     } else if (s[i] === ')') {
//       if (stack.length === 0) {
//         return false; // ) 인데 스택이 비어있는 경우
//       } else {
//         stack.pop(); // 스택에서 가장 최근의 ( 괄호를 제거
//       }
//     }
//   }
//   return stack.length === 0; // 스택에 남은 ( 괄호가 없어야 짝이 맞는 경우
// }
