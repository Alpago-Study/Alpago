// [문제 이름]
// : 병사 배치하기

// // [문제 설명]
// N명의 병사가 무작위로 나열되어 있다. 각 병사는 특정한 값의 전투력을 보유하고 있으며, 병사를 배치할 때는 전투력이 높은 병사가 앞쪽에 오도록 내림차순으로 배치를 하고자 한다. 다시 말해 앞쪽에 있는 병사의 전투력이 항상 뒤쪽에 있는 병사보다 높아야 한다.

// 또한 배치 과정에서는 특정한 위치에 있는 병사를 열외시키는 방법을 이용한다. 그러면서도 남아있는 병사의 수가 최대가 되도록 하고 싶다.

// 예를 들어, N=7일 때 나열된 병사들의 전투력이 다음과 같다고 가정하자.

// 이 때 3번 병사와 6번 병사를 열외시키면, 다음과 같이 남아있는 병사의 수가 내림차순의 형태가 되며 5명이 된다. 이는 남아있는 병사의 수가 최대가 되도록 하는 방법이다.

// 병사에 대한 정보가 주어졌을 때, 남아있는 병사의 수가 최대가 되도록 하기 위해서 열외해야 하는 병사의 수를 출력하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/18353

// 레퍼런스 참조

// 백준 문제풀이용 코드
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = Number(input[0]);
let nums = new Array(n);
let dp = new Array(n + 1).fill(1);
nums = input[1].split(' ').map(Number);
nums.reverse();
// 최장 증가 부분 수열
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (nums[i] > nums[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
let ans = 0;
for (let i = 0; i <= n; i++) {
  ans = Math.max(ans, dp[i]);
}
console.log(n - ans);
