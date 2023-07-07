// [문제 이름]
// : 이진트리 순회

// [문제 설명]
// : 생략

// [문제 링크]
// : 생략

//       1
//     /  \
//    2    3
//  / \   / \
// 4  5  6  7

// tree를 그냥 객체로 생각해서 풀었습니다.
const tree = {
  root: 1,
  left: {
    root: 2,
    left: {
      root: 4,
      left: { root: null },
      right: { root: null },
    },
    right: {
      root: 5,
      left: { root: null },
      right: { root: null },
    },
  },
  right: {
    root: 3,
    left: {
      root: 6,
      left: { root: null },
      right: { root: null },
    },
    right: {
      root: 7,
      left: { root: null },
      right: { root: null },
    },
  },
};
function preOrder(tree, result) {
  /* 전위 순회 
    [루트 - 왼쪽 자식 - 오른쪽 자식] 순으로 순회
  */

  if (tree.root !== null) {
    // 루트를 먼저 방문
    result.push(tree.root);
    // 재귀를 통해 왼쪽 노드도 [루트, 왼쪽, 오른쪽] 순으로 방문하게 된다.
    preOrder(tree.left, result);
    // 위와 같음
    preOrder(tree.right, result);
  }
  return result;
}
function inOrder(tree, result) {
  /* 중위 순회 
    [왼쪽자식 - 루트 - 오른쪽 자식] 순으로 순회
  */

  if (tree.root !== null) {
    // 왼쪽을 먼저 방문
    inOrder(tree.left, result);
    // 재귀를 통해 왼쪽 노드도 [왼쪽, 루트, 오른쪽] 순으로 방문하게 된다.
    result.push(tree.root);
    inOrder(tree.right, result);
  }
  return result;
}
function postOrder(tree, result) {
  /* 전위 순회 
    [왼쪽 자식 - 오른쪽 자식 - 루트] 순으로 순회
  */
  if (tree.root !== null) {
    // 왼쪽을 먼저 방문
    postOrder(tree.left, result);
    // 이후에는 오른쪽
    postOrder(tree.right, result);
    // 재귀를 통해 루트는 가장 마지막에 출력된다.
    result.push(tree.root);
  }
  return result;
}

const result1 = [];
console.log('Pre Order');
console.log(preOrder(tree, result1));

const result2 = [];
console.log('In Order');
console.log(inOrder(tree, result2));

const result3 = [];
console.log('Post Order');
console.log(postOrder(tree, result3));
