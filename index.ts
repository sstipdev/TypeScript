// type 키워드를 통해 타입을 지정할수도 있음
type test = string | number;

let Name: test = "kim";

Name = "123";
console.log(Name);

// 함수에도 타입지정이 가능함
function multi(x: number): number {
  return x * 2;
}

// array에 쓸수있는 tuple(튜플) 타입 첫번째는 무조건 넘버 두번째는 불리언으로
type Member = [number, boolean];
let john: Member = [123, false];

// Object에 타입 지정 ( 그런데 옵젝에 타입지정해야할 속성이 너무 많을 경우 싸잡아서도 가능 )
type User = {
  [key: string]: string;
};
let kim: User = { name: "hi" };

// class에서도 타입지정이 가능
class UserList {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
