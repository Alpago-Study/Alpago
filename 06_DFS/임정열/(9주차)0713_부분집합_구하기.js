// [문제 이름]
// : 부분집합 구하기

// [문제 설명]
// : 자연수 N이 주어지면 1부터 N까지 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.

// [문제 링크]
// :

/**
 * 초기값
 * arr = ['1', '2', '3', '4', '5']
 * answer[0] = [] => 0개씩 뽑았을 때의 경우의 수
 * answer[1] = ['1', '2', '3', '4', '5'] => 1개씩만 뽑았을 때의 경우
 *
 * 이미 1개씩 뽑았을 경우의 부분집합은 answer에 담았으므로
 * DFS 함수는 2부터 시작 DFS(2)
 *
 * 1 2 3 4 5 가 있을 때 2개를 뽑아 조합을 만드는 방법
 * 기준을 정하고 -> 기준의 마지막 숫자보다 큰 숫자를 붙인다.
 * * 기준이란 n - 1개를 뽑아 조합을 만드는 방법의 경우 하나하나를 의미한다.
 *
 * 기준: '1') '1 2' '1 3' '1 4' '1 5'
 * 기준: '2') '2 3' '2 4' '2 5'
 * 기준: '3') '3 4' '3 5'
 * 기준: '4') '4 5'
 * 기준: '5') X
 *
 * 1 2 3 4 5 가 있을 때 3개를 뽑아 조합을 만드는 방법
 * 기준을 정하고 -> 기준의 마지막 숫자보다보다 큰 숫자를 붙인다.
 *
 * 기준: '1 2') '1 2 3', '1 2 4', '1 2 5'
 * 기준: '1 3') '1 3 4', '1 3 5'
 * 기준: '1 4') '1 4 5'
 * 기준: '1 5') X
 * 기준: '2 3') '2 3 4', '2 3 5'
 * 기준: '2 4') '2 4 5'
 * 기준: '2 5') X
 * 기준: '3 4') '3 4 5'
 *
 * @param {number} N
 * @returns 1부터 N까지 나올 수 있는 모든 부분집합
 */
function solution(N) {
  const arr = Array.from({ length: N }, (_, index) => (index + 1).toString());
  let answer = [[], arr];

  const DFS = (num) => {
    // 탈출조건: num 과 N이 같을 때
    // answer에 N개를 선택한 부분조합을 마지막으로 push하고 마무리
    // num = N = 5) answer[5] = ['1 2 3 4 5']
    if (num === N) {
      answer.push([arr.join(' ')]);
      return;
    }

    // variables - criteria: 부분집합을 만들 때 기준이 되는 배열
    // num = 2) criteria = answer[1] = ['1', '2', '3', '4', '5']
    const criteria = answer[num - 1];

    // variables - temp: num개씩 뽑았을 때의 경우를 저장할 배열
    let temp = [];

    // criteria 배열을 for문으로 숫회
    for (let i = 0; i < criteria.length; i++) {
      // variables - j: criteria 요소의 마지막 숫자의 인덱스보다 큰 숫자
      let lastNum = criteria[i].split(' ')[num - 2];
      let j = arr.indexOf(lastNum) + 1;

      for (j; j < arr.length; j++) {
        if (arr[j]) {
          temp.push(criteria[i] + ' ' + arr[j]);
        }
      }
    }

    answer.push(temp);
    DFS(num + 1);
  };

  DFS(2);

  return answer
    .map((v) => v.join('\n'))
    .join('\n')
    .trim();
}

console.log(solution(5));

// 1
// 2
// 3
// 4
// 5
// 1 2
// 1 3
// 1 4
// 1 5
// 2 3
// 2 4
// 2 5
// 3 4
// 3 5
// 4 5
// 1 2 3
// 1 2 4
// 1 2 5
// 1 3 4
// 1 3 5
// 1 4 5
// 2 3 4
// 2 3 5
// 2 4 5
// 3 4 5
// 1 2 3 4
// 1 2 3 5
// 1 2 4 5
// 1 3 4 5
// 2 3 4 5
// 1 2 3 4 5
