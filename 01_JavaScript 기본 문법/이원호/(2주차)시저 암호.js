// [문제 이름]
// : 시저 암호

// [문제 설명]
// : 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
//  "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]; //26개

  // 일단 문자열을 소문자로 바꾸기
  let s_lower = s.toLowerCase();

  // s문자열문 대문자인 부분의 인덱스를 index_upper 변수에 저장
  let index_upper = [];

  // 일단 문자열모두를 소문자로 바꾸고 대문자의 인덱스는 따로 저장해서 기억해두고
  // 나중에 다시 대문자로 바꿔줄거임
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s_lower[i]) {
      index_upper.push(i);
    }
  }

  // s문자열의 알파벳 순서를 담은 인덱스를 배열에 담을거임
  let s_converted = [];

  for (let i = 0; i < s_lower.length; i++) {
    if (s_lower[i] === ' ') {
      s_converted[i] = ' ';
    } else if (alphabet.indexOf(s_lower[i]) >= 0) {
      s_converted[i] = alphabet.indexOf(s_lower[i]);
    }
  }
  // 여기까지 하면
  // ex) s = "a b z"
  // s_converted = [0,' ', 1, ' ',25]
  // 스페이스면 스페이스 반환, 숫자는 알파벳 인덱스를 통해 알파벳 반환
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s_converted[i] === ' ') {
      result += ' ';
    } else if (s_converted[i] >= 0) {
      const newIndex = (s_converted[i] + n) % alphabet.length; // 순환해야하기 때문에 알파벳 길이로 나눠줘야함
      result += alphabet[newIndex];
    }
  }

  // result 결과는 다 소문자로 담김
  // index_upper 를 활용해서 대문자였던 얘를 대문자로 변환

  for (let i = 0; i < index_upper.length; i++) {
    if (index_upper[i] >= 0) {
      // 대문자 인덱스 전까지 자르고, 대문자로 변환하고, 대문자 변환 이후 값 그대로 넣기
      result =
        result.substring(0, index_upper[i]) +
        result[index_upper[i]].toUpperCase() +
        result.substring(index_upper[i] + 1);
    }
  }
  return result;
}

console.log(solution('AB', 1));
console.log(solution('a B z', 4));
