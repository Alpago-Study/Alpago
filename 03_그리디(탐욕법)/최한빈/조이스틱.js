// [문제 이름]
// : 조이스틱

// [문제 설명]
// 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
// 예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

// - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42860

function findLeftRight(name) {
  let cnt = 0;
  let max = -1;
  let index = -1;
  let flag = false;
  for (let i = 0; i < name.length; i++) {
    if (!flag) {
      if (name[i] === 'A') {
        flag = true;
        cnt = 1;
      }
    } else {
      if (name[i] === 'A') {
        cnt += 1;
      } else {
        if (max < cnt) {
          index = i - cnt;
          max = cnt;
        }
        flag = false;
      }
    }
  }
  if (cnt > max) {
    max = cnt;
    index = name.length - cnt;
  }
  let l = index;
  let r = name.length - l - max;

  return [l, r];
}

function solution(name) {
  var answer = 0;
  const alphabetDict = new Map();
  // 알파벳별 이동횟수 담은 객체
  for (let i = 0; i < 26; i++) {
    if (i <= 12) alphabetDict.set(String.fromCharCode(65 + i), i);
    else alphabetDict.set(String.fromCharCode(65 + i), 25 - i + 1);
  }
  name = name.split('');
  // 0. a가 없으면 각 가중치를 더해주고 끝
  if (!name.includes('A')) {
    for (i of name) {
      // 현재 조이스틱이 위아래로 움직이는 횟수
      answer += alphabetDict.get(i);
      // 조이스틱을 오른쪽으로 1번 이동하는 횟수
      answer++;
    }
    // 마지막은 이동할 필요가 없으므로 -1
    return answer - 1;
  }

  // 1. a가 최대한 많이 뭉쳐있는 뭉티기를 찾은 후 뭉티기를 기준으로 남은 양 옆에 길이를 구함.
  // CCAAAXYZ => left,right = 2,3
  const [l, r] = findLeftRight(name);
  // 2. 왼쪽과 오른쪽의 길이에 따라서 이동해야하는 경우가 달라진다.
  // i) 뭉티기를 기준으로 왼쪽과 오른쪽 길이가 같으면 첫번째 커서에서 오른쪽으로 조작(2번째로)
  // ii) 왼쪽이 더 길면 첫번째 커서에서 왼쪽으로 조작(맨 끝으로)
  // iii) 오른쪽이 더 길면 첫번째 커서에서 오른쪽으로 조작 (2번째로)

  // 왼쪽이 더 긴 경우
  if (l > r) {
    // 오른쪽에서 조이스틱을 좌우로 이동하는 횟수
    answer += r * 2;
    // 오른쪽에서 조이스틱을 상하로 이동하는 횟수
    for (let i = name.length - r; i < name.length; i++) {
      answer += alphabetDict.get(name[i]);
    }
    // 왼쪽에서 조이스틱을 좌우로 이동하는 횟수
    answer += l - 1;
    for (let i = 0; i < l; i++) {
      answer += alphabetDict.get(name[i]);
    }
  }
  // 오른쪽이 더 길거나 같은 경우
  else {
    // 왼쪽에서 조이스틱을 좌우로 이동하는 횟수
    answer += 2 * l - 1;
    // 왼쪽에서 조이스틱을 상하로 이동하는 횟수
    for (let i = 0; i < l; i++) {
      answer += alphabetDict.get(name[i]);
    }
    // 오른쪽에서 조이스틱을 좌우로 이동하는 횟수
    answer += r - 1;
    // 오른쪽에서 조이스틱을 상하로 이동하는 횟수
    for (let i = name.length - r; i < name.length; i++) {
      answer += alphabetDict.get(name[i]);
    }
  }
  return answer;
}
// 실패 테스트 케이스: 5,12,16,17
console.log(solution('JZAAZ'));
console.log(solution('JEROEN'));
console.log(solution('JAN'));
console.log(solution('ZAAZZ'));
