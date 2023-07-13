// [문제 이름]
// : 이진트리 순회

// [문제 설명]
// : 아래 그림과 같은 이진트리를 전위순회와 중위순회, 후위순회를 연습해보세요.

// tree
//        1
//      /   \
//     2     3
//   /  \   /  \
//  4    5 6    7

const tree = {
  root: 1,
  left: {
    root: 2,
    left: {
      root: 4,
      left: null,
      right: null,
    },
    right: {
      root: 5,
      left: null,
      right: null,
    },
  },
  right: {
    root: 3,
    left: {
      root: 6,
      left: null,
      right: null,
    },
    right: {
      root: 7,
      left: null,
      right: null,
    },
  },
};
// console.log(tree);

// null 값에 접근하려고 했기 때문에 따로 조건문으로 처리해주어야 한다
const preOrder = (tree, result = '') => {
  if (tree !== null) {
    result += tree.root;
    if (tree.left !== null) {
      result = preOrder(tree.left, result);
    }
    if (tree.right !== null) {
      result = preOrder(tree.right, result);
    }
  }
  return result;
};

const inOrder = (tree, result = '') => {
  if (tree !== null) {
    if (tree.left !== null) {
      result = inOrder(tree.left, result);
    }
    result += tree.root;
    if (tree.right !== null) {
      result = inOrder(tree.right, result);
    }
  }
  return result;
};

const postOrder = (tree, result = '') => {
  if (tree !== null) {
    if (tree.left !== null) {
      result = postOrder(tree.left, result);
    }
    if (tree.right !== null) {
      result = postOrder(tree.right, result);
    }
    result += tree.root;
  }
  return result;
};

console.log(preOrder(tree)); // 전위 순회 : 1245367
console.log(inOrder(tree)); // 중위 순회 : 4251637
console.log(postOrder(tree)); // 후위 순회 : 4526731
