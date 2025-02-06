/**
 * Property Check
 * 초과속성 검사
 */
type TName = {
  name: string;
};

type TAge = {
  age: number;
};

const iu = {
  name: "아이유",
  age: 30,
};

const testName: TName = iu;
const testAge: TAge = iu;

/**
 * 초과 속성 검사 우회 방법
 *
 */
// 1. 객체 리터럴이 아닌 변수에 저장한 후 할당
interface Product {
  name: string;
  price: number;
}
const extraProduct = {
  name: "laptop",
  price: 2000,
  brand: "apple",
};
const product: Product = extraProduct;

// 2. Type Assertion(타입 단언) 사용
// interface Person {
//   name: string;
//   age: number;
//   gender: string;
// }
// const person = { name: "Alice", age: 25, gender: "female" } as Person; // ✅ 오류 없음

// 3. Index Signature 사용
interface Person {
  name: string;
  age: number;
  [key: string]: any; // 추가 속성 허용
}

const person: Person = {
  name: "Alice",
  age: 25,
  gender: "female", // ✅ 오류 없음
};
