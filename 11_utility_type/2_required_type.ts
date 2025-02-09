/**
 * Required Type
 * - 모든 프로퍼티를 필수값으로 만듬
 */
interface Dog {
  name: string;
  age?: number;
  country?: string;
}

const requiredDog: Dog = {
  name: "모찌",
};
const requiredDog2: Required<Dog> = {
  name: "모찌",
  age: 1,
  country: "한국",
};
