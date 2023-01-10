// in 키워드로 object narrowing 가능 속성명 in 오브젝트자료

type Fish = { swim: string };
type Bird = { fly: string };

function fuc(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

// 오브젝트 instanceof 부모class

let date = new Date();
if (date instanceof Date) {
  console.log(1);
}

type Car = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};

function 함수(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("the car is " + x.color);
  } else {
    console.log("the bike is " + x.color);
  }
}
