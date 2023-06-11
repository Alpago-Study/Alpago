function left(n,lost,reserve) {
   var answer = n-lost.length;
    for (i of lost) {
        if (reserve.find(ele => ele===i-1)) {
            answer++;
            reserve = reserve.filter(ele=>ele!==i-1)
        }
        else if (reserve.find(ele=>ele===i+1)) {
            answer++;
            reserve = reserve.filter(ele=>ele!==i+1)
        }
    }
    return answer; 
}
function right(n,lost,reserve) {
   var answer = n-lost.length;
    for (i of lost) {
        if (reserve.find(ele => ele===i+1)) {
            answer++;
            reserve = reserve.filter(ele=>ele!==i+1)
        }
        else if (reserve.find(ele=>ele===i-1)) {
            answer++;
            reserve = reserve.filter(ele=>ele!==i-1)
        }
    }
    return answer; 
}

function solution(n, lost, reserve) {
    const both = []
    lost.forEach((ele) => {
        if(reserve.includes(ele)) {
            both.push(ele)
        }
    })
    lost = lost.filter((ele) => !both.includes(ele))
    reserve = reserve.filter((ele) => !both.includes(ele))
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    return Math.max(left(n,lost,reserve),right(n,lost,reserve))
}
