// [문제 이름]
// : 부분집합 구하기

// [문제 설명]
// :

// [문제 링크]
// :

function getSubset(nums) {
  // 정답을 담을 배열
  const res = [];
  // 방문한 노드 표시
  const visited = Array(nums + 1).fill(false);
  const dfs = (v) => {
    // 모든 노드 순회
    if (v === nums + 1) {
      const arr = [];
      for (i = 1; i <= v; i++) {
        // 방문한 노드들만 집합에 추가
        if (visited[i]) arr.push(i);
      }
      // 구한 집합을 정답에 추가
      if (arr.length !== 0) res.push(arr);
      return;
    }
    // 순회할 노드가 남은 경우
    else {
      // 방문한 경우의 부분집합 구하기
      visited[v] = true;
      dfs(v + 1);
      // 방문안한 경우의 부분집합 구하기
      visited[v] = false;
      dfs(v + 1);
    }
  };
  dfs(1);

  return res;
}

console.log(getSubset(3));
