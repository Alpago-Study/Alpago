// [문제 이름]
// : 기능개발

// [문제 설명]
// : 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
//  또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
//  먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const result = []; // 배포되는 작업의 개수(결과)를 저장할 배열

  const queue = []; // 큐

  for (let i = 0; i < progresses.length; i++) {
    const progress = progresses[i];
    const speed = speeds[i];

    // 작업이 완료되기 위해 필요한 일수 계산
    const dayNeeded = Math.ceil((100 - progress) / speed);

    queue.push(dayNeeded);
  }

  while (queue.length > 0) {
    const current = queue.shift();
    let count = 1;

    // 현재 작업과 함께 배포되는 작업들을 세기 위해 반복문 실행
    while (queue.length > 0 && queue[0] <= current) {
      queue.shift();
      count++;
    }

    result.push(count);
  }

  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
