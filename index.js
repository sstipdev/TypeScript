var func = function (a) {
    return 2;
};
function func1(a) {
    a();
}
function func2() { }
func1(func2);
var userInfo = {
    name: "kim",
    age: 20,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("hello");
    },
};
var cutZero = function (a) {
    var text;
    if (a[0] === "0") {
        text = a.replace("0", "");
        return text;
    }
    return a;
};
console.log(cutZero("0123"));
function removeDash(x) {
    var result = x.replace("/-/g", "");
    return parseFloat(result);
}
console.log(removeDash("454-489-48"));
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
console.log(만들함수("010-1111-2222", cutZero, removeDash));
