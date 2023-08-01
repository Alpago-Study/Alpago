// [문제 이름]
// : 트럭 주차

// [문제 설명]
// : 트럭을 한 대 주차할 때는 1분에 한 대당 A원을 내야 한다.
//   두 대를 주차할 때는 1분에 한 대당 B원, 세 대를 주차할 때는 1분에 한 대당 C원을 내야 한다.
//   A, B, C가 주어지고, 상근이의 트럭이 주차장에 주차된 시간이 주어졌을 때,
//   주차 요금으로 얼마를 내야 하는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2979

// 결과: 메모리 9336KB, 시간: 116ms

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(8주차)0706.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

/**
 *
 * 입력 예시: A: 5, B: 3, C: 1 / a: [1, 6], b: [3, 5], c: [2, 8]
 *
 * | 시간 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
 * |  a  | O | O | O | O | O | - | - | - |
 * |  b  | - | - | O | O | - | - | - | - |
 * |  c  | - | O | O | O | O | O | O | - |
 *
 * // 1. 길이가 101이며 모든 요소가 0인 time이라는 배열을 만든다.
 * 예) time = [0, 0, 0, 0, 0, ... 0]
 *
 * // 2. a, b, c 각각 시작 시간부터 끝나는 시간까지 time 배열 인덱스에 해당하는 숫자를 1 더한다.
 * 예) [0, 1, 2, 3, 3, 2, 1, 1, 0, 0, ... 0]
 *
 * // 3. time 배열을 순회하며 요소별로 적합하게 정답(answer)에 더한다.
 *    - 1인 경우 A를 곱해 정답(answer)에 더하고
 *    - 2인 경우 B를 곱해 정답(answer)에 더하고
 *    - 3인 경우 C를 곱해 정답(answer)에 더하고
 *
 * @param {[number, number, number]} price
 * @param {[number, number]} a [a 주차 시작 시간, a 주차장 떠난 시간]
 * @param {[number, number]} b [b 주차 시작 시간, b 주차장 떠난 시간]
 * @param {[number, number]} c [c 주차 시작 시간, c 주차장 떠난 시간]
 */
function solution(price, a, b, c) {
  const [A, B, C] = price;

  // 1. 길이가 101인 배열을 만든다.
  let time = new Array(101).fill(0);
  // variables - 정답을 저장할 변수
  let answer = 0;

  // 2. a, b, c 각각 시작 시간부터 끝나는 시간까지 time 배열 인덱스에 해당하는 숫자를 1 더한다.
  [a, b, c].forEach((v) => {
    const [start, end] = v;
    for (let i = start; i < end; i++) {
      time[i] += 1;
    }
  });

  // 3. time 배열을 순회하며 요소별로 적합하게 정답(answer)에 더한다.
  //  - 1인 경우 A를 정답(answer)에 더하고
  //  - 2인 경우 B를 정답(answer)에 더하고
  //  - 3인 경우 C를 정답(answer)에 더하고
  time.forEach((v) => {
    if (v === 1) {
      answer += A;
    } else if (v === 2) {
      answer += B * 2;
    } else if (v === 3) {
      answer += C * 3;
    }
  });

  return answer;
}

console.log(solution(input[0], input[1], input[2], input[3])); // 33
console.log(solution(input[4], input[5], input[6], input[7])); // 480
console.log(solution(input[8], input[9], input[10], input[11])); // 300
