// [문제 이름]
// : 덩치 (7568번)

// [문제 설명]
// : 학생 N명의 몸무게와 키가 담긴 입력을 읽어서 각 사람의 덩치 등수를 계산하여 출력해야 한다.
// 두 사람 A 와 B의 덩치가 각각 (x, y), (p, q)라고 할 때 x > p 그리고 y > q 이라면 A의 덩치 등수는 B의 덩치 등수보다 높다.
// 두 사람 C와 D의 덩치가 각각 (45, 181), (55, 173)이라면 몸무게는 D가 C보다 더 무겁고, 키는 C가 더 크므로, C와 D는 같은 등수로 정한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/8979

// 백준 제출용 코드
let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let data = input.slice(1);

function solution(data) {
  // 중첩 반복문을 돌며 index i의 덩치를 가진 사람보다 큰 덩치를 가진 사람의 수를 센다.
  for (let i = 0; i < data.length; i++) {
    // 등수는 1등부터 시작하기 때문에 초기값은 1로 설정
    let count = 1;
    for (let j = 0; j < data.length; j++) {
      // 자신보다 덩치가 큰 사람이 있다면 count 수를 높여준다.
      if (data[j][0] > data[i][0] && data[j][1] > data[i][1]) {
        count++;
      }
    }
    // 등수를 각각의 덩치에 push해준다.
    data[i].push(count);
  }

  // 포맷에 맞추어 정답 출력
  return data.map((el) => el[2]).join(' ');
}

console.log(solution(data));
