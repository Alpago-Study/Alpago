// [문제 이름]
// : 이진트리 넓이우선탐색(BFS)

// [문제 설명]
// : 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.

//      1
//    /   \
//   2     3
//  / \   / \
// 4   5  6  7

// const tree = [[], ["2", "3"], ["1", "4", "5"], ["1", "6", "7"]];

// const bfs = (tree, start) => {
//   let visited = [];

//   visited.push(start);

//   while (visited.length !== 0) {
//     let node = visited.shift();

//     for (let i of tree[node]) {
//       if (!visited[i]) {
//         visited.push(i);
//       }
//     }
//   }

//   console.log(visited);
//   return visited;
// };

// console.log(bfs(tree, 1));

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// console.log(root);

let tree = {
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

const bfsTraversal = (root) => {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    result.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
};

const result = bfsTraversal(root);
console.log(result);
