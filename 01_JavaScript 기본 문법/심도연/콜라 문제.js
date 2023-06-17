// [문제 이름]
// : 콜라 문제

// [문제 설명]
// : 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다. 상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  // 현재 남아있는 콜라의 병 개수가 a보다 작은 경우
  if (n < a) return 0;

  let sum = Math.floor(n / a) * b;
  // n의 자리에 n을 a로 나눈 나머지(sum에서 처리하지 못한 남은 값)와
  // 위에서 계산한 sum을 합산하여 파라미터로 전달해준다

  return sum + solution(a, b, (n % a) + sum);
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
