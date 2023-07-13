// [문제 이름]
// : 단어 공부

// [문제 설명]
// : 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1157

const solution = (word) => {
  const wordCounts = {}; // 문자별 등장 횟수를 저장하기 위한 해시 생성

  // 1. 대소문자를 구분하지 않으므로 소문자로 변환
  word = word.toLowerCase();

  // 2. 단어의 각 문자를 순회
  for (const char of word) {
    // 3. 만약 해시에 문자가 이미 존재한다면 값에 1을 더해주고, 존재하지 않는다면 1로 초기화
    wordCounts[char] ? (wordCounts[char] += 1) : (wordCounts[char] = 1);
  }

  // 4. 문자 등장 횟수를 내림차순으로 정렬
  const result = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

  // 5. 만약 단어가 2글자 이상이고, 최대 등장 횟수가 중복된다면 ? 반환
  if (result.length > 1 && result[0][1] === result[1][1]) return '?';

  // 6. 최대 등장한 단어를 대문자로 변환하여 반환
  return result[0][0].toUpperCase();
};

console.log(solution('Mississipi'));
console.log(solution('zZa'));
console.log(solution('z'));
console.log(solution('baaa'));
