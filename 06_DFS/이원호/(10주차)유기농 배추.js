// [문제 이름]
// : 유기농배추

// [문제 설명]
// : 차세대 영농인 한나는 강원도 고랭지에서 유기농 배추를 재배하기로 하였다. 농약을 쓰지 않고 배추를 재배하려면 배추를 해충으로부터 보호하는 것이 중요하기 때문에, 한나는 해충 방지에 효과적인 배추흰지렁이를 구입하기로 결심한다. 이 지렁이는 배추근처에 서식하며 해충을 잡아 먹음으로써 배추를 보호한다. 특히, 어떤 배추에 배추흰지렁이가 한 마리라도 살고 있으면 이 지렁이는 인접한 다른 배추로 이동할 수 있어, 그 배추들 역시 해충으로부터 보호받을 수 있다. 한 배추의 상하좌우 네 방향에 다른 배추가 위치한 경우에 서로 인접해있는 것이다.
//  한나가 배추를 재배하는 땅은 고르지 못해서 배추를 군데군데 심어 놓았다. 배추들이 모여있는 곳에는 배추흰지렁이가 한 마리만 있으면 되므로 서로 인접해있는 배추들이 몇 군데에 퍼져있는지 조사하면 총 몇 마리의 지렁이가 필요한지 알 수 있다. 예를 들어 배추밭이 아래와 같이 구성되어 있으면 최소 5마리의 배추흰지렁이가 필요하다. 0은 배추가 심어져 있지 않은 땅이고, 1은 배추가 심어져 있는 땅을 나타낸다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1012

// N : 문제의 개수,
// M : 제한 시간,
// problems : 각 문제의 점수와 시간이 담긴 이차원 배열

function solution(row, col, locations) {
  // 0 으로 채운 2차원 배열 만들어주기
  const cabbageField = Array.from({ length: row }, () => Array(col).fill(0));
  // 앞,뒤,위,아래 방향 만들어두고
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // 실제 배추가 심어져 있는곳 1로 채우기
  // locations 배열의 각 요소에서 r 및 c 값을 추출하여 구조분해할당
  for (const [r, c] of locations) {
    cabbageField[r][c] = 1;
  }

  // 행열의 r,c 값이 유효값인지 확인하는 함수(안전장치)
  const isValidPosition = (r, c) => r >= 0 && r < row && c >= 0 && c < col;

  const BFS = (startRow, startCol) => {
    const queue = [[startRow, startCol]];
    cabbageField[startRow][startCol] = 0;

    while (queue.length > 0) {
      // queue에서 맨앞에서 뽑아놓은 값을 [r,c]로 저장
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const newRow = r + dr;
        const newCol = c + dc;

        if (
          isValidPosition(newRow, newCol) &&
          cabbageField[newRow][newCol] === 1
        ) {
          queue.push([newRow, newCol]);
          cabbageField[newRow][newCol] = 0;
        }
      }
    }
  };

  let earthwormCount = 0;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (cabbageField[r][c] === 1) {
        // 행렬의 값이 1일경우 BFS탐색 실행
        BFS(r, c);
        earthwormCount++;
      }
    }
  }

  return earthwormCount;
}

console.log(
  solution(10, 8, [
    [0, 0],
    [1, 0],
    [1, 1],
    [4, 2],
    [4, 3],
    [4, 5],
    [2, 4],
    [3, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [7, 5],
    [8, 5],
    [9, 5],
    [7, 6],
    [8, 6],
    [9, 6],
  ])
);
