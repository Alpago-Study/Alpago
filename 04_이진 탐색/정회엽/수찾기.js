/*문제이름 : 수찾기

문제 설명 : N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 
이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 
N개의 정수 A[1], A[2], …, A[N]이 주어진다. 
다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다. 
다음 줄에는 M개의 수들이 주어지는데, 
이 수들이 A안에 존재하는지 알아내면 된다. 
모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

문제링크 : https://www.acmicpc.net/problem/1920*/

function solution(N, M) {
  let low = 0;
  let high = N.length - 1;
  let result = [];
  N = N.sort((a, b) => a - b);
  M = M.sort((a, b) => a - b);
  for (let i = 0; i < M.length; i++) {
    let isTrue = false;
    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      if (M[i] < N[middle]) {
        high = middle - 1;
      } else if (M[i] > N[middle]) {
        low = middle + 1;
      } else {
        isTrue = true;
        break;
      }
    }
    isTrue ? result.push(1) : result.push(0);
    low = 0;
    high = N.length - 1;
  }
  return result.join('\n');
}

console.log(solution([4, 1, 5, 2, 3, 6], [1, 3, 5, 7, 9]));

// 이진탐색
//   while (low <= high) {
//     let middle = Math.floor((low + high) / 2);
//     console.log(N[middle]);
//     if (M < N[middle]) {
//       high = middle - 1;
//     } else if (M > N[middle]) {
//       low = middle + 1;
//     } else return 1;
//   }
//   return 0;
