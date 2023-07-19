// [문제 이름]
// : 합이 같은 부분집합

// [문제 설명]
// : N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 "YES"를 출력하고, 그렇지 않으면 "NO"를 출력하는 프로그램을 작성하세요.
// 예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10}으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.

const solution = (arr) => {
  let answer = 'NO'; // 반환할 flag
  const included = Array.from({ length: arr.length }, () => false); // 부분집합 포함 여부를 저장할 배열

  // 1. DFS 함수 선언
  const DFS = (value) => {
    // 2-1. 재귀 탈출 조건 (1)
    // : flag가 YES로 바뀐 경우 더 이상 재귀를 추가 호출할 필요가 없으므로 함수 종료
    if (answer === 'YES') return;

    // 2-2. 재귀 탈출 조건 (2)
    // : 전달 받은 arr의 길이 끝까지 탐색한 경우, 즉 더 이상 탐색할 리프 노드가 없는 경우
    if (value === arr.length) {
      // 3. 부분집합 포함 여부를 저장할 배열을 토대로 true인 경우와 false인 경우 각각의 합 구하기
      // ex) arr : [1, 2, 3, 4, 5, 6]
      //     included: [true, true, true, false, false, false]
      //     sumOfFirstSubset = 1 + 2 + 3 = 6
      //     sumOfSecondSubset = 4 + 5 + 6 = 15
      const sumOfFirstSubset = arr
        .filter((_, index) => included[index])
        .reduce((acc, cur) => acc + cur, 0);
      const sumOfSecondSubset = arr
        .filter((_, index) => !included[index])
        .reduce((acc, cur) => acc + cur, 0);

      // 4. 만약 생성한 부분집합 두 개의 합이 같다면 flag를 YES로 변경한 후 재귀 탈출
      if (sumOfFirstSubset === sumOfSecondSubset) {
        answer = 'YES';
        return;
      }
    } else {
      // 5. 재귀 호출 로직
      // : 리프 노드를 탐색할 때 1을 더해주는 것은 동일하지만, 부분집합에 포함할지 여부를 분기 처리
      included[value] = true;
      DFS(value + 1);
      included[value] = false;
      DFS(value + 1);
    }
  };

  // 6. 배열의 index를 기준으로 DFS 함수 호출
  DFS(0);

  // 7. flag 반환
  return answer;
};

console.log(solution(3, 4));
console.log(solution(27, 19));
