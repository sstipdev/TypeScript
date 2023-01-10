// Rest 파라미터를 쓰면 파라미터를 여러개 들어올수가 있음
function 함수(...a: number[]) {
  console.log(a);
}

함수(1, 2, 3, 54, 6, 6, 1, 23, 4, 5, 1);

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// destructuring 문법
const text = ["안녕", 100];
const [text1, text2] = ["안녕", 100];

const { student, age } = { student: true, age: 20 };

// 문제
let person = { student: true, age: 20 };

function perFunc({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

perFunc({ student: true, age: 23 });

function userInfo({ user, comment, admin }: { user: string; comment: number[]; admin: boolean }) {
  console.log(user, comment, admin);
}

userInfo({ user: "kim", comment: [1, 5, 4, 2], admin: true });

type Wine = (number | string | boolean)[];

function getWine([a, b, c]: Wine) {
  console.log(a, b, c);
}

getWine([40, "winw", false]);
