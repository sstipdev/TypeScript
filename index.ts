type Fuctype = (a: string) => number;

let func: Fuctype = function (a) {
  return 2;
};

function func1(a: Function) {
  a();
}

function func2() {}

func1(func2);

type User = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let userInfo: User = {
  name: "kim",
  age: 20,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("hello");
  },
};

type CutType = (a: string) => string;

let cutZero: CutType = function (a) {
  let text: string;
  if (a[0] === "0") {
    text = a.replace("0", "");
    return text;
  }
  return a;
};

console.log(cutZero("0123"));

function removeDash(x: string): number {
  let result = x.replace("/-/g", "");
  return parseFloat(result);
}

console.log(removeDash("454-489-48"));

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

console.log(만들함수("010-1111-2222", cutZero, removeDash));
