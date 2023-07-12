// [문제 이름]
// : 랜선 자르기

// [문제 설명]
// : 첫째 줄에는 오영식이 이미 가지고 있는 랜선의 개수 K, 그리고 필요한 랜선의 개수 N이 입력된다.
//   첫째 줄에 N개를 만들 수 있는 랜선의 최대 길이를 센티미터 단위의 정수로 출력한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1654

const input = '4 11\n802\n743\n457\n539'.toString().trim().split('\n');
const [k, n] = input[0].split(' ').map((v) => Number(v));
input.shift();
const [...list] = input.map((v) => Number(v));

const bSearch = (arr, target) => {
  let min = 1;
  let max = Math.max(...arr);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let pieces = arr
      .map((v) => Number.parseInt(v / mid))
      .reduce((acc, cur) => acc + cur);

    pieces >= target ? (min = mid + 1) : (max = mid - 1);
  }

  return max;
};

console.log(bSearch(list, n));
