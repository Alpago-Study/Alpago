// [문제 이름]
// : 문자열 내 p와 y의 개수

// [문제 설명]
// : 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
//  예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  // 소문자로 변환
  s = s.toLowerCase();

  // 반복분을 돌며 p일떄와 y일때 +1을 해주고 최종적으로 p갯수와 n갯수를 확인할거임
  let pNum = 0;
  let yNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p') {
      pNum = pNum + 1;
    } else if (s[i] === 'y') {
      yNum = yNum + 1;
    }
  }
  // p갯수와 y갯수 비교
  if (pNum === yNum) {
    return true;
  }
  return false;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
