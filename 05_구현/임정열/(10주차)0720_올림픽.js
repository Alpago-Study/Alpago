// [문제 이름]
// : 올림픽

// [문제 설명]
// : 각 국가의 금, 은, 동메달 정보를 입력받아서, 어느 국가가 몇 등을 했는지 알려주는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/8979

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(10주차)0720.txt')
  .toString()
  .trim()
  .split('\n');

console.log(input);

let exampleOne = input.slice(0, 5);
let exampleTwo = input.slice(6, 11);

function solution(inputArr) {
  const country = inputArr.shift().split(' ')[1];

  let obj = {};

  inputArr.forEach((v) => {
    const temp = v.split(' ');

    const gold = temp[1] * 3;
    const silver = temp[2] * 2;
    const bronze = temp[3] * 1;

    const score = gold + silver + bronze;
    obj[temp[0]] = score;
  });

  let answer = 0;
  for (let key in obj) {
    if (obj[key] > obj[country]) {
      answer += 1;
    }
  }

  return answer + 1;
}

console.log(solution(exampleOne));
console.log(solution(exampleTwo));
