// [문제 이름]
// : 개미군단

// [문제 설명]
// : 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다.
//  장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때,
//  일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다.
//  사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  // 23
  let J = Math.floor(hp / 5); // 4
  let B = 0;
  let I = 0;

  let restHp = hp - J * 5; // 3

  if (restHp >= 3) {
    B = Math.floor(restHp / 3); // 1
  }

  restHp = restHp - B * 3;

  if (restHp !== 0) {
    I = restHp;
  }

  return J + B + I;
}

console.log(solution(23));
console.log(solution(24));
console.log(solution(999));
