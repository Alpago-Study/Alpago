//문제이름 : 최댓값 구하기(1)

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

//문제 링크
//https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  let max1 = Math.max(...numbers);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === max1) {
      numbers.splice(i, 1);
      break;
    }
  }
  let max2 = Math.max(...numbers);
  return max1 * max2;
}
console.log(solution([2, 5, 7, 3, 9, 11, 145]));
console.log(solution([2, 2, 4, 4]));
