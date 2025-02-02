/**
 * Defining Function
 */
// function printName(name) {
//   console.log(name);
// }

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1}와 ${person2}는 사귀고 있습니다.`;
}

console.log(returnTwoCouples("감자", "고구마"));
// returnTwoCouples(0, 1); // Error 1에서 에러가 안나는 이유는 0에서 에러가 발생했기 때문
// returnTwoCouples("감자"); // Error 인수 2개를 받아야 하기 때문
// returnTwoCouples("감자", "고구마", "토란"); // Error 인수 2개를 받아야 하기 때문

/**
 * Optional parameter
 * 옵셔널로 지정하면 해당 타입과 undefined가 될 수 있다는 것임
 * y?: number => y는 number or undefined 둘 중 하나임
 * 기본값으로 20을 넣어두면 값을 넣지 않아도됨 왜냐 => 20인 number가 기본값이기 때문
 */
function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}
console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}
console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `맛있는 ${x}`);
}
console.log(getInfiniteParameters("감자", "고구마", "연근"));
// console.log(getInfiniteParameters(1, 2, 3)); // Error args를 string으로만 받기로 했기 때문

/**
 * return Type
 */
function addTwoNumbers(x: number, y: number) {
  return x + y;
}
addTwoNumbers(10, 20);

function randomNumber() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}
randomNumber(); // return은 10 or '랜덤'으로 추론

function subtractTwoNumbers(x: number, y: number): number {
  // return "이게 되나요~?"; // Error => return type이 number이기 때문 이를 string으로 변경하면 에러 안남
  return x - y;
}

const subtracTwoNumbersArrow = (x: number, y: number): number => {
  return x - y;
};

/**
 * 특수 반환 타입
 *
 * void / never
 */
function doNotReturn(): void {
  // void = 반환하지 않는다.
  console.log("나는 반환을 안해용~");
  // return 3; // Error => void타입이기 때문
  return; // 반환하는게 없으니까 가능
}
doNotReturn();

// never 타입은 반환하는 상황 자체를 만들면 안됨
function neverEndingLoop(): never {
  while (true) {}
}

// 즉, 함수가 끝나지 않는 상황일때 never 타입을 반환한다.
function throwError2(): never {
  throw Error();
}
