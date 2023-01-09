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
