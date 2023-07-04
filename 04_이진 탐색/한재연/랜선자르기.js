// [문제 이름]
// : 랜선 자르기 (1654번)

// [문제 설명]
// : 이미 오영식은 자체적으로 K개의 랜선을 가지고 있다. 그러나 K개의 랜선은 길이가 제각각이다. 박성원은 랜선을 모두 N개의 같은 길이의 랜선으로 만들고 싶었기 때문에 K개의 랜선을 잘라서 만들어야 한다. (이미 자른 랜선은 붙일 수 없다.)
// 편의를 위해 랜선을 자르거나 만들 때 손실되는 길이는 없다고 가정하며, 기존의 K개의 랜선으로 N개의 랜선을 만들 수 없는 경우는 없다고 가정하자.
// 그리고 자를 때는 항상 센티미터 단위로 정수길이만큼 자른다고 가정하자. N개보다 많이 만드는 것도 N개를 만드는 것에 포함된다. 이때 만들 수 있는 최대 랜선의 길이를 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1654

// 백준 제출용 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const m = Number(input[0].split(' ')[1]);
const data = [];
for (let i = 1; i < input.length; i++) {
    data.push(Number(input[i]));
};
data.sort((a, b) => b - a);

function solution(m, data) {
    // 갯수만큼 자를 때 꼭 모든 선을 사용할 필요는 없기 때문에 가장 긴 랜선을 최대값으로 설정
    // 가장 긴 랜선만 잘라도 갯수를 채울 수 있고, 짧은 랜선을 꼭 사용하지 않아도 되는 상황이 있을 수 있다.
    let max = data[0];
    let min = 0;
    let result = 0;
    let count, mid;

    while (min <= max) {
        // 중간값 설정 후, 중간값으로 랜선 길이를 나눠서 해당 길이로 잘린 후의 랜선 갯수 계산
        mid = Math.floor((max + min) / 2);
        count = data.reduce((acc, cur) => {
            let n = 0;
            if (cur >= mid) {
                n = Math.floor(cur / mid);
            }
            return acc += n;
        }, 0);

        if (count >= m) {
            // 잘라낸 랜선 갯수가 원하는 갯수보다 클 경우 일단 결과값에 저장하고, 최소값을 중간값 + 1로 수정하여 더 긴 길이로 갯수를 채울 수 있는지 계속 계산하기
            if (mid > result) result = mid;
            min = mid + 1;
        } else {
            // 잘라낸 랜선 갯수가 원하는 갯수보다 작을 경우 최대값을 중간간 - 1로 수정하여 갯수 맞추기
            max = mid - 1;
        }
    }

    return result;
}

console.log(solution(m, data));