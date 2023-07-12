// [문제 이름]
// : 재귀함수를 이용한 이진수 출력

// [문제 설명]
// : 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용해서 출력해야 합니다.

const solution = (number) => {
  // 1. 변환한 2진수를 저장할 변수 result
  let result = '';

  // 2. DFS 함수 선언
  const DFS = (value) => {
    // 2-1. 만약 value가 0이면 재귀 탈출
    if (value === 0) return;

    // 2-2. 2로 나눈 값을 인수로 전달하여 재귀 호출
    DFS(Math.floor(value / 2));
    // 2-3. 호출한 재귀 함수가 종료되는 시점에 결과 값에 2로 나눈 나머지 더하기
    result += value % 2;
  };

  // 3. DFS 함수 호출
  DFS(number);

  // 4. 변환한 2진수 반환
  return result;
};

console.log(solution(11));
