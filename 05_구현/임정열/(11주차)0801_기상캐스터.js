// [문제 이름]
// : 기상캐스터

// [문제 설명]
// : 지금부터 몇 분후에 처음으로 구역 (i, j) 에 구름이 뜨는지를 표시한다.
//   단, 처음부터 구역(i, j) 에 구름이 떠 있었던 경우에는 0을, 몇 분이 지나도 구름이 뜨지 않을 경우에는 - 1을 출력한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/10709

// 첫번째 예제 입력
// 3 4
// c..c
// ..c.
// ....

// 두번째 예제 입력
// 6 8
// .c......
// ........
// .ccc..c.
// ....c...
// ..c.cc..
// ....c...

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(11주차)0801.txt')
  .toString()
  .trim()
  .split('\n');

const [condition, ...cloudArr] = input;
const [M, N] = condition.split(' ');

let answer = '';

for (let i = 0; i < M; i++) {
  let curCloudIdx = -1;
  for (let j = 0; j < N; j++) {
    if (cloudArr[i][j] === 'c') {
      curCloudIdx = j;
      answer += '0';
    } else if (cloudArr[i][j] === '.' && curCloudIdx === -1) {
      answer += '-1';
    } else {
      answer += (j - curCloudIdx).toString();
    }

    if (j !== N - 1) {
      answer += ' ';
    }
  }
  curCloudIdx = -1;
  answer += '\n';
}

console.log(answer);
