var Name = "kim";
Name = "123";
console.log(Name);
// 함수에도 타입지정이 가능함
function multi(x) {
    return x * 2;
}
var john = [123, false];
var kim = { name: "hi" };
// class에서도 타입지정이 가능
var UserList = /** @class */ (function () {
    function UserList(name) {
        this.name = name;
    }
    return UserList;
}());
