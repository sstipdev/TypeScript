/**
 * - protected 키워드는 private처럼 class {} 안에서만 사용이 가능하다
 * 확장성을 제공한다.
 *  private 키워드는 extends된 클래스에선 쓸순 없지만, protected는 쓸수 있음.
 *  protected, private는 공통적으로 자식들은 사용이 불가능하다.
 */

class User {
  protected x = 10;
}

class NewUser extends User {
  doThis() {
    this.x = 215;
  }
}

const user1 = new User();
const user2 = new NewUser();
user2.doThis();
console.log(user1, user2);

// static 키워드는 부모 class에만 직접부여되고, 자식에겐 물려주지 않는다.

class GetUser {
  private static x = 10;
  y = 20;
}
const child = new GetUser();

class UserInfo {
  static skill = "js";
  intro = `${UserInfo.skill}전문가`;
}

const userInfo1 = new UserInfo();
console.log(userInfo1);

UserInfo.skill = "ts";
const userInfo2 = new UserInfo();
console.log(userInfo2);

// 문제

class AddUser {
  private static x = 10;
  public static y = 20;

  static addOne(num: number) {
    AddUser.x += num;
  }

  static printX() {
    console.log(AddUser.x);
  }
}

console.log(AddUser.addOne(5));
AddUser.printX();

class Square {
  constructor(public width: number, public height: number, public color: string) {}
  draw() {
    let place = Math.random();
    let square = `<div style="position:relative; 
    top:${place * 400}px;
    left:${place * 400}px;
    width:${this.width}px;
    height:${this.height}px;
    background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

const square = new Square(50, 50, "blue");
square.draw();
square.draw();
square.draw();
square.draw();
