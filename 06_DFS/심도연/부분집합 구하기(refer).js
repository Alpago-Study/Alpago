// [문제 이름]
// : 부분집합 구하기

// [문제 설명]
// : 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.

function generateSubsets(N) {
  const subsets = [];

  function dfs(start, subset) {
    // 재귀 호출이 끝난 후에는 다시 이전 호출의 상태로 돌아오게 된다
    if (start > N) {
      subsets.push(subset.slice()); // 현재까지 선택된 원소들로 구성된 부분집합을 추가
      return;
    }

    subset.push(start); // 원소 start를 선택
    dfs(start + 1, subset); // 다음 원소로 재귀 호출
    // 밑에 부터가 if 문이 true 일 때 subsets에 subset의 원소를 추가하고 진행되는 단계
    subset.pop(); // 원소 start를 선택하지 않음으로써 pop
    dfs(start + 1, subset); // 다음 원소로 재귀 호출
  }

  dfs(1, []);
  return subsets.map((subset) => subset.join(',')).slice(0, -1);
}

const N = 3;
const result = generateSubsets(N);
console.log(result); // ["1,2,3", "1,2", "1,3", "1", "2,3", "2", "3"]
