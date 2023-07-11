// [문제 이름]
// : 재귀함수를 이용한 이진수 출력

// [문제 설명]
// : 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용해서 출력해야 합니다

// const print_binary_loop = (n) => {
//   // 주어진 n이 1이 될때 까지 2로 나누어 나머지를 배열에 담고 reverse 시키고 join
//   let answer = [];
//   //   console.log(N);

//   while (n !== 1) {
//     if (n % 2 === 1) {
//       answer.push("1");
//     } else if (n % 2 === 0) {
//       answer.push("0");
//     }

//     n = parseInt(n / 2);
//   }
//   answer.push("1");
//   console.log(answer.reverse().join(""));
// };

// console.log(print_binary_loop(13));

const print_binary_recursive = (n) => {
  // 이진수 구하기
  // : 주어진 10진수를 2로 나누면서 나오는 나머지를 가지고 이진수를 구할 수 있다

  // 11 % 2 === 1
  // 5 % 2 === 1
  // 2 % 2 === 0
  // 1 % 2 === 1
  // => 거꾸로 하면 11(10진수) -> 1011(2진수)

  // 이진수를 담을 배열
  let answer = [];

  // base case : n 을 더이상 나눌 수 없는 경우
  if (n === 1) {
    answer.push('1');
    return answer;
  }

  // recursive case : n 을 나눌 수 있는 경우
  if (n % 2 === 1) {
    answer.push('1');
  } else if (n % 2 === 0) {
    answer.push('0');
  }

  // 1. 아래 return은 이진수를 담은 배열(answer)를 하나의 배열에 합쳐주고(concat), 합친 배열을 역순으로 뒤집어 문자열로 출력하기 위한 코드
  // 2. 다시 함수를 호출할 땐 n이 2로 나눈 값이면서 소수가 아니여야 하기 때문에 n = parseInt(n / 2)를 해준다
  return answer
    .concat(print_binary_recursive((n = parseInt(n / 2))))
    .reverse()
    .join('');
};

console.log(print_binary_recursive(11));
console.log(print_binary_recursive(13));
