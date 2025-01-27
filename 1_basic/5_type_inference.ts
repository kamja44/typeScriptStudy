/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = "string";
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = "string"; // => error

// const를 이용하여 타입을 추론하면 더 구체적인 타입 추론이 가능하다.
const constStringType: "const string" = "const string";
const constBooleanType: true = true;

let yuJin = {
  name: "안유진",
  age: 2003,
};

const yuJin2 = {
  name: "안유진",
  age: 2003,
};

yuJin2.name = "감자";
console.log(yuJin2);

// 객체의 경우 const로 선언해도 구체적인 타입 추론이 불가능하다.
// 객체의 경우 casting을(as) 이용하여 구체적인 타입을 추론한다.
const yujin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

// yujin3.name = "감자"; // => const로 타입 캐스팅을 진행했기에 안유진만 가능
console.log(yujin3.name); // name: 안유진
console.log(yuJin2.name); // name: string

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5", "6"];

numbers.push(6);
// numbers.push("6"); error

const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[6]; // ts는 array의 길이 이상의 값을 가져오는지 모른다.

// tuple => [1, 3]으로 구성된 리스트, readonly
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10; // error
// twoNumbers.push(100) // error
const first = twoNumbers[0]; // 1
// const first2 = twoNumbers[3]; // error 튜플은 array의 길이 이상의 값을 접근하면 에러가 발생한다.
