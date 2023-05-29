// [문제 이름]
// : 소수 만들기

// [문제 설명]
// : 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12977

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        const targetNumber = nums[i] + nums[j] + nums[k];

        if (isPrime(targetNumber)) count += 1;
      }
    }
  }

  return count;
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
