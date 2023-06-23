// [문제 이름]
// : 큰 수 만들기

// [문제 설명]
// : 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
//  예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.
//  문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  // 스택을 만들어놓고
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    // 2. 반복문을 돌면서 스택의 마지막 요소가 number[i] 보다 작은경우에는
    // 해당 요소를 pop하고, k를 1씩 차감해나간다.
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    // 1. 반복문을 돌면서 number[i] 요소를 스택에 쌓아간다.
    stack.push(number[i]);
  }

  // 77777 3 의 예제의경우 k 만큼 pop이 안되기때문에 예외처리를 해줘야함
  // 그 외의 예제의 경우(일반적인경우) k만큼 pop되기때문에 k가 0이라 의미X
  stack.splice(stack.length - k, k);
  return stack.join('');
}

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
console.log(solution('777777777', 5));
