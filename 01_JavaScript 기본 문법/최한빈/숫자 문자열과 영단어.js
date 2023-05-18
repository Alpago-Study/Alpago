// [문제 이름]
// : 숫자 문자열과 영단어

// [문제 설명]
// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를
// 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"

// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로
// 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let answer = '';
  const numDict = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };
  let word = '';

  // 한글자씩 비교
  for (let i of s) {
    // 숫자(NaN이 아니면) 바로 추가
    if (!isNaN(i)) {
      answer += i;
      // 나머지 연산은 비교할 필요가 없으니 조금이라도 연산 줄이기 위해 continue
      continue;
    }
    // 숫자가 아니라면 한 글자씩 word 변수에 할당
    else {
      word += i;
    }
    // word가 numDict의 key로 존재하는지 확인
    if (numDict.hasOwnProperty(word)) {
      // word가 numDict의 key라면 해당하는 value를 answer에 추가하고 word는 다시 초기화
      answer += numDict[word];
      word = '';
    }
  }
  return Number(answer);
}
console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
