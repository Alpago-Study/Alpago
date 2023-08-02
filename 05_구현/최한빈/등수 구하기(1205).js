// [문제 이름]
// : 등수 구하기

// [문제 설명]
// : 태수가 즐겨하는 디제이맥스 게임은 각각의 노래마다 랭킹 리스트가 있다. 이것은 매번 게임할 때 마다 얻는 점수가 비오름차순으로 저장되어 있는 것이다.

// 이 랭킹 리스트의 등수는 보통 위에서부터 몇 번째 있는 점수인지로 결정한다. 하지만, 같은 점수가 있을 때는 그러한 점수의 등수 중에 가장 작은 등수가 된다.

// 예를 들어 랭킹 리스트가 100, 90, 90, 80일 때 각각의 등수는 1, 2, 2, 4등이 된다

// 랭킹 리스트에 올라 갈 수 있는 점수의 개수 P가 주어진다. 그리고 리스트에 있는 점수 N개가 비오름차순으로 주어지고, 태수의 새로운 점수가 주어진다. 이때, 태수의 새로운 점수가 랭킹 리스트에서 몇 등 하는지 구하는 프로그램을 작성하시오. 만약 점수가 랭킹 리스트에 올라갈 수 없을 정도로 낮다면 -1을 출력한다.

// 만약, 랭킹 리스트가 꽉 차있을 때, 새 점수가 이전 점수보다 더 좋을 때만 점수가 바뀐다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1205

// 백준 문제풀이용 코드
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 개수, 새로운 점수, 랭킹에 들어갈수 있는 개수
const [n, newP, p] = input.shift().split(' ').map(Number);
// 랭킹이 비워있는 경우 1등이 되고 프로그램 종료
if (input.length === 0) {
  console.log(1);
  return;
}
// 랭킹 리스트
const rank = input.shift().split(' ').map(Number);
// 나의 점수보다 높은 랭킹들
const highRank = rank.filter((ele) => ele >= newP);

// 나의 점수보다 높은 랭킹의 개수가 들어갈 수 있는 개수보다 큰 경우 -1 리턴
if (highRank.length >= p) console.log(-1);
// 높은 랭킹의 점수 중 마지막 원소(제일 낮은 점수)가 나의 점수랑 같은 경우
else if (highRank[highRank.length - 1] === newP)
  // 높은 랭킹 점수 중 나랑 같은 점수는 제외한 개수의 +1
  console.log(highRank.filter((ele) => ele > newP).length + 1);
// 높은 랭킹의 점수 중 나랑 중복되는 점수가 없을 경우
else {
  // 높은 랭킹의 점수 개수 +1
  console.log(highRank.length + 1);
}
