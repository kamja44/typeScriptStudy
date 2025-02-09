/**
 * Class Decorator
 * - 코드의 작성을 줄일 수 있음
 */

@Test // class의 필드들을 바로 받아올 수 있다.
@Frozen
@LogTest("production")
@ChangeClass
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function Test(constructor: Function) {
  console.log(constructor); // [class Idol] 출력
}

// Forzen decorator를 사요함으로써 객체를 얼릴 수 있음
function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const yuJin = new Idol("안유진", 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)));

// decorator factory
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor}가 실행됐습니다.`);
  };
}

console.log("--------------------------------");

const wonYoung = new Idol("장원영", 22);
console.log(wonYoung);

function ChangeClass<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    groupName = "아이브";

    constructor(...params: any[]) {
      super(...params);

      console.log("constructor instantiated");
    }
  };
}
