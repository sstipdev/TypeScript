var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Rest 파라미터를 쓰면 파라미터를 여러개 들어올수가 있음
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 2, 3, 54, 6, 6, 1, 23, 4, 5, 1);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
// destructuring 문법
var text = ["안녕", 100];
var _a = ["안녕", 100], text1 = _a[0], text2 = _a[1];
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
// 문제
var person = { student: true, age: 20 };
function perFunc(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
perFunc({ student: true, age: 23 });
function userInfo(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
userInfo({ user: "kim", comment: [1, 5, 4, 2], admin: true });
function getWine(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
getWine([40, "winw", false]);
