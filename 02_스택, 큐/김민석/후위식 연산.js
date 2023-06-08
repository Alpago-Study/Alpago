// [문제 이름]
// : 후위식 연산

// [문제 설명]
// : 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9를 후위연산식으로 표현하면 352+*9-로 포현되며 그 결과는 12입니다.

const solution = (s) => {
  // 1. 스택 생성
  const stack = [];

  // 2. 문자열을 한 글자씩 순회
  s.split('').forEach((char) => {
    // 3. 만약 문자열이 숫자 형태인 경우 스택에 push
    if (!isNaN(+char)) return stack.push(+char);

    // 4. 만약 문자열이 연산 기호인 경우 각각 right, left 변수에 스택에서 제거한 값 저장
    // ⭐ right를 먼저 저장하는 이유는 스택 특징과 연산 순서 때문 ⭐
    // + 연산이면 상관없지만 -나 *, / 연산의 경우 순서가 중요함
    // (왼쪽) (연산 기호) (오른쪽)
    // 연산 순서를 고려했을 때 나중에 삽입한 요소가 위의 식에서 오른쪽에 들어가야 정상적인 연산이 수행될 수 있음
    const right = stack.pop();
    const left = stack.pop();

    // 5. 각 연산 기호에 따라 left, right 변수로 연산 수행하여 다음 연산을 위해 스택에 삽입
    if (char === '+') stack.push(left + right);
    if (char === '-') stack.push(left - right);
    if (char === '*') stack.push(left * right);
    if (char === '/') stack.push(left / right);
  });

  // 6. 스택의 첫 번째 요소 반환
  return stack[0];
};

let str = '352+*9-';
console.log(solution(str));
