// 함수에서 void는 함수 내 리턴이 없을때 void 타입을 지정할경우 함수내에서 return 사용불가
// 타입이 지정된 파라미터는 함수 사용할때 파라미터를 필수로 사용해야함 안쓰면 에러남
// 아니면 함수가 정의된 파라미터에 변수? 로 지정해줄 경우 해당 파라미터는 옵션임 선택사항
// x? < 옵셔널 체이닝인데 정확히 x :number | undefined 와 같음
function rqedq(x?: number): void {
  1 + 1;
}

rqedq();

function add(x: number | string): void {
  // console.log(x + 3);
}

function hello(text?: string) {
  if (text) {
    console.log("하이" + text);
  } else {
    console.log("공백뒤짐");
  }
}

function stringDigits(a: string | number): number {
  console.log(String(a).length);
  return String(a).length;
}

function marryRandom(money: number, house: boolean, like: string): string | void {
  let score: number = 0;
  score += money;
  money / 100 ? (score += 1) : score;
  house === true ? (score += 500) : score;
  like === "상" ? (score += 100) : null;
  console.log(score >= 600 ? "결혼가능" : null);
  console.log(score);
}

marryRandom(200, false, "상");
