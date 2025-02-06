/**
 * Unknown Type
 */

let anyValue: any;

anyValue = 24;
anyValue = "감자";
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = "감자";
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// // unknownType은 any와 unknown에만 할당이 가능하다.
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknown은 알 수 없는 것들을 구현할 수 없다.
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

function isString(target: unknown): target is string {
  return typeof target === "string";
}

let testVal: unknown;

if (isString(testVal)) {
  testVal;
}

/**
 * Union Type
 * - any를 제외하고는 모두 unknown으로 추론된다.
 */
type uOrString = unknown | string; // type = unknown
type uOrBoolean = unknown | boolean; // type = unknown
type uOrNumber = unknown | number; // type = unknown
type uOrAny = unknown | any; // type = any

/**
 * Intersection Type
 * - 모두 다른 타입(string, boolean emd)으로 추론된다. =>  무조건 상대 타입으로 추론됨
 */
type uAndString = unknown & string; // type = string;
type uAndBoolean = unknown & boolean; // type = booelan;
type uAndNumber = unknown & number; // type = number;
type uAndAny = unknown & any; // type = any;

/**
 * Operator 사용
 */

let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2
// number1 - number2
// number1 * number2
// number1 / number2

// unknown은 비교는 가능하지만 연산은 불가능하다.
number1 === number2;
number1 !== number2;
number1 == number2;
number1 != number2;
