function solution(hp) {
  // 장군개미 atk 5 병정개미 atk 3 일개미 atk 1
  // hp에 딱맞게 최소한의 병력을 구성해야함. 몇마리의 개미가 필요?
  let sss = 5;
  let ss = 3;
  let s = 1;

  // 가장 큰 값 5로 나누고 나머지를 그 다음 값 3으로 나누고, 나머지 값을 일개미가 처리
  let antCount = Math.floor(hp / sss);
  hp = hp % sss; // 장군개미로 처리한 후 남은 체력

  antCount += Math.floor(hp / ss);
  hp = hp % ss; // 병정개미로 처리한 후 남은 체력

  antCount += Math.floor(hp / s);

  return antCount;
}
