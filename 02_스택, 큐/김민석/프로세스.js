// [문제 이름]
// : 프로세스

// [문제 설명]
// : 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
// 3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
// 예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

// 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42587

const solution = (priorities, location) => {
  // 실행 순서가 변화한 개수
  let count = 0;
  // 우선 순위 최대값
  let max = Math.max(...priorities);
  // index가 순서대로 담긴 배열
  const indexes = Array.from(
    { length: priorities.length },
    (_, index) => index
  );

  // 우선 순위 배열의 요소가 없을 때까지 순회
  while (priorities.length) {
    // 우선 순위 최대값 갱신
    max = Math.max(...priorities);

    // 만약 우선 순위 배열의 첫 번째 요소가 갱신한 최대값보다 작다면
    if (priorities[0] < max) {
      // 우선 순위 배열의 첫 번째 요소를 제거 후 맨 뒤에 삽입
      priorities.push(priorities.shift());
      // index 배열도 동일하게 첫 번째 요소를 제거 후 맨 뒤에 삽입
      indexes.push(indexes.shift());
      // 만약 우선 순위 배열의 첫 번째 요소가 갱신한 최대값보다 크거나 같다면
    } else {
      // 실행 순서가 변화했으므로 count에 1 더하기
      count += 1;
      // 정상적으로 실행이 완료되었으므로 우선 순위 배열에서 첫 번째 요소 제거
      priorities.shift();

      // index 배열도 동일하게 첫 번째 요소 제거
      // 만약 제거한 첫 번째 요소가 location 값과 동일하다면 count 반환
      if (indexes.shift() === location) return count;
    }
  }
};

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
