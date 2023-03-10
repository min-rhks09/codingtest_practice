//10 문제씨 정리(내가 푼 방식 좋아요 많은 방식)

// 1.두 수의 차
function solution(num1, num2) {
  return(num1 - num2)
}

// 화살표 함수를 이용하여 간단하게
const solution = (num1, num2) => num1 - num2

// 2.두 수의 곱
function solution(num1, num2) {
  let answer = num1 * num2;
  return answer;
};

//화살표 함수 이용
const solution = (num1, num2) => num1 * num2

//이중 for문 이용
function solution(num1, num2) {
  var ans = 0;

  for (let i = 1; i <= num1; i++){
      for (let j = 1; j <= num2; j++){
          ans = ans + 1;
      }
  }

  return ans;
}

//3. 두 수의 합
function solution(num1, num2) {
  const answer = num1 + num2
  return answer;
}

// 화살표 함수 이용
const solution = (num1, num2) => num1 + num2

//4. 두 수의 나눗셈
function solution(num1, num2) {
  let answer = Math.floor((num1/num2)*1000);
  
  return answer;
}

//trunc 이용(이외에도 ~~연산자, parseInt등 활용)
function solution(num1, num2) {
  return Math.trunc(num1 / num2 * 1000);
}

//5.나이 출력
const solution = (age) =>(
  2022 - age + 1
)


//getFullYear 활용하기
function solution(age) {
    return new Date().getFullYear() - age + 1;
}

