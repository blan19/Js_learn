let arr = [1, 2, 5];
function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => Infinity); //큰 숫자로 배열 초기화(최소값으로 바꿔주기위해)
  dy[0] = 0; //0원 거슬러주는것은 0개 필요
  //i는 동전의 종류만큼 돈다
  for (let i = 0; i < coin.length; i++) {
    //i번째 금액부터 돈다. 거슬러줄 돈이 m
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1); //j를 거슬러줄 때 최소개수, 더 작은 값으로 배열값 바꾸기
    }
  }
  answer = dy[m];
  return answer;
}

console.log(solution(15, arr));
