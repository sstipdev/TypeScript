var Person = /** @class */ (function () {
    function Person(userName) {
        this.name = userName;
    }
    Person.prototype.func = function (text) {
        console.log("hello ".concat(text));
    };
    return Person;
}());
var person1 = new Person("");
var person2 = new Person("park");
person1.func("ss");
// 문제
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return Math.floor(this.price * 0.1);
    };
    return Car;
}());
var car = new Car("소나타", 3000);
var Word = /** @class */ (function () {
    function Word() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        params.forEach(function (a) {
            typeof a === "string" ? strings.push(a) : numbers.push(a);
        });
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
