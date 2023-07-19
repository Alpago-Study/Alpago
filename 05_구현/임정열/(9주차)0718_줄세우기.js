// [문제 이름]
// : 줄세우기

// [문제 설명]
// : 아이들의 키가 주어지고, 어떤 순서로 아이들이 줄서기를 할 지 주어진다.
//   위의 방법을 마지막 학생까지 시행하여 줄서기가 끝났을 때 학생들이 총 몇 번 뒤로 물러서게 될까 ?

// [문제 링크]
// : https://www.acmicpc.net/problem/10431

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(9주차)0718.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(' ');
  const caseNum = arr.shift();
  console.log(`${caseNum} ${solution(arr)}`);
}

function solution(arr) {
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        result++;
      }
    }
  }

  return result;
}
