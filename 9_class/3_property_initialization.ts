/**
 * Property Initialization
 */

class Person {
  // 일반적인 필수값 선언법
  name: string;

  // 초기값 제공 선언방법
  age: number = 23; // 선언과 동시에 초기화

  // optional 값 선언방법
  pet?: string; // pet을 넣고 싶다면 constructor에서 초기화

  // type of undefined 선언방법
  petAge: number | undefined;

  constructor(name: string) {
    this.name = name;
  }
}

class RouteStack {
  stack!: string[]; // stack은 나중에 초기화가 된다고 보장!!

  constructor() {
    this.initialize();
  }

  initialize() {
    this.stack = [];
  }
}

const routeStack = new RouteStack();
console.log(routeStack);
