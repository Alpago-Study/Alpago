// [문제 이름]
// : 바둑이 승차 (DFS)

// [문제 설명]
// : N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.

// [문제 링크]
// :

function solution(c, arr) {
  const sumArr = [];

  const DFS = (n, sum) => {
    if (n === arr.length) {
      if (sum < c) {
        sumArr.push(sum);
      }
      return;
    }

    DFS(n + 1, sum);
    DFS(n + 1, sum + arr[n]);
  };
  DFS(0, 0);

  return Math.max(...sumArr);
}

const input1 = 259;
const input2 = [81, 58, 42, 33, 61];

// 전체 경우의 수
// function solution(c, input) {
//   const arr = Array.from({ length: input.length + 1 });

//   const DFS = (n) => {
//     if (n === input.length + 1) {
//       console.log(arr);
//       return;
//     }

//     arr[n] = input[n - 1];
//     DFS(n + 1);

//     arr[n] = 0;
//     DFS(n + 1);
//   };

//   DFS(1);

//   return arr;
// }

console.log(solution(input1, input2));
