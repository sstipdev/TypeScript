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
