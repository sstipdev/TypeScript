export { 이름, 인터페이스, Car, Bike } from "./a";

// 문제ㄴㄴ
let 빠방이: Car = { wheel: 4, model: "Sonata" };

import { ObjFunction } from "./a";

let 함수: ObjFunction = function (a) {
  console.log(a);
};

함수({ abc: "안뇽" });

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
