// [문제 이름]
// : 잃어버린 괄호

// [문제 설명]
// : 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
//   그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
//   괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1541

const lost_brackets = (question) => {
  const step1 = question.split('-');
  console.log(step1);

  const step2 = step1.map((cur) => cur.split('+'));
  console.log(step2);

  const step3 = step2.map((cur) => cur.reduce((acc, cur) => (acc += +cur), 0));
  console.log(step3);

  let answer = step3[0];
  for (let i = 1; i < step3.length; i++) {
    answer -= step3[i];
  }

  console.log(answer);
};

console.log(lost_brackets('10+20-30+40-50'));
