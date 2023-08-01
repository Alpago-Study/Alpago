// [문제 이름]
// : 바둑이 승차

// [문제 설명]
// : 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다고 한다. N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게는 무엇일까요?

// [문제 링크]
// : https://www.notion.so/alpago-study/DFS-e6153dad01ff42c098fa9b6b833cf6ea?pvs=4#2ed8f02648c840e6bb0d68db878e94b0

// 합이 같은 부분집합과 거의 동일한 문제같음
//  weight = 259;
//  n = 5;
//  arr = [81, 58, 42, 33, 61];

function solution(weight, n, arr) {
  let answer = 0;
  // 배열을 내림차순으로 정렬
  // [ 81, 61, 58, 42, 33 ]
  arr.sort((a, b) => b - a);

  function DFS(L, sum) {
    // 바둑이 무게의 합이 트럭 하중을 넘으면 안됨
    if (sum > weight) return;

    // base case
    if (L === n) {
      // dfs sum값과 answer값을 비교해 가며 큰값으로 update
      answer = Math.max(answer, sum);

      // recursive case
    } else {
      // arr 배열의 값을 더할지, 더하지 않을지 2가지 case로 dfs
      DFS(L + 1, sum + arr[L]);

      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(259, 5, [81, 58, 42, 33, 61]));
