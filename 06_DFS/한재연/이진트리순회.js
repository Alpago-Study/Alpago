// [문제 이름]
// : 이진트리 순회(깊이우선탐색)

// [문제 설명]
// : 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.

// [문제 링크]
// : #

// 루트 노드의 값
let root = 1;

// 전위순회
function preorder(root) {
    // 전위순회를 돌며 나온 숫자를 담을 배열 선언
    let answer = [];

    function binary(n) {
        // 숫자가 7보다 클 경우에는 순회를 하지않고 리턴한다.
        if (n > 7) return;

        // 현재 노드의 값을 가장 먼저 출력하고, 그 다음에 왼쪽 자식 노드, 마지막으로 오른쪽 자식 노드를 탐색한다.
        answer.push(n);
        binary(n * 2);
        binary(n * 2 + 1);
    }

    binary(root);
    return answer;
}

// 중위순회
function inorder(root) {
    let answer = [];

    function binary(n) {
        if (n > 7) return;

        // 왼쪽의 자식 노드의 값을 가장 먼저 출력하고 그 다음 중간의 부모 노드, 마지막으로 오른쪽 자식 노드의 값을 출력한다.
        binary(n * 2);
        answer.push(n);
        binary(n * 2 + 1);
    }

    binary(root);
    return answer;
}

function postorder(root) {
    let answer = [];

    function binary(n) {
        if (n > 7) return;

        // 왼쪽의 자식 노드의 값을 먼저 출력하고, 오른쪽 자식 노드의 값을 출력한 후, 부모노드의 값을 마지막으로 출력한다.
        binary(n * 2);
        binary(n * 2 + 1);
        answer.push(n);
    }

    binary(root);
    return answer;
}

console.log(preorder(root));
console.log(inorder(root));
console.log(postorder(root));