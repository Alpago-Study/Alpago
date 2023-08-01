// [문제 이름]
// : 최대점수구하기

// [문제 설명]
// : 이번 코딩테스트 대회에서 좋은 성적을 내기 위하여 나는 선생님이 주신 N개의 문제를 풀려고 한다
//  각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 된다
//  제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 한다
//  (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

// [문제 링크]
// : https://www.notion.so/alpago-study/DFS-e6153dad01ff42c098fa9b6b833cf6ea?pvs=4#2ed8f02648c840e6bb0d68db878e94b0

// N : 문제의 개수,
// M : 제한 시간,
// problems : 각 문제의 점수와 시간이 담긴 이차원 배열

function solution(N, M, problems) {
  let maxScore = 0;

  function DFS(idx, time, score) {
    // 시간 초과시 그대로 탈출
    if (time > M) return;

    // maxScore를 큰값으로 계속 update
    if (score > maxScore) {
      maxScore = score;
    }

    // Recursive case
    for (let i = idx; i < N; i++) {
      // problemScore과 problemTime을 구조분해할당
      const [problemScore, problemTime] = problems[i];
      DFS(i + 1, time + problemTime, score + problemScore);
    }
  }

  DFS(0, 0, 0);

  return maxScore;
}

console.log(
  solution(5, 20, [
    [10, 5], // 점수, 시간
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
