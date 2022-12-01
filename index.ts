// type 지정이 너무 길경우 type alias(type 키워드)를 쓰면 된다.

type Aniaml = string | number | undefined;
let aniaml: Aniaml;

type 동물들 = { name: string; age: number };
let 동물: 동물들 = {
  name: "kim",
  age: 20,
};

// typescript에선 객체의 키 값변경 되는 부분을 readonly 를 통해 막을수 있다 (사실 실행은 되나 에러 뜸)
type Friend = {
  readonly name: string;
};
const friend: Friend = {
  name: "ms",
};

// type 키워드에 readonly를 지정해주었으나 변경은됨 실행까지 막지는 않으나 터미널에 에러를 발생 시켜줌
friend.name = "hi";
console.log(friend.name);

// Type 키워드를 union type으로 합치기가능 ( 변수처럼 사용하면 됨 )
type Name = string;
type Age = number;
type Person = Name | Age;

// &(And) 연산자로 Object 타입을 하나로 합칠수가 있다. js에서는 && 이나 ts에선 &
// type 키워드는 같은 이름의 type을 재정의가 불가능하다 js의 const 키워드랑 비슷하다고 보면 됨
type PositionX = {
  x: number;
};
type PositionY = {
  y: number;
};
type NewType = PositionX & PositionY;

let position: NewType = {
  x: 20,
  y: 20,
};

//

type Table = {
  color?: string;
  size: number;
  readonly position: number[];
};

const table: Table = {
  size: 20,
  position: [12, 5],
};

type Info = {
  name: string;
  phone: number;
  email?: string;
};
type User = {
  child: boolean;
};
type NewUser = Info & User;

const info: Info = {
  name: "ms",
  phone: 112,
};

const user: NewUser = {
  name: "ji",
  phone: 119,
  child: true,
};
