// [문제 이름]
// : 단어 공부

// [문제 설명]
// : 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1157

function solution(str) {
  // 대소문자 구분을 안하기 때문에 최종 return 값을 생각하여 대문자로 변환
  str = str.toUpperCase();

  // 알파벳과 알파벳 수를 담을 객체 선언
  let result = {};
  for (let i = 0; i < str.length; i++) {
    //result 객체에 str[i]에 해당하는 알파벳이 있으면 +1
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  // 객체의 value max값 추출을 위한 함수
  const max = Math.max(...Object.values(result));
  let maxCnt = 0;

  for (let i in result) {
    if (result[i] === max) {
      maxCnt++;
    }
  }
  if (maxCnt === 2) {
    return '?';
  } else {
    for (let i in result) {
      if (result[i] === max) {
        return i;
      }
    }
  }
}

console.log(solution('Mississipi'));
console.log(solution('zZa'));
console.log(solution('z'));
console.log(solution('baaa'));
