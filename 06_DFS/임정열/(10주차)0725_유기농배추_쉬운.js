// [문제 이름]
// : 유기농 배추

// [문제 설명]
// : 랭킹 리스트에 올라 갈 수 있는 점수의 개수 P가 주어진다. 그리고 리스트에 있는 점수 N개가 비오름차순으로 주어지고,
//   태수의 새로운 점수가 주어진다.이때, 태수의 새로운 점수가 랭킹 리스트에서 몇 등 하는지 구하는 프로그램을 작성하시오.
//   만약 점수가 랭킹 리스트에 올라갈 수 없을 정도로 낮다면 - 1을 출력한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1205

// [문제 풀이 참고]
// : https://www.youtube.com/watch?v=2QQd-WNoWzA

// 백준 fs 모듈로 입력값 받아오는 연습
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/(10주차)0725.txt')
  .toString()
  .trim()
  .split('\n');

let [testCase, ...inputs] = input;

// 처음 배추의 위치를 저장하고 방문할 때 0으로 바꿔주어
// visited 배열 없이 구현할 수 있도록 함
let graph = [];

// 아래(1, 0), 위(-1, 0), 오른쪽(0, 1), 왼쪽(0, -1)
let dirR = [1, -1, 0, 0];
let dirC = [0, 0, 1, -1];

function getInputValue() {
  return inputs
    .shift()
    .split(' ')
    .map((v) => Number.parseInt(v));
}

function DFS(y, x) {
  graph[y][x] = 0;
  for (let i = 0; i < 4; i++) {
    let newY = y + dirR[i];
    let newX = x + dirC[i];

    if (graph[newY][newX] === 1) {
      DFS(newY, newX);
    }
  }
}

// 0. 입력 및 초기화
for (let i = 0; i < Number.parseInt(testCase); i++) {
  const [M, N, K] = getInputValue();

  // M = 10, N = 8일 때, graph 초기 배열
  //     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
  //  ------------------------------------------------------
  //  0  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  1  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  2  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  3  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  4  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  5  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  6  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  7  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  8  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |
  //  9  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |  0 |

  // 가로, 세로 2씩 더해서 이중배열을 만든 이유
  // : 한 점을 기준으로 위, 아래, 왼쪽, 오른쪽을 체크할 예정인데, 만약 (0, 0)을 기준으로 위쪽을 조회하면 에러가 남
  //   에러가 나지 않도록 겉에 0인 테두리를 두른다고 생각하면 됨!

  graph = Array.from(Array(N + 2), () => Array(M + 2).fill(0));

  // 1. 그래프 정보 입력
  for (let j = 0; j < K; j++) {
    const [x, y] = getInputValue();

    graph[y + 1][x + 1] = 1;
  }

  // 2. 방문하지 않은 지점부터 dfs 돌기
  let answer = 0;
  for (let x = 1; x < N + 1; x++) {
    for (let y = 1; y < M + 1; y++) {
      if (graph[x][y] === 1) {
        DFS(x, y);
        answer += 1;
      }
    }
  }

  console.log(answer);
}
