// [문제 이름]
// : 시저 암호

// [문제 설명]
// : 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
//  "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // 알파벳 문자열
  const alphabetLength = alphabet.length;

  let result = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === ' ') {
      // 공백 문자인 경우 그대로 결과에 추가
      result += ' ';
      continue; // 다음 반복으로 건너뛰기
    }

    // 대문자였던 s[i] 파악을 위해 true / false로 저장해둠
    const isUpperCase = char !== char.toLowerCase();

    // s[i] 일단 소문자로 바꿔주기
    char = char.toLowerCase();

    // s[i]의 알파벳 순서를 currentIndex에 저장 ex)"a B z" => "0 2 24"
    const currentIndex = alphabet.indexOf(char);

    if (currentIndex >= 0) {
      const newIndex = (currentIndex + n) % alphabetLength; // 순환을 위해 알파벳 길이로 나눈 나머지값 ex) 24+4 = 28 % 25의 나머지 3 => d
      let newChar = alphabet[newIndex];

      if (isUpperCase) {
        // 원래 대문자였던 경우 대문자로 변환하여 결과에 추가
        newChar = newChar.toUpperCase();
      }

      result += newChar;
    }
  }

  return result;
}

console.log(solution('AB', 1));
console.log(solution('a B z', 4));
