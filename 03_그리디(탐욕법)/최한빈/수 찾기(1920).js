// [문제 이름]
// : 수 찾기(1920)

// [문제 설명]
// N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1920

function binarySearch(arr, target, start, end) {
  let mid = parseInt((start + end) / 2);

  if (end < start) return arr[mid] === target ? 1 : 0;

  if (arr[mid] > target) end = mid - 1;
  else start = mid + 1;
  return binarySearch(arr, target, start, end);
}

// 백준 문제풀이용 코드
let fs = require('fs');
let input = fs.readFileSync('./ex.txt').toString().split('\n');

let nArr = input[1].split(' ').map(Number);
let mArr = input[3].split(' ').map(Number);

nArr.sort((a, b) => a - b);

// mArr에 각 원소들로 이진탐색 수행
const result = mArr.map((v) => binarySearch(nArr, v, 0, nArr.length - 1));

console.log(result.join('\n'));

// for (let i = 0; i < mArr.length; i++) {
//   console.log(binarySearch(nArr, mArr[i], 0, nArr.length - 1));
// }

// for문으로 돌리면 시간초과가 나고 레퍼런스 보고 map으로 바꾸니까 시간초과가 안난다.
// 이해되지 않는다.
