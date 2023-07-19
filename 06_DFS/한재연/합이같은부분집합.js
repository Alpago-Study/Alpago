// [문제 이름]
// : 합이 같은 부분집함(DFS)

// [문제 설명]
// : N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 "YES를 출력하고, 그렇지 않으면 "NO"를 출력하는 프로그램을 작성하세요.

// [문제 링크]
// : #

function solution(arr) {
    // 배열의 총 합
    let total = arr.reduce((acc, cur) => acc + cur, 0);
    // 
    let answer = "NO";
    let flag = 0;

    const dfs = (idx, sum) => {
        // Base Case
        // 인덱스 값이 arr의 길이와 같다면 (마지막 인덱스라면) 총 합에서 부분집합의 합을 뺀 값이 부분집합의 합과 같은지 판별한다.
        // 같다면 answer 값을 "YES"로 바꿔주고, flag 값도 1로 재할당해준다.
        // flag 값이 1이라면 리턴한다.
        if (flag === 1) return;
        if (idx === arr.length) {
            if (sum === total - sum) {
                answer = "YES";
                flag = 1;
            }
        } else {
            // 자식 노드의 값을 사용하는 경우와 사용하지 않는 경우를 나눠 재귀함수 호출
            dfs(idx + 1, sum + arr[idx]);
            dfs(idx + 1, sum);
        }
    }
    
    // 재귀함수를 호출해준 뒤 answer 값을 리턴한다.
    dfs(0, 0);
    return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));