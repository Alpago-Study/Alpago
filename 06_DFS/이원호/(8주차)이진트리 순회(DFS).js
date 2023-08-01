// [문제 이름]
// : 이진트리 순회(DFS)

// [문제 설명]
// : 전위순회, 중위순회, 후위순회 구현해보기

// [문제 링크]
// : https://file.notion.so/f/s/8c007f34-384a-46c4-9980-d1eab07dfc55/Untitled.png?id=8f6f3648-6836-4c40-ac30-2161129c38ab&table=block&spaceId=5893e798-2384-4f46-9548-637dc7a31a9f&expirationTimestamp=1688803200000&signature=6FavqOcJzzE-tQHukOkEAl0IhT6jkqmRtjM3TOlR--k&downloadName=Untitled.png

// Node 클래스 구현
class Node {
  constructor() {
    this.left = null;
    this.value = null;
    this.right = null;
  }
}

// tree 클래스 구현
class Tree {
  contructor() {
    this.root = null;
  }
  // 루트(꼭대기) 설정 메서드
  setRoot(node) {
    this.root = node;
  }

  getRoot() {
    return this.root;
  }

  //재귀를 이용하여 DFS 구현
  // 공통사항: node == null 노트가 리프노드일때 재귀 탈출조건
  //        1
  //    2       3
  //  4  5    6   7
  //  이런 트리 가정

  //전위순회
  //루트=>왼쪽=>오른쪽 순으로 순회
  preorder(node) {
    if (node != null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  //중위 순회
  //왼쪽=>루트=>오른쪽 순으로 순회
  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  //후위순회
  //왼쪽=>오른쪽=>루트 순으로 순회
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
}

//        1
//    2       3
//  4  5    6   7
//  이런 트리 가정

const node1 = new Node();
node1.value = 1;

const node2 = new Node();
node2.value = 2;

const node3 = new Node();
node3.value = 3;

const node4 = new Node();
node4.value = 4;

const node5 = new Node();
node5.value = 5;

const node6 = new Node();
node6.value = 6;

const node7 = new Node();
node7.value = 7;

// 트리만들고 root값(1) 설정
const tree = new Tree();
tree.setRoot(node1);

//        1
//    2       3
//  4  5    6   7
//  이런 구조 만들기
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

console.log(tree.getRoot());
// 만든 tree에 3가지 순회 레츠고
console.log('전위순회');
tree.preorder(tree.getRoot());

console.log('중위순회');
tree.inorder(tree.getRoot());

console.log('후위순회');
tree.postorder(tree.getRoot());
