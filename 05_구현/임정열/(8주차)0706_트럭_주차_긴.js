// [문제 이름]
// : 트럭 주차

// [문제 설명]
// : 트럭을 한 대 주차할 때는 1분에 한 대당 A원을 내야 한다.
//   두 대를 주차할 때는 1분에 한 대당 B원, 세 대를 주차할 때는 1분에 한 대당 C원을 내야 한다.
//   A, B, C가 주어지고, 상근이의 트럭이 주차장에 주차된 시간이 주어졌을 때,
//   주차 요금으로 얼마를 내야 하는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2979

// 결과: 메모리 9336KB, 시간: 136ms

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(8주차)0706.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

/**
 * 겹치는 시간을 계산하기 위한 함수
 * @param {[number, number] | 0} x
 * @param {[number, number] | 0} y
 * @returns {[number, number] | 0} 겹치는 시간이 없을 경우 0 반환
 */
function getDuplicatedTime(x, y) {
  if (x.length === 0 || y.length === 0) {
    return [];
  }

  const X = x[0] < y[0] ? x : y;
  const Y = x[0] < y[0] ? y : x;

  if (Y[0] > X[1]) {
    return [];
  } else if (X[1] < Y[1]) {
    return [Y[0], X[1]];
  } else {
    return [Y[0], Y[1]];
  }
}

/**
 * 세 차가 동시에 주차된 시간을 구하기 위한 함수
 *
 * [15, 30], [25, 50], [70, 80] 예시의 경우
 * bAndc 즉, [25, 50], [70, 80]에서 겹치는 시간이 없기 때문에 0!
 * 1. 즉, 하나라도 0일 경우 0 반환
 *
 * [1, 5], [3, 5], [2, 8] 예시의 경우
 * aAndb는 [3, 5], bAndc는 [3, 5], cAnda는 [2, 6]이므로
 * 2. 빈배열이 없을 경우
 * 2 - 1. aAndb와 bAndc가 겹치는 부분을 우선적으로 구하고
 * 2 - 2. 그 결과 값인 [3, 5]와 cAnda [2, 6]이 겹치는 부분을 최종적으로 계산하여 반환!
 * @param {[number, number] | 0} aAndb
 * @param {[number, number] | 0} bAndc
 * @param {[number, number] | 0} cAnda
 * @returns {[number, number] | 0} 세 차가 동시에 주차된 시간
 */
function timeRangeOf3Car(aAndb, bAndc, cAnda) {
  if (aAndb.length === 0 || bAndc.length === 0 || cAnda.length === 0) {
    return [];
  }

  const temp = getDuplicatedTime(aAndb, bAndc);
  return getDuplicatedTime(temp, cAnda);
}
/**
 *
 * 입력 예시: A: 5, B: 3, C: 1 / a: [1, 6], b: [3, 5], c: [2, 8]
 *
 * | 시간 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
 * |  a  | O | O | O | O | O | - | - | - |
 * |  b  | - | - | O | O | - | - | - | - |
 * |  c  | - | O | O | O | O | O | O | - |
 *
 * // 1. 두 차가 동시에 주차되어있는 시간을 비교한다.
 * aAndb: a와 b가 동시에 주차한 시간 [3, 5]
 * bAndc: b와 c가 동시에 주차한 시간 [3, 5]
 * cAnda: c와 a가 동시에 주차한 시간 [2, 6]
 *
 * // 2. 세 차가 동시에 주차되어있는 시간을 비교한다. (timeRangeOf3Car 함수)
 * aAndb와 bAndc가 겹치는 부분을 우선적으로 구하고 -> [3, 5]
 * 그 결과 값인 [3, 5]와 cAnda [2, 6]이 겹치는 부분을 최종적으로 계산하여 반환!
 * aAndbAndc: 세 차가 동시에 주차되어있는 시간: [3, 5]
 *
 * // 3. 각각의 변수를 시간 범위에서 시간으로 바꾼다.
 * aAndbAndc의 시간 범위: [3, 5] -> aAndbAndc 시간: 2
 *
 * 이때 겹치는 시간은 제외한다.
 * aAndb의 시간 범위: [3, 5] -> aAndb 시간: 2 / 겹치는 시간 빼기 aAndb - aAndbAndc = 0
 * bAndc 시간 범위: [3, 5] -> aAndb 시간: 2 / 겹치는 시간 빼기 bAndc - aAndbAndc = 0
 * cAnda 시간 범위: [2, 6] -> cAnda 시간: 4 / 겹치는 시간 빼기 cAnda - aAndbAndc = 2
 *
 * a 시간 범위: [1, 6] -> a 시간: 5 / 겹치는 시간 빼기 a - aAndbAndc - aAndb - cAnda = 1
 * b 시간 범위: [3, 5] -> b 시간: 2 / 겹치는 시간 빼기 a - aAndbAndc - aAndb - bAndc = 0
 * c 시간 범위: [2, 8] -> b 시간: 6 / 겹치는 시간 빼기 a - aAndbAndc - bAndc - cAnda = 2
 *
 * // 4. 결과를 계산한다.
 * 3 * C * t + 2 * B * (e + m + p) + A * (i + j + k) = 33
 *
 * @param {[number, number, number]} price
 * @param {[number, number]} a [a 주차 시작 시간, a 주차장 떠난 시간]
 * @param {[number, number]} b [b 주차 시작 시간, b 주차장 떠난 시간]
 * @param {[number, number]} c [c 주차 시작 시간, c 주차장 떠난 시간]
 */
function solution(price, a, b, c) {
  // 1. 두 차가 동시에 주차되어있는 시간을 비교한다.
  const [A, B, C] = price;
  let aAndb = getDuplicatedTime(a, b);
  let bAndc = getDuplicatedTime(b, c);
  let cAnda = getDuplicatedTime(c, a);

  // 2. 세 차가 동시에 주차되어있는 시간을 비교한다. (timeRangeOf3Car 함수)
  let aAndbAndc = timeRangeOf3Car(aAndb, bAndc, cAnda);

  // 3. 각각의 변수를 시간 범위에서 시간으로 바꾼다.
  const t = aAndbAndc.length === 0 ? 0 : aAndbAndc[1] - aAndbAndc[0];
  const e = (aAndb.length === 0 ? 0 : aAndb[1] - aAndb[0]) - t;
  const m = (bAndc.length === 0 ? 0 : bAndc[1] - bAndc[0]) - t;
  const p = (cAnda.length === 0 ? 0 : cAnda[1] - cAnda[0]) - t;
  const i = a[1] - a[0] - t - e - p;
  const j = b[1] - b[0] - t - e - m;
  const k = c[1] - c[0] - t - m - p;

  // 4. 결과를 계산한다.
  const answer = 3 * C * t + 2 * B * (e + m + p) + A * (i + j + k);
  return console.log(answer);
}

console.log(solution(input[0], input[1], input[2], input[3])); // 33
console.log(solution(input[4], input[5], input[6], input[7])); // 480
console.log(solution(input[8], input[9], input[10], input[11])); // 300
