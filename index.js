// in 키워드로 object narrowing 가능 속성명 in 오브젝트자료
function fuc(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
}
// 오브젝트 instanceof 부모class
var date = new Date();
if (date instanceof Date) {
    console.log(1);
}
function 함수(x) {
    if (x.wheel === "4개") {
        console.log("the car is " + x.color);
    }
    else {
        console.log("the bike is " + x.color);
    }
}
