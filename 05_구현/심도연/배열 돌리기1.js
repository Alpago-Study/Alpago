// [문제 이름]
// : 배열 돌리기

// [문제 설명]
// : 배열과 정수 R이 주어졌을 때, 배열을 R번 회전시킨 결과를 구해보자.

// [문제 링크]
// : https://www.acmicpc.net/problem/16926

const rotate_array1 = (N, M, R, A) => {
  const rotate = (N, M, A) => {
    const rect_cnt = Math.min(N, M) / 2;

    for (let rect_idx = 0; rect_idx < rect_cnt; rect_idx++) {
      const rect_LT = A[rect_idx][rect_idx];
      const row_idx = N - rect_idx - 1;
      const col_idx = M - rect_idx - 1;

      // 위
      for (let i = rect_idx; i < col_idx; i++) {
        A[rect_idx][i] = A[rect_idx][i + 1];
      }

      // 오른쪽
      for (let i = rect_idx; i < row_idx; i++) {
        A[i][col_idx] = A[i + 1][col_idx];
      }

      // 이래
      for (let i = col_idx; i > rect_idx; i--) {
        A[row_idx][i] = A[row_idx][i - 1];
      }

      // 왼쪽
      for (let i = row_idx; i > rect_idx; i--) {
        A[i][rect_idx] = A[i - 1][rect_idx];
      }

      A[rect_idx + 1][rect_idx] = rect_LT;
    }
  };

  for (let i = 0; i < R; i++) {
    rotate(N, M, A);
  }

  console.log(A);
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(rotate_array1(4, 4, 1, matrix));
