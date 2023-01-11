/**
 * - class에서 쓰는 public 키워드
 * 1.public 붙으면 모든 자식들이 이용이 가능함
 *
 * - class에서 쓰는 private 키워드
 * 1.private 붙으면 class안에서만 수정, 이용 가능함 외부에선 사용 및 수정 불가
 * 정말 변경해야될 상황이 온다면, 메서드 함수를 하나 새로 생성하여서 변경이 가능함
 */

class User {
  name: string;
  private familyName: string = "kim";
  constructor(a: string) {
    this.name = this.familyName + a;
  }
  changeName(newName: string) {
    this.familyName = newName;
  }
}

const user = new User("in");
user.changeName("choi");
console.log(user);

class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

const child = new Person("1541");
console.log(child);
