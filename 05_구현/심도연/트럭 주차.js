// [문제 이름]
// : 트럭 주차

// [문제 설명]
// : 상근이는 트럭을 총 세 대 가지고 있다. 오늘은 트럭을 주차하는데 비용이 얼마나 필요한지 알아보려고 한다.
//   상근이가 이용하는 주차장은 주차하는 트럭의 수에 따라서 주차 요금을 할인해 준다.
//   트럭을 한 대 주차할 때는 1분에 한 대당 A원을 내야 한다. 두 대를 주차할 때는 1분에 한 대당 B원, 세 대를 주차할 때는 1분에 한 대당 C원을 내야 한다.
//   A, B, C가 주어지고, 상근이의 트럭이 주차장에 주차된 시간이 주어졌을 때, 주차 요금으로 얼마를 내야 하는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2979

let time = [
  [1, 6],
  [3, 5],
  [2, 8],
];
let a = 5;
let b = 3;
let c = 1;

const truck_parking = (a, b, c, time) => {
  let result = 0;
  let max = Math.max(time[0][1], time[1][1], time[2][1]);

  let A = new Array(max).fill(0);
  let B = new Array(max).fill(0);
  let C = new Array(max).fill(0);

  let cost = [a, b, c];

  for (let i = time[0][0]; i < time[0][1]; i++) {
    A.splice(i, 1, 1);
  }
  for (let i = time[1][0]; i < time[1][1]; i++) {
    B.splice(i, 1, 1);
  }
  for (let i = time[2][0]; i < time[2][1]; i++) {
    C.splice(i, 1, 1);
  }

  //   console.log(A);
  //   console.log(B);
  //   console.log(C);

  for (let i = 0; i <= max; i++) {
    // 트럭의 개수를 count 로 증가 => count - 1 === cost.length - 1
    let count = 0;
    if (A[i] === 1 && B[i] === 1 && C[i] === 1) {
      count = 3;
      result += cost[count - 1] * count;
      //   console.log(result);
    } else if (
      (A[i] === 1 && B[i] === 1) ||
      (B[i] === 1 && C[i]) ||
      (A[i] === 1 && C[i] === 1)
    ) {
      count = 2;
      result += cost[count - 1] * count;
      //   console.log(result);
    } else if (A[i] === 1 || B[i] === 1 || C[i] === 1) {
      count = 1;
      result += cost[count - 1] * count;
    }
  }

  return result;
};

console.log(
  truck_parking(5, 3, 1, [
    [1, 6],
    [3, 5],
    [2, 8],
  ])
);
console.log(
  truck_parking(10, 8, 6, [
    [15, 30],
    [25, 50],
    [70, 80],
  ])
);
