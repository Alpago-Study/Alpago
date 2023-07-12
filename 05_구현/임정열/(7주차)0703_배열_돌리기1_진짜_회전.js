// [문제 이름]
// : 배열 돌리기1

// [문제 설명]
// : 크기가 N×M인 배열이 있을 때, 배열을 돌려보려고 한다. 배열은 다음과 같이 반시계 방향으로 돌려야 한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/16926

// 결과: 메모리 47668KB, 시간: 1192ms

// 정말로 한번씩 회전하는 방식으로 작동하는 코드
/**
 * 한번 회전 시
 * 위, 아래, 왼, 오른쪽 기준
 * 위쪽  (0, 0), (0, 1), (0, 2) 영역
 * 아래쪽 (3, 1), (3, 2), (3, 3) 영역
 * 왼쪽  (0, 1), (0, 2), (0, 3) 영역
 * 오른쪽 (1, 3), (2, 3), (3, 3) 영역
 * [ 1,  2,  3,  4]
 * [ 5,  6,  7,  8]
 * [ 9, 10, 11, 12]
 * [13, 14, 15, 16]
 */

function rotateOnce(N, M, arr) {
  // 미리 만들어두지 않으면 에러가 남
  let temp = Array.from(new Array(N), () => new Array(M).fill(0));
  const rotationDepth = Math.floor(Math.min(N, M) / 2);

  for (let i = 0; i < rotationDepth; i++) {
    // 위쪽
    for (let t = M - 2 - i; t >= 0 + i; t--) {
      temp[i][t] = arr[i][t + 1];
      //   console.log(`t: (${i}, ${t}), ${temp[i][t]}`);
    }

    // 아래쪽
    for (let b = i; b < M - 1 * (i + 1); b++) {
      temp[N - 1 - i][b + 1] = arr[N - 1 - i][b];
      //   console.log(`b: (${N - 1 - i}, ${b + 1}), ${temp[N - 1 - i][b + 1]}`);
    }

    // 왼쪽
    for (let l = i; l < N - i - 1; l++) {
      temp[l + 1][i] = arr[l][i];
      // console.log(`l: (${l + 1}, ${i}), ${temp[l + 1][i]}`);
    }

    // 오른쪽
    for (let r = N - 2 - i; r >= 0 + i; r--) {
      temp[r][M - 1 - i] = arr[r + 1][M - 1 - i];
      //   console.log(`r: (${r}, ${M - 1 - i}), ${temp[r][M - 1 - i]}`);
    }
  }

  return temp;
}

function solution(exampleArrSize, rotationCnt, exampleArr) {
  const [N, M] = exampleArrSize;
  const R = rotationCnt;
  let arr = exampleArr;
  let temp = [...arr];

  let answer = '';

  for (let i = 0; i < R; i++) {
    temp = rotateOnce(N, M, arr);
    arr = [...temp];
  }

  temp.forEach((v) => {
    answer += v.join(' ') + '\n';
  });

  return answer.trim();
}

const exampleArrSize1 = [4, 4];
const rotationCnt1 = 2;
const exampleArr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log('1번 문제', solution(exampleArrSize1, rotationCnt1, exampleArr1));

const exampleArrSize2 = [5, 4];
const rotationCnt2 = 7;
const exampleArr2 = [
  [1, 2, 3, 4],
  [7, 8, 9, 10],
  [13, 14, 15, 16],
  [19, 20, 21, 22],
  [25, 26, 27, 28],
];
console.log('2번 문제\n', solution(exampleArrSize2, rotationCnt2, exampleArr2));
