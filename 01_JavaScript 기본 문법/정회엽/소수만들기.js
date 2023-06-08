//문제이름 : 소수만들기

/*문제설명 : 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요. */

//문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let prime = [2, 3, 5];
  primeArr(prime);
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let total = nums[i] + nums[j] + nums[k];
        if (prime.includes(total)) result++;
      }
    }
  }
  return result;
}
function primeArr(arr) {
  let isPrime = true;
  for (let i = 7; i < 2997; i += 2) {
    for (let j = 1; j < arr.length; j++) {
      if (i % arr[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) arr.push(i);
    isPrime = true;
  }
}

console.log(solution([1, 2, 7, 6, 4]));
// function A(num) {
//   //짝수이면 소수X
//   if (num % 2 === 0) return false;
//   //3부터 제곱근까지 소수판별
//   for (let i = 3; i <= sqrt(num); i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
