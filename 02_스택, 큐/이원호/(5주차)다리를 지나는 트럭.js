// [문제 이름]
// : 다리를 지나는 트럭

// [문제 설명]
// : 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
//  예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
//  경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
//  0	  []	[]	[7,4,5,6]
//  1~2	[]	[7]	[4,5,6]
//  3 	[7]	[4]	[5,6]
//  4	  [7]	[4,5]	[6]
//  5	  [7,4]	[5]	[6]
//  6~7	[7,4,5]	[6]	[]
//  8	  [7,4,5,6]	[]	[]
//  따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
//  solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  // 경과 시간 변수
  let elapsedTime = 0;

  // 다리를 건너는 트럭을 나타내는 큐
  let trucksPassing = [];

  // 대기 중인 트럭을 나타내는 큐
  let trucksWaiting = truck_weights.slice();

  // 다리를 건넌 트럭을 나타내는 큐
  let trucksPassed = [];

  // 다리를 건너는 트럭의 무게 합
  let currentWeight = 0;

  // 모든 트럭이 다 건널 때까지 반복
  while (trucksPassed.length !== truck_weights.length) {
    // 반복문 실행시마다 elapsedTime +1씩 증가
    elapsedTime++;

    // 다리를 건너는 트럭의 상태 업데이트
    for (let i = 0; i < trucksPassing.length; i++) {
      trucksPassing[i].time--;
    }

    // 다리를 건넌 트럭 중에 도착한 트럭 확인 및 제거
    if (trucksPassing.length > 0 && trucksPassing[0].time === 0) {
      // 다리를 지나고 있는 트럭의 time이 0일경우 trucksPassing 배열에서 제외
      const truck = trucksPassing.shift();
      // 제외된 트럭의 무게를 차감해줌
      currentWeight -= truck.weight;
      // trucksPassing 제외한 값을 trucksPassed에 넣어줌
      trucksPassed.push(truck);
    }

    // 대기 중인 트럭 중에 다리에 진입 가능한 트럭 확인(조건) 및 추가
    if (
      trucksWaiting.length > 0 &&
      currentWeight + trucksWaiting[0] <= weight
    ) {
      const truckWeight = trucksWaiting.shift();
      currentWeight += truckWeight;
      trucksPassing.push({ weight: truckWeight, time: bridge_length });
    }
  }

  return elapsedTime;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 110));
