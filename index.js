/**
 * - class에서 쓰는 public 키워드
 * 1.public 붙으면 모든 자식들이 이용이 가능함
 *
 * - class에서 쓰는 private 키워드
 * 1.private 붙으면 class안에서만 수정, 이용 가능함 외부에선 사용 및 수정 불가
 * 정말 변경해야될 상황이 온다면, 메서드 함수를 하나 새로 생성하여서 변경이 가능함
 */
var User = /** @class */ (function () {
    function User(a) {
        this.familyName = "kim";
        this.name = this.familyName + a;
    }
    User.prototype.changeName = function (newName) {
        this.familyName = newName;
    };
    return User;
}());
var user = new User("in");
user.changeName("choi");
console.log(user);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    return Person;
}());
var child = new Person("1541");
console.log(child);
