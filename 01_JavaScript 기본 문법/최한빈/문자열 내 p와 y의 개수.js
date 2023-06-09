// [문제 이름]
// : 문자열 내 p와 y의 개수

// [문제 설명]
// : 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면
// True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는
// 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// [제한 사항]
//  * 문자열 s의 길이 : 50 이하의 자연수
//  * 문자열 s는 알파벳으로만 이루어져 있습니다.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  // 대소문자 구분 x
  s = s.toLowerCase();

  // 특정 문자 개수 세는 법 = 특정 문자로 split한 길이 - 1
  const p = s.split('p').length - 1;
  const y = s.split('y').length - 1;
  return p === y;
}
console.log(solution('pPoooyY'));
console.log(solution('Pyy'));

// 알게 된 내용
// split에 특정 문자를 쉼표로 생각하면 편하다. ex) 1p2p3.split('p') => 1,2,3 => [1,2,3]
console.log('ppp'.split('p')); // ppp => ,,, => ["", "", "", ""]
