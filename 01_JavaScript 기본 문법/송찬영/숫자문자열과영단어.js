function solution(s) {
  function solution(s) {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numObj = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };
    let result = '';
    let temp = '';
    for (let i = 0; i < s.length; i++) {
      temp += s[i];
      if (numObj[temp] !== undefined) {
        result += temp;
      }
    }
  }
}
