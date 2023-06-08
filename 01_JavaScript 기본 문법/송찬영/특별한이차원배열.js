function solution(arr) {
  // arr[i][j]와 arr[j][i]가 항상 같은지
  // 2차원 배열 arr의 크기를 n으로 지정
  // 예시, n의 길이가 3일 경우 3x3
  // 0 1 2
  // 0 1 2
  // 0 1 2
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== arr[j][i]) {
        // 서로 같지 않은 부분을 발견하면 즉시 0을 반환
        return 0;
      }
    }
  }

  return 1;
}
