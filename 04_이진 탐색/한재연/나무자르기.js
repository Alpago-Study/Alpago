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
        mid = Math.floor((max + min) / 2);
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