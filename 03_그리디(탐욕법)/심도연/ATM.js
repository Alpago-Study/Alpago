// [문제 이름]
// : ATM

// [문제 설명]
// : 줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때, 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/11399

// 백준 정답
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const pi = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const pi = input[1].split(' ').map(Number).sort((a, b) => a - b);

// let total = 0;
// let sum = 0;

// for(let i =0; i< pi.length; i++){
//     sum += pi[i];
//     total += sum
// }
// console.log(total);

const atm = (n, arr) => {
  let pi = arr.split('').sort();
  console.log(pi);

  let total = 0;
  let sum = 0;

  for (let i = 0; i < pi.length; i++) {
    sum += +pi[i];
    total += sum;
  }

  return total;
};

console.log(atm(5, '31432'));
