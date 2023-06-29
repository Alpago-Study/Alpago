// [문제 이름]
// : 최댓값 만들기 (1)

// [문제 설명]
// : 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  var answer = 0;
  let max = 0; // 젤큰값 저장
  let maxIdx = 0; // 젤큰값의 인덱스 값 저장   max값이 2개 이상인 경우에 대처하기 위해 ex) [1,2,3,5,5]
  let max2 = 0; // 2번째로 큰값 저장

  // 제일 큰 값을 max에 저장하는 반복문
  for (let i = 0; i < numbers.length; i++) {
    if (max <= numbers[i]) {
      max = numbers[i];
      maxIdx = i;
    }
  }

  // 두번째 큰값은 max2에 저장하는 반복문
  for (let i = 0; i < numbers.length; i++) {
    if (max2 < numbers[i] && i !== maxIdx) {
      // 여기서 i과 max의 인덱스를 비교해서 max값이 2개 이상인 경우 max * max를 해주기 위함.
      max2 = numbers[i];
    }
  }
  answer = max * max2;
  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([3, 4, 5, 6, 6]));
