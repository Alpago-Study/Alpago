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

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(9주차)0717.txt')
  .toString()
  .trim()
  .split('\n');
console.log(input);

let arr = [];

function caculateInput(fn, num) {
  if (fn === 'add') {
    arr.push(num);
    return;
  }

  if (fn === 'remove') {
    arr = arr.filter((v) => v !== num);
    return;
  }

  if (fn === 'check') {
    return arr.includes(num);
  }

  if (fn === 'toggle') {
    if (caculateInput('check', num)) {
      caculateInput('remove', num);
    } else {
      caculateInput('add', num);
    }
    return;
  }

  if (fn === 'all') {
    arr = Array.from({ length: 20 }, (_, index) => (index + 1).toString());
    return;
  }

  if (fn === 'empty') {
    arr = [];
    return;
  }
}

for (let i = 1; i < input.length; i++) {
  const [fn, num] = input[i].split(' ');

  caculateInput(fn, num);

  if (fn === 'check') {
    console.log(caculateInput(fn, num) ? 1 : 0);
  }
}
