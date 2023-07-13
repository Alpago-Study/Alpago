// [문제 이름]
// : 나무 자르기

// [문제 설명]
// : 첫째 줄에 나무의 수 N과 상근이가 집으로 가져가려고 하는 나무의 길이 M이 주어진다.
//   적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 출력한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/2805

const input = '5 20\n4 42 40 26 46'.toString().trim().split('\n');
const [k, n] = input[0].split(' ').map((v) => Number.parseInt(v));
const list = input[1].split(' ').map((v) => Number.parseInt(v));

const bSearch = (arr, target) => {
  let min = 0;
  let max = Math.max(...arr);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let rest = 0;
    list.forEach((v) => {
      if (v > mid) {
        rest += v - mid;
      }
    });

    rest >= target ? (min = mid + 1) : (max = mid - 1);
  }

  return max;
};

console.log(bSearch(list, n));
