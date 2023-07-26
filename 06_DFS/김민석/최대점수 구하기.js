// [문제 이름]
// : 최대점수 구하기

// [문제 설명]
// : 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다. 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다. 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다. (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

const solution = (limit, info) => {
  let maxScore = 0; // 반환할 최대 점수

  // 1. DFS 함수 선언
  const DFS = (depth, score, time) => {
    // 1-1. 만약 인수로 전달한 시간 합이 제한 시간보다 크다면 재귀 종료
    if (time > limit) return;
    // 1-2. 만약 맨 밑 레벨까지 트리를 순회했다면 최대 점수 갱신
    if (depth === info.length) {
      maxScore = score > maxScore ? score : maxScore;
    } else {
      // 1-3. 아직 맨 밑 레벨까지 트리를 순회하지 않았다면 DFS 함수 호출
      // ⭐ 현재 문제를 선택한 경우 ⭐
      // : 점수, 시간 합에 현재 점수, 시간 더하기
      DFS(depth + 1, score + info[depth][0], time + info[depth][1]);
      // ⭐ 현재 문제를 선택한 경우 ⭐
      // : 점수, 시간 합에 현재 점수, 시간 더하지 않기
      DFS(depth + 1, score, time);
    }
  };

  DFS(0, 0, 0);

  return maxScore;
};

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
