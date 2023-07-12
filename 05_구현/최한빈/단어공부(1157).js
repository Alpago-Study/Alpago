// [문제 이름]
// : 단어 공부

// [문제 설명]
// : 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1157

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
