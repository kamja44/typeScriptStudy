/**
 * Optional and Undefined Property
 */

interface Dog {
  name: string;
  age: number;
  // 종을 모르면 undefined를 넘겨도 된다.
  breed?: string;
}

const byulE: Dog = {
  name: "별이",
  age: 12,
  breed: "미니핀",
};

const ori: Dog = {
  name: "오리",
  age: 3,
};

interface Cat {
  name: string;
  age: number;
  breed?: string | undefined; // optional과 undefined의 차이점
}

// optional로 만들어 주지 않으면 프로퍼티를 무조건 선언해야 한다.
const nabi: Cat = {
  name: "나비",
  age: 8,
  breed: undefined,
};
