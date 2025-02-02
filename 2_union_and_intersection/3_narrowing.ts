/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */
// let numberOrString: number | string = "감자";
// numberOrString;

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// numberOrString.toFixed();

/**
 * Narrowing의 종류
 *
 * 1. Assignment Narrowing
 * 2. typeof Narrowing
 * 3. Truthiness Narrowing
 * 4. Equality Narrowing
 * 5. in operator Narrowing
 * 6. instanceof Narrowing
 * 7. discrimated union Narrowing (차별된 유니언 내로잉)
 * 8. exhaustivness checking
 */

// 1. Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numOrString: number | string = "아이유";
numOrString.toString();

// 2. typeof Narrowing
numOrString = Math.random() > 0.5 ? 1122 : "아이유";

if (typeof numOrString === "string") {
  numOrString;
} else {
  numOrString;
}

// 3. Truthiness Narrowing
let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];
if (nullOrString) {
  nullOrString;
} else {
  nullOrString;
}

// 4. Equality Narrowing
let numOrString2: number | string = Math.random() > 0.5 ? 1123 : "아이유";
let stringOrBool2: string | boolean = Math.random() > 0.5 ? "아이브" : true;

if (numOrString2 === stringOrBool2) {
  numOrString2;
  stringOrBool2;
} else {
  numOrString2;
  stringOrBool2;
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? "안유진" : null;

if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull;
} else {
  numberOrStringOrNull;
}

//5. in operator narrowing
interface Human {
  name: string;
  age: number;
}

inter;
