// [문제 이름]
// : 합이 같은 부분 집합

// [문제 설명]
// : N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분 집합으로 나누었을 때,
//   두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 "YES"를 출력하고 그렇지 않으면 "NO"를 출력하는 프로그램을 작성하세요.

// [문제 링크]
// :

/**
 * 부분집합 구하기 풀이
 *
 * 초기값
 * arr = ['1', '3', '5', '6', '7', '10']
 * combinationArr[0] = [] => 0개씩 뽑았을 때의 경우의 수
 * combinationArr[1] = ['1', '3', '5', '6', '7', '10'] => 1개씩만 뽑았을 때의 경우
 *
 * 이미 1개씩 뽑았을 경우의 부분집합은 combinationArr에 담았으므로
 * DFS 함수는 2부터 시작 DFS(2)
 *
 * 1, 3, 5, 6, 7, 10 가 있을 때 2개를 뽑아 조합을 만드는 방법
 * 기준을 정하고 -> 기준의 마지막 숫자보다 큰 숫자를 붙인다.
 * * 기준이란 n - 1개를 뽑아 조합을 만드는 방법의 경우 하나하나를 의미한다.
 *
 * 기준: '1') '1 3', '1 5', '1 6', '1 7', '1 10'
 * 기준: '3') '3 5', '3 6', '3 7', '3 10'
 * 기준: '5') '5 6', '5 7', '5 10'
 * 기준: '6') '6 7', '6 10'
 * 기준: '7') '7 10'
 * 기준: '10') X
 *
 * 1, 3, 5, 6, 7, 10 가 있을 때 3개를 뽑아 조합을 만드는 방법
 * 기준을 정하고 -> 기준의 마지막 숫자보다보다 큰 숫자를 붙인다.
 *
 * 기준: 1 3) '1 3 5', '1 3 6', '1 3 7' '1 3 10'
 * 기준: 1 5) '1 3 6', '1 3 7', '1 3 10'
 * 기준: 1 6) '1 6 7', '1 6 10'
 * 기준: 1 7) '1 7 10'
 * 기준: 1 10) X
 * 기준: 3 5) '3 5 6', '3 5 7', '3 5 10'
 * 기준: 3 6) '3 6 7', '3 6 10'
 * 기준: 3 7) '3 7 10'
 * 기준: 3 10) X
 * 기준: 5 6) '5 6 7', '5 7 10'
 * 기준: 5 7) '5 7 10'
 * 기준: 5 10) X
 * 기준: 6 7) '6 7 10'
 * 기준: 6 10) X
 * 기준: 7 10)  X
 *
 * @param {number} N
 * @returns 1부터 N까지 나올 수 있는 모든 부분집합
 */

function solution(N, arr) {
  const arrStr = arr.sort((a, b) => a - b).map((v) => v.toString());
  let combinationArr = [[], arrStr];
  let result = 'NO';

  // 각 원소에 중복이 없기에 원소의 수가 1 또는 2일 경우 합이 같은 부분집합이 존재할 수 없음
  if (N === 1 || N === 2) {
    return result;
  }

  const DFS = (num) => {
    // 탈출조건: num이 N / 2 + 1과 같을 때
    // 1, 3, 5, 6와 7, 10 부분집합으로 나눈 경우와 7, 10와 1, 3, 5, 6 부분집합으로 나눈 경우는
    // 합이 같은지 여부를 따질 때 하나만 비교하면 되기 때문
    if (num === Math.floor(N / 2) + 1) {
      return;
    }

    // variables - criteria: 부분집합을 만들 때 기준이 되는 배열
    // num = 2) criteria = combinationArr[1] = ['1', '3', '5', '6', '7', '10']
    const criteria = combinationArr[num - 1];

    // variables - temp: num개씩 뽑았을 때의 경우를 저장할 배열
    let temp = [];

    // criteria 배열을 for문으로 숫회
    for (let i = 0; i < criteria.length; i++) {
      // variables - j: criteria 요소의 마지막 숫자의 인덱스보다 큰 숫자
      let lastNum = criteria[i].split(' ')[num - 2];
      let j = arrStr.indexOf(lastNum) + 1;

      for (j; j < arrStr.length; j++) {
        if (arrStr[j]) {
          const addedEl = criteria[i] + ' ' + arrStr[j];
          // 1. 합 구하기
          const addedElArr = addedEl.split(' ').map((v) => parseInt(v));
          const addedElArrSum = addedElArr.reduce((acc, cur) => acc + cur);
          const restArrSum = arr
            .filter((v) => !addedElArr.includes(v))
            .reduce((acc, cur) => acc + cur);

          // 1 - 1. 부분배열합과 나머지 부분 배열합이 같으면 끝내버리기
          if (addedElArrSum === restArrSum) {
            return (result = 'YES');
          }

          // 2. 요소 temp에 푸시하기
          temp.push(addedEl);
        }
      }
    }

    combinationArr.push(temp);
    DFS(num + 1);
  };

  DFS(2);

  return result;
}

console.log(solution(6, [1, 3, 5, 6, 7, 10]));
