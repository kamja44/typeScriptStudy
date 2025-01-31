/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합할 수 있는 수많은 방법 중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = "아이브";
stringOrBooleanType = true;

// stringOrBooleanType = undefined; // Error

type StringBoolNullType = string | boolean | null;

type StateTypes = "DONE" | "LOADING" | "ERROR";

let state: StateTypes = "DONE";
state = "LOADING";
//state = "INITIAL"; //Error

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let stringListOrBooleanList: StringListOrBooleanList = [
  "아이유",
  "김고은",
  "박소담",
];

stringListOrBooleanList = [true, false, false];

// stringListOrBooleanList = [
//     true,
//     '아이유'
// ]
// Error

// StrOrNumberList 처럼 타입을 지정해야 위의 주석된 리스트 처럼 작성이 가능하다.
type StrOrNumberList = (string | number)[]; // 스코프가 중요

let stringOrNumberList: StrOrNumberList = [1, 2, 3, "아이유", "레드벨벳"];

stringOrNumberList = [1, 2, 3];

stringOrNumberList = ["감자", "고구마"];

/**
 * Interface로 사용하는 union
 */

interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}
type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: "감자",
  age: 25,
  address: "대한민국",
};

console.log(animalOrHuman);

console.log(animalOrHuman.name);

console.log(animalOrHuman.age);

console.log(animalOrHuman.address);

animalOrHuman = {
  name: "오리",
  age: 9,
};

console.log(animalOrHuman);

console.log(animalOrHuman.name);

console.log(animalOrHuman.age);

// console.log(animalOrHuman.address); Error

let animalOrHuman2:
  | {
      name: string;
      age: number;
    }
  | {
      name: string;
      age: number;
      address: string;
    } = {
  name: "감자",
  age: 20,
  address: "대한민국",
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.address);

animalOrHuman2 = {
  name: "오리",
  age: 12,
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
// console.log(animalOrHuman2.address);

// 서로 관계가 없는 유니온을 선택하면 어떻게 되는가
type Person = {
  name: string;
  age: number;
};
type Cat = {
  braed: string;
  country: string;
};
type PersonCat = Person | Cat;

const personOrCat: PersonCat = {
  name: "감자",
  age: 20,
  braed: "시고르 자브종",
  country: "한국",
};

// 유니언은 합집합의 개념이다.
