// [문제 이름]
// : 부분집합 구하기

// [문제 설명]
// : 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합이 부분집합을 모두 출력하는 프로그램을 작성하세요.

const solution = (n) => {
  const subsets = []; // 부분집합을 저장할 배열
  const included = Array.from({ length: n + 1 }, () => false); // 부분집합 포함 여부를 저장할 배열

  // 1. DFS 함수 선언
  const DFS = (value) => {
    // 2. 재귀 탈출 조건
    // : value가 n + 1인 경우, 즉 리프 노드가 n보다 커지는 경우
    // ex) n이 3인 경우 3까지만 부분집합에 포함해야 하므로 value가 4가 되면 탈출
    if (value === n + 1) {
      // 2-1. 부분집합 초기화
      let subset = '';

      // 2-2. 포함 여부를 저장한 배열 순회
      for (let i = 1; i <= n; i++) {
        // 3. 만약 포함한다면 부분집합에 추가
        if (included[i]) subset += `${i} `;
      }

      // 2-3. 부분집합이 빈 문자열이 아닌 경우에만 부분집합을 저장할 배열에 추가
      if (subset) subsets.push(subset.trim());
    } else {
      // 3. 재귀 호출 로직
      // : 리프 노드를 탐색할 때 1을 더해주는 것은 동일하지만, 부분집합에 포함할지 여부를 분기 처리
      included[value] = true;
      DFS(value + 1);
      included[value] = false;
      DFS(value + 1);
    }
  };

  // 4. 배열의 index를 기준으로 DFS 함수 호출
  DFS(1);

  // 5. 줄바꿈 문자열을 기준으로 합쳐서 반환
  return subsets.join('\n');
};

console.log(solution(3));
