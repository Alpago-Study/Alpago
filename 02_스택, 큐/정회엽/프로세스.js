//문제이름 : 프로세스
/*문제 설명 : 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 
이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 
몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 
 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요. */

//문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let answer = 0; // 정답
  let que = []; // 작업우선순위로 넣을 배열 큐
  let max = Math.max(...priorities); // 작업우선순위가 가장 높은 정도를 구함.
  while (true) {
    let choice = priorities.shift(); //첫번째 요소를 뽑았다.
    if (choice === max) {
      // 그 요소가 작업우선순위가 가장 높다면
      que.push(choice); // 큐에 이 요소를 담고
      max = Math.max(...priorities); // 가장 높은 우선순위 재설정
      if (!location) {
        // 만약 지금 뽑은 요소가 location 이라면
        answer = que.length; // answer에 큐 배열에 들어간 요소의 갯수를 담는다.
      }
    } else {
      // 그 요소가 작업우선순위가 가장 높은게 아니라면
      priorities.push(choice); // 배열 맨 뒤로 다시 넣는다.
    }
    //---------------------------------------------------------------------------------------------
    if (answer) break; // 만약 answer에 어떠한 값이 설정이 된다면(= location 이 뽑혔다면) 반복문 종료
    //---------------------------------------------------------------------------------------------
    if (!location) {
      // 만약 location이 0번째 요소였다면
      location = priorities.length; // location을 priorities배열 맨 끝 인덱스번호 부여
    }
    location--; // 로케이션 -1
  }
  return answer;
}
console.log(solution([2, 1, 3, 2], 2));

/*
function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}
 */
