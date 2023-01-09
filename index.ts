class Person {
  name: string;
  constructor(userName: string) {
    this.name = userName;
  }
  func(text: string) {
    console.log(`hello ${text}`);
  }
}

let person1 = new Person("");
let person2 = new Person("park");

person1.func("ss");

// 문제

class Car {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  tax(): number {
    return Math.floor(this.price * 0.1);
  }
}

const car = new Car("소나타", 3000);

class Word {
  num: number[];
  str: string[];
  constructor(...params) {
    let numbers: number[] = [];
    let strings: string[] = [];

    params.forEach((a) => {
      typeof a === "string" ? strings.push(a) : numbers.push(a);
    });

    this.num = numbers;
    this.str = strings;
  }
}

const obj = new Word("kim", 3, 5, "park");

console.log(obj.num);
console.log(obj.str);
