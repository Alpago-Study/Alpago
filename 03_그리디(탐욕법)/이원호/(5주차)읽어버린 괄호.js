// [문제 이름]
// : 읽어버린 괄호

// [문제 설명]
// : 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
// 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
//  괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1541

function solution(str) {
  // - 기호 나오고 다음 - 기호가 나올때 까지 더해주면 최소값
  // - 기준으로 split
  let strConverted = str.split('-');
  let result = [];

  // ex) strConverted = ['55','50+40']
  // + 기준으로 다시 나눠주고, 나눠준 값이 문자열이기때문에 숫자로 바꿔줘야함
  // 1. ['55','50+40'] => 2. [['55'], ['50', '40']] => 3. [[55], [50, 40]]
  for (let i = 0; i < strConverted.length; i++) {
    strConverted[i] = strConverted[i].split('+').map((el) => {
      return Number(el);
    });
    // 4. [[55], [50, 40]] => [[55], [90]]
    let sum = strConverted[i].reduce((acc, cur) => acc + cur);
    // 더한값을 result 배열에 push
    result.push(sum);
  }

  // [55, 90] = > 55 - 90
  return result.reduce((acc, cur) => {
    return acc - cur;
  });
}

console.log(solution('55-50+40'));
console.log(solution('10+20+30+40'));
console.log(solution('55-50+40-30+90-10-20+30'));
