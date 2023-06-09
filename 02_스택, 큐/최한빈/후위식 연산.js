// [문제 이름]
// : 후위식 연산

// [문제 설명]
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12 입니다.

// [문제 링크]
// :

function solution(str) {
  const stack = [];
  // 문자 1개씩 순환
  str.split('').forEach((element) => {
    // 만약 숫자라면 숫자타입으로 변환후 스택에 저장
    if (!isNaN(element)) stack.push(Number(element));
    // 연산 기호라면 기호에 따라 연산 수행
    else {
      let result;
      // 맨 뒤에 원소 2개를 추출 하고 연산 후 결과값을 스택에 추가
      switch (element) {
        case '+':
          result = stack[stack.length - 2] + stack[stack.length - 1];
          stack.pop();
          stack.pop();
          stack.push(result);
          break;
        case '-':
          result = stack[stack.length - 2] - stack[stack.length - 1];
          stack.pop();
          stack.pop();
          stack.push(result);
          break;
        case '/':
          result = stack[stack.length - 2] / stack[stack.length - 1];
          stack.pop();
          stack.pop();
          stack.push(result);
          break;
        case '*':
          result = stack[stack.length - 2] * stack[stack.length - 1];
          stack.pop();
          stack.pop();
          stack.push(result);
          break;
        default:
          break;
      }
    }
  });
  console.log(stack);
}

console.log(solution('352+*9-'));
