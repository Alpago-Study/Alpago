// [문제 이름]
// : 집합

// [문제 설명]
// : 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.

// add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
// remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
// check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
// toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
// all: S를 {1, 2, ..., 20} 으로 바꾼다.
// empty: S를 공집합으로 바꾼다.

// [문제 링크]
// : https://www.acmicpc.net/problem/11723

function solution(str) {
  // 알파벳을 대소문자 구분 없이 하기 위해 대문자로 변경
  str = str.toUpperCase();

  // 횟수 담을 객체 선언
  const obj = {};

  // 최대 횟수를 저장할 변수와 그 알파벳을 저장할 변수
  let max = 0;
  let answer;

  for (i of str) {
    // 만약 알파벳이 처음 등장하면 1을 초기값으로 설정
    if (obj[i] === undefined) obj[i] = 1;
    // 아니라면 +1
    else obj[i] += 1;
    // max값도 계속해서 최신화해준다.
    if (max < obj[i]) {
      max = obj[i];
      answer = i;
    } else if (max === obj[i]) answer = '?';
  }
  return answer;
}

console.log(solution('mississipi'));
console.log(solution('zZa'));
console.log(solution('z'));
console.log(solution('baaa'));
