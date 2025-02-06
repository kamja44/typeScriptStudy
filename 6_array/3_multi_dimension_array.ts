/**
 * Multi Dimension Array
 */
/**
 * 1.
 * [1,2,3]
 * 2.
 * [
 *  [1,2,3],
 *  [1,2,3]
 * ]
 * 3.
 * [
 *  [
 *      [1,2,3],
 *      [1,2,3]
 *  ]
 * ]
 */
const num2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const string2DArr = [
  // const string2DArr: string[][]로 추론됨
  ["1", "2", "3"],
  ["4", "5", "6"],
];

const strAndNumber: (number | string)[][] = [
  [1, 2, "3"],
  [4, "5", 6],
];

let strArrOrNumberArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
strArrOrNumberArr = [["1", "2", "3"]];

for (let arr of num2DArr) {
  // let arr: number[]
  for (let item of arr) {
    // let item: number
  }
}
