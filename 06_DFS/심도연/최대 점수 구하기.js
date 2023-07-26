// [문제 이름]
// : 최대 점수 구하기

// [문제 설명]
// : 이번 정보올림파이드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 n개의 문제를 풀려고 합니다.
//   각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
//   제한시간 m안에 n개의 문제 중 최대 점수를 얻을 수 있도록 해야 합니다.(해당 문제는 해당 시간이 걸리면 푸는 걸로 간주합니다. 한 유형당 한 개만 풀 수 있습니다.)

// 입력 예시
// 문제의 개수 = n
// 제한 시간 = m
// 문제를 풀었을 때의 점수와 걸리는 시간 = [score, time]

let n = 5;
let m = 20;
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

const greatest_score = (n, m, arr) => {
  // 바둑이 승차와 마찬가지로 재귀(dfs)를 돌면서 문제를 푼 경우와 풀지 않은 경우에서 나온 시간과 점수를 누적해주고, 인자로 넘겨주어 반복 후 최대 값을 구한다
  let answer = 0;

  const dfs = (i, sum, time) => {
    // 제한시간 보다 클 때 return
    if (time > m) return;

    if (i === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      console.log(arr[i][0], arr[i][1]);
      // 해당 문제를 풀었을 때 점수와 시간을 누적하기 위한 재귀
      dfs(i + 1, sum + arr[i][0], time + arr[i][1]);
      //  해당 문제를 풀지 않았을 때 기존에 있던 점수와 시간을 누적하기 위한 재귀
      dfs(i + 1, sum, time);
    }
  };

  dfs(0, 0, 0); // 초기값
  return answer;
};

console.log(greatest_score(n, m, arr));
