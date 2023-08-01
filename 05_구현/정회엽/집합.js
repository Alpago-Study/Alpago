/*문제이름 : 집합

문제 설명 : 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.

add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
all: S를 {1, 2, ..., 20} 으로 바꾼다.
empty: S를 공집합으로 바꾼다. 
check 연산이 주어질때마다, 결과를 출력한다.



문제 링크 : https://www.acmicpc.net/problem/11723*/
function solution(M, operations) {
  const S = new Set(); //set 객체 생성.

  const executeOperation = (operation) => {
    // ['add 2', 'add 5'] 등으로 이루어져있는 배열
    const [operator, x] = operation.split(' '); //구조분해할당.
    const num = Number(x);

    switch (operator) {
      case 'add':
        S.add(num);
        break;
      case 'remove':
        S.delete(num);
        break;
      case 'check':
        console.log(S.has(num) ? 1 : 0);
        break;
      case 'toggle':
        if (S.has(num)) {
          S.delete(num);
        } else {
          S.add(num);
        }
        break;
      case 'all':
        for (let i = 1; i <= 20; i++) {
          S.add(i);
        }
        break;
      case 'empty':
        S.clear();
        break;
    }
  };
  //수행해야하는 연산의 수 만큼 executeOperation함수 실행
  for (let i = 0; i < M; i++) {
    executeOperation(operations[i]);
  }
}
console.log(
  solution(26, [
    'add 1',
    'add 2',
    'check 1',
    'check 2',
    'check 3',
    'remove 2',
    'check 1',
    'check 2',
    'toggle 3',
    'check 1',
    'check 2',
    'check 3',
    'check 4',
    'all',
    'check 10',
    'check 20',
    'toggle 10',
    'remove 20',
    'check 10',
    'check 20',
    'empty',
    'check 1',
    'toggle 1',
    'check 1',
    'toggle 1',
    'check 1',
  ])
);
