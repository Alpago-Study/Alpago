// [문제 이름]
// : 최대점수 구하기(DFS)

// [문제 설명]
// : 제한시간 M 안에 N개의 문제 중 최대 점수를 얻을 수 있도록 해야 합니다.

// [문제 링크]
// : #

function solution(questions, time, data) {
  // 최대 점수를 담을 변수 선언
  let answer = 0;

  function dfs(depth, sum, totalTime) {
    // 만약 문제를 푸는 시간이 제한 시간을 넘긴다면 return 한다.
    if (totalTime > time) return;

    // 깊이 탐색을 하면서 가장 깊은 depth까지 도달했다면 answer 값과 현재 점수의 총 값을 비교해서 더 큰 수를 answer 변수에 다시 할당해준다.
    if (depth === questions) {
      answer = Math.max(answer, sum);
    } else {
      // 현재 depth의 문제를 푼 상황과 풀지 않았을 때의 상황을 나누어 재귀함수를 호출해준다.
      dfs(depth + 1, sum + data[depth][0], totalTime + data[depth][1]);
      dfs(depth + 1, sum, totalTime);
    }
  }

  // 탐색을 위한 dfs 함수 호출
  dfs(0, 0, 0);
  return answer;
}

const questions = 5;
const time = 20;
const data = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(questions, time, data));
