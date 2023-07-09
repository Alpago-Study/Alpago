// [문제 이름]
// : 나무 자르기

// // [문제 설명]
// 상근이는 나무 M미터가 필요하다. 근처에 나무를 구입할 곳이 모두 망해버렸기 때문에, 정부에 벌목 허가를 요청했다. 정부는 상근이네 집 근처의 나무 한 줄에 대한 벌목 허가를 내주었고, 상근이는 새로 구입한 목재절단기를 이용해서 나무를 구할것이다.

// 목재절단기는 다음과 같이 동작한다. 먼저, 상근이는 절단기에 높이 H를 지정해야 한다. 높이를 지정하면 톱날이 땅으로부터 H미터 위로 올라간다. 그 다음, 한 줄에 연속해있는 나무를 모두 절단해버린다. 따라서, 높이가 H보다 큰 나무는 H 위의 부분이 잘릴 것이고, 낮은 나무는 잘리지 않을 것이다. 예를 들어, 한 줄에 연속해있는 나무의 높이가 20, 15, 10, 17이라고 하자. 상근이가 높이를 15로 지정했다면, 나무를 자른 뒤의 높이는 15, 15, 10, 15가 될 것이고, 상근이는 길이가 5인 나무와 2인 나무를 들고 집에 갈 것이다. (총 7미터를 집에 들고 간다) 절단기에 설정할 수 있는 높이는 양의 정수 또는 0이다.

// 상근이는 환경에 매우 관심이 많기 때문에, 나무를 필요한 만큼만 집으로 가져가려고 한다. 이때, 적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2805

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
