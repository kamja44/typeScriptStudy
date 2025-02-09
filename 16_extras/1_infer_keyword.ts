/**
 * Infer Keyword
 *
 * - 유추하는 키워드(타입을 추가로 유추함)
 *
 * (Inferring Type in Conditional Type)
 *
 * Infer Keyword는 Conditional Type에서만 사용 가능한 키워드다.
 * 그러니 extends 키워드를 사용했을 때 extend 한 대상에서 타입을 한번 더 추론하는 역할르 한다.
 */

// 1. 가장 많이 사용하는 예제
// Flattening => Array를 벗겨낼 때
// string[] => string
// string[][] => string[]
type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType : Type; // ElementType을 추론할 것임
// array안의 타입을 추론하여 사용함!
type Flatten2<Type> = Type extends (infer ElementType)[] ? ElementType : Type;
// Flatten1과 Flatten2는 같은 코드!

type StringArray = Flatten<string[]>; // type StringArray = string
type NumberArray = Flatten<number[]>; // type NumberArray = number
type TwoDArray = Flatten<boolean[][]>; // type TwoDArray = boolean[]

// 2. Return Type 추론
type InferReturnType<Type> = Type extends (...args: any[]) => infer ReturnType
  ? ReturnType
  : Type;

type NumberArray2 = InferReturnType<number[]>; // number[]

type StringFunc = InferReturnType<() => string>;
type NumberFunc = InferReturnType<() => number>;
