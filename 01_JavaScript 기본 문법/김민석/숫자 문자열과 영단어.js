// [문제 이름]
// : 숫자 문자열과 영단어

// [문제 설명]
// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 1. 각 영단어에 대응하는 숫자를 '영단어: 숫자' 형태의 객체로 생성
const NUMBER_LIST = {
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

const solution = (str) => {
  // 5. 반환 값이 숫자 타입이어야 하므로 형 변환
  return Number(
    // 2. 영단어(키)로 이루어진 배열 생성
    Object.keys(NUMBER_LIST).reduce(
      // 3. reduce로 순회, 초기값은 인수로 전달받는 문자열
      (newStr, numberKey) =>
        // 4. 순회할 때마다 문자열에 해당하는 모든 영단어(키)를 숫자(값)으로 변경하여 누적값에 저장
        (newStr = newStr.replaceAll(numberKey, NUMBER_LIST[numberKey])),
      str
    )
  );
};

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
