// [문제 이름]
// : 미로탐색

// [문제 설명]
// : 7 * 7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.
//   출발점은 격자의 (1,1) 좌표이고, 탈출 도착점은 (7,7) 좌표 입니다.
//   격자판의 1은 벽이고, 0은 통로이며 격자판의 움직임은 상하좌우로만 움직입니다.

let maze = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

const maze_search = (maze) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0]; // up, right, down, left
  let dy = [0, 1, 0, -1]; // up, right, down, left

  const dfs = (x, y) => {
    if (x === 6 && y === 6) {
      // (7,7) 즉, 끝에 도달했으면 answer를 증가 시키기
      answer++;
    } else {
      for (let k = 0; k < 4; k++) {
        // dx, dy의 index 조회하기
        let nx = x + dx[k];
        let ny = y + dy[k];

        // nx, ny가 -1일 때는 continue를 줘도 될 것 같다
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && maze[nx][ny] === 0) {
          maze[nx][ny] = 1; // 방문 처리
          dfs(nx, ny);
          maze[nx][ny] = 0; // dfs 탐색을 마친 후 해당 위치의 값을 원래대로 돌려놓는 녀석(되돌려 놓지 않으면 다른 경로에서 미로 탐색이 불가능)
        }
      }
    }
  };
  maze[0][0] = 1;
  dfs(0, 0);
  return answer;
};

console.log(maze_search(maze));
