//문제이름 : 소수만들기

/*문제설명 : 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요. */

function solution(nums) {
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let total = nums[i] + nums[j] + nums[k];
        if (isPrime(total)) result++;
      }
    }
  }
  return result;
}
function isPrime(num) {
  const prime = [2, 3, 5];
  for (let i = 7; i < 2997; i += 2) {
    for (let j = 1; j < prime.length; j++) {
      if (i % prime[j] === 0) break;
      if (j === prime.length - 1) {
        prime.push(i);
      }
    }
  }
  return prime.includes(num);
}

console.log(solution([1, 2, 7, 6, 4]));
