// [문제 이름]
// : 예산

// [문제 설명]
// : 여러 지방의 예산요청과 국가예산의 총액이 주어졌을 때, 위의 조건을 모두 만족하도록 예산을 배정하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2512

const input = '4\n120 110 140 150\n485'.toString().trim().split('\n');
const n = input[2].split(' ').map((v) => Number.parseInt(v));
const list = input[1].split(' ').map((v) => Number.parseInt(v));

const bSearch = (arr, target) => {
  let min = 0;
  let max = Math.max(...list);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let total = 0;
    arr.forEach((v) => {
      v > mid ? (total += mid) : (total += v);
    });

    total <= target ? (min = mid + 1) : (max = mid - 1);
  }

  return max;
};

console.log(bSearch(list, n));
