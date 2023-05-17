// [문제 이름]
// : 최댓값 만들기 (1)

// [문제 설명]
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/120847

const solution = (numbers) => {
  const sorted = numbers.sort((a, b) => b - a);

  return sorted[0] * sorted[1];
};

console.log([1, 2, 3, 4, 5]);
console.log([0, 31, 24, 10, 1, 9]);
