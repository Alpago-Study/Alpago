// [문제 이름]
// : 배열돌리기1

// [문제 설명]
// : n*m 배열 이 주어졌을때, 반시계방향으로 r번 회전시키기

// [문제 링크]
// : https://www.acmicpc.net/problem/16926

// 2차원 배열 arr, 반시계 회전 횟수 r
function solution(arr, r) {
  /*
  00 01 02 03
  10 11 12 13
  20 21 22 23
  30 31 32 33

  01 02 03 13
  00 12 22 23
  10 11 21 33
  20 30 31 32

  02 03 13 23
  01 22 21 33
  00 12 11 32
  10 12 11 31

 */
  // r번 반복하기 위한 반복문
  for (let i = 1; i <= r; i++) {
    arr = rotation(arr);
  }

  // 회전함수 만들기
  function rotation(arr) {
    let min = Math.min(arr.length, arr[0].length);

    // 2차원 배열에 요소 0값으로 넣기
    let temp = new Array(arr.length)
      .fill(null)
      .map((_) => new Array(arr[0].length).fill(0));

    for (let limit = 0; limit < Math.floor(min / 2); limit++) {
      // top row.
      for (let j = arr[0].length - 2 - limit; j >= 0 + limit; j--) {
        temp[0 + limit][j] = arr[0 + limit][j + 1];
      }
      // left.
      for (let j = 1 + limit; j < arr.length - limit; j++) {
        temp[j][0 + limit] = arr[j - 1][0 + limit];
      }
      // under.
      for (let j = 1 + limit; j < arr[0].length - limit; j++) {
        temp[arr.length - 1 - limit][j] = arr[arr.length - 1 - limit][j - 1];
      }
      // right.
      for (let j = arr.length - 2 - limit; j >= 0 + limit; j--) {
        temp[j][arr[0].length - 1 - limit] =
          arr[j + 1][arr[0].length - 1 - limit];
      }
    }

    return temp;
  }

  return arr;
}

console.log(
  solution(
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
  solution(
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
