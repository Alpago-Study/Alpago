// [문제 이름]
// : 이진트리 넓이 우선탐색

// [문제 설명]
// : 아래 그림과 같은 이진 트리를 넓이 우선 탐색해보세요.
//      1
//   2      3
// 4   5  6   7
// 넓이 우선 탐색: 1 2 3 4 5 6 7

// [문제 링크]
// :

function solution() {
  let answer = '';
  let queue = [];
  queue.push(1);

  while (queue.length) {
    console.log(queue);
    let v = queue.shift();
    answer += v + ' ';
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());
