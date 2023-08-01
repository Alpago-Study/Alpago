// [문제 이름]
// : 바둑이 승차

// [문제 설명]
// : 철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태울 수가 없다. 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다. N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.

const solution = (limit, dogs) => {
  let maxWeight = 0; // 반환할 최대 무게

  // 1. DFS 함수 선언
  const DFS = (depth, sum) => {
    // 2-1. 만약 매개변수로 전달 받은 무게 합이 제한 무게보다 크다면 재귀 종료
    if (sum > limit) return;
    // 2-2. 만약 맨 밑 레벨까지 트리를 순회했다면 최대 무게 갱신
    if (depth === dogs.length) {
      maxWeight = sum > maxWeight ? sum : maxWeight;
    } else {
      // 2-3. 아직 맨 밑 레벨까지 트리를 순회하지 않았다면 DFS 함수 이어서 호출
      // ⭐ 현재 바둑이를 선택한 경우 ⭐
      // : 무게 합에 현재 바둑이의 무게 더하기
      DFS(depth + 1, sum + dogs[depth]);
      // ⭐ 현재 바둑이를 선택하지 않은 경우 ⭐
      // : 무게 합에 현재 바둑이의 무게 더하지 않기
      DFS(depth + 1, sum);
    }
  };

  // 3. DFS 함수 호출
  DFS(0, 0);

  // 4. 최대 무게 반환
  return maxWeight;
};

console.log(solution(259, [81, 58, 42, 33, 61]));
