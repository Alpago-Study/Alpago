// [문제 이름]
// : 다리를 지나는 트럭

// [문제 설명]
// : 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

// 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
// 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

// solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42583

const solution = (bridge_length, weight, truck_weights) => {
  // 반환 값인 시간
  let time = 0;
  // 다리 상황을 표현한 배열(다리 길이만큼 0으로 채우기)
  const bridge = Array.from({ length: bridge_length }, () => 0);
  // 현재 다리의 하중
  let weightSum = 0;

  // 1. 초기 로직
  // ⭐ 첫 트럭을 다리 배열에 삽입하는 상황 ⭐
  time += 1;
  // : 시간 1초 경과
  bridge.shift();
  // : 다리 배열의 맨 앞 요소 제거
  weightSum += truck_weights[0];
  // : 현재 다리의 하중에 트럭 배열의 첫 요소 무게 더하기
  bridge.push(truck_weights.shift());
  // : 다리 배열의 마지막에 제거한 트럭 배열의 첫 요소를 삽입

  // 2. 현재 다리의 하중이 0보다 크다면 계속 반복
  // ⭐ 현재 다리의 하중이 0이라면 트럭 배열의 모든 트럭이 다 지나갔다고 판단하기 때문 ⭐
  while (weightSum > 0) {
    // 2-1. 반복할 때마다 1초씩 증가
    time += 1;

    // 2-2. 현재 다리 하중에서 제거한 다리 배열의 첫 요소 빼기
    weightSum -= bridge.shift();

    // 3. 만약 지나갈 트럭이 남아 있고(length > 0),
    // 현재 다리의 하중에 트럭 배열의 첫 요소를 더한 값이 다리의 최대 무게를 넘지 않는다면
    if (truck_weights.length > 0 && weightSum + truck_weights[0] <= weight) {
      // 3-1. 트럭을 다리에 추가해야 하므로 현재 다리의 하중에 첫 트럭 무게 더하고,
      // 다리 배열의 마지막에 제거한 트럭 배열의 첫 요소를 삽입
      weightSum += truck_weights[0];
      bridge.push(truck_weights.shift());
      // 3-2. 조건을 만족하지 않는다면 트럭을 다리에 추가하지 못하는 상황이므로,
      // 다리 배열의 마지막에 초기 값인 0을 삽입
    } else {
      bridge.push(0);
    }
  }

  // 4. 반복문이 종료되는 순간의 시간 반환
  return time;
};

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
