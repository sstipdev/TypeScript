// type 지정이 너무 길경우 type alias(type 키워드)를 쓰면 된다.
var aniaml;
var 동물 = {
    name: "kim",
    age: 20,
};
var friend = {
    name: "ms",
};
// type 키워드에 readonly를 지정해주었으나 변경은됨 실행까지 막지는 않으나 터미널에 에러를 발생 시켜줌
friend.name = "hi";
console.log(friend.name);
var position = {
    x: 20,
    y: 20,
};
var table = {
    size: 20,
    position: [12, 5],
};
var info = {
    name: "ms",
    phone: 112,
};
var user = {
    name: "ji",
    phone: 119,
    child: true,
};
