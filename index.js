// 변수에 number or string 타입이 올 경우 Union Type 이라고 함
var 회원 = 123;
var 회원들 = [1, 2, "3"];
var 오브젝트 = {
    a: 123,
};
// 이름이라는 변수에 어떤 타입이든 가능함 any 또는 unknown 이라는 타입도 있음
var 이름;
var 나이;
// union 타입에는 +1 이안됨 단독 number 또는 string 타입에만 +1 연산처리가 가능
나이 + 1;
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var school = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "smith",
};
school.score[4] = false;
school.friend = ["lee", school.teacher];
