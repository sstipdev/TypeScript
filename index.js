// 미리 들어올수 있는 자료를 정의해두는 타입이 리터럴 타입
var 이름;
이름 = 123;
var me;
me = "solo";
function fuc(a) { }
fuc("hello");
function game(text) {
    return [text];
}
var file = {
    name: "kim",
};
function myFuc(a) { }
myFuc(file.name); // < 'kim' 이라는 파라미터만 받게끔 되어있기 때문에 자료를 참고하는 변수를 넣을경우 에러.
