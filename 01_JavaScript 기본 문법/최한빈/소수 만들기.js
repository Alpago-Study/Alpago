// [문제 이름]
// : 소수 만들기

// [문제 설명]
// : 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라
// 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12977
function solution(nums) {
  let answer = 0;

  // 3개 뽑아서 더하기
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // 더한 값이 소수이면 answer++
        isPrime(nums[i] + nums[j] + nums[k]) ? (answer += 1) : '';
      }
    }
  }
  return answer;
}

// 소수 구하는 함수
function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    // 하나라도 나눠지는 수가 있으면 소수가 아니다
    if (num % i === 0) return false;
  }
  return true;
}
console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
