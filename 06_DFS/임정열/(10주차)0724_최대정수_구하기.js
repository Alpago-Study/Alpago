// [문제 이름]
// : 최대점수 구하기(DFS)
// [문제 설명]
// : 제한 시간 M 안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.

// [문제 링크]
// :

const input1 = 20;
const input2 = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

function solution(c, input) {
  let arr = Array.from({ length: input.length });

  let 경우의_수 = [];

  const DFS = (n, time, score) => {
    if (n === input.length) {
      console.log(n, time, score, arr);
      if (time <= c) {
        경우의_수.push(score);
      }
      return;
    }

    arr[n] = 1;
    DFS(n + 1, time + input[n][1], score + input[n][0]);

    arr[n] = 0;
    DFS(n + 1, time, score);
  };

  DFS(0, 0, 0);

  return Math.max(...경우의_수);
}

console.log(solution(input1, input2));
