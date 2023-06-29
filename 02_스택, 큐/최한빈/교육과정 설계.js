// [문제 이름]
// : 교육과정 설계

// [문제 설명]
// : 생략.

// [문제 링크]
// : 생략.

function isCorrectCurriculum(essential, curriculum) {
  const letcure = [];
  // 0. 필수과목을 하나하나씩 확인
  for (i of essential) {
    let idx = curriculum.indexOf(i);
    // 1. 필수과목이 들어있는지 확인한다.
    if (idx < 0) return 'NO';
    // 2. 순서대로 들어가는지 확인한다.
    // 2-1. 순서들을 letcure에 넣어줌.
    // 2-2. 첫번째는 비교할 값이 없으므로 그냥 넣어줌
    if (letcure.length === 0) letcure.push(idx);
    // 2-3. 이후는 이전 필수과목의 인덱스가 그다음 들어오는 필수과목의 인덱스보다 낮아야함.
    else {
      if (letcure[letcure.length - 1] >= idx) return 'NO';
      else letcure.push(idx);
    }
  }
  // 3. 모든 조건을 빠져나오면 true
  return 'YES';
}
console.log(isCorrectCurriculum('CBA', 'CBDAGE'));
console.log(isCorrectCurriculum('CBA', 'CGEADB'));
console.log(isCorrectCurriculum('A', 'BAC'));
