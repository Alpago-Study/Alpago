// [문제 이름]
// : 배열 돌리기1

// [문제 설명]
// : 크기가 N×M인 배열이 있을 때, 배열을 돌려보려고 한다. 배열은 다음과 같이 반시계 방향으로 돌려야 한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/16926

// 결과: 메모리 24865KB, 시간: 244ms

/**
 * 각각 회전하는 요소들을 모은 리스트(rotateDepthList) 만들기
 * [ 1,  2,  3,  4]
 * [ 5,  6,  7,  8]
 * [ 9, 10, 11, 12]
 * [13, 14, 15, 16]
 * 요런 배열이라면,
 * rotateDepthList = [[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5], [6, 7, 11, 10]]
 */
function setRotateDepthList(arr, N, M, rotationDepth) {
  const rotationDepthList = [];
  const rotationDepthCntArr = [];
  for (let i = 0; i < rotationDepth; i++) {
    const temp = [];

    let curX = i;
    let curY = i;
    const elementCnt = (N - 1 - 2 * i) * 2 + (M - 1 - 2 * i) * 2;
    rotationDepthCntArr.push(elementCnt);

    for (let j = i; j < i + elementCnt; j++) {
      //   console.log('cur: ', curX, curY);
      temp.push(arr[curX][curY]);

      if (curX === i && curY < M - 1 - i) {
        // console.log('위', curX, curY, ': ', arr[curX][curY]);
        curY += 1;
      } else if (curX < N - 1 - i && curY === M - 1 - i) {
        // console.log('오른', curX, curY, ': ', arr[curX][curY]);
        curX += 1;
      } else if (curX === N - 1 - i && curY > i) {
        // console.log('아래', curX, curY, ': ', arr[curX][curY]);
        curY -= 1;
      } else if (curX > i && curY === i) {
        // console.log('왼', curX, curY, ': ', arr[curX][curY]);
        curX -= 1;
      }
    }
    rotationDepthList.push(temp);
  }
  return rotationDepthList;
}

/**
 * 각각 회전하는 요소들을 모은 리스트(rotateDepthList) 회전하기
 * [ 1,  2,  3,  4]
 * [ 5,  6,  7,  8]
 * [ 9, 10, 11, 12]
 * [13, 14, 15, 16]
 * 요런 배열이라면, 2번 돌면
 * [ 3,  4,  8, 12]
 * [ 2, 11, 10, 16]
 * [ 1,  7,  6, 15]
 * [ 5,  9, 13, 14]
 * 이렇게 나와야하는데
 * 그래서 만들어져야 하는 rotateDepthList 배열은 다음과 같음
 * rotateDepthList = [[3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 1, 2], [11, 10, 6, 7]]
 */
function rotate(rotationDepthList, R) {
  // 만약 R이 20일 경우 20회 다 돌 필요가 없음.
  // rotateDepthList의 첫번째 요소의 길이는 12이므로 12번 돌면 제자리이므로
  // R에서 v.length를 나눈 나머지 만큼만 회전 시키면 됨.
  const rotationDepthCntArr = rotationDepthList.map((v) => R % v.length);

  for (let i = 0; i < rotationDepthList.length; i++) {
    const splicedArr = rotationDepthList[i].splice(0, rotationDepthCntArr[i]);

    rotationDepthList[i] = [...rotationDepthList[i], ...splicedArr];
  }

  return rotationDepthList;
}

// 다시 rotateDepthList를 정답 배열로 바꾸기
function makeAnswer(result, N, M, rotationDepth) {
  let answer = '';
  let temp = Array.from(new Array(N), () => new Array(M).fill(0));
  for (let i = 0; i < rotationDepth; i++) {
    let curX = i;
    let curY = i;

    for (let j = 0; j < result[i].length; j++) {
      temp[curX][curY] = result[i][j];

      if (curX === i && curY < M - 1 - i) {
        console.log('위', curX, curY, ': ', temp[curX][curY]);
        curY += 1;
      } else if (curX < N - 1 - i && curY === M - 1 - i) {
        console.log('오른', curX, curY, ': ', temp[curX][curY]);
        curX += 1;
      } else if (curX === N - 1 - i && curY > i) {
        console.log('아래', curX, curY, ': ', temp[curX][curY]);
        curY -= 1;
      } else if (curX > i && curY === i) {
        console.log('왼', curX, curY, ': ', temp[curX][curY]);
        curX -= 1;
      }
    }
  }
  console.log('temp', temp);
  temp.forEach((v) => {
    answer += v.join(' ') + '\n';
  });

  return answer.trim();
}

function solution(exampleArrSize, rotationCnt, exampleArr) {
  const [N, M] = exampleArrSize;
  const R = rotationCnt;
  let arr = exampleArr;
  let answer = '';

  const rotationDepth = Math.floor(Math.min(N, M) / 2);

  // 각각 회전하는 요소들을 모은 리스트(rotateDepthList) 만들기
  const rotationDepthList = setRotateDepthList(arr, N, M, rotationDepth);
  //   console.log('rotationDepthList', rotationDepthList);

  // 각각 회전하는 요소들을 모은 리스트(rotateDepthList)를 회전 시켜 result에 저장
  const result = rotate(rotationDepthList, R);
  //   console.log('result', result);

  // 다시 이중배열로 만들기
  answer = makeAnswer(result, N, M, rotationDepth);

  return answer;
}

/**
 * 문제
 */
const exampleArrSize1 = [4, 4];
const rotationCnt1 = 2;
const exampleArr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// console.log('1번 문제\n', solution(exampleArrSize1, rotationCnt1, exampleArr1));

const exampleArrSize2 = [5, 4];
const rotationCnt2 = 7;
const exampleArr2 = [
  [1, 2, 3, 4],
  [7, 8, 9, 10],
  [13, 14, 15, 16],
  [19, 20, 21, 22],
  [25, 26, 27, 28],
];
// console.log('2번 문제\n', solution(exampleArrSize2, rotationCnt2, exampleArr2));

const exampleArrSize3 = [6, 6];
const rotationCnt3 = 3;
const exampleArr3 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];
console.log('3번 문제\n', solution(exampleArrSize3, rotationCnt3, exampleArr3));
