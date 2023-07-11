// [문제 이름]
// : 트럭주차

// [문제 설명]
// : 상근이는 트럭을 총 세 대 가지고 있다. 오늘은 트럭을 주차하는데 비용이 얼마나 필요한지 알아보려고 한다.
//  상근이가 이용하는 주차장은 주차하는 트럭의 수에 따라서 주차 요금을 할인해 준다.
//  트럭을 한 대 주차할 때는 1분에 한 대당 A원을 내야 한다. 두 대를 주차할 때는 1분에 한 대당 B원, 세 대를 주차할 때는 1분에 한 대당 C원을 내야 한다.
//  A, B, C가 주어지고, 상근이의 트럭이 주차장에 주차된 시간이 주어졌을 때, 주차 요금으로 얼마를 내야 하는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2979

// fee 1~3대까지 내야되는 요금을 담을 배열
// truck1~3 각 트럭이 주차한 시간과 나간시간을 담은 배열 ex) truck1=[1,6] truck2=[3,5] truck3=[2,8]
function solution(fee, truck1, truck2, truck3) {
  // max값 저장
  let max = Math.max(truck1[1], truck2[1], truck3[1]);
  // 배열의 길이가 max -1이고 안의 요소가 0인 배열 선언
  // 0번째 인덱스 요소는 1~2까지의 시간을, 1번째 인덱스 요소는 2~3까지의 시간을 나타내는 배열
  // 그 배열안에 값은 해당 시간에 주차되어 있는 차량의 수를 나타냄
  let result = Array(max - 1).fill(0);
  let totalFee = 0;

  for (let i = truck1[0] - 1; i < truck1[0] - 1 + truck1[1] - truck1[0]; i++) {
    result[i] += 1;
  }

  for (let i = truck2[0] - 1; i < truck2[0] - 1 + truck2[1] - truck2[0]; i++) {
    result[i] += 1;
  }

  for (let i = truck3[0] - 1; i < truck3[0] - 1 + truck3[1] - truck3[0]; i++) {
    result[i] += 1;
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 1) {
      totalFee = totalFee + result[i] * fee[0];
    } else if (result[i] === 2) {
      totalFee = totalFee + result[i] * fee[1];
    } else {
      totalFee = totalFee + result[i] * fee[2];
    }
  }
  return totalFee;
}

console.log(solution([5, 3, 1], [1, 6], [3, 5], [2, 8]));
console.log(solution([10, 8, 6], [15, 30], [25, 50], [70, 80]));
