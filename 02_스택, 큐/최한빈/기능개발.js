// [문제 이름]
// : 기능개발

// [문제 설명]
// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  // 정답을 담는 변수
  var answer = [];

  // 작업해야 하는 날을 담는 변수
  const days = [];

  for (let i = 0; i < progresses.length; i++) {
    // days에 작업필요 일 수를 계산하여 저장
    // 작업필요 일 수 = (100-작업진도) / 작업속도
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  // 이전 작업필요 일 수
  let prevDay = days.shift();

  // 진행된 작업의수를 담는 변수
  let count = 1;

  // 작업필요 일 수가 남지 않을동안 반복문 수행
  while (days.length !== 0) {
    // days에 가장 앞에 원소를 pop
    let day = days.shift();

    // 만약 이전 작업 필요 일 수가 추출한 작업 필요 일 수보다 클때
    if (prevDay >= day) {
      // 진행된 작업 수 +1
      count++;
    }
    // 이전 작업 필요 일 수가 추출한 작업 필요 일 수보다 작으면
    else {
      // 정답에 현재 진행된 작업 수 push
      answer.push(count);
      // 진행된 작업 수 초기화
      count = 1;
      // 이전 작업 필요 일 수를 현재 작업 필요 일 수로 반영
      prevDay = day;
    }
  }

  // 반복문을 빠진 뒤, 저장된 작업 수 push
  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
