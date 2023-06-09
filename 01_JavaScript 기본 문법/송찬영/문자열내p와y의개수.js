function solution(s) {
  let countP = 0;
  let countY = 0;
  let s_low = s.toLowerCase(); // 소문자로 전부 변경
  for (let i = 0; i < s_low.length; i++) {
    if (s_low[i] === 'p') {
      // p가 소문자로 변경한 값과 같으면 +1
      countP += 1;
    } else if (s_low[i] === 'y') {
      // y가 소문자로 변경한 값과 같으면 +1
      countY += 1;
    }
  }
  return countP === countY ? true : false;
}
