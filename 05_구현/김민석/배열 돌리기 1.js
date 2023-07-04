// [문제 이름]
// : 배열 돌리기 1

// [문제 설명]
// : 크기가 N×M인 배열이 있을 때, 배열을 돌려보려고 한다. 배열은 다음과 같이 반시계 방향으로 돌려야 한다.

// 배열과 정수 R이 주어졌을 때, 배열을 R번 회전시킨 결과를 구해보자.

// [문제 링크]
// : https://www.acmicpc.net/problem/16926

const rotate = (N, M, arr) => {
  // 1. 배열의 행, 열 중 최솟값 저장
  const min = Math.min(N, M);
  // 2. 회전 결과를 저장할 초기 배열 생성
  const rotated = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );

  // 3. 배열 회전
  // ⭐ 회전은 행, 열 중 최솟값을 2로 나누어 버림한 값만큼만 수행 ⭐
  // ex) 만약 행과 열이 4인 경우 바깥 배열 한 번, 안쪽 배열 한 번 수행하면 되기 때문
  // ⭐ 회전할 때 각 줄이 모서리에 해당하는 부분은 채우지 않음 ⭐
  // : 각 줄의 모서리는 다른 줄을 이동시킬 때 자동으로 채워지기 때문
  // ex) [1, 2, 3, 4] > [2, 3, 4] 까지만 수행, 어차피 오른쪽 줄을 회전하면서 채워지는 부분
  for (let limit = 0; limit < Math.floor(min / 2); limit++) {
    // 3-1. 윗 줄을 오른쪽으로 한 칸 이동
    for (let j = M - 2 - limit; j >= 0 + limit; j--) {
      rotated[0 + limit][j] = arr[0 + limit][j + 1];
      // console.log('top:', rotated);
    }
    // 3-2. 왼쪽 줄을 위로 한 칸 이동
    for (let j = 1 + limit; j < N - limit; j++) {
      rotated[j][0 + limit] = arr[j - 1][0 + limit];
      // console.log('left:', rotated);
    }
    // 3-3. 아랫 줄을 왼쪽으로 한 칸 이동
    for (let j = 1 + limit; j < M - limit; j++) {
      rotated[N - 1 - limit][j] = arr[N - 1 - limit][j - 1];
      // console.log('bottom:', rotated);
    }
    // 3-4. 오른쪽 줄을 아래로 한 칸 이동
    for (let j = N - 2 - limit; j >= 0 + limit; j--) {
      rotated[j][M - 1 - limit] = arr[j + 1][M - 1 - limit];
      // console.log('right:', rotated);
    }
  }

  return rotated;
};

const rotateArr = (arr, count) => {
  const column = arr.length; // 배열의 세로 길이
  const row = arr[0].length; // 배열의 가로 길이

  // 1. 인수로 전달한 횟수만큼 배열 회전
  for (let i = 0; i < count; i++) {
    // 1-1. 회전 수행 결과로 반환한 배열을 갱신
    arr = [...rotate(column, row, arr)];
  }

  // 2. 회전이 완료된 최종 배열 반환
  return arr;
};

console.log(
  rotateArr(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    2
  )
);
console.log(
  rotateArr(
    [
      [1, 2, 3, 4],
      [7, 8, 9, 10],
      [13, 14, 15, 16],
      [19, 20, 21, 22],
      [25, 26, 27, 28],
    ],
    7
  )
);
console.log(
  rotateArr(
    [
      [1, 1],
      [1, 1],
    ],
    3
  )
);
