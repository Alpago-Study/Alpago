// [문제 이름]
// : 설탕배달(2839)

// [문제 설명]
// : 언제나 최고만을 지향하는 굴지의 대기업 진영 주식회사가 신규 사원 채용을 실시한다. 인재 선발 시험은 1차 서류심사와 2차 면접시험으로 이루어진다. 최고만을 지향한다는 기업의 이념에 따라 그들은 최고의 인재들만을 사원으로 선발하고 싶어 한다.

// 그래서 진영 주식회사는, 다른 모든 지원자와 비교했을 때 서류심사 성적과 면접시험 성적 중 적어도 하나가 다른 지원자보다 떨어지지 않는 자만 선발한다는 원칙을 세웠다. 즉, 어떤 지원자 A의 성적이 다른 어떤 지원자 B의 성적에 비해 서류 심사 결과와 면접 성적이 모두 떨어진다면 A는 결코 선발되지 않는다.

// 이러한 조건을 만족시키면서, 진영 주식회사가 이번 신규 사원 채용에서 선발할 수 있는 신입사원의 최대 인원수를 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1946

// 백준 문제풀이용 코드
let fs = require('fs');
let input = fs.readFileSync('./ex.txt').toString().split('\n');

// 백준 테스트케이스 적용을 위한 로직
let t = Number(input[0]);
const test = [];
let start = 2;
let end = 2 + Number(input[1]);
for (let i = 0; i < t; i++) {
  test.push(input.slice(start, end));
  start += test[test.length - 1].length + 1;
  end = start + Number(input[start - 1]);
}
// 로직을 수행한 뒤 test 원소에 각 테스트별 신입사원의 순위가 ["a서류 a면접","b서류 b면접"] 이런식으로 들어감
for (t of test) {
  // 통과할 수 있는 면접 성적을 담을 변수
  let rHigh;
  // 서류 성적이 1등인 사람은 무조건 통과니까 answer을 1로 셋팅
  let answer = 1;
  // test 원소를 ["a서류 a면접","b서류 b면접"] => [[a서류,a면접],[b서류,b면접]] 형태로 변환
  let rank = t.map((ele) => ele.split(' ').map(Number));
  // 서류 성적을 기준으로 sorting
  rank.sort((a, b) => a[0] - b[0]);

  rank.forEach((element, index) => {
    // 1. 서류 성적을 기준으로 sorting 했으므로 서류 성적은 고려할 필요 없다.
    // 2. 두번째 오는 사람이 합격하려면 첫번째 사람보다 서류 성적이 낮으므로 두번째 사람의 면접 성적이 첫번째 사람의 면접 성적보다 높아야 한다.
    // 3. 그 이후 사람은 가장 마지막에 합격한 사람보다 서류 성적이 낮으므로 면접 성적이 높아야한다.
    // -> 면접 성적을 합격하면 통과할 수 있는 면접 성적을 그사람의 면접 점수로 최신화하는 방식으로 진행.

    // 첫번째 사람일 경우 첫번째 사람의 면접 순위를 바로 할당
    if (index === 0) {
      rHigh = element[1];
    }
    // 그 이후에 오는 사람들의 면접 순위가 낮으면 그 사람의 면접순위를 rHigh값에 재할당 시켜준다.
    else {
      if (rHigh > element[1]) {
        answer++;
        rHigh = element[1];
      }
    }
  });
  console.log(answer);
}
