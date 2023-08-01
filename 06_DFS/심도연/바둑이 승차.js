// [문제 이름]
// : 바둑이 승차

// [문제 설명]
// : 철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다.
//   철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
//   N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.

let dot_dogs = [81, 58, 42, 33, 61];
let c = 259;

const boading = (c, dot_dogs) => {
  // 트럭에 태울 수 있는 바둑이들의 무게 합을 저장하는 배열
  let answer = [];

  const dfs = (n, sum) => {
    // c를 넘지 않는 모든 조합을 구하는 dfs 함수
    // n은 현재 바둑이의 index, sum은 바둑이들의 무게 합
    if (n === dot_dogs.length) {
      // n과 dot_dogs 배열의 길이가 같아지면, 또 sum이 c보다 작으면 answer에 push 한다
      if (sum < c) {
        answer.push(sum);
      }
      // console.log(`n = ${n}, sum = ${sum}, answer = ${answer}`);
      // console.log("\n");
      return;
    }
    // if문을 통과하지 않을 경우 바둑이를 선택하지 않거나,
    dfs(n + 1, sum);
    // 바둑이를 선택(dot_dogs[n])한다
    dfs(n + 1, sum + dot_dogs[n]);
  };

  dfs(0, 0); // 초기값을 주고 dfs 함수 호출
  // answer에 저장된 모든 값 중 가장 큰 값을 구하여 반환한다
  return Math.max(...answer);
};

console.log(boading(c, dot_dogs));
