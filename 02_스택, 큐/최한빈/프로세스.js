// [문제 이름]
// : 프로세스

// [문제 설명]
// 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가
// 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
//   3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

// 예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고,
// 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

// 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와,
// 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때,
// 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
  // 실행 프로세스를 담을 큐 선언
  const queue = [];

  // 주어진 배열을 [위치, 우선순위] 형태로 변환하여 큐에 저장
  // [2,1,3,2] => [ [0,2], [1,1], [2,3], [3,2] ]
  priorities.forEach((element, idx) => {
    queue.push([idx, element]);
  });

  // 우선순위가 가장 높은 프로세스 찾기 -> [2,3]
  let max = queue.reduce((acc, cur) => {
    if (acc[1] > cur[1]) return acc;
    else return cur;
  });

  // 실행횟수를 담는 변수
  let answer = 0;

  // 우선 계속 돈다...
  while (true) {
    // queue에 맨 앞에 프로세스 pop
    const process = queue.shift();

    // 뽑은 원소가 우선순위가 가장 높지 않다면 큐에 맨뒤로 보냄
    if (process[1] !== max[1]) {
      queue.push(process);
    }
    // 뽑은 원소가 우선순위가 가장 높다면
    else {
      // 실행해서 큐에서 빠짐 -> 실행횟수+1
      answer++;

      // 만약 큐에서 빠진 프로세스가 찾고자 하는 위치면 반복문 탈출
      if (location === process[0]) break;
      // 찾고자 하는 위치가 아니였다면 max를 갱신 후 다시 반복문을 수행함...
      else {
        max = queue.reduce((acc, cur) => {
          if (acc[1] > cur[1]) return acc;
          else return cur;
        });
      }
    }
  }
  // 실행된 횟수 리턴
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
