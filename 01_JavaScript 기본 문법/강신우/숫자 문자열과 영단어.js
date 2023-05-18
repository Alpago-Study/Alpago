// 문제 설명

// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

//임의의 문자열 s를 인자로 받는다
//문자열 s 중에 일부 자릿수 문자를 숫자로 변환한다 어떻게??
//배열 생성후 배열과 맞는 문자열을 찾고 배열의 인덱스를 찾는다
//문자열을 모두 숫자로 바꾼후 원래의 숫자를 리턴
let stringToNum = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};
function solution(s) {
  var answer = 0;
  if (s.includes(stringToNum.value)) return answer;
}
