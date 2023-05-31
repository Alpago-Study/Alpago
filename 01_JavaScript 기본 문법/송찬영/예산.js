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
  }
}
