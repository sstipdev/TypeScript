let 이름: string = "kim";
let 나이: number = 20;
let marry: boolean = true;
let 회원들: string[] = ["kim", "park"];
let 멤버들: {
  member1: string;
  member2: string;
} = {
  member1: "kim",
  member2: "park",
};

// ts는 변수 생성시 타입스크립트가 해당 변수의 타입을 자동으로 부여해준다. 즉 일일히 타입을 지정해줄 필요는 없음
let 이름표 = "kim";
let 나이는 = 20;

let userName: string = "프론트";
let userAge: number = 20;

const musicInfo: {
  title: string;
  singer: string;
} = {
  title: "제목",
  singer: "가수",
};

const project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
