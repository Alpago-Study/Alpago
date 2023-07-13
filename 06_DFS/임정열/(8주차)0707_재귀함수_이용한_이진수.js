// [문제 이름]
// : 두 수의 곱

// [문제 설명]
// : 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/120804

function solution(num) {
  let answer = '';

  const binary = (num, memo = []) => {
    if (num < 2) {
      memo.unshift(1);
      answer = memo.join('');
      return;
    }

    num = Number.parseInt(num / 2);
    memo.unshift(num % 2);
    binary(num, memo);
  };
  binary(num, []);

  return answer;
}

console.log(solution(11));
