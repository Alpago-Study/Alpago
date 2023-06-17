// [문제 이름]
// : 두 개 뽑아서 더하기

// [문제 설명]
// : 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

function solution(numbers) {
  let answer = [];
  let sum = 0;

  // 1. 배열 하나의 요소에 나머지 요소를 더한 값을 push 하기
  // 2. 배열의 0번째 요소부터 맨 마지막 번째 요소까지 동일하게 진행
  // 3. answer에 이미 들어있는 값이라면 더한 값을 추가하지 않는다.

  for (let i = 0; i < numbers.length; i++) {
    let head = numbers[i];

    // 이중 for 문으로 1번째 조건을 만족할 수 있다.
    for (let j = 1; j < numbers.length; j++) {
      if (i !== j) {
        // 같은 index의 요소이면 안된다.
        sum = head + numbers[j];

        if (!answer.includes(sum)) {
          answer.push(sum);
        }
      }
    }
  }

  // 순서대로 정렬하기
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
