// [문제 이름]
// : 완주하지 못한 선수

// [문제 설명]
// : 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는
// 모든 선수가 마라톤을 완주하였습니다. 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을
// return 하도록 solution 함수를 작성해주세요.

// [제한 사항]
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  // array.filetr 쓰니 효율성 테스트를 통과못함...
  // 예전에 indexOf 성능 안좋아서 찾아본 map 자료구조가 생각남...

  // 1. array데이터를 map구조로 변환 {선수: 출전횟수}
  let pMap = new Map();
  for (let i of participant) {
    if (pMap.has(i)) pMap.set(i, pMap.get(i) + 1);
    else pMap.set(i, 1);
  }
  // 2. 완주자도 map구조로 변환 {선수: 완주}
  let cMap = new Map();
  for (let i of completion) {
    if (cMap.has(i)) cMap.set(i, cMap.get(i) + 1);
    else cMap.set(i, 1);
  }

  // 3. 완주한 선수들의 수 만큼 출전 선수 빼줌
  for (let [key, value] of cMap) {
    pMap.set(key, pMap.get(key) - value);
  }

  // 4. 선수들의 출전횟수 - 완주횟수 가 0이 아닌사람은 완주 못한사람.
  for (let [key, value] of pMap) {
    if (value !== 0) return key;
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);

/*
갑자기 궁금해서 찾아본 map vs object
1. map은 어떠한 값도 key로 가질 수 있음. (object는 string과 symbol만 허용)
2. map은 삽입한 순서대로 key가 정렬됨 -> 순서 보장 -> 따라서 iterable함.
3. key-value 삽입, 삭제 시 더 높은 성능
4. map은 JSON의 parsing이나 stringify 못함

결론 -> 둘이 구조는 비슷하지만 map이 자료 저장할때 효율적인것 같음. 그외는 그냥 object쓰자.
*/
