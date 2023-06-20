// [문제 이름]
// : 큰 수 만들기

// [문제 설명]
// : 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

// 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

// 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42883

const solution = (number, k) => {
  // 1. 스택 생성
  const stack = [];

  // 2. 숫자 문자열을 순회
  for (let i = 0; i < number.length; i++) {
    // 3-1. 만약 스택이 비어 있는 경우,
    // 일단 숫자 삽입 후 다음 순회로 넘어가기
    if (!stack.length) {
      stack.push(+number[i]);
      continue;
    }

    // 3-2. 제거할 개수가 남아 있고(k > 0)
    // 현재 요소가 스택의 마지막 숫자보다 큰 경우,
    // 스택의 마지막 숫자 제거한 후 숫자를 제거했으니 제거할 개수 1 차감(k - 1)
    while (k > 0 && stack[stack.length - 1] < +number[i]) {
      stack.pop();
      k -= 1;
    }

    // 3-3. 기본적으로 순회할 때마다 스택에 현재 숫자 추가
    stack.push(+number[i]);
  }

  // 4. 스택의 숫자를 문자열로 합쳐서 반환
  // 🔥 테스트 케이스 12번 실패 관련 🔥
  // : 항상 스택의 마지막 숫자가 현재 숫자보다 큰 경우
  // while 문의 조건을 만족하지 않으므로 숫자 제거(pop)가 한 번도 실행되지 않음
  // ex) '654321' -> '654321' / '4321' -> '4321'
  // ✅ 해결을 위해 숫자를 뒤에서부터 k만큼 잘라서 반환 ✅
  return stack.join('').slice(0, stack.length - k);
};

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
console.log(solution('654321', 1));
