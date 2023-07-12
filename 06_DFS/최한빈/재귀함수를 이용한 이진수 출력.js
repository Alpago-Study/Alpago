// [문제 이름]
// : 재귀함수를 이용한 이진수 출력

// [문제 설명]
// : 생략

// [문제 링크]
// : 생략

function printBinaryNumber(num) {
  // 2진수 변환 -> 수를 2로 나눈 후 나머지는 맨 뒤, 몫은 다시 2로 나눈다.(수가 1이 될 떄까지)
  if (num === 1) return '1';
  return printBinaryNumber(parseInt(num / 2)) + ('' + (num % 2));
}
console.log(printBinaryNumber(11));
