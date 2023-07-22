// [문제 이름]
// : 바둑이 승차

// [문제 설명]
// :

// [문제 링크]
// :

function solution(limit, weights) {
  let result = [];
  const dfs = (v, sum) => {
    // 무게의 합이 제한을 넘어가면 return
    if (sum > limit) return;
    if (v === weights.length) {
      // 전체 탐색을 마친경우 결과에 push
      result.push(sum);
    } else {
      // 하나는 sum에 현재 무게를 추가하고 dfs
      dfs(v + 1, sum + weights[v]);
      // 나머지는 현재 무게를 제외하고 dfs
      dfs(v + 1, sum);
    }
  };
  // 0번째 인덱스에 합은 0으로 셋팅하고 dfs 수행
  dfs(0, 0);
  // 구한 합 중에 최대값을 리턴
  return Math.max(...result);
}
console.log(solution(259, [81, 58, 42, 33, 61, 30, 3, 8]));
