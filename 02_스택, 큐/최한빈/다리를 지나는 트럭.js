// [문제 이름]
// : 다리를 지나는 트럭

// [문제 설명]
// 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면
// 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며,
// 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

// 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다.
// 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

// solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length,
// 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
// 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

function weightSum(crossing) {
  let sum = 0;
  for (let i = 0; i < crossing.length; i++) {
    sum += crossing[i];
  }
  return sum;

  // 리듀스로 합 구했는데 5번 테스트 케이스에서 시간초과...
  // 혹시나 싶어 for문으로 처리해봤더니 통과...

  // return crossing.reduce((acc, cur) => {
  //   return acc + cur;
  // }, 0);
}

function solution(bridge_length, weight, truck_weights) {
  // Ex. solution(2, 10, [7,4,5,6])

  // 걸리는 시간을 구하는 변수
  let second = 0;

  // 우선 다리를 건너는 상태를 다리 길이만큼 전부 0으로 채운다.
  // [0,0]
  let crossing = Array.from({ length: bridge_length }, () => 0);

  // 첫번째 트럭이 다리를 건너는 상태 반영
  // 1. 맨 앞에 트럭을 가져와서 다리의 마지막 원소로 할당
  // [0,7]
  crossing[crossing.length - 1] = truck_weights.shift();
  // 2. 시간이 1초 경과됨
  second++;

  // 현재 건너는 트럭무게의 총 합이 0일때 -> 아무 트럭도 없을때
  while (weightSum(crossing) !== 0) {
    // 시간 1초 경과
    second++;
    // 건너는 중인 트럭을 앞으로 한칸씩 땡김
    crossing.shift(); // step1 -> [7], step2 -> [0], step3 -> [4]

    // 다음에 트럭이 들어올 수 있는지 체크
    // 1. 현재 다리에 있는 트럭들 무게의 합 + 다음 트럭 무게
    const sum = weightSum(crossing) + truck_weights[0];
    // 2. 현재 다리에 있는 트럭들 대수 + 1 (다음 트럭)
    const truckNum = crossing.filter((ele) => ele !== 0).length;

    // 합이 견딜수 있는 무게보다 작거나 같고 트럭대수가 다리보다 작거나 같으면 다음 트럭이 들어올 수 있다
    if (sum <= weight && truckNum + 1 <= bridge_length) {
      // 다음 트럭이 다리위로 들어온다
      // step2 -> [0,4], step3 -> [4,5]
      crossing.push(truck_weights.shift());
    } else {
      // 못들어 오는 경우 빈칸을 0 으로 채움
      // step1 -> [7,0]
      crossing.push(0);
    }
  }
  return second;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
// console.log(solution(100, 100, [10]));
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
