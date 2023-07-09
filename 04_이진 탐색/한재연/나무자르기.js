// [문제 이름]
// : 나무 자르기 (2805번)

// [문제 설명]
// : 상근이는 나무 M미터가 필요하다. 근처에 나무를 구입할 곳이 모두 망해버렸기 때문에, 정부에 벌목 허가를 요청했다. 정부는 상근이네 집 근처의 나무 한 줄에 대한 벌목 허가를 내주었고, 상근이는 새로 구입한 목재절단기를 이용해서 나무를 구할것이다.
// 목재절단기는 다음과 같이 동작한다. 먼저, 상근이는 절단기에 높이 H를 지정해야 한다. 높이를 지정하면 톱날이 땅으로부터 H미터 위로 올라간다. 그 다음, 한 줄에 연속해있는 나무를 모두 절단해버린다. 따라서, 높이가 H보다 큰 나무는 H 위의 부분이 잘릴 것이고, 낮은 나무는 잘리지 않을 것이다.
// 상근이는 환경에 매우 관심이 많기 때문에, 나무를 필요한 만큼만 집으로 가져가려고 한다. 이때, 적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2805

// 백준 제출용 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const m = Number(input[0].split(' ')[1]);
const data = input[1].split(' ').map(el => Number(el)).sort((a, b) => a - b);

function solution(m, data) {
    // 제일 긴 나무를 최대 길이로 설정
    let max = data[data.length - 1];
    let min = 0;
    let result = 0;

    while (min <= max) {
        // 이진탐색을 위한 중간값을 구하고 중간값으로 나무를 잘랐을때 나오는 나무 길이 계산
        let mid = Math.floor((max + min) / 2);
        let sum = data.reduce((acc, cur) => (cur > mid ? acc += cur - mid : acc), 0);

        // 총길이가 목표치보다 크면 중간값 위쪽 부분을, 작으면 중간값보다 아래쪽 부분을 탐색
        if (sum >= m) {
            // 총길이가 목표치보다 크면 이미 목표를 달성한 것이니 중간값을 결과값으로 저장
            // 가장 최소한으로 나무를 자르는 높이를 구하기 위해 새로운 중간값이 원래 저장한 중간값보다 큰 경우 결과값으로 저장
            if (mid > result) result = mid;
            min = mid + 1;
        } else if (sum < m) {
            max = mid - 1;
        }
    }

    return result;
}

console.log(solution(m, data));