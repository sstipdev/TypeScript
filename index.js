// interface는 중복선언이 가능, type은 중복선언이 불가함
var nemo = { color: "red", width: 100 };
var stu = {
    name: "park",
};
var tea = {
    name: "kim",
    age: 20,
};
var cat = {
    name: "beria",
    age: 50,
};
var item = {
    brand: "samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var cart = [
    {
        product: "청소기",
        price: 700,
    },
    {
        product: "삼다수",
        price: 800,
    },
];
var card = [
    {
        product: "청소기",
        price: 7000,
        card: false,
    },
];
var pm = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
