// [문제 이름]
// : 이진트리 넓이우선탐색

// [문제 설명]
// : 생략

// [문제 링크]
// : 생략

//       1
//     /  \
//    2    3
//  / \   / \
// 4  5  6  7

const tree = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 4,
      left: { data: null },
      right: { data: null },
    },
    right: {
      data: 5,
      left: { data: null },
      right: { data: null },
    },
  },
  right: {
    data: 3,
    left: {
      data: 6,
      left: { data: null },
      right: { data: null },
    },
    right: {
      data: 7,
      left: { data: null },
      right: { data: null },
    },
  },
};

const bfs = (graph) => {
  const queue = [];
  let answer = '';
  const visited = [];
  // 1. 시작 노드를 큐에 삽입
  queue.push(graph);
  // 2. 큐에 첫번째 노드를 방문하고 인접한 노드들을 큐에 삽입
  // 3. 이후에 노드들도 방문 처리 후 인접한 노드들을 큐에 삽입
  while (queue.length !== 0) {
    const prev = queue.shift();
    // data가 null이면 무시
    if (prev.data === null) continue;
    visited.push(prev.data);
    // 방문 경로 더해주기
    answer += prev.data + ' ';
    // 현재 왼쪽 오른쪽 노드들이 방문한 노드가 아니면 큐에 추가함
    if (!visited.includes(prev.left)) queue.push(prev.left);
    if (!visited.includes(prev.right)) queue.push(prev.right);
  }
  return answer;
};
console.log(bfs(tree));
