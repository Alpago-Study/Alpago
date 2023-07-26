// [문제 이름]
// : 유기농 배추 (1012번)

// [문제 설명]
// : 군데군데 심어놓은 배추들을 농약 없이 키우려면 총 몇마리의 배추흰지렁이가 필요한지 계산해야 한다.
// 어떤 배추에 배추 흰지렁이가 한마리라도 살고있으면 인접한 다른 배추로 이동하여 해충으로부터 보호받을 수 있다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1012

// 백준 제출용 코드
let fs = require('fs');
let data = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));
let testCase = data.shift();

const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let [M, N, K] = [];
let map = [];

function bfs(startX, startY) {
  // 배추가 있는 곳의 좌표를 queue에 담는다.
  const queue = [[startX, startY]];
  while (queue.length) {
    // queue에서 값을 하나씩 빼서 만약 map의 해당 좌표가 0이라면 해당 좌표의 반복문을 건너뛰고, 해당 좌표가 1이라면 0으로 바꿔준다.
    const [x, y] = queue.shift();
    if (!map[x][y]) continue;
    else map[x][y] = 0;

    // 인접한 좌표에 배추가 있는지 확인하고, 있다면 queue에 추가하여 인접 좌표의 탐색을 할 수 있도록 한다.
    for (let i = 0; i < 4; i++) {
      const xPos = x + ds[i][0];
      const yPos = y + ds[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= M || yPos >= N) continue;
      if (map[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }
}

// 테스트케이스가 여러개라면 테스트케이스의 갯수만큼 반복할 수 있도록 반복문 사용
for (let i = 0; i < testCase; i++) {
  let worm = 0;
  // 배추밭의 가로 길이(M), 세로 길이(N), 배추의 개수(K)를 변수에 할당해준다.
  [M, N, K] = data.shift();
  // 배추밭과 배추의 위치를 담을 이차원 배열을 만들어준다.
  map = Array.from(Array(M), () => new Array(N).fill(0));
  // 비어있는 배열을 돌며 인자로 넘어온 배추밭의 정보를 토대로 map에서 배추가 있는 위치를 1로 바꿔준다.
  for (let j = 0; j < K; j++) {
    let xy = data.shift();
    map[xy[0]][xy[1]] = 1;
  }

  // 가로세로 반복문을 돌며 좌표가 1인 곳을 만난다면 worm의 수를 1 늘려준다.
  // bfs 함수를 불러와서 해당 배추의 좌표와 인접한 위치해 존재하는 모든 배추들의 좌표를 0으로 만들어준다.
  // 확인한 곳은 0으로 만들어줌으로써 해당 좌표를 확인했음을 체크하는 용도
  for (let k = 0; k < M; k++) {
    for (let l = 0; l < N; l++) {
      if (map[k][l]) {
        bfs(k, l);
        worm++;
      }
    }
  }

  // worm의 개수를 출력해준다.
  console.log(worm);
}
