// [문제 이름]
// : 교육과정 설계

const solution = (need, plan) => {
  // 1. 필수 교육 과정 순서를 queue로 생성
  const queue = need.split('');

  // 2. 교육 과정의 각 강의 순회
  for (const lecture of plan) {
    // 3. 만약 현재 강의 queue의 첫 번째 요소와 동일하다면 queue에서 제거
    if (lecture === queue[0]) queue.shift();
  }

  // 4-1. queue에 요소가 남아 있다면 필수 교육 과정 순서를 지키지 않은 것이므로 'NO' 반환
  // 4-2. queue에 요소가 없다면 필수 교육 과정 순서를 지킨 것이므로 'YES' 반환
  return queue.length ? 'NO' : 'YES';
};

console.log(solution('CBA', 'CBDAGE'));
console.log(solution('CBA', 'CGEADB'));
