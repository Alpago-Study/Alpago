// [문제 이름]
// : 배열 돌리기 1 (16926번)

// [문제 설명]
// : 크기가 N×M인 배열이 있을 때, 배열을 돌려보려고 한다. 배열은 반시계 방향으로 돌려야 한다.
// 배열과 정수 R이 주어졌을 때, 배열을 R번 회전시킨 결과를 구해보자.

// [문제 링크]
// : https://www.acmicpc.net/problem/16926

// 백준 제출용 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n, r] = input[0].split(' ').map(Number);
let arr = input.slice(1).map(_ => _.trim().split(' ').map(Number));

function rotate(m, n, arr) {
    let startRow = 0;
    let startCol = 0; 
    let maxRow = m - 1;
    let maxCol = n - 1;
    let rotate = new Array(m).fill(null).map(_ => new Array(n).fill(0));
    
    // 가장 바깥쪽부터 반시계 방향으로 돌리고, 회전이 끝나면 최소값 + 1, 최대값 - 1을 해서 그 다음 안쪽 배열을 회전시킨다.
    while (startRow < maxRow && startCol < maxCol) {
        // 왼쪽 숫자 이동 (첫번째 자리 숫자는 위쪽부분에서 왼쪽으로 이동하므로 건너뜀)
        for (let i = startRow + 1; i <= maxRow; i++) {
            rotate[i][startCol] = arr[i - 1][startCol];
        }
        // 아래쪽 숫자 이동 (첫번째 자리 숫자는 왼쪽 부분에서 아래쪽으로 이동하므로 건너뜀)
        for (let i = startCol + 1; i <= maxCol; i++) {
            rotate[maxRow][i] = arr[maxRow][i - 1];
        }
        // 오른쪽 숫자 이동 (마지막 자리 숫자는 아래쪽에서 오른쪽으로 이동하므로 건너뜀)
        for (let i = startRow; i < maxRow; i++) {
            rotate[i][maxCol] = arr[i + 1][maxCol];
        } 
        // 위쪽 숫자 이동 (마지막 자리 숫자는 오른쪽에서 위쪽으로 이동하므로 건너뜀)
        for (let i = startCol; i < maxCol; i++) {
            rotate[startRow][i] = arr[startRow][i + 1];
        }

        startRow++;
        startCol++;
        maxRow--;
        maxCol--;
    }


    return rotate;
}

// 위 함수는 한번만 돌려주기 때문에 r번 회전을 해주는 함수 작성
function solution(r, m, n, arr) {
    let rotatedArr = arr;
    for (let i = 1; i <= r; i++) {
        rotatedArr = rotate(m, n, rotatedArr);
    }

    // 백준에서 원하는 정답 형식을 맞추기 위해 숫자들을 배열에서 꺼내줌
    let answer = [];
    rotatedArr.map(el => answer.push(el.join(' ')));
    answer = answer.join('\n');

    return answer;
}



console.log(solution(r, m, n, arr));