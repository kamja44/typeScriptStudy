/**
 * Problems with Array in JS
 */
const number = [1, 2, 3, 4, "5"];

let strings: string[] = ["1", "2", "3"];

// strings.push(1); // Error

let stringsOrNumbersArray: (string | number)[] = [1, "2", 3, "4", 5];

let stringArrNumberArr: string[] | number[] = [1, 2, 3];
stringArrNumberArr = ["1", "2", "3"];

// 그냥 string 또는 number배열
let stringOrNumberArr: string | number[] = [1, 2, 3];
stringOrNumberArr = "3";

let boolsArr = [true, false, true];
boolsArr.push(false);

// boolsArr.push(1);

const onlyString = ["1", "2", "3"];
const onlyNumbers = [1, 2, 3];
for (let i = 0; i < onlyString.length; i++) {
  let item = onlyString[i];
}

for (let item of onlyNumbers) {
}

let number3 = onlyNumbers[0];

let number4 = onlyNumbers[8888]; // Error가 나와야 하지만 나오지 않음 => TS는 튜플이 아닌 이상 index를 고려하지 않음
