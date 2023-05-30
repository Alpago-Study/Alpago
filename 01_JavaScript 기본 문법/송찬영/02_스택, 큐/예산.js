function solution(d, budget) {
  // 부서별 신청한 금액 d
  // 예산 budget
  // 최대 '몇개'의 부서에 물품을 지원가능한지? return
  // 예산을 내림차순으로 정렬
  d.sort((a, b) => b - a);

  let queue = [];
  let total = 0;

  for (let i = 0; i < d.length; i++) {
    queue.push(d[i]);
    total += d[i];

    // 총 예산을 초과한 경우
    while (total > budget) {
      total -= queue.shift(); // 가장 예산이 큰 부서를 제외하고 큐에서 제거
    }
  }

  return queue.length;
}
