// [문제 이름]
// : 이진트리 넓이우선탐색

// [문제 설명]
// : 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.

const solution = () => {
  let answer = ''; // 탐색 결과
  const queue = []; // 탐색에 사용할 queue 선언

  // 1. queue에 루트 노드인 1 삽입
  queue.push(1);

  // 2. queue가 다 빌 때까지 탐색
  while (queue.length) {
    // 3. queue에서 맨 앞 요소 제거 후 탐색 결과에 추가
    const value = queue.shift();
    answer += `${value} `;

    // 4. 트리의 다음 레벨을 탐색
    for (const nextValue of [value * 2, value * 2 + 1]) {
      // 4-1. 7까지만 탐색해야 하므로 7보다 큰 경우 무시
      if (nextValue > 7) continue;
      // 4-2. 7보다 작거나 같다면 새로운 값을 queue에 삽입
      queue.push(nextValue);
    }
  }

  // 5. 공백 문자를 제거한 탐색 결과 반환
  return answer.trim();
};

console.log(solution());
