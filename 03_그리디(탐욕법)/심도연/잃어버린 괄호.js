// [문제 이름]
// : 잃어버린 괄호

// [문제 설명]
// : 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
//   그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
//   괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1541

const lost_brackets = (question) => {
  const step1 = question.split('-').map((cur) => cur.split('+'));
  console.log(step1);

  const step2 = step1.map((cur) => cur.reduce((acc, cur) => (acc += +cur), 0));
  console.log(step2);

  let answer = step2[0];
  for (let i = 1; i < step2.length; i++) {
    answer -= step2[i];
  }

  console.log(answer);
};

// function solution(expression) {
//   let exp = expression.split('-');
//   console.log(29, exp);

//   let answer = exp[0].split("+")

//   for (let i = 1; i < exp.length; i++) {
//     console.log(35, exp[i]);

//     if (exp[i].includes('+')) {
//       let numbers = exp[i].split('+');
//       answer -= +numbers[0] + +numbers[1];

//       console.log(41, numbers);
//       console.log(42, answer);
//     } else {
//       answer -= exp[i];

//       console.log(46, answer);
//     }
//   }
//   return answer;
// }

console.log(solution('10+20-30+40-50'));
