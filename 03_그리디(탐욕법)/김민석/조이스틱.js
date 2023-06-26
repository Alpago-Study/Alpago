// [문제 이름]
// : 조이스틱

// [문제 설명]
// : 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

// 예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

// - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.

// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42860

const solution = (name) => {
  // ✅ 최소한으로 이동하기 위한 방법 ✅
  // : A가 가장 많이 연속적으로 나타나는 경우를 찾는 것이 핵심

  // 반환할 최소 이동 횟수
  let answer = 0;
  // A와 Z의 아스키코드 값
  const CODE_A = 65;
  const CODE_Z = 91;

  // 1. 문자열을 순회하면서
  const charMoves = name.split('').map((char) =>
    // 1-1. 각 문자를 이동해서 변경할 때 위, 아래 중 어떤 것이 더 최소한의 이동 횟수인지 새로운 배열에 담아서 저장
    Math.min(char.charCodeAt() - CODE_A, CODE_Z - char.charCodeAt())
  );

  // 2. 최소 이동 횟수의 초기값으로 문자열 길이 - 1을 지정
  // ⭐ 이 경우는 왼쪽에서 오른쪽으로 순서대로 가는 경우 ⭐
  let minMove = name.length - 1;

  // 3. 각 문자별 이동 횟수를 저장한 배열을 순회하면서
  charMoves.forEach((move, index) => {
    // 3-1. 먼저 이동 횟수 갱신
    answer += move;

    // 3-2. 연속된 A의 최대 개수를 찾기 위한 포인터 변수 생성
    let pointer = index + 1;

    // 4. 연속된 A의 최대 개수를 갱신하기 위해 반복하여 포인터 갱신
    // : 포인터(다음 인덱스)가 문자열 길이보다 작고,
    // 문자열의 다음 값이 A인 경우에 포인터에 1을 더하기
    while (pointer < charMoves.length && charMoves[pointer] === 0) pointer += 1;

    // 5. 최소 이동 횟수 갱신
    minMove = Math.min(
      // ⭐ 오른쪽으로만 이동하는 경우 ⭐
      // ex) JEROEN
      minMove,
      // ⭐ 왼쪽으로만 이동하는 경우 + 연속된 A의 앞쪽보다 뒷쪽이 짧은 경우 ⭐
      // : 처음으로 돌아온 후 이동한 횟수(index)에 연속된 A가 끝난 다음 단어부터 비교하고 다시 맨 앞으로 돌아오는 횟수 더해주기(2 * (charMoves.length - pointer))
      // ex) ZZZAAAAAZA
      index + 2 * (charMoves.length - pointer),
      // ⭐ 일정 부분 오른쪽으로 이동했다가 왼쪽으로 다시 이동하는 경우 ⭐
      // : 오른쪽으로 갔다가 왼쪽으로 다시 이동해야 하므로 가장 많이 연속된 A가 시작되기 직전 인덱스 * 2에서 가장 많이 연속된 A가 끝나는 지점까지 왼쪽으로 이동하는 횟수를 더해주기
      // ex) ZZZAACCAAAAAAAZZ
      // : 위의 예시에서는 Z부터 C까지 이동 횟수 * 2 + 연속된 A가 끝나는 지점 이후 Z 2개
      index * 2 + charMoves.length - pointer
    );
  });

  // 6. 최소 이동 횟수 반환
  return answer + minMove;
};

console.log(solution('JEROEN'));
console.log(solution('JAN'));
console.log(solution('AAAZZZZ'));
console.log(solution('ZZZAAAAAZA'));
console.log(solution('ZZZAACCAAAAAAAZZ'));
