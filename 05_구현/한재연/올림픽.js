// [문제 이름]
// : 올림픽 (8979번)

// [문제 설명]
// : 보통 다음 규칙을 따라 어느 나라가 더 잘했는지 결정한다.
// 1. 금메달 수가 더 많은 나라
// 2. 금메달 수가 같으면, 은메달 수가 더 많은 나라
// 3. 금, 은메달 수가 모두 같으면, 동메달 수가 더 많은 나라
// 각 국가의 금, 은, 동메달 정보를 입력받아서, 어느 국가가 몇 등을 했는지 알려주는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/8979

// 백준 제출용 코드
let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let n = input[0][1];
let data = input.slice(1);

function solution(n, data) {
  // 등수를 가릴 수 있도록 각 국가의 메달 가중치를 계산하여 담을 배열 선언
  let answer = [];

  for (let i of data) {
    // 어떤 국가가 어떤 점수를 가졌는지 알 수 있도록 배열에 국가 번호를 push 해준다.
    let temp = [];
    let total = 0;
    temp.push(i[0]);

    // 금, 은, 동 메달의 최대 갯수가 각 1000개이기 때문에 가중치를 곱해 등수를 가린다.
    // 가중치는 계산하여 temp 배열에 push 해준다.
    total = 10000 * i[1] + 1 * i[2] + 0.0001 * i[3];
    temp.push(total);
    // 국가 번호와 메달 가중치가 배열에 담겼다면, 등수 비교를 위해 answer 배열에 push 한다.
    answer.push(temp);
  }

  // 메달 가중치를 기준으로 내림차순으로 배열을 정렬한다.
  answer.sort((a, b) => b[1] - a[1]);
  // 배열의 첫번째 국가는 1등이므로 1을 push해준다.
  // 반복문을 돌며 가중치가 앞의 국가와 같다면 앞의 국가와 같은 등수를, 다르다면 index + 1 값을 등수로 push해준다.
  for (let i = 0; i < answer.length; i++) {
    if (i === 0) {
      answer[i].push(1);
    } else if (answer[i - 1][1] === answer[i][1]) {
      answer[i].push(answer[i - 1][2]);
    } else {
      answer[i].push(i + 1);
    }
  }

  // 반복문을 돌면서 요소의 국가 번호가 문제에서 주어진 국가 번호와 같다면 그 배열의 등수를 출력한다.
  for (let i of answer) {
    if (i[0] === n) return i[2];
  }
}

console.log(solution(n, data));
