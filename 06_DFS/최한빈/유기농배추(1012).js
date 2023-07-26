// [문제 이름]
// : 유기농 배추

// [문제 설명]
// : 차세대 영농인 한나는 강원도 고랭지에서 유기농 배추를 재배하기로 하였다. 농약을 쓰지 않고 배추를 재배하려면 배추를 해충으로부터 보호하는 것이 중요하기 때문에, 한나는 해충 방지에 효과적인 배추흰지렁이를 구입하기로 결심한다. 이 지렁이는 배추근처에 서식하며 해충을 잡아 먹음으로써 배추를 보호한다. 특히, 어떤 배추에 배추흰지렁이가 한 마리라도 살고 있으면 이 지렁이는 인접한 다른 배추로 이동할 수 있어, 그 배추들 역시 해충으로부터 보호받을 수 있다. 한 배추의 상하좌우 네 방향에 다른 배추가 위치한 경우에 서로 인접해있는 것이다.

// 한나가 배추를 재배하는 땅은 고르지 못해서 배추를 군데군데 심어 놓았다. 배추들이 모여있는 곳에는 배추흰지렁이가 한 마리만 있으면 되므로 서로 인접해있는 배추들이 몇 군데에 퍼져있는지 조사하면 총 몇 마리의 지렁이가 필요한지 알 수 있다. 예를 들어 배추밭이 아래와 같이 구성되어 있으면 최소 5마리의 배추흰지렁이가 필요하다. 0은 배추가 심어져 있지 않은 땅이고, 1은 배추가 심어져 있는 땅을 나타낸다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1012

// 벌레 마릿수 구하는 함수
const countBug = (map, width, height) => {
  let count = 0;
  const dfs = (x, y, flag) => {
    // 지도에 0으로 마킹되어있으면 배추가 없는 공간이거나 이미 벌레가 할당된 공간 -> 바로 리턴해준다.
    if (map[x][y] === 0) return;
    // 배추가 있는 공간 -> 벌레를 할당해줘야함.
    else {
      // 벌레가 할당된 공간으로 표기하게 하기 위해 0으로 마킹
      map[x][y] = 0;
      // 현재 처음으로 할당된 배추라면 count+1
      if (!flag) count++;
      // 이후 상하좌우로 이동할 수 있다면(범위를 안넘어가면) dfs를 수행. count는 늘리지 않기 위해 flag를 변경해서 dfs수행.
      if (x + 1 < width) dfs(x + 1, y, true);
      if (y + 1 < height) dfs(x, y + 1, true);
      if (x - 1 >= 0) dfs(x - 1, y, true);
      if (y - 1 >= 0) dfs(x, y - 1, true);
    }
  };

  // (0,0) 부터 (m,n) 까지 각 좌표에 대해서 dfs 수행.
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      dfs(i, j, false);
    }
  }
  return count;
};

// 백준 문제풀이용 코드
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const [m, n, num] = input.shift().split(' ').map(Number);
  // 가로, 세로 길이만큼 초기값이 0으로 셋팅된 2차원 배열을 생성
  const map = Array.from(Array(m), () => new Array(n).fill(0));
  for (let j = 0; j < num; j++) {
    const [x, y] = input.shift().split(' ').map(Number);
    // 현재 배추가 있는 위치는 1로 마킹
    map[x][y] = 1;
  }
  // 그렇게 생성된 지도를 통해 벌레 마릿수 구하는 함수 실행.
  console.log(countBug(map, m, n));
}
