// 변수에 number or string 타입이 올 경우 Union Type 이라고 함
let 회원: number | string = 123;

let 회원들: (number | string)[] = [1, 2, "3"];

let 오브젝트: {
  a: string | number;
} = {
  a: 123,
};

// 이름이라는 변수에 어떤 타입이든 가능함 any 또는 unknown 이라는 타입도 있음
let 이름: any;

let 나이: string | number;
// union 타입에는 +1 이안됨 단독 number 또는 string 타입에만 +1 연산처리가 가능
나이 + 1;

type getType = string | undefined | number | boolean;
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: getType[] = [user, age, married];

let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "smith",
};

school.score[4] = false;
school.friend = ["lee", school.teacher];
