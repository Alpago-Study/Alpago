// [문제 이름]
// : 주유소

// [문제 설명]
// : 각 도시에 있는 주유소의 기름 가격과, 각 도시를 연결하는 도로의 길이를 입력으로 받아 제일 왼쪽 도시에서 제일 오른쪽 도시로 이동하는 최소의 비용을 계산하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/13305

// 현재 주유소보다 기름값이 더 저렴한 가장 가까운 주유소를 찾아야한다
// 맨 처음 출발할 때는 무조건 기름을 충전해야 하기 때문에 다음 주유소까지 갈 수 있는 연료만 넣는다

// 주의사항은 도시의 개수가 최대 2 <= n <= 100,000 이고, 각 도시까지의 거리(도로)는 1 <= 1,000,000,000 이다 : BigInt 사용

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// 도시의 개수
const cities = +input[0];
// 도로의 길이
const road_length = input[1].split(' ').map((el) => BigInt(el));
// 각 주유소 기름값
const gas_station = input[2].split(' ').map((el) => BigInt(el));

// 현재 주유소의 기름값
let current_gas_station = gas_station[0];

// 총 비용 : 숫자 뒤에 n 을 붙여주게 되면 BigInt 타입의 숫자를 사용할 수 있다
// BigInt를 사용하는 이유는 정수의 한도(약 9천 조)를 초과하는 숫자에 대해 연산을 수행할 수 있기 때문에 사용한다
let cost = 0n;

for (let i = 0; i < cities - 1; i++) {
  // 마지막 도시에서 주유할 필요가 없기 떄문에 cities - 1을 해준다
  cost += current_gas_station * road_length[i];

  if (current_gas_station > gas_station[i + 1]) {
    current_gas_station = gas_station[i + 1];
  }
}

console.log(cost);
