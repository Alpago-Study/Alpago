// [문제 이름]
// : 키패드 누르기

// [문제 설명]
// : 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/67256

// 각 숫자 별 좌표
const coordiate = [
  [3, 1],
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
];

const touchKeyPad = (numbers, hand) => {
  let left = [3, 0]; // 왼손 시작 위치의 좌표
  let right = [3, 2]; // 오른손 시작 위치의 좌표
  let result = ''; // 결과로 반환할 문자열

  // 키패드를 누른 순서를 출력하는 함수
  const printResult = (number) => {
    // 1-1. 숫자가 1, 4, 7 중 하나인 경우,
    // 왼손으로 누른 것이므로 결과 문자열에 'L'을 추가하고 왼손 위치를 갱신
    if (number % 3 === 1) {
      result += 'L';
      left = coordiate[number];
      // 1-2. 숫자가 3, 6, 9 중 하나인 경우,
      // 오른손으로 누른 것이므로 결과 문자열에 'R'을 추가하고 오른손 위치를 갱신
    } else if (number % 3 === 0 && number !== 0) {
      result += 'R';
      right = coordiate[number];
      // 1-3. 숫자가 2, 5, 8, 0 중 하나인 경우,
      // 두 손 중 어떤 손으로 누를지 결정
    } else {
      const leftDistance =
        Math.abs(coordiate[number][0] - left[0]) +
        Math.abs(coordiate[number][1] - left[1]);
      const rightDistance =
        Math.abs(coordiate[number][0] - right[0]) +
        Math.abs(coordiate[number][1] - right[1]);

      // 2-1 왼손이 더 가깝다면,
      // 결과 문자열에 'L'을 추가하고 왼손 위치를 갱신
      if (leftDistance < rightDistance) {
        result += 'L';
        left = coordiate[number];
        // 2-2. 오른손이 더 가깝다면,
        // 결과 문자열에 'R'을 추가하고 오른손 위치를 갱신
      } else if (leftDistance > rightDistance) {
        result += 'R';
        right = coordiate[number];
        // 2-3 두 손의 거리가 같다면 매개변수 hand에 따라 결정
      } else {
        result += hand === 'left' ? 'L' : 'R';
        hand === 'left'
          ? (left = coordiate[number])
          : (right = coordiate[number]);
      }
    }
  };

  // 1. 주어진 숫자 배열에 대해 printResult 함수를 적용하여 키패드를 누른 순서를 결정
  numbers.forEach(printResult);

  // 2. 최종적으로 결정된 키패드 누른 순서를 반환
  return result;
};

console.log(touchKeyPad([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(touchKeyPad([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(touchKeyPad([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
