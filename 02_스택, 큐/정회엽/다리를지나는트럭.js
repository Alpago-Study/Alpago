/*문제이름 : 다리를 지나는 트럭

문제 설명 : 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 
단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 
무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
0	              []                  	[]	       [7,4,5,6]
1~2	              []                    [7]	        [4,5,6]
3	              [7]                	[4]        	[5,6]
4	              [7]               	[4,5]	    [6]
5	              [7,4]             	[5]     	[6]
6~7            	[7,4,5]             	[6]        	[]
8	            [7,4,5,6]	            []      	[]
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 
이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.



문제링크 :https://school.programmers.co.kr/learn/courses/30/lessons/42583 */

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let across = new Array(bridge_length);
  for (let i = 0; i < across.length; i++) {
    across[i] = 0;
  }
  let acrossed = [];
  let truckOnBridge = [0];

  while (true) {
    if (truck_weights.length === 0 && truckOnBridge[0] === 0) {
      break;
    }

    checkArriveTruck(across, acrossed, truckOnBridge);

    checkCanRideBridge(truck_weights, across, weight, truckOnBridge);

    time++;
  }
  return time;
}

function checkArriveTruck(across, acrossed, truckOnBridge) {
  if (across[0] === 0) {
    across.shift();
  } else {
    truckOnBridge[0] -= across[0];
    acrossed.push(across.shift());
  }
}

function checkCanRideBridge(truck_weights, across, weight, truckOnBridge) {
  if (truck_weights[0] && truckOnBridge[0] + truck_weights[0] <= weight) {
    truckOnBridge[0] += truck_weights[0];
    across.push(truck_weights.shift());
  } else {
    across.push(0);
  }
}

console.log(solution(2, 10, [7, 4, 5, 6]));

// function solution(bridge_length, weight, truck_weights) {
//     let time = 0;
//     let across = new Array(bridge_length);
//     for (let i = 0; i < across.length; i++) {
//       across[i] = 0;
//     }
//     let acrossed = [];

//     while (true) {
//       if (
//         truck_weights.length === 0 &&
//         across.reduce((acc, cur) => acc + cur, 0) === 0
//       ) {
//         break;
//       }

//       checkArriveTruck(across, acrossed);

//       checkCanRideBridge(truck_weights, across, weight);

//       time++;
//     }
//     return time;
//   }

//   function checkArriveTruck(across, acrossed) {
//     if (across[0] === 0) {
//       across.shift();
//     } else {
//       acrossed.push(across.shift());
//     }
//   }

//   function checkCanRideBridge(truck_weights, across, weight) {
//     if (
//       truck_weights[0] &&
//       across.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] <= weight
//     ) {
//       across.push(truck_weights.shift());
//     } else {
//       across.push(0);
//     }
//   }
