function solution(numbers) {
  const answer = []; // 결과를 저장할 배열 생성

  const n = numbers.length; // 배열의 길이 저장

  // 두 수를 선택하여 더한 결과를 answer 배열에 추가
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const numSum = numbers[i] + numbers[j]; // 두 수를 더한 결과
      if (!answer.includes(numSum)) {
        // 이미 answer 배열에 없는 경우에만 추가
        answer.push(numSum);
      }
    }
  }

  answer.sort((a, b) => a - b); // 오름차순
  return answer;
}
