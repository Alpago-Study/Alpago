// [문제 이름]
// : 단어 공부

// [문제 설명]
// : 알파벳 대소문자로 된 단어가 주어지면,
//   이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
//   단, 대문자와 소문자를 구분하지 않는다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1157

function solution(str) {
  // 1. 전달받은 str을 모두 대문자로 치환한다.
  const STR = str.toUpperCase();

  // variables - STR에서 가장 많이 등장한 알파벳의 횟수를 저장할 변수
  let maxCnt = 1;
  // variables - 정답을 저장할 변수
  let answer = '';
  // variables - { key: STR에서 등장하는 알파벳, value: 해당 알파벳이 등장한 횟수 }를 저장할 변수
  const temp = {};

  // 2. STR 문자를 반복문을 통해 돌며 temp 변수와 maxCnt 변수를 적당히 재할당한다.
  for (let i = 0; i < STR.length; i++) {
    const alphabet = STR[i];

    if (!temp[alphabet]) {
      // 2 - 1. temp 키 중에 해당 알파벳이 없을 경우
      //        - 알파벳의 첫 등장이므로 1을 할당
      //        - 예) M이 처음 등장할 경우 temp = { M: 1 }
      temp[alphabet] = 1;
    } else {
      // 2 - 2. temp 키 중에 해당 알파벳이 있을 경우
      //        - 알파벳이 등장한 횟수가 이미 저장되어 있기 때문에 그 값에 1을 더함
      //        - 예) M이 두번째 등장할 경우 temp = { M: 2 }
      temp[alphabet] = temp[alphabet] + 1;

      // 2 - 2 - 1. 해당 알파벳이 등장한 횟수가 maxCnt보다 클 경우 maxCnt에 그 횟수를 저장
      //            예) maxCnt이 초기값인 1인데 key M의 value는 2이므로 maxCnt에 2 재할당
      if (maxCnt < temp[alphabet]) {
        maxCnt = temp[alphabet];
      }
    }
  }

  // 3. temp 객체를 순회하면서 최대로 등장한 알파벳을 찾는다.
  for (let key in temp) {
    if (temp[key] === maxCnt) {
      // 3 - 1. 하지만 최대로 등장한 알파벳이 여러개일 경우 ?를 저장한다.
      answer === '' ? (answer = key) : (answer = '?');
    }
  }

  return answer;
}

console.log(solution('Mississipi')); // ?
console.log(solution('zZa')); // Z
console.log(solution('Z')); // Z
console.log(solution('baaa')); // A
