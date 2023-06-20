// [문제 이름]
// : 큰 수 만들기

// [문제 설명]
// : 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  // 1924, 2
  const result = [];
  let counter = k; // counter = 2

  for (let i = 0; i < number.length; i++) {
    const curNum = number[i];
    // i = 0 => 1
    // i = 1 => 9
    // i = 2 => 2
    // i = 3 => 4

    while (result[result.length - 1] < curNum && counter > 0) {
      // undefined < 1(false) && 2 > 0
      // 1 < 9(true) && 2 > 0
      // 9 < 2(false) && 1 > 0
      // 2 < 4(true) && 1 > 0
      result.pop();
      // result = [];
      // result = [9, 2];
      // result = [9];
      counter--;
      // counter = 1
      // counter = 0
    }

    result.push(curNum);
    // result = [1];
    // result = [9];
    // result = [9,2];
    // result = [9,4];

    // counter가 0일 때
    if (counter === 0) {
      for (let j = i + 1; j < number.length; j++) {
        // number의 마지막 index를 넘기때문에 실행되지 않는다 => break로 빠짐
        result.push(number[j]);
      }
      break;
    }
  }

  // result를 문자열로 바꿔주고 slice로 (0, 2) k개를 제외한 만큼의 큰 수를 반환한다
  return result.join('').slice(0, result.length - counter);
}

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
