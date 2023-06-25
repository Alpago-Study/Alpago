// N개의 정수 담은 배열 => e.g. [1, 2, 3, 4, 5]
// 배열안에 X 라는 정수가 존재하는지 ?

// 1. 자연수 N
// 2. N개의 정수 배열(배열이라 가정)
// 3. 자연수 M
// 4. M개의 정수 배열 => 2. 안에 존재하는지?

// 4 1 5 2 3
// 1 3 7 9 5

// = 1,3,5
// = 1,1,0,0,1 ** M개의 정수 배열을 기준으로 ** N개의 정수 배열안에 같은 숫자가 있으면 1, 아니면 0

// [문제 이름]
// : 수 찾기

// [문제 설명]
// : N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1920

const findNumber = (n, m) => {
  let result = [];

  m.forEach((cur) => {
    if (n.includes(cur)) {
      result.push(1);
    } else {
      result.push(0);
    }
  });
  return result;
};

let n = [4, 1, 5, 2, 3];
let m = [1, 3, 7, 9, 5];
let a = [1, 3, 4, 5, 6];
let b = [9, 8, 5, 2, 1];
// console.log(findNumber(n, m));
// console.log(findNumber(a, b));

const binaryFindNumber = (n, m) => {
  let result = [];
  let sorted = n.sort((a, b) => a - b);
  // 1, 2, 3, 4, 5

  m.forEach((cur) => {
    // 바깥에서 선언해 버리면 초기화가 안되서 1,1,1,1,1 로 답이 나와버린다
    let left = 0;
    let right = sorted.length - 1;
    let flag = false;

    // 1, 3, 7, 9, 5
    // left가 right 보다 크면 종료
    while (left <= right) {
      let mid = parseInt((left + right) / 2);

      if (sorted[mid] > cur) {
        right = mid - 1;
      } else if (sorted[mid] < cur) {
        left = mid + 1;
      } else {
        // cur === sorted[mid]
        flag = true;
        break;
      }
    }

    if (flag) {
      result.push(1);
    } else {
      result.push(0);
    }
  });

  return result;
};

console.log(binaryFindNumber(n, m));
console.log(binaryFindNumber(a, b));
