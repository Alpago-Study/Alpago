// [문제 이름]
// : 잃어버린 괄호

// [문제 설명]
// : 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
// 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
// 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1541

const solution = (expression) =>
  // 1. 계산식을 '-' 기준으로 분리
  // ⭐ '+' 연산을 먼저 해야(괄호로 묶어줘야) 최소값을 도출할 수 있기 때문 ⭐
  expression
    .split('-')
    // 2. 분리한 계산식을 '+' 기준으로 한 번 더 분리하여 숫자로 만들고,
    // 3. 숫자를 reduce로 합해서('+' 연산 수행) map으로 생성할 배열 요소로 삽입
    .map(
      (expression) => +expression.split('+').reduce((sum, num) => sum + +num, 0)
    )
    // 4. map으로 생성한 배열의 요소(숫자)는 '+' 연산이 완료된 상태이므로,
    // reduce로 '-' 연산을 수행한 값을 반환
    .reduce((sum, num) => sum - num);

console.log(solution('55-50+40'));
console.log(solution('10+20+30+40'));
console.log(solution('00009-00009'));
