// [문제 이름]
// : 합이 같은 부분집합

// [문제 설명]
// : N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분 집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 "YES"를 출력하고, 그렇지 않으면 "NO"를 출력하는 프로그램을 작성하세요.
//   둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.
//   예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있습니다.

function canPartition(nums) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // 총 합이 홀수인 경우, 두 부분집합으로 나눌 수 없음
  if (totalSum % 2 !== 0) {
    return 'NO';
  }

  const targetSum = totalSum / 2;
  const n = nums.length;
  let foundPartition = false;

  // 깊이 우선 탐색 함수
  function dfs(index, currSum) {
    if (foundPartition) {
      return; // 이미 가능한 부분집합을 찾았으면 종료
    }

    if (currSum === targetSum) {
      foundPartition = true; // 가능한 부분집합을 찾았음을 표시
      return;
    }

    if (index === n || currSum > targetSum) {
      return; // 탐색 범위를 벗어나거나 합이 목표 합을 초과하면 종료
    }

    // 현재 원소를 포함하는 경우와 포함하지 않는 경우 모두 탐색
    dfs(index + 1, currSum + nums[index]);
    dfs(index + 1, currSum);
  }

  dfs(0, 0);

  return foundPartition ? 'YES' : 'NO';
}

// 테스트
const nums = [1, 3, 5, 6, 7, 10];
console.log(canPartition(nums)); // 출력: "YES"
