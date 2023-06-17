function solution(bridge_length, weight, truck_weights) {
  // 스택 큐 문제
  // pop,push,unshift,shift 같은것들 할때마다 count +1
  // 다리를 건너는 배열, 다리를 지난 트럭이 담길 배열 두가지를 만들고
  // 다리를 건너는 배열에 truck_weight의 0번째 요소가 push 되어야 함
  // 어느때? 다리를 건너는 배열의 길이가 bridge_length와 같아졌을때.
  // 다리를 건너는 배열안의 0번째 요소와 다음에 들어올 트럭의 무게의 합이 weight이하라면,
  // 다음 truck_weight를 다리를 건너는 배열에 넣고 앞서들어온 값은 다리를 지난 트럭이 담길 배열로 빠져나감. 이거 계속 while문으로 반복
  // 종료규칙, truck_weights의 배열안에 길이, 다리를 건너는 배열이 0이면 종료.
  // count는 얼마인지 리턴.

  let bridge = []; // 다리를 건너는 배열
  let passed = []; // 다리를 지난 트럭이 담길 배열
  let count = 0; // 시간(걸린 초)

  while (true) {
    count++;
    console.log('');
    console.log('count: ' + count);

    // 다리를 건너는 배열에서 가장 앞에 있는 트럭이 다리를 완전히 지났을 경우, 다리에서 제거하고 다리를 지난 트럭 배열에 추가
    // 허용가능한 다리위의 트럭의 수가 bridge_length니까 그거랑 같아지면 빼내야함.
    if (bridge.length > 0 && count - bridge[0].time === bridge_length) {
      const truck = bridge.shift();
      passed.push(truck);
      console.log('- passed_add -');
    }

    // 현재 다리를 건너는 트럭들의 무게 총합 계산
    const bridgeWeight = bridge.reduce((sum, truck) => sum + truck.weight, 0);
    console.log('bridgeWeight: ' + bridgeWeight);

    // 대기 중인 트럭이 남아있고, 다음 트럭이 다리에 진입해도 무게 제한을 넘지 않는 경우, 다리에 트럭 추가
    if (truck_weights.length > 0 && truck_weights[0] + bridgeWeight <= weight) {
      const truck = truck_weights.shift();
      bridge.push({ weight: truck, time: count });
      console.log('- bridge_add -');
    }

    // 대기 중인 트럭이 없고, 다리를 건너는 트럭도 없는 경우 반복문 종료
    if (truck_weights.length === 0 && bridge.length === 0) {
      break;
    }
  }

  return count; // 총 걸린 시간(걸린 초) 반환
}
solution(2, 10, [7, 4, 5, 6]);
