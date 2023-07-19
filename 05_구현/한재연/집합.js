// [문제 이름]
// : 집합 (11723번)

// [문제 설명]
// : 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.
// add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
// remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
// check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
// toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
// all: S를 {1, 2, ..., 20} 으로 바꾼다.
// empty: S를 공집합으로 바꾼다. 

// [문제 링크]
// : https://www.acmicpc.net/problem/11723

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input.map(el => el.split(' '));
data.shift();

function solution(data) {
    // check의 결과를 출력해줄 result 배열과 숫자를 넣을 S 배열 선언
    let S = [];
    let result = [];

    for (let i = 0; i < data.length; i++) {
        // switch문을 이용해서 각 연산마다 계산
        const el = data[i];
        switch(el[0]) {
            case 'add': 
                if (!S.includes(el[1])) S.push(el[1]);
                break;

            case 'remove':
                if (S.includes(el[1])) {
                    const idx = S.indexOf(el[1]);
                    S = S.slice(0, idx).concat(S.slice(idx + 1));
                }
                break;
            
            case 'check':
                if (S.includes(el[1])) {
                    result.push(1);
                } else {
                    result.push(0);
                }
                break;

            case 'toggle':
                if (S.includes(el[1])) {
                    const idx = S.indexOf(el[1]);
                    S = S.slice(0, idx).concat(S.slice(idx + 1));
                } else {
                    S.push(el[1])
                }
                break;
            
            case 'all':
                S = new Array(20).fill().map((_, i) => String(i + 1));
                break;

            case 'empty':
                S = new Array();
                break;
        }
    }

    // 결과를 답안 포맷에 맞추어 출력
    return result.join('\n');
}

console.log(solution(data));