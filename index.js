/**
 * - protected 키워드는 private처럼 class {} 안에서만 사용이 가능하다
 * 확장성을 제공한다.
 *  private 키워드는 extends된 클래스에선 쓸순 없지만, protected는 쓸수 있음.
 *  protected, private는 공통적으로 자식들은 사용이 불가능하다.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 215;
    };
    return NewUser;
}(User));
var user1 = new User();
var user2 = new NewUser();
user2.doThis();
console.log(user1, user2);
// static 키워드는 부모 class에만 직접부여되고, 자식에겐 물려주지 않는다.
var GetUser = /** @class */ (function () {
    function GetUser() {
        this.y = 20;
    }
    GetUser.x = 10;
    return GetUser;
}());
var child = new GetUser();
var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this.intro = "".concat(UserInfo.skill, "\uC804\uBB38\uAC00");
    }
    UserInfo.skill = "js";
    return UserInfo;
}());
var userInfo1 = new UserInfo();
console.log(userInfo1);
UserInfo.skill = "ts";
var userInfo2 = new UserInfo();
console.log(userInfo2);
// 문제
var AddUser = /** @class */ (function () {
    function AddUser() {
    }
    AddUser.addOne = function (num) {
        AddUser.x += num;
    };
    AddUser.printX = function () {
        console.log(AddUser.x);
    };
    AddUser.x = 10;
    AddUser.y = 20;
    return AddUser;
}());
console.log(AddUser.addOne(5));
AddUser.printX();
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var place = Math.random();
        var square = "<div style=\"position:relative; \n    top:".concat(place * 400, "px;\n    left:").concat(place * 400, "px;\n    width:").concat(this.width, "px;\n    height:").concat(this.height, "px;\n    background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var square = new Square(50, 50, "blue");
square.draw();
square.draw();
square.draw();
square.draw();
