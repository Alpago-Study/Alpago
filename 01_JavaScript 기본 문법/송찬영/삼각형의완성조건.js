function solution(sides) {
  let sorted_sides = sides.sort((a, b) => b - a);
  if (sorted_sides[0] < sorted_sides[1] + sorted_sides[2]) {
    return 1;
  } else {
    return 2;
  }
}
