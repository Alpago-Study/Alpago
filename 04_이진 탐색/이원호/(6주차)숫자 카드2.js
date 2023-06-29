// [문제 이름]
// : 숫자 카드2

// [문제 설명]
// : 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/10816

function solution(n, m) {
  //이진탐색을 위해 오름차순 정렬
  n.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < m.length; i++) {
    let start = 0;
    let end = n.length - 1;
    let count = 0;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (n[mid] === m[i]) {
        count++;
        let left = mid - 1;
        let right = mid + 1;

        // mid 좌측에 있는 숫자의 출현 횟수를 세기 위한 반복문
        while (left >= 0 && n[left] === m[i]) {
          count++;
          left--;
        }

        // mid 우측에 있는 숫자의 출현 횟수를 세기 위한 반복문
        while (right < n.length && n[right] === m[i]) {
          count++;
          right++;
        }

        break;
      } else if (n[mid] < m[i]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    result.push(count ? count : 0);
  }

  return result;
}

console.log(
  solution([6, 3, 2, 10, 10, 10, -10, -10, 7, 3], [10, 9, -5, 2, 3, 4, 5, -10])
);
