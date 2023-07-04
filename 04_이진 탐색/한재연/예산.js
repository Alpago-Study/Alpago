// [문제 이름]
// : 예산 (2512번)

// [문제 설명]
// : 국가의 역할 중 하나는 여러 지방의 예산요청을 심사하여 국가의 예산을 분배하는 것이다. 국가예산의 총액은 미리 정해져 있어서 모든 예산요청을 배정해 주기는 어려울 수도 있다. 그래서 정해진 총액 이하에서 가능한 한 최대의 총 예산을 다음과 같은 방법으로 배정한다.
// 1. 모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정한다.
// 2. 모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산하여 그 이상인 예산요청에는 모두 상한액을 배정한다. 상한액 이하의 예산요청에 대해서는 요청한 금액을 그대로 배정한다.
// 여러 지방의 예산요청과 국가예산의 총액이 주어졌을 때, 위의 조건을 모두 만족하도록 예산을 배정하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2512

// 백준 제출용 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input[1].split(' ').map(el => Number(el)).sort((a, b) => b - a);
const total = Number(input[2]);

function solution(data, total) {
    // 요청된 예산 중 최대값 설정하기
    let max = data[0];
    let min = 0;
    let result = 0;
    
    // 요청된 예산의 총 합이 예산보다 적으면 최대값을 답으로 리턴
    if (data.reduce((acc, cur) => acc + cur) <= total) {
        return max;
    } else {
        // 요청된 예산의 합이 예산보다 크면 이진탐색을 사용하여 상한액 결정
        while (min <= max) {
            // 중간값과 중간값을 상한액으로 했을 때 총 예산 구하기
            let mid = Math.floor((max + min) / 2);
            // 중간값이 요청 예산보다 크면 총 합에 요청된 예산을 더하고, 요청예산이 더 크면 중간값이 상한액이므로 중간값을 총 합에 더한다.
            let sum = data.reduce((acc, cur) => (cur > mid ? acc += mid : acc += cur), 0);
            // 총 합이 예산보다 적으면 해당 중간값을 결과값으로 일단 저장하고, 최소값을 중간값 + 1로 설정
            // 총 합이 예산보다 크면 최대값을 중간값 - 1로 설정
            if (sum <= total) {
                if (mid > result) result = mid;
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }
    }
    
    return result;
}

console.log(solution(data, total));