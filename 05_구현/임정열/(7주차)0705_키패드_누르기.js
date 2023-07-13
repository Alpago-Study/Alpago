// [문제 이름]
// : [카카오 인턴] 키패드 누르기

// [문제 설명]
// : 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// : 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때,
//   각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

/**
 * 두 좌표 사이 거리를 구하는 함수
 * 13번 ~ 20번 테스트가 통과하지 못했던 이유!!!!!
 * 출처: https://aerimforest.tistory.com/167
 *
 * 예를 들어
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *   0
 * 왼손은 4 (1, 0)에 있고, 오른손은 8(2, 1)에 있을 때
 * 2(0, 1)를 눌러야 하는 상황이라면
 * 왼손에서 2까지는 거리가 : 루트 2
 * 오른손에서 2까지는 거리가 : 2
 * 거리상으로는 왼손으로 움직이는게 거리가 짧다고 하지만
 * 사실은 왼손, 오른손 둘 다 2칸 움직이는 것이므로 거리를 비교하는 것은 좋지 않다!
 *
 * @param {Array<number>} a 좌표 [x, y]
 * @param {Array<number>} b 좌표 [x, y]
 * @returns 두 점 사이 거리
 */
// function getDistance(a, b) {
//   let x = b[0] - a[0];
//   let y = b[1] - a[1];

//   return Math.sqrt(x * x + y * y);
// }

// x좌표와 y좌표의 차를 구해 몇 칸 이동하는지 구하는 함수로 수정
function getDistance(a, b) {
  let x = Math.abs(b[0] - a[0]);
  let y = Math.abs(b[1] - a[1]);

  return x + y;
}

/**
 * 1. 키패드를 다음과 같이 바꿔 계산합니다.
 * 0 1 2 -> 3으로 나눈 몫이 0
 * 3 4 5 -> 3으로 나눈 몫이 1
 * 6 7 8 -> 3으로 나눈 몫이 2
 *   9   -> 시작점
 *
 * 배열로 표현하면 다음과 같습니다.
 * [[0, 1, 2],
 *  [3, 4, 5],
 *  [6, 7, 8],
 *  [_, 9, _]]
 *
 * 9를 제외한 숫자의 좌표는 다음과 같습니다.
 * [3으로 나눈 몫, 3으로 나눈 나머지]
 * [Number.parseInt(num / 3), num % 3]
 * 예를 들어 7은 [Number(7 / 3), 7 % 3]이므로 [2, 1] 입니다.
 *
 * rule 1. 9를 제외한 숫자의 3으로 나눈 나머지가 0이면 L 반환
 * rule 2. 9를 제외한 숫자의 3으로 나눈 나머지가 2이면 R 반환
 * rule 3. 나머지 숫자는 거리를 비교한다.
 * rule 3 - 1. 왼손에서 출발한 거리, 오른손에서 출발한 거리가 같을 경우 주로 쓰는 손에 따라 결정한다.
 * rule 3 - 2. 왼손에서 출발한 거리, 오른손에서 출발한 거리가 다를 경우 가까운 손으로 결정한다.
 *
 * @param {Array<number>} numbers number: 0 ~ 9까지 수
 * @param {string} hand hand: "left" 또는 "right"
 * @returns
 */
function solution(numbers, hand) {
  // 왼손, 오른손 위치를 초기값을 0의 위치인 [3, 1]로 설정했는데
  // 숫자간의 거리를 제대로 구하지 못해 8번, 13번 테스트케이스가 통과하지 못하는 이슈가 있었다!
  let curLeft = [3, 0];
  let curRight = [3, 2];
  let answer = '';

  // 1. 키패드를 다음과 같이 바꿔 계산합니다.
  const arr = numbers.map((v) => (v === 0 ? 9 : v - 1));

  // 2. 배열을 순회하며 어떤 손을 쓸지에 대한 값을 저장합니다.
  arr.forEach((num) => {
    const numCoord = num === 9 ? [3, 1] : [Number.parseInt(num / 3), num % 3];
    // rule 1. 9를 제외한 숫자의 3으로 나눈 나머지가 0이면 L 반환
    if (num !== 9 && num % 3 === 0) {
      curLeft = numCoord;
      answer += 'L';
      return;
    }

    // rule 2. 9를 제외한 숫자의 3으로 나눈 나머지가 2이면 R 반환
    if (num !== 9 && num % 3 === 2) {
      curRight = numCoord;
      answer += 'R';
      return;
    }

    // rule 3. 나머지 숫자는 거리를 비교한다.
    const diffNumAndL = getDistance(numCoord, curLeft);
    const diffNumAndR = getDistance(numCoord, curRight);

    // rule 3 - 1. 왼손에서 출발한 거리, 오른손에서 출발한 거리가 같을 경우 주로 쓰는 손에 따라 결정한다.
    if (diffNumAndL === diffNumAndR) {
      return hand === 'left'
        ? ((curLeft = numCoord), (answer += 'L'))
        : ((curRight = numCoord), (answer += 'R'));
    }

    // rule 3 - 2. 왼손에서 출발한 거리, 오른손에서 출발한 거리가 다를 경우 가까운 손으로 결정한다.
    return diffNumAndL < diffNumAndR
      ? ((curLeft = numCoord), (answer += 'L'))
      : ((curRight = numCoord), (answer += 'R'));
  });

  return answer;
}

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
console.log(solution([4, 8, 2], 'right'));
