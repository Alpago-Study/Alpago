// [문제 이름]
// : 키패드 누르기

// [문제 설명]
// : 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/67256

const key_pad = (numbers, hand) => {
  // ! 객체안에 배열로 bracket notation 과 index 를 헷갈리지 말것
  // ! 왼손과 오른손의 현재 위치를 아는 것이 중요

  const keypad = {
    1: [3, 0],
    2: [3, 1],
    3: [3, 2],
    4: [2, 0],
    5: [2, 1],
    6: [2, 2],
    7: [1, 0],
    8: [1, 1],
    9: [1, 2],
    '*': [0, 0],
    0: [0, 1],
    '#': [0, 2],
  };

  // keypad
  // 1: [3, 0], 2: [3, 1], 3: [3, 2],
  // 4: [2, 0], 5: [2, 1], 6: [2, 2],
  // 7: [1, 0], 8: [1, 1], 9: [1, 2],
  // "*": [0, 0], 0: [0, 1], "#": [0, 2],

  let answer = '';
  // 초기값
  let L = keypad['*'];
  let R = keypad['#'];

  // numbers 의 각 요소를 순회
  for (let number of numbers) {
    // 왼손 영역 확인 : keypad 의 key(number)의 1번째 요소가 0 이라면 왼손 영역이다
    if (keypad[number][1] === 0) {
      // answer 에 L 을 넣어주고, 현재 왼손 위치를 변경해준다
      answer += 'L';
      L = keypad[number];
    }
    // 오른손 영역 확인 : keypad 의 key(number)의 1번째 요소가 2 이라면 오른손 영역이다
    else if (keypad[number][1] === 2) {
      // answer 에 R 을 넣어주고, 현재 오른손 위치를 변경해준다
      answer += 'R';
      R = keypad[number];
    }
    // 가운데 영역 확인 : Math.abs 를 사용해서 절댓값 구하기(음수가 나오면 X)
    else {
      if (
        // target 과 현재 왼손의 [0],[1] 거리 합
        Math.abs(keypad[number][0] - L[0]) +
          Math.abs(keypad[number][1] - L[1]) >
        // target 과 현재 오른손의 [0],[1] 거리 합
        Math.abs(keypad[number][0] - R[0]) + Math.abs(keypad[number][1] - R[1])
      ) {
        // 거리 합이 더 작아야 하므로 위 조건식에선 R 이 더 작기 때문에 R 을 answer 에 넣어주고 현재 오른손 위치를 변경해준다
        answer += 'R';
        R = keypad[number];
      } else if (
        // target 과 현재 왼손의 [0],[1] 거리 합
        Math.abs(keypad[number][0] - L[0]) +
          Math.abs(keypad[number][1] - L[1]) <
        // target 과 현재 오른손의 [0],[1] 거리 합
        Math.abs(keypad[number][0] - R[0]) + Math.abs(keypad[number][1] - R[1])
      ) {
        // if 문과 반대로 L 이 더 작기 때문에 L 을 answer 에 넣어주고 현재 왼손 위치를 변경한다
        answer += 'L';
        L = keypad[number];
        // 마지막 분기는 target 에 대한 왼손과 오른손의 거리가 같을때 매개변수로 주어진 hand 에 따라 달라지는 것을 의미한다
      } else {
        if (hand === 'right') {
          answer += 'R';
          R = keypad[number];
        } else {
          answer += 'L';
          L = keypad[number];
        }
      }
    }
  }

  return answer;
};

console.log(key_pad([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(key_pad([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(key_pad([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
