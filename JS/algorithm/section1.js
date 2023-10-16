// 세 수 중 최솟값
/* function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
console.log(solution(6, 7, 11));  //6
} */

// 삼각형 판별하기
/* function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) answer = "NO";
  return answer;
}
console.log(solution(110, 23, 35)); //NO */

