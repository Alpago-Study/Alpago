// [문제 이름]
// : 합이 같은 부붅ㅂ합
// [문제 설명]
// : 문제 링크로 대체

// [문제 링크]
// : https://file.notion.so/f/s/ce78df10-bf62-4dc3-9326-600e884cb33e/Untitled.png?id=7a4cdc65-b902-40ad-9d83-07f2f48c1bc6&table=block&spaceId=5893e798-2384-4f46-9548-637dc7a31a9f&expirationTimestamp=1689789600000&signature=i8Sh_y4Xl5p2fKJ_2NyN1kVAkt3gDPoZGKawKNppQqY&downloadName=Untitled.png

function solution(n) {
  // 배열의 합을 저장해둔 변수 선언
  const totalSum = n.reduce((acc, cur) => acc + cur, 0);

  // 총합이 홀수인경우 무조건 no
  if (totalSum % 2 !== 0) {
    return 'NO';
  }

  // totalSum을 2로 나눈값이 부분집합 2덩어리의 각자의 합이 되어야함
  const targetSum = totalSum / 2;

  function dfs(index, currentSum) {
    if (currentSum === targetSum) {
      return true;
    }
    // 부분집합의 누적값이 targetSum큰경우 무조건 false
    // 부분집합의 끝을 넘은경우 false
    if (currentSum > targetSum || index >= n.length) {
      return false;
    }

    // 재귀적으로 2번 호출
    return dfs(index + 1, currentSum) || dfs(index + 1, currentSum + n[index]);
  }

  return dfs(0, 0) ? 'YES' : 'NO';
}

console.log(solution([1, 3, 5, 6, 7, 10]));
console.log(solution([1, 4, 5, 6]));
console.log(solution([1, 5, 11, 8]));
