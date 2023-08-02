// [문제 이름]
// : 덩치

// [문제 설명]
// : 여러분은 학생 N명의 몸무게와 키가 담긴 입력을 읽어서 각 사람의 덩치 등수를 계산하여 출력해야 한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/7568

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(10주차)0721.txt')
  .toString()
  .trim()
  .split('\n');

console.log(input);

function solution(input) {
  let inputArr = [];
  for (let i = 1; i < input.length; i++) {
    inputArr.push(input[i].split(' ').map((v) => Number.parseInt(v)));
  }

  let result = [];

  for (let i = 0; i < inputArr.length; i++) {
    let biggerGrade = 1;

    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[i][0] < inputArr[j][0] && inputArr[i][1] < inputArr[j][1]) {
        biggerGrade += 1;
      }
    }

    result.push(biggerGrade);
  }

  return result.join(' ').trim();
}

console.log(solution(input));
