// [문제 이름]
// : 트럭 주차

// [문제 설명]
// : 상근이는 트럭을 총 세 대 가지고 있다. 오늘은 트럭을 주차하는데 비용이 얼마나 필요한지 알아보려고 한다.

// 상근이가 이용하는 주차장은 주차하는 트럭의 수에 따라서 주차 요금을 할인해 준다.

// 트럭을 한 대 주차할 때는 1분에 한 대당 A원을 내야 한다. 두 대를 주차할 때는 1분에 한 대당 B원, 세 대를 주차할 때는 1분에 한 대당 C원을 내야 한다.

// A, B, C가 주어지고, 상근이의 트럭이 주차장에 주차된 시간이 주어졌을 때, 주차 요금으로 얼마를 내야 하는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2979

const solution = (priceList, timeList) => {
  const maxTime = Math.max(...timeList.map(([_, end]) => end)); // 전달 받은 시간 리스트 중 가장 큰 값
  const truckCounts = Array.from({ length: maxTime }, () => 0); // 가장 큰 값만큼의 크기를 가지는 배열 생성 (요소는 0으로 초기화)
  let answer = 0; // 반환할 주차 요금

  // 1. 시간 리스트를 순회
  timeList.forEach(([start, end]) => {
    // 2. 입차 시간부터 출차 시간까지 순회
    for (let i = start; i < end; i++) {
      // 2-1. 생성한 배열의 각 요소에 1을 더하여 현재 시간대의 트럭 개수 저장
      truckCounts[i] += 1;
    }
  });

  // 3. 트럭 개수를 저장한 배열 순회
  truckCounts.forEach((count) => {
    // 4. 인수로 전달 받은 주차 요금 가격 리스트 선언
    const [onePrice, twoPrice, threePrice] = priceList;

    // 5. 트럭 개수에 따라 적절한 요금을 곱하여 주차 요금 누적
    if (count === 1) answer += onePrice;
    if (count === 2) answer += twoPrice * 2;
    if (count === 3) answer += threePrice * 3;
  });

  // 6. 누적된 주차 요금 반환
  return answer;
};

console.log(
  solution(
    [5, 3, 1],
    [
      [1, 6],
      [3, 5],
      [2, 8],
    ]
  )
);
console.log(
  solution(
    [10, 8, 6],
    [
      [15, 30],
      [25, 50],
      [70, 80],
    ]
  )
);
