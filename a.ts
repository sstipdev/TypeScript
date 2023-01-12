export type 이름 = string;
export interface 인터페이스 {}

// 문제

export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

export type ObjFunction = (a?: object) => void;
