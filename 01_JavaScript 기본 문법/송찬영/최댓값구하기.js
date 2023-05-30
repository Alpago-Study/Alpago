function solution(numbers) {
  let sorted_nums = numbers.sort((a, b) => b - a);
  let result = sorted_nums[0] * sorted_nums[1];
  return result;
}
