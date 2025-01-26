/**
 * JS의 문제점
 *
 * dynamicall typed
 */
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 2));
console.log(add(1, "2"));
console.log(add("1", "2"));

// typeof runtime에 체크를 할 수 있다.
function addTpyeSafe(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    throw new Error("num1 and num2 must be numbers");
  }
}
console.log(addTpyeSafe(1, 2));
console.log(addTpyeSafe(1, "2"));
