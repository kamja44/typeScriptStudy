/**
 * Function Type
 */
type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
  return ["감자", "고구마", "연근"].map(callback);
};

console.log(runner((x) => `맛있는: ${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
};

/**
 * Interface로 함수 타입 선언하기
 * - interface로 함수 타입을 선얼할 때는 :을 사용한다.
 * 
interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}
 */
interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
  return x * y;
};
