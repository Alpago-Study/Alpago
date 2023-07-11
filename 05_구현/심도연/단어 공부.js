// [문제 이름]
// : 단어 공부

// [문제 설명]
// : 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1157

function word_study(str) {
  // 변수는 지역 변수가 전역 변수로 사용할거라 판단되는 변수들은 최상위에 올려두자...
  let obj = {};
  let letter = str.toUpperCase();
  let answer = '';
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    if (!obj[letter[i]]) {
      obj[letter[i]] = 1;
    } else {
      obj[letter[i]]++;
    }
  }
  //   console.log(obj);

  for (let l in obj) {
    if (max < obj[l]) {
      max = obj[l];
      answer = l;
    } else if (max === obj[l]) {
      answer = '?';
    }
  }
  console.log(answer);
}

let str1 = 'Mississipi';
let str2 = 'zZa';
let str3 = 'z';
let str4 = 'baaa';

console.log(word_study(str1));
console.log(word_study(str2));
console.log(word_study(str3));
console.log(word_study(str4));
