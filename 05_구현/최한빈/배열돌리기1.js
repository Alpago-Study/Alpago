// [문제 이름]
// : 배열 돌리기 1

// [문제 설명]
// : 크기가 N×M인 배열이 있을 때, 배열을 돌려보려고 한다. 배열은 다음과 같이 반시계 방향으로 돌려야 한다.
// 배열과 정수 R이 주어졌을 때, 배열을 R번 회전시킨 결과를 구해보자.

// [문제 링크]
// : https://www.acmicpc.net/problem/16926

function rotation(arr) {}

function solution(arr, r) {
  /*
    사각형을 테두리에 있는것들을 돌리고 차례로 안쪽으로 들어가서 돌린다.
  */
  const answer = 0;
  let [n, m] = [arr.length, arr[0].length];
  let num = Math.min(n, m) / 2;
  let result = Array.from(Array(n), () => Array(m).fill(null));
  // 사각형을 나눠야 하는 개수 -> min(n,m)/2

  // r횟수 만큼 돌린다.
  for (let t = 0; t < r; t++) {
    for (let k = t; k < num; k++) {
      console.log(k, n, m);
      for (i of [k, n - 1]) {
        // 첫번째 처리
        if (i === k) {
          // 첫번째 가로 라인
          for (let j = k; j < m; j++) {
            if (j === k) {
              continue;
            } else {
              result[i][j - 1] = arr[i][j];
            }
          }
          // 첫번째 세로 라인
          for (let j = k; j < n; j++) {
            if (j === n - 1) {
              result[j][i + 1] = arr[j][i];
              continue;
            }
            result[j + 1][i] = arr[j][i];
          }
        }
        // 마지막 라인 처리
        else {
          // 마지막 가로 라인
          for (let j = k; j < m; j++) {
            if (j === m - 1) continue;
            result[i][j + 1] = arr[i][j];
          }
          // 마지막 세로 라인
          for (let j = k + 1; j < m; j++) {
            result[j - 1][i] = arr[j][i];
          }
        }
      }
      n--;
      m--;
    }
    console.log(result);
    arr = result;
  }
  return result;
}

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 8, 7, 6],
      [5, 4, 3, 2],
    ],
    2
  )
);
