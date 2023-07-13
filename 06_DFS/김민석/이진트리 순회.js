// [문제 이름]
// : 이진트리 순회

// [문제 설명]
// : 루트 노드부터 1 ~ 7까지를 노드로 가지는 포화이진트리의 전위, 중위, 후위 순회 결과를 출력하라.

const solution = (order) => {
  // 1. 순회 결과를 저장할 변수 answer
  let answer = '';

  // 2. DFS 함수 선언
  const DFS = (value) => {
    // 2-1. 7까지만 순회해야 하므로 매개변수 value가 7보다 크면 재귀 탈출
    if (value > 7) return;

    // 2-2. 전위 순회
    // : 전위 순회는 부모 - 왼쪽 - 오른쪽 순으로 탐색
    // : 재귀 호출 이전에 결과 저장
    if (order === 'preorder') answer += value;

    // 2-3. 짝수 노드 (2, 4, 6)를 저장하기 위한 재귀 호출
    DFS(value * 2);

    // 2-4. 중위 순회
    // : 후위 순회는 왼쪽 - 부모 - 오른쪽 순으로 탐색
    // : 짝수 노드 (왼쪽, 2-3) 탐색이 종료되면 결과 저장
    if (order === 'inorder') answer += value;

    // 2-5. 홀수 노드 (3, 5, 7)를 저장하기 위한 재귀 호출
    DFS(value * 2 + 1);

    // 2-6. 후위 순회
    // : 후위 순회는 왼쪽 - 오른쪽 - 부모 순으로 탐색
    // : 짝수 노드 (왼쪽, 2-3), 홀수 노드 (오른쪽, 2-5) 탐색이 종료되면 결과 저장
    if (order === 'postorder') answer += value;
  };

  // 3. DFS 함수 호출
  DFS(1);

  // 4. 순회 결과 반환
  return answer;
};

console.log(solution('preorder'));
console.log(solution('inorder'));
console.log(solution('postorder'));
