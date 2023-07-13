// [문제 이름]
// : 병사 배치하기 (18353번)

// [문제 설명]
// : N명의 병사가 무작위로 나열되어 있다. 각 병사는 특정한 값의 전투력을 보유하고 있으며, 병사를 배치할 때는 전투력이 높은 병사가 앞쪽에 오도록 내림차순으로 배치를 하고자 한다. 다시 말해 앞쪽에 있는 병사의 전투력이 항상 뒤쪽에 있는 병사보다 높아야 한다.
// 또한 배치 과정에서는 특정한 위치에 있는 병사를 열외시키는 방법을 이용한다. 그러면서도 남아있는 병사의 수가 최대가 되도록 하고 싶다.
// 병사에 대한 정보가 주어졌을 때, 남아있는 병사의 수가 최대가 되도록 하기 위해서 열외해야 하는 병사의 수를 출력하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/18353

// 백준 제출용 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input[1].split(' ').map(el => Number(el));

// 1. DP(Dynamic Programming)을 이용한 방법
function solution(data) {
    // 각 인덱스의 숫자를 배열의 끝자리로 하는 가장 긴 수열의 길이를 구하기 위한 배열 생성
    let arr = new Array(data.length).fill(0);
    let answer = 0;

    for (let i = 0; i < data.length; i++) {
        // 첫번째 인덱스는 비교할 숫자가 없기 때문에 무조건 1을 값으로 가진다.
        if (i === 0) arr[0] = 1;
        let max = 0;
        // 2개의 반복문을 중첩해서 인덱스 i의 숫자가 앞의 숫자(인덱스 j)보다 작을때 인덱스 j 숫자가 인덱스 i 숫자를 끝으로 하는 배열에 포함될 수 있다고 판단한다.
        // 인덱스 j 숫자 뒤에 인덱스 i 숫자가 배열의 끝 숫자로 포함되는 형태이기 때문에 인덱스 j를 끝으로 하는 수열의 길이를 먼저 구한 후, 그 길이가 max 길이보다 길면 max값으로 새로 할당해준다.
        for (let j = 0; j < i; j++) {
            if (data[j] > data[i] && arr[j] > max) {
                max = arr[j];
            }
        }
        // 현재 max값은 인덱스 j 숫자를 끝으로하는 배열 중 가장 긴 배열의 길이이다. i가 더해지면 길이가 1 늘어나야 하므로 max 값에 1을 더한다. 
        arr[i] = max + 1;
        // 같은 배열의 다른 숫자를 끝으로 하는 수열의 길이와 인덱스 i를 끝으로 하는 수열의 길이 중 더 긴 길이를 결과값으로 할당해준다.
        answer = Math.max(answer, arr[i]);
    }

    // 열외해야하는 병사의 수를 구해야하므로 인자로 받은 배열의 길이에서 answer 값을 빼준다.
    return data.length - answer;
}

console.log(solution(data));


// 2. 이진탐색을 이용한 방법
function solution(data) {
    // 가장 긴 배열을 담을 빈 배열 생성
    let arr = [];
    // 첫번째 숫자는 비교군이 없으므로 일단 빈배열에 push해준다.
    arr.push(data[0]);

    for (let i = 1; i < data.length; i++) {
        // 만약 인덱스 i의 숫자가 arr의 마지막 숫자보다 작다면 배열의 내림차순을 유지할 수 있으므로 arr에 push해준다.
        if (data[i] < arr[arr.length - 1]) {
            arr.push(data[i]);
        }
        // 인덱스 i의 숫자가 arr의 마지막 숫자보다 크다면 내림차순을 유지할 수 없으므로 push를 하는 대신 알맞는 자리로 찾아갈 수 있도록 이진탐색을 사용한다.
        else {
            let min = 0;
            let max = arr.length - 1;
            while (min < max) {
                let mid = Math.floor((min + max) / 2);
                // arr의 중간값이 인덱스 i의 값보다 크다면 중간값보다 왼쪽을 탐색
                if (arr[mid] > data[i]) {
                    min = mid + 1;
                } else {
                    // arr의 중간값이 인덱스 i의 값보다 작다면 중간값보다 오른쪽을 탐색
                    // 특정 값을 찾아내는 것이 아니라 알맞는 자리의 인덱스를 찾아서 replace 해주어야 하기 때문에 max값은 mid - 1이 아니라 mid로 재할당한다.
                    // mid - 1로 할당해주면 replace되어야 할 숫자의 한자리 왼쪽 숫자가 replace되기 때문이다.
                    max = mid;
                }
            }
            // 찾아낸 max값을 인덱스로 하여 arr 배열의 맞는 자리에 숫자를 바꿔준다.
            arr[max] = data[i];
        }
    }

    // 열외되어야 하는 벙사의 숫자를 구하기 위해 data의 길이에서 가장 긴 배열의 길이를 빼준다.
    return data.length - arr.length;
}

console.log(solution(data));