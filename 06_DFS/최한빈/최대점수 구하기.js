// [문제 이름]
// : 최대점수 구하기

// [문제 설명]
// :

// [문제 링크]
// :

function solution(limit, problems) {
  let result = [];
  const dfs = (v, sum, time) => {
    // 시간의 합이 제한을 넘어가면 return
    if (time > limit) return;
    if (v === problems.length) {
      // 전체 탐색을 마친경우 결과에 push
      result.push(sum);
    } else {
      // 하나는 sum에 현재 점수, 걸린 시간을 추가하고 dfs
      dfs(v + 1, sum + problems[v][0], time + problems[v][1]);
      // 나머지는 현재 점수, 걸린 시간을 제외하고 dfs
      dfs(v + 1, sum, time);
    }
  };
  // 0번째 인덱스에 합은 0으로 셋팅하고 dfs 수행
  dfs(0, 0, 0);
  // 구한 합 중에 최대값을 리턴
  return Math.max(...result);
}
console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
