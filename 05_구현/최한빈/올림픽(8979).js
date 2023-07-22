// [문제 이름]
// : 올림픽

// [문제 설명]
// : 올림픽은 참가에 의의가 있기에 공식적으로는 국가간 순위를 정하지 않는다. 그러나, 많은 사람들이 자신의 국가가 얼마나 잘 하는지에 관심이 많기 때문에 비공식적으로는 국가간 순위를 정하고 있다. 두 나라가 각각 얻은 금, 은, 동메달 수가 주어지면, 보통 다음 규칙을 따라 어느 나라가 더 잘했는지 결정한다.

// 금메달 수가 더 많은 나라
// 금메달 수가 같으면, 은메달 수가 더 많은 나라
// 금, 은메달 수가 모두 같으면, 동메달 수가 더 많은 나라
// 각 국가는 1부터 N 사이의 정수로 표현된다. 한 국가의 등수는 (자신보다 더 잘한 나라 수) + 1로 정의된다. 만약 두 나라가 금, 은, 동메달 수가 모두 같다면 두 나라의 등수는 같다. 예를 들어, 1번 국가가 금메달 1개, 은메달 1개를 얻었고, 2번 국가와 3번 국가가 모두 은메달 1개를 얻었으며, 4번 국가는 메달을 얻지 못하였다면, 1번 국가가 1등, 2번 국가와 3번 국가가 공동 2등, 4번 국가가 4등이 된다. 이 경우 3등은 없다.

// 각 국가의 금, 은, 동메달 정보를 입력받아서, 어느 국가가 몇 등을 했는지 알려주는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/8979

// 백준 문제풀이용 코드
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [n, target] = input[0].split(' ').map(Number);
let rank = [];
for (let i = 1; i <= n; i++) {
  const line = input[i].split(' ').map(Number);
  // 국가와 메달 개수 푸쉬
  rank.push([line[0], line.slice(1)]);
}
// 정렬로 풀어보려 했지만 너무 고려해야할게 많아서 다른 방법 생각
// const getRank = (a, b) => {
//   if (a[0] < b[0]) {
//     return 1;
//   } else if (a[0] === b[0]) {
//     if (a[1] < b[1]) return 1;
//     else if (a[1] === b[1]) {
//       if (a[2] < b[2]) return 1;
//       else if (a[2] === b[2]) return 0;
//       else return -1;
//     } else {
//       return -1;
//     }
//   } else {
//     return -1;
//   }
// };
// rank.sort((a, b) => getRank(a[1], b[1]));
// console.log(rank);

let targetIndex = rank.findIndex((ele) => ele[0] === target);
let targetMedal = rank[targetIndex][1];
// 금메달을 많이 딴 국가 수
let moreGold = rank.filter((ele) => ele[1][0] > targetMedal[0]);
// 위에 국가를 제외
let another = rank.filter((ele) => ele[1][0] <= targetMedal[0]);
// 은메달을 많이 딴 국가 수
let moreSilver = another.filter((ele) => ele[1][1] > targetMedal[1]);
// 랭킹 = 금메달 국가 + 은메달 국가 + 1(다음 등수)
let answer = moreGold.length + moreSilver.length + 1;

console.log(answer);
