// [문제 이름]
// : 같은 숫자는 싫어

// [문제 설명]
// : 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
// 예를 들면, arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12906

const solution = (arr) => {
  // 1. 스택 생성
  const stack = [];

  // 2. 매개변수로 전달한 배열의 각 요소를 순회
  arr.forEach((num) => {
    // 3. 만약 현재 요소가 스택의 마지막 요소와 같다면 스택에서 제거
    if (num === stack[stack.length - 1]) stack.pop();
    // ⭐ at 메서드 사용 시 효율성 테스트 실패
    // if (num === stack.at(-1)) stack.pop();

    // 4. 스택에 현재 요소 추가
    stack.push(num);
  });

  return stack;
};

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
