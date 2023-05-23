//문제 이름 : 시저암호

/*문제설명 : 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
"z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요. */
function solution(s, n) {
  let arrS = s.split('');
  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] === ' ') continue;
    arrS[i] = UTF_16(arrS[i]);
    if (arrS[i] < 91 && arrS[i] + n >= 91) {
      arrS[i] += n - 26;
    } else if (arrS[i] < 91) arrS[i] += n;
    if (arrS[i] < 123 && arrS[i] + n >= 123) {
      arrS[i] += n - 26;
    } else if (arrS[i] < 123 && arrS[i] > 96) arrS[i] += n;

    arrS[i] = toStr(arrS[i]);
  }
  return arrS.join('');
}

function UTF_16(str) {
  return str.charCodeAt();
}
function toStr(num) {
  return String.fromCharCode(num);
}
console.log(solution('A C B z'), 5);
console.log(solution('A cdBxz'), 3);
