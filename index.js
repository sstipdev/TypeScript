// 변수타입이 불확실하다면 Narrowing 문법으로 처리해줘야함
function 함수(x) {
    if (typeof x === "string") {
        return x + 1;
    }
    return x + 1;
}
console.log(함수("1"));
function 내함수(x) {
    var arr = [];
    //   if (typeof x === "number") {
    //     return (arr[0] = x);
    //   }
    // 또는 narrowing문법이 싫다면 assertion 문법으로 아래처럼도 가능
    arr[0] = x;
    // as 문법의 용도는 narrowing 할때 사용함 (복잡한 유니온타입을 하나의 타입으로 지정하고 싶을때)
    // 즉 아래처럼 문법 작성하면 뒤짐
    // let userName:string = "user";
    // userName as number
    // as 문법은 버그추적이 안됨 정말 필요할때만 써야함
}
function 변환(a) {
    var arr = [];
    a.forEach(function (a) {
        if (typeof a === "string") {
            arr.push(Number(a));
            console.log(arr);
        }
        else {
            arr.push(a);
            console.log(arr);
        }
    });
}
변환(["1"]);
var chul = {
    subject: "math",
};
var young = {
    subject: ["science", "english"],
};
var min = {
    subject: ["science", "art", "korean"],
};
function getData(a) {
    if (typeof a.subject === "string") {
        console.log(a.subject);
        return a.subject;
    }
    else if (Array.isArray(a.subject)) {
        console.log(a.subject[a.subject.length - 1]);
        return a.subject[a.subject.length - 1];
    }
    else {
        console.log("ㅂ2");
        return "ㅂ2";
    }
}
getData({ subject: ["ㅁㅁㅁ", "ㄴㄴㄴ", "ㅇㅇㅇ"] });
