// [문제 이름]
// : 수 찾기

// [문제 설명]
// : N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1920

// m의 요소가 n배열 안에 있으면 1, 없으면 0 리턴
function solution(n, m) {
  // 이진탐색을 위해 n배열 오름차순 정렬
  n.sort((a, b) => a - b);

  let result = [];

  // m의 요소가 n배열에 있는지 확인하는 반복문
  for (let i = 0; i < m.length; i++) {
    // 시작지점과 끝지점 설정
    let start = 0;
    let end = n.length - 1;
    let found = false;

    // 시작지점이 끝지점보다 커질때까지 while문 동작
    while (start <= end) {
      // 중간지점(index) 설정
      let mid = Math.floor((start + end) / 2);

      // n = [1,2,3,4,5], m = [1, 3, 7, 9, 5], mid = 2
      // n[2] = 3, m[0] = 1
      // else조건에 따라 end = 2 - 1 = 1
      // 다시 while문
      // mid = 0, n[0] = 1, m[0] = 1
      // if 조건 충족, found = true => 반복문 탈출

      if (n[mid] === m[i]) {
        found = true;
        break;
      } else if (n[mid] < m[i]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    // 위 과정을 for문으로 반복하며, found가 true인 경우 result 배열에 1 push, 그렇지 않은 경우 0 push
    result.push(found ? 1 : 0);
  }

  return result;
}

console.log(solution([4, 1, 5, 2, 3], [1, 3, 7, 9, 5]));
