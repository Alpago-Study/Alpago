// [문제 이름]
// : 부분집합 구하기
// [문제 설명]
// : 문제 링크로 대체

// [문제 링크]
// : https://www.notion.so/alpago-study/DFS-e6153dad01ff42c098fa9b6b833cf6ea?pvs=4#6eb61047369a4d7ab5cec64bf103c234

function solution(n) {
  let answer = [];
  // 0번째 인덱스는 사용 X
  // arr배열의 값이 1이면 포함한다는 뜻, 0이면 포함 X
  let arr = Array.from({ length: n + 1 });

  // v는 현재 깊이 === 부분집합의 개수를 말함
  // dfs(v) 함수를 호출하면 v가 1 증가한 값을 인자로 하여 dfs(v+1) 함수를 두 번 호출
  // 목표는 v===n+1 일때(부분집합이 모두 만들어졌을때)
  // arr 배열을 이용하여 하나의 부분집합을 완성시키고,
  // 문자열 temp로 변환 후 answer 배열에 추가
  function dfs(v) {
    // 재귀 탈출 조건
    if (v === n + 1) {
      let temp = '';
      for (let i = 1; i < v; i++) {
        if (arr[i] === 1) temp += i + ' ';
      }
      if (temp.length > 0) answer.push(temp.trim());
      // 리컬쒸브 케이스
    } else {
      arr[v] = 1;
      dfs(v + 1);

      arr[v] = 0;
      dfs(v + 1);
    }
  }

  dfs(1);
  return answer;
}

console.log(solution(3));
