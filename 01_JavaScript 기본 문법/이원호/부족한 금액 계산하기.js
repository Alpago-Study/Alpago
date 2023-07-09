// [문제 이름]
// : 부족한 금액 계산하기

// [문제 설명]
// : 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를
// N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/82612


function solution(price, money, count) {
  // 금액이 부족하면 부족한 금액 리턴, 부족하지 않으면 0 리턴

  // price의 합을 담아줄 변수 sum 선언
  let sum = 0;

  // price 가 count 만큼 반복하기때문에 반복문 사용
  for (let i = 1; i <= count; i++) {
    sum = sum + price * i;
  }

  // sum이 money보다 큰경우 부족한 금액만큼 리턴
  if (sum > money) {
    return sum - money;
  } else {
    // 그렇지 않을 경우 0 리턴
    return 0;
  }
}

console.log(solution(3, 20, 4));
