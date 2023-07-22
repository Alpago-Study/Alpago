// [문제 이름]
// : 바둑이 승차(DFS)

// [문제 설명]
// : N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.

// [문제 링크]
// : #

function solution(max, n, data) {
  // 최대 무게를 담을 answer 변수 선언
  let answer = 0;

  function dfs(depth, sum, totalWeight) {
    // 만약 바둑이들의 무게가 최대로 실을 수 있는 무게를 넘는다면 리턴한다.
    if (totalWeight > max) return;

    // 깊이 탐색을 하다가 가장 깊은 depth까지 도달했다면 answer 값과 현재 총 몸무게 합을 비교해 더 큰 값을 answer 변수에 다시 할당해준다.
    if (depth === n) {
      answer = Math.max(answer, totalWeight);
    } else {
      // 현재 depth의 바둑이를 트럭에 태웠을 경우와 태우지 않았을 경우를 분리하여 재귀함수 호출
      dfs(depth + 1, sum + 1, totalWeight + data[depth]);
      dfs(depth + 1, sum, totalWeight);
    }
  }

  // 탐색을 위한 dfs 함수 호출
  dfs(0, 0, 0);
  return answer;
}

const max = 259;
const n = 5;
const data = [81, 58, 42, 33, 61];

console.log(solution(max, n, data));
