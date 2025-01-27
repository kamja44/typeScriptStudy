/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 Ts에 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year: number;
};

const yuJin: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

interface IdolOptional {
  name: string;
  year?: number;
}
const yuJin4: IdolOptional = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface는 객체의 구조를 정의하는데 특화되어 있음
 * - 객체를 정의할 떄 주로 사용하며, 클래스와 함꼐 구현하는데 자주 사용됨
 *
 * type은 interface보다 유연
 * - primitive 타입(기본 타입), union 타이브 tuple 등을 포함한 다양한 타입 정의 가능능
 */
