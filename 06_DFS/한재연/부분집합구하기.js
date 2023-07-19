// [문제 이름]
// : 부분집합 구하기(DFS)

// [문제 설명]
// : 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.

// [문제 링크]
// : #

function solution(n) {
    // 인자로 들어온 숫자를 1부터 N까지의 원소를 갖는 집합으로 만들어주기
    const arr = new Array(n).fill().map((_, i) => {return i + 1});
    // 각 부분집합에 해당 depth의 요소가 들어가있는지 확인할 수 있는 배열 생성
    // false일 경우 그 레벨의 숫자는 포함되지 않았다는 것이고, true일 경우엔 포함되었다는 뜻이다.
    let selected = new Array(n).fill(false);
    let result = [];

    const dfs = (depth) => {
        // Base case
        // 깊이가 배열의 길이와 같아진다면 (가장 마지막 레벨의 노드에 도달했다면) result 배열에 selected[idx] 값이 true인 arr의 요소를 모아 집어넣어준다.
        // 배열이 공배열일 경우는 제외해야하기 때문에 바로 리턴해준다.
        if (depth === arr.length) {
            if (arr.filter((_, idx) => selected[idx]).length === 0) return;
            result.push(arr.filter((_, idx) => selected[idx]));
        // recursive case
        // 자식 노드로 내려갈 때 자식 노드의 depth에서 요소가 해당되는 경우(1)와 해당되지 않는 경우(0)를 나눠 재귀함수를 호출해준다.
        } else {
            selected[depth] = 1;
            dfs(depth + 1);

            selected[depth] = 0;
            dfs(depth + 1);
        }
    };

    // 재귀함수 호출
    dfs(0);
    // 결과값을 알맞은 포맷에 맞춰 출력한다.
    return result.map(el => el.join(' ')).join('\n');
}

console.log(solution(3));