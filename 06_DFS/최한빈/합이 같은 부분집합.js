// [문제 이름]
// : 합이 같은 부분집합

// [문제 설명]
// :

// [문제 링크]
// :

function solution(arr) {
  let flag = false;
  let total = arr.reduce((acc, cur) => acc + cur);
  let level = arr.length;
  // 루트를 기준으로 다음 인덱스에 원소 값을 포함한 합계와 포함안한 합계를 계산해서 마지막 레벨까지 탐색한다.
  // 마지막 레벨에서 현재 합계가 total/2 이면 현재 구한 부분집합과 나머지 부분집합의 합계가 같은것.
  const dfs = (idx, sum) => {
    if (flag) return;
    // 전체 합이 현재 합계 * 2 이면 서로 합이 같은 부분집합
    if (level === idx) {
      if (total === sum * 2) flag = true;
    } else {
      // 현재 level을 기준으로 부분집합에 포함된 경우와 포함 안된 경우를 다음 레벨로 보내줌
      dfs(idx + 1, sum + arr[idx]);
      dfs(idx + 1, sum);
    }
  };
  // 루트를 0,0 으로 설정
  dfs(0, 0);

  return flag ? 'YES' : 'NO';
}
console.log(solution([1, 3, 5, 6, 7, 10]));
