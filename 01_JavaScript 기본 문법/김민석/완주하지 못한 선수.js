// [문제 이름]
// : 완주하지 못한 선수

// [문제 설명]
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42576

const solution = (participant, completion) => {
  const hash = {};
  let answer = '';

  participant.forEach(
    (person) => (hash[person] = hash[person] ? hash[person] + 1 : 1)
  );

  completion.forEach((person) => (hash[person] -= 1));

  Object.entries(hash).forEach(([person, count]) => {
    if (count >= 1) answer = person;
  });

  return answer;

  // [정렬을 이용한 풀이]
  // participant.sort();
  // completion.sort();

  // for (let i = 0; i < participant.length; i += 1) {
  //   if (participant[i] !== completion[i]) return participant[i];
  // }
};

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
