/**
 * Type vs Interface
 */

// Object를 서언할 때
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// function을 선언할 때
interface IFunction {
  (x: number, y: number): number;
}

type TFunciton = (x: number, y: number) => number;

/**
 * Type에선 할 수 있지만
 * interface에는 할 수 없는 것들
 */

// 1. primitive 타입 서언하기
type Name = string;

// 2. union 타입 선언하기
type UnionType = string | number;

// 3. primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type에선 할 수 없는 것들
 */

// interface merging => interface를 중첩하여 선언하면 모두 합쳐짐
interface IRectangle {
  height: number;
}
interface IRectangle {
  width: number;
}
let rectangle: IRectangle = {
  height: 300,
  width: 200,
};

// Error
// type TRectangle = {
//     height: number;
// }
// type TRectangle = {
//     width: number;
// }

/**
 * Interface Merging
 */
class Review {
  // 프로퍼티 => 인스턴스에 귀속됨
  getY = (x: number) => {
    return x;
  };

  // 메서드 => 프로토타입에 귀속됨
  getX(x: number) {
    return x;
  }
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  // getY: (y:string) => number; // Error 프로퍼티는 오버로딩이 안됨
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number; // 메서드로 선언하면 오버로딩이 됨
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    // return y; // Error
    return 1; // return 값을 number 타입으로 강제
  },
};
