// [문제 이름]
// : 소수 만들기

// [문제 설명]
// : 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  // 3개 중복없이 뽑는 경우의수 (조합)

  let numsFiltered = [];
  let n = nums.length;

  // 중복없이 3개를 뽑은 값들을 더한값을 numsFiltered 배열에 담음
  // ex) nums = [1,2,3,4] numsFiltered = [6,7,8,9]
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        numsFiltered.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  // numsFiltered 의 배열 요소 중 소수인것 count에 담음
  // 소수 판별법? => 반복문 돌면서 나누어 떨어지는게 1과 본인 즉 2개 인경우 소수임
  // ex) nums = [1,2,3,4] => numsFiltered = [6,7,8,9] => count = [4,2,4,3]
  let count = [];

  for (let i = 0; i < numsFiltered.length; i++) {
    for (let j = 1; j <= numsFiltered[i]; j++) {
      if (count[i] === undefined && numsFiltered[i] % j === 0) {
        count[i] = 1;
      } else if (numsFiltered[i] % j === 0) {
        count[i] = count[i] + 1;
      }
    }
  }

  let result = 0;
  // count 배열요소가 2인것이 소수의 갯수
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 2) {
      result = result + 1;
    }
  }
  return result;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
