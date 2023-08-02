// [문제 이름]
// : 등수 구하기

// [문제 설명]
// : 랭킹 리스트에 올라 갈 수 있는 점수의 개수 P가 주어진다. 그리고 리스트에 있는 점수 N개가 비오름차순으로 주어지고,
//   태수의 새로운 점수가 주어진다.이때, 태수의 새로운 점수가 랭킹 리스트에서 몇 등 하는지 구하는 프로그램을 작성하시오.
//   만약 점수가 랭킹 리스트에 올라갈 수 없을 정도로 낮다면 - 1을 출력한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1205

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(11주차)0727.txt')
  .toString()
  .trim()
  .split('\n');

if (!input[1]) {
  console.log(1);
  return;
}

const temp = input[0].split(' ').map((v) => Number.parseInt(v));
const scores = input[1].split(' ').map((v) => Number.parseInt(v));
const newScore = temp[1];
const cnt = temp[2];

scores.push(newScore);

scores.sort((a, b) => b - a);

if (
  scores.indexOf(newScore) + 1 <= cnt &&
  scores.lastIndexOf(newScore) + 1 <= cnt
) {
  console.log(scores.indexOf(newScore) + 1);
  return;
}

console.log(-1);
