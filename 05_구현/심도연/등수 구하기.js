// [문제 이름]
// : 등수 구하기

// [문제 설명]
// : 태수가 즐겨하는 디제이맥스 게임은 각각의 노래마다 랭킹 리스트가 있다. 이것은 매번 게임할 때 마다 얻는 점수가 비오름차순으로 저장되어 있는 것이다.
//   이 랭킹 리스트의 등수는 보통 위에서부터 몇 번째 있는 점수인지로 결정한다. 하지만, 같은 점수가 있을 때는 그러한 점수의 등수 중에 가장 작은 등수가 된다.
//   예를 들어 랭킹 리스트가 100, 90, 90, 80일 때 각각의 등수는 1, 2, 2, 4등이 된다
//   랭킹 리스트에 올라 갈 수 있는 점수의 개수 P가 주어진다. 그리고 리스트에 있는 점수 N개가 비오름차순으로 주어지고, 태수의 새로운 점수가 주어진다. 이때, 태수의 새로운 점수가 랭킹 리스트에서 몇 등 하는지 구하는 프로그램을 작성하시오. 만약 점수가 랭킹 리스트에 올라갈 수 없을 정도로 낮다면 -1을 출력한다.
//   만약, 랭킹 리스트가 꽉 차있을 때, 새 점수가 이전 점수보다 더 좋을 때만 점수가 바뀐다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1205

// 1. 입력
// 랭킹 리스트에 올라갈 수 있는 점수의 개수 = P
// 리스트에 있는 점수의 개수 = N(비오름차순 = 내림차순)

// 2. 출력
// 태수의 새로운 점수가 랭킹 리스트에서 몇 등을 하는지
// if 점수가 랭킹 리스트에 올라갈 수 없을 정도로 낮다면 -1
// else if 랭킹 리스트가 꽉 차있을 때 새 점수가 이전 점수보다 더 좋을 때만 점수를 바꾼다

// 예제 1
// 3(리스트에 있는 점수의 개수)
// 90(태수의 새로운 점수)
// 10(랭킹 리스트에 올라갈 수 있는 점수의 개수)
// 100, 90, 80(리스트에 있는 점수들)

// 예를 들어 랭킹 리스트가 100, 90, 90, 80일 때 등수는 1, 2, 2, 4 등이 된다

let nA = 3;
let scoreA = 90;
let pA = 10;
let arrA = [100, 90, 80];

let nB = 10;
let scoreB = 1;
let pB = 10;
let arrB = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let nC = 10;
let scoreC = 1;
let pC = 10;
let arrC = [10, 9, 8, 7, 6, 5, 4, 3, 3, 0];

let nD = 0;
let scoreD = 0;
let pD = 50;
let arrD = [];

const get_ranking = (n, score, p, arr = []) => {
  // findIndex로 랭킹 리스트 안에 같은 점수가 있는지 확인하기
  let same_score = arr.findIndex((cur) => cur === score);

  if (n < p) {
    // n(리스트에 있는 점수의 개수)이 p(랭킹 리스트에 올라갈 수 있는 점수의 개수)보다 작을 때
    if (same_score !== -1) {
      // 같은 점수가 있다면 index를 반환하므로 + 1를 더해주고 등수 반환
      return same_score + 1;
    } else {
      // 같은 점수가 없다면 랭킹 리스트에 넣고, 내림차순으로 정렬을 해준다
      arr.push(score);
      arr.sort((a, b) => b - a);
      // findIndex로 해당 점수의 index를 찾고 + 1를 더해주고 등수 반환
      return arr.findIndex((cur) => cur === score) + 1;
    }
  } else if (n === p) {
    // n과 p가 같을때
    if (same_score !== -1 && score === 1) {
      // 같은 점수가 존재하고 score가 1일 때 -1 반환
      return -1;
    } else {
      // 같은 점수가 없다면 랭킹 리스트에 넣고, 내림차순으로 정렬 해준다
      arr.push(score);
      arr.sort((a, b) => b - a);
      // findIndex로 해당 점수의 index를 찾고 + 1를 더해주고 등수 반환
      return arr.findIndex((cur) => cur === score) + 1;
    }
  } else {
    // 아직 랭킹이 없을 때
    if (score !== 0) {
      // 태수가 얻은 점수가 0이 아니라면 제일 큰 등수인 1를 반환
      return 1;
    }
  }
};

console.log(get_ranking(nA, scoreA, pA, arrA));
console.log(get_ranking(nB, scoreB, pB, arrB));
console.log(get_ranking(nC, scoreC, pC, arrC));
console.log(get_ranking(nD, scoreD, pD, arrD));
