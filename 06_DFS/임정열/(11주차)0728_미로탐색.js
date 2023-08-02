// [문제 이름]
// : 미로 탐색

// [문제 설명]
// : 1은 벽이고, 0은 통로이다. 격자판의 움직임은 상하좌우로만 움직인다.
//   격자판의 정보가 주어지면 첫번째 줄에 경로의 가지수를 출력한다.

// [문제 링크]
// :

// 미로탐색 최단거리 참고: https://velog.io/@otterp/%EB%B0%B1%EC%A4%80-2178-%EB%AF%B8%EB%A1%9C-%ED%83%90%EC%83%89-javascript

const graph = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
// 격자판 가로 길이
let M = graph[0].length;
// 격자판 세로 길이
let N = graph.length;

let visited = Array.from(Array(N), () => Array(M).fill(0));

// 아래(1, 0), 위(-1, 0), 오른쪽(0, 1), 왼쪽(0, -1)
let dirR = [1, -1, 0, 0];
let dirC = [0, 0, 1, -1];

let answer = 0;

function DFS(x, y) {
  if (x === M - 1 && y === N - 1) {
    answer++;
    return;
  }

  for (let i = 0; i < 4; i++) {
    let newX = x + dirC[i];
    let newY = y + dirR[i];

    let movableCondition =
      newX >= 0 &&
      newX < M &&
      newY >= 0 &&
      newY < N &&
      graph[newX][newY] === 0 &&
      visited[newX][newY] === 0;

    if (movableCondition) {
      visited[newX][newY] = 1;
      DFS(newX, newY);
      visited[newX][newY] = 0; // 갔던곳 다시 풀어줌
    }
  }
}

visited[0][0] = 1;
DFS(0, 0);
console.log(answer);
