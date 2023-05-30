// [문제 이름]
// : 최댓값 만들기 (1)

// [문제 설명]
// : 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  let first = Math.max(numbers[0], numbers[1]);
  let second = Math.min(numbers[0], numbers[1]);
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] > second) {
      if (numbers[i] > first) {
        second = first;
        first = numbers[i];
      } else {
        second = numbers[i];
      }
    }
  }
  return first * second;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
