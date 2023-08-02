// [문제 이름]
// : 기상캐스터

// [문제 설명]
// : JOI시는 남북방향이 H 킬로미터, 동서방향이 W 킬로미터인 직사각형 모양이다. JOI시는 가로와 세로의 길이가 1킬로미터인 H × W 개의 작은 구역들로 나뉘어 있다. 북쪽으로부터 i 번째, 서쪽으로부터 j 번째에 있는 구역을 (i, j) 로 표시한다.

// 각 구역의 하늘에는 구름이 있을 수도, 없을 수도 있다. 모든 구름은 1분이 지날 때마다 1킬로미터씩 동쪽으로 이동한다. 오늘은 날씨가 정말 좋기 때문에 JOI시의 외부에서 구름이 이동해 오는 경우는 없다.

// 지금 각 구역의 하늘에 구름이 있는지 없는지를 알고 있다. 기상청에서 일하고 있는 여러분은 각 구역에 대해서 지금부터 몇 분뒤 처음으로 하늘에 구름이 오는지를 예측하는 일을 맡았다.

// 각 구역에 대해서 지금부터 몇 분뒤 처음으로 하늘에 구름이 오는지를 구하여라.

// [문제 링크]
// : https://www.acmicpc.net/problem/10709

const solution = (col, row, map) => {
  const result = Array.from({ length: col }, () =>
    Array.from({ length: row }, () => -1)
  ); // row x col 만큼의 이동 결과 배열 -1로 초기화하여 선언

  // 1. 구름이 이동할 수 있는 최대 횟수은 row만큼이므로 row만큼 순회
  for (let i = 0; i <= row; i++) {
    // 2. 2차원 배열 map 순회
    for (let j = 0; j < col; j++) {
      for (let k = 0; k < row; k++) {
        // 3. 만약 map의 현재 좌표 값이 'c'이고 (구름이 있고),
        // 이동 결과 배열의 현재 좌표 값이 -1이면 (구름이 방문한 적 없으면)
        // 이동 결과 배열의 현재 좌표에 해당하는 값을 i로 갱신
        if (map[j][k] === 'c' && result[j][k] === -1) result[j][k] = i;
      }
    }

    // 4. 2차원 배열 순회가 끝날 때마다 구름의 현재 위치 갱신
    map = map.map((prevInfo) => '.' + prevInfo.slice(0, prevInfo.length - 1));
  }

  // 5. 이동 결과 배열을 문자열로 반환
  return result.map((cloudInfo) => cloudInfo.join(' ')).join('\n');
};

console.log(solution(3, 4, ['c..c', '..c.', '....']));
console.log(
  solution(6, 8, [
    '.c......',
    '........',
    '.ccc..c.',
    '....c...',
    '..c.cc..',
    '....c...',
  ])
);
