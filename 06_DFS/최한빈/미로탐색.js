// [문제 이름]
// : 미로 탐색

// [문제 설명]
// :

// [문제 링크]
// :

const solution = (map) => {
  // 경로 개수
  let count = 0;
  const dfs = (x, y, v) => {
    // 도착지에 도착하면 개수+1 하고 dfs 종료
    if (x === 6 && y === 6) {
      count++;
      return;
    }
    // 현재 좌표가 1이면 dfs 종료
    if (map[x][y] === 1) return;
    // 이미 방문한 좌표면 dfs 종료
    if (v.some((ele) => ele[0] === x && ele[1] === y)) return;
    else {
      // 방문한 좌표 처리
      v.push([x, y]);
      // 움직일 수 있는 경우에만 dfs 탐색 수행
      x - 1 >= 0 ? dfs(x - 1, y, [...v]) : null;
      y - 1 >= 0 ? dfs(x, y - 1, [...v]) : null;
      x + 1 < map.length ? dfs(x + 1, y, [...v]) : null;
      y + 1 < map[0].length ? dfs(x, y + 1, [...v]) : null;
    }
  };
  // 0,0 부터 시작
  dfs(0, 0, []);
  return count;
};

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
