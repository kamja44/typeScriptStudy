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

interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: "안유진",
  age: 23,
};
let dog: Dog = {
  name: "오리",
  type: "요크셔테리어",
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

console.log("name" in human); // in 키워드를 이용하여 키값의 존재를 알 수 있음

if ("type" in humanOrDog) {
  humanOrDog; // dog
} else {
  humanOrDog; // human
}

// 6. instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "감자";

if (dateOrString instanceof Date) {
  dateOrString; // date
} else {
  dateOrString; // string
}

// 7. Discriminated Union Narrowing
interface Animal {
  type: "dog" | "human";
  height?: number;
  // 강아지의 종
  breed?: string;
}

let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 180,
      }
    : {
        type: "dog",
        breed: "요크셔 테리어",
      };

if (animal.type === "human") {
  animal.height;
} else {
  animal.breed;
  animal.height;
}

interface Human2 {
  type: "human";
  height: number;
}

interface Dog2 {
  type: "dog";
  breed: string;
}

interface Fish2 {
  type: "fish";
  length: number;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 180,
      }
    : Math.random() > 0.5
    ? {
        type: "dog",
        breed: "요크셔테리어",
      }
    : {
        type: "fish",
        length: 12,
      };

if (humanOrDog2.type === "human") {
  humanOrDog2;
} else {
  humanOrDog2;
}

// 8. Exhuastiveness Checking
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2;
    break;
  case "dog":
    humanOrDog2;
    break;
  case "fish":
    humanOrDog2;
    break;
  default:
    humanOrDog2; // human과 dog도 아니니 타입이 들어올 수 없기에 never타입이 됨

    const _check: never = humanOrDog2; // 타입이 추가될 경우 에러발생시킬 수 있음(기존에는 human2, dog2만 있었는데 fish2 추가)
    break;
}
