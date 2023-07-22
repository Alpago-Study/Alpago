// [문제 이름]
// : 줄세우기 (10431번)

// [문제 설명]
// : 우선 아무나 한 명을 뽑아 줄의 맨 앞에 세운다. 그리고 그 다음부터는 학생이 한 명씩 줄의 맨 뒤에 서면서 다음 과정을 거친다.
// 자기 앞에 자기보다 키가 큰 학생이 없다면 그냥 그 자리에 서고 차례가 끝난다.
// 자기 앞에 자기보다 키가 큰 학생이 한 명 이상 있다면 그중 가장 앞에 있는 학생(A)의 바로 앞에 선다. 이때, A부터 그 뒤의 모든 학생들은 공간을 만들기 위해 한 발씩 뒤로 물러서게 된다.
// 이 과정을 반복하면 결국 오름차순으로 줄을 설 수가 있다.
// 아이들의 키가 주어지고, 어떤 순서로 아이들이 줄서기를 할 지 주어진다. 위의 방법을 마지막 학생까지 시행하여 줄서기가 끝났을 때 학생들이 총 몇 번 뒤로 물러서게 될까?

// [문제 링크]
// : https://www.acmicpc.net/problem/10431

// 백준 제출용 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let data = input
  .map((el) => el.split(' '))
  .map((el) => el.map(Number).slice(1));
data.shift();

// 내 앞에 서있는 나보다 작은 친구들은 앞 순서에서 나보다 앞으로 이동할 것이기 때문에 결론적으로는 내 앞에 나보다 큰 학생들의 수만 세면 뒤로 물러서는 수를 계산할 수 있음.
function solution(data) {
  // 각각의 케이스 정답을 담을 배열
  let resultArr = [];

  // 각각의 케이스를 하나씩 도는 반복문
  for (let i = 0; i < data.length; i++) {
    let line = data[i];
    // 각각의 케이스는 개별적으로 계산해야 하기 때문에 케이스가 달라질때마다 count값을 0으로 초기화해준다.
    let count = 0;
    // j 인덱스 학생 앞에 j 인덱스 학생보다 키가 큰 학생의 수를 구하는 반복문
    for (let j = 0; j < data[i].length; j++) {
      for (let k = 0; k < j; k++) {
        // j 인덱스 학생 앞에 더 큰 키를 가진 학생이 있다면 count 수를 하나 올려준다.
        if (line[k] > line[j]) count++;
      }
    }
    // 하나의 케이스 계산이 끝나면 배열에 순서와 count 수를 담아준다.
    resultArr = [...resultArr, `${i + 1} ${count}`];
  }

  // 포맷에 맞추어 정답 출력
  return resultArr.join('\n');
}

console.log(solution(data));
