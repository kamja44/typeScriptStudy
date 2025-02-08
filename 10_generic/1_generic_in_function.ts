/**
 * Generic 함수에서 사용하기
 * - 매개변수의 타입(input, ouput)을 사용자가 입력하는 타입으로 유추해라
 *  - 타입을 변수화시킨다고 생각하면 됨
 */
function whatValue(value: any) {
  return value;
}

const value = whatValue("test");

function genericWhatValue<T>(value: T): T {
  // Generic 타입 1개를 받는다.
  // value는 T타입이 되며, 리턴도 T타입이다.
  return value;
}

const genericResult1 = genericWhatValue<string>("test");
// const genericResult2 = genericWhatValue<number>("test"); // Error number인데 string이 들어감

// Generic으로 타입 자동 유추
const genericResult2 = genericWhatValue("123"); // genericWhatValue(value: "123"): "123"
let genericResult3 = genericWhatValue("123"); // let genericResult3: string

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
    x,
    y,
    z,
  };
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
  123,
  true,
  "123"
);
const multipleGenericResult2 = multipleGenerics(123, true, "123");

function getTuple<X, Y>(val1: X, val2: Y) {
  return [val1, val2] as const; // as const를 이용해서 tuple로 반환함
}

const tuple = getTuple(true, 100);

// constructor 타입 Generic을 이용해서 선언하기

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

// Generic T는 constructor 타입을 상속받는다. any타입 배열을 인수로 받고 결과로 객체를 반환한다.
function instantiator<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}

console.log(instantiator(Idol, "아이유", 23));
console.log(instantiator(Car, "BMW", 2222));
