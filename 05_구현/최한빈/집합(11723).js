// [문제 이름]
// : 집합

// [문제 설명]
// : 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.

// add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
// remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
// check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
// toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
// all: S를 {1, 2, ..., 20} 으로 바꾼다.
// empty: S를 공집합으로 바꾼다.

// [문제 링크]
// : https://www.acmicpc.net/problem/11723

// 백준 문제풀이용 코드
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const dict = {};
for (let i = 1; i <= 20; i++) {
  dict['' + i] = 0;
}
for (let i = 1; i <= input[0]; i++) {
  let [act, num] = input[i].split(' ');

  switch (act) {
    case 'add':
      // 집합에 원소 추가 -> dict[num] = 1
      dict[num] = 1;
      break;
    case 'remove':
      // 집합에 원소 삭제 -> dict[num] = 0
      dict[num] = 0;
      break;
    case 'check':
      // 원소가 집합에 있는지 확인 -> dict[num]이 0인지 1인지
      dict[num] ? console.log(1) : console.log(0);
      break;
    case 'toggle':
      // 원소가 있으면 제거하고 없으면 추가
      dict[num] = dict[num] ? 0 : 1;
      break;
    case 'all':
      // 집합을 {1,2,...,20} 으로 바꾼다.
      for (let j = 1; j <= 20; j++) {
        dict['' + j] = 1;
      }
      break;
    case 'empty':
      // 집합을 비운다
      for (let j = 1; j <= 20; j++) {
        dict['' + j] = 0;
      }
      break;
    default:
      break;
  }
}

// let set = new Set();
// for (let i = 1; i <= input[0]; i++) {
//   let [act, num] = input[i].split(" ");
//   num = Number(num);
//   switch (act) {
//     case "add":
//       // 집합에 원소 추가
//       set.add(num);
//       break;
//     case "remove":
//       set.delete(num);
//       // 집합에 원소 삭제
//       break;
//     case "check":
//       set.has(num) ? console.log(1) : console.log(0);
//       // 원소가 집합에 있는지 확인
//       break;
//     case "toggle":
//       set.has(num) ? set.delete(num) : set.add(num);
//       // 원소가 있으면 제거하고 없으면 추가
//       break;
//     case "all":
//       set = new Set([
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       ]);
//       // 집합을 {1,2,...,20} 으로 바꾼다.
//       break;
//     case "empty":
//       set = new Set();
//       // 집합을 비운다
//       break;
//     default:
//       break;
//   }
// }
