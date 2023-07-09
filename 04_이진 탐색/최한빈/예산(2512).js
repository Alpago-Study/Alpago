// [문제 이름]
// : 예산

// [문제 설명]
// 국가의 역할 중 하나는 여러 지방의 예산요청을 심사하여 국가의 예산을 분배하는 것이다. 국가예산의 총액은 미리 정해져 있어서 모든 예산요청을 배정해 주기는 어려울 수도 있다. 그래서 정해진 총액 이하에서 가능한 한 최대의 총 예산을 다음과 같은 방법으로 배정한다.

// 모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정한다.
// 모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산하여 그 이상인 예산요청에는 모두 상한액을 배정한다. 상한액 이하의 예산요청에 대해서는 요청한 금액을 그대로 배정한다.
// 예를 들어, 전체 국가예산이 485이고 4개 지방의 예산요청이 각각 120, 110, 140, 150이라고 하자. 이 경우, 상한액을 127로 잡으면, 위의 요청들에 대해서 각각 120, 110, 127, 127을 배정하고 그 합이 484로 가능한 최대가 된다.

// 여러 지방의 예산요청과 국가예산의 총액이 주어졌을 때, 위의 조건을 모두 만족하도록 예산을 배정하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2512

// 이진탐색 알고리즘.
const findPoint = (start, end, total) => {
  // ⭐️ 예산요청액의 합이 커서 발생한 문제이므로 총 합이 전체예산보다 작아질때 까지 탐색한다.

  // 상한선은 초기값과 최대값의 중간으로 정함. (1,150 => 75)
  const mid = parseInt((start + end) / 2);
  // 상한선에 맞추어 각 예산 재분배.
  const mappedArr = arr.map((ele) => (ele > mid ? mid : ele));
  const sum = mappedArr.reduce((acc, cur) => acc + cur);
  // 재분배한 예산에 합이 총 예산보다 적으면 시작점을 중간점 으로 설정.
  if (sum < total) {
    return findPoint(mid, end, total);
  }
  // 재분배한 예산에 합이 총 예산보다 크거나 같으면 우리가 구하려는 예산액과 가장 가까운 값.
  else {
    return Math.max(...mappedArr);
  }
};

// 백준 문제풀이용 코드
let fs = require('fs');
let input = fs.readFileSync('./ex.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let total = Number(input[2]);

// 모든 예정이 배정될 수 있는 경우 예외처리
const sum = arr.reduce((acc, cur) => acc + cur);
const max = Math.max(...arr);
// 예산은 요청한 금액의 최대값이 된다.
if (sum <= total) console.log(max);
else {
  // 이진탐색을 위한 시작점과 끝점 찾기.
  // 모든 요청이 배정될 수 없을때는 가장 작은 값과 가장 큰값-1 사이에서 찾는다. (큰값은 배정될 수 없는게 확정이기 때문에)
  let start = 1;
  let end = max - 1;
  // 이진탐색을 통해 예산액에 가장 가까운 금액을 찾는다.
  let point = findPoint(start, end, total);
  while (true) {
    // 찾아온 값을 통해 다시 예산 분배.
    const mappedArr = arr.map((ele) => (ele > point ? point : ele));
    const sum = mappedArr.reduce((acc, cur) => acc + cur);
    // 재분배한 예산의 합이 같거나 작으면 더이상 찾을 필요없다.
    if (sum <= total) break;
    // 예산이 크면 point를 1씩 줄여서 다시 확인.
    else point--;
  }

  console.log(point);
}
