// 미리 들어올수 있는 자료를 정의해두는 타입이 리터럴 타입

let 이름: 123;
이름 = 123;

let me: "head" | "solo";
me = "solo";

function fuc(a: "hello"): void {}

fuc("hello");

function game(text: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return [text];
}

var file = {
  name: "kim",
} as const;

function myFuc(a: "kim") {}
myFuc(file.name); // < 'kim' 이라는 파라미터만 받게끔 되어있기 때문에 자료를 참고하는 변수를 넣을경우 에러.
