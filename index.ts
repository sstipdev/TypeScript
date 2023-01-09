// interface는 중복선언이 가능, type은 중복선언이 불가함

// interface 의 장점 : extends로 복사가능

interface Square {
  color: string;
  width: number;
}

let nemo: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let stu: Student = {
  name: "park",
};

let tea: Teacher = {
  name: "kim",
  age: 20,
};

// type 키워드로도 가능함 인터섹션 교차 타입
// 왼쪽, 오른쪽 둘다 만족해주는 타입을 만들어 달라
type Animal = {
  name: string;
};

type Cat = {
  age: number;
} & Animal;

let cat: Cat = {
  name: "beria",
  age: 50,
};

// 문제

interface Item {
  brand: string;
  serialNumber: number;
  model: string[];
}

const item: Item = {
  brand: "samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Cart {
  product: string;
  price: number;
}

interface Card extends Cart {
  card: boolean;
}

const cart: Cart[] = [
  {
    product: "청소기",
    price: 700,
  },
  {
    product: "삼다수",
    price: 800,
  },
];

const card: Card[] = [
  {
    product: "청소기",
    price: 7000,
    card: false,
  },
];

interface PMresult {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

const pm: PMresult = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
