function solution(sides) {
  var answer = 0;
  let maxSide =Math.max(...sides);
  let minSide = Math.min(...sides);
  let otherSide = array.(Math.max(...sides)) - array.(Math.min(...sides));
  let twoShortSides = otherSide + minSide;
  
  if(maxSide >= twoShortSides){
      answer = 2;
  } else if(maxSide < twoShortSides){
      answer = 1;
  }
       return answer;
  }
 