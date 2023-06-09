//문제이름 : 후위식 연산

/*문제 설명 : 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 를 후위연산식으로 표현하면 352+*9-로 표현되며 그 결과는12입니다. */
// 37*9-
function solution(str) {
  let arrs = str.split('');
  while (arrs.length > 1) {
    for (let i = 2; i < arrs.length; i++) {
      if (
        arrs[i] === '+' ||
        arrs[i] === '-' ||
        arrs[i] === '*' ||
        arrs[i] === '/'
      ) {
        arrs.splice(i - 2, 3, calculate(arrs[i - 2], arrs[i - 1], arrs[i]));
        i -= 2;
      }
    }
  }
  return arrs[0];
}
function calculate(n1, n2, calculator) {
  let answer = '';
  n1 = Number(n1);
  n2 = Number(n2);
  switch (calculator) {
    case '+':
      answer = n1 + n2;
      break;
    case '-':
      answer = n1 - n2;
      break;
    case '*':
      answer = n1 * n2;
      break;
    case '/':
      answer = n1 / n2;
      break;
  }
  return `${answer}`;
}
console.log(solution('352+*9-'));
console.log(solution('395*+4-'));
