// [문제 이름]
// : 배열 뒤집기

// [문제 설명]
// : 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/120821

function solution(num_list) {
  var answer = [];

  // 배열을 순회하며 빈배열(answer)에 num_list의 마지막 요소부터 차례대로 push함
  for (let i = 0; i < num_list.length; i++) {
    answer.push(num_list[num_list.length - (i + 1)]);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
