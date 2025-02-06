/**
 * Loopholes of Any
 */
let number: number;
number = 10;
// number.toUpperCase();

(number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};

let args1: any = "감자";
let args2: any = true;

multiplyTwo(args1, args2);
// multiplyTwo("감자", true);

let iu: any = {
  name: "아이유",
  age: 30,
};
// any로 선언하면 자동완성이 되지 않음 즉, iu.name iu객체에 name이라는 프로퍼티가 존재하는지 알 수 없음

const callbackRunner = (x: number, y: number, callback: any) => {
  // 코드에 오류가 발생해도 알 수 없음 즉, any 타입은 사용을 지양해야 한다.
  return callback(x);
};

const callback = (x: number, y: number) => {
  return x * y;
};

console.log(callbackRunner(5, 4, callback));
