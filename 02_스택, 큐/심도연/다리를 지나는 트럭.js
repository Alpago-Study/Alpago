// [문제 이름]
// : 다리를 지나는 트럭

// [문제 설명]
// : solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let second = 0;
  // 다리를 건널 수 있는 트럭의 최대 개수 = bridge_length
  // 다리의 최대 무게 = weight
  // 트럭의 무게 = truck_weights

  // ⭐️ while 문 ⭐️
  // 조건식이 true/false 로 결정이 된다 => 모든 조건이 성립될 때를 따져줘야 한다
  // 다리를 지난 트럭과 대기 트럭의 배열 길이가 같을 때 반복문 종료
  // (또는 다리를 건너는 트럭과 대기 트럭의 배열의 길이가 같을 때)
  // while(다리를 건너는 트럭.length !== 0) => 0초일 때 length 가 0이기 때문에 실행 조차 못하는...
  // while(대기 트럭.length !== 0) => length가 0일 때에 다리를 건너고 있는 트럭이 존재하기 때문

  // 사용할 변수
  // 다리를 지난 트럭
  let passedTrucks = 0;
  // 다리 위에 트럭 개수
  let bridgeOnTrucks = [];
  let currentWeight = 0;

  let temp = truck_weights.slice(0);

  while (passedTrucks !== truck_weights.length) {
    second++;

    if (bridgeOnTrucks.length === bridge_length) {
      let currentTruck = bridgeOnTrucks.shift();

      if (currentTruck > 0) {
        // 0은 무게에 영향을 안미치고 공간만 차지하기 위해서
        // 0이 아닌 다른 숫자를 사용하면 그만큼 weight가 증가하기 때문에
        passedTrucks++;
      }

      // [7,0,0,0,0]
      // 7 > 0 => passedTrucks++
      // [0,0,0,0,4]

      currentWeight = currentWeight - currentTruck;
    }

    if (temp[0] + currentWeight <= weight) {
      currentWeight = currentWeight + temp[0];
      bridgeOnTrucks.push(temp.shift());
    } else {
      bridgeOnTrucks.push(0);
    }
  }

  return second;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
