// [문제 이름]
// : 완주하지 못한 선수

// [문제 설명]
// : 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
//  마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  // completion 요소를 반복문을 통해 돌면서,
  // c 명단이 p에 있는지 확인하고(인덱스를 통해 확인예정),
  // 있는 경우 p복사본에서 없애 버릴거임 = > 그럼 나중에는 완주못한사람만 남을것이기 때문

  // participant 얕은복사하기 이유- 배열수정 메서드를 사용할 예정인데, 참조형데이터라 원본도 같이 변경되는것을 방지
  let participantCopy = participant.slice();

  for (let i = 0; i < completion.length; i++) {
    
    // 참여자 명단에 완주자 명단이 있는 경우 idx변수에 저장
    let idx = participantCopy.indexOf(completion[i]);

    // 명단이 있는경우
    if (idx !== -1) {
      participantCopy.splice(idx, 1); // 해당 선수가 있는 경우 해당선수를 배열에서 삭제시켜버림
    }
  }
  // 결국에 참여자 명단 카피본에 남는건 미완주자 일것임
  return participantCopy[0];
}
// 효율성 테스트 탈락

console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);
