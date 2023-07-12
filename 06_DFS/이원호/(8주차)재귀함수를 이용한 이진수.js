// [문제 이름]
// : 재귀함수를 이용한 이진수

// [문제 설명]
// : 재귀함수를 이용한 십진수를 이진수로 변환하기

// [문제 링크]
// : https://file.notion.so/f/s/cdcb6d0b-d452-43e9-9485-f26e3fa7a690/Untitled.png?id=ac7edf49-3a14-405b-b4cd-e5c7623f4143&table=block&spaceId=5893e798-2384-4f46-9548-637dc7a31a9f&expirationTimestamp=1688925600000&signature=mo7hQ0--pf55D70M1RBeg9pUeBFH0nR601-9GeXBcHk&downloadName=Untitled.png

// 2로 나누어서 나누어떨어지면 0 , 안나눠지면 1 반복
function solution(number) {
  // 베이스 케이스(탈출조건)
  if (number === 0 || number === 1) {
    return number;
  } else {
    // 리컬시브 케이스
    //몫
    const quotient = Math.floor(number / 2);
    //나머지
    const remainder = number % 2;
    // 계산을 하는게 아닌 뒤에 붙혀줘야하기 때문에 숫자를 문자열로 변환해줌
    return solution(quotient) + remainder.toString();
  }
}

console.log(solution(11));
console.log(solution(20));
console.log(solution(15644));
