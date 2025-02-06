/**
 * Spread Operator
 */
const onylString = ["1", "2", "3", "4", "5"];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [...onylString];
const arr2 = [...onylString, ...onlyNumbers]; // arr2 => (string | number)[]
