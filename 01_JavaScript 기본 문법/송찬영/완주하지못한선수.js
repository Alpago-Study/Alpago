function solution(participant, completion) {
  // 참가자에 완주자가 안에 있는지 확인
  // 완주자 안에있는 사람들의 이름은 참가자에 있을거니까 정렬을 해서 for문
  participant.sort(); // 참가자 배열을 정렬
  completion.sort(); // 완주자 배열을 정렬

  for (let i = 0; i < completion.length; i++) {
    // 순회도중 중간에 발견했을때의 for문
    if (participant[i] !== completion[i]) {
      return participant[i]; // 완주못한 선수의 이름을 반환
    }
  }

  return participant[participant.length - 1]; // 순회를 다 했음에도 for문을 정상적으로 빠져나왔다는건 마지막 선수는 완주하지 못한 경우니까 participant길이의 -1 인덱스값을해서 반환
}
