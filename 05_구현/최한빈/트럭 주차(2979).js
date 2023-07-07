// [문제 이름]
// : 트럭 주차

// [문제 설명]
// : 상근이는 트럭을 총 세 대 가지고 있다. 오늘은 트럭을 주차하는데 비용이 얼마나 필요한지 알아보려고 한다.

// 상근이가 이용하는 주차장은 주차하는 트럭의 수에 따라서 주차 요금을 할인해 준다.

// 트럭을 한 대 주차할 때는 1분에 한 대당 A원을 내야 한다. 두 대를 주차할 때는 1분에 한 대당 B원, 세 대를 주차할 때는 1분에 한 대당 C원을 내야 한다.

// A, B, C가 주어지고, 상근이의 트럭이 주차장에 주차된 시간이 주어졌을 때, 주차 요금으로 얼마를 내야 하는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2979

// 백준 문제풀이용 코드
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let times = [];

for (let i = 1; i <= 3; i++) {
  times.push(input[i].split(" ").map(Number));
}

// 각 주차 대수마다 가격을 저장한 변수
const [a, b, c] = input[0].split(" ").map(Number);

// 나간시간과 들어온 시간을 각각 배열에 담는다.
let inTime = [];
let outTime = [];
times.forEach((ele) => {
  inTime.push(ele[0]);
  outTime.push(ele[1]);
});

// 정답 변수
let answer = 0;
// 현재 주차중인 트럭 대수
let num = 0;

// 주어지는 시간인 1부터 100까지 순회
for (let i = 1; i <= 100; i++) {
  // 현재 시간을 i라고 놓고 i시간에 들어오는 차와 나가는 차의 대수를 찾음.
  const inNum = inTime.filter((ele) => ele === i).length;
  const outNum = outTime.filter((ele) => ele === i).length;

  // 1대라도 있으면 그 대수만큼 현재 주차 대수의 더하거나 뺀다.
  if (inNum) {
    num += inNum;
  }
  if (outNum) {
    num -= outNum;
  }

  // 주차 대수의 수 만큼 정답에 가격을 더한다.
  if (num === 1) answer += num * a;
  else if (num === 2) answer += num * b;
  else if (num === 3) answer += num * c;
}
console.log(answer);
