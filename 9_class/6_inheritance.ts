/**
 * Inheritance
 */
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parent: ${this.name}이 춤을 춥니다.`);
  }
}

class Child extends Parent {
  age: number;
  constructor(name: string, age: number) {
    super(name);

    this.age = age;
  }

  sing() {
    console.log(`child: ${this.name}이 노래를 부릅니다.`);
  }
}

const codefactory = new Parent("코드팩토리");
const ahri = new Child("아리", 12);

codefactory.dance();
// codefactory.sing();

ahri.dance();
ahri.sing();

// 자식은 부모 타입이 될 수 있지만, 부모는 자식 타입이 될 수 없다.
let person: Parent; // class이자 부모 타입
person = codefactory;
person = ahri; // child이지만 parent를 상속받았기에 child가 parent type이 될 수 있음 그래서 할당되는것

let person2: Child;
person2 = ahri;
// person2= codefactory; // Error => 부모는 자식 타입이 될 수 없음

/**
 * optional 프로퍼티를 유의하자
 * - ts는 구조가 비슷하면 같은 타입으로 봄
 */

class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

const cf2 = new Parent2("코드팩토리");
const ahri2 = new Child2("아리", 20);

let child: Child2;

child = ahri2;

// 부모가 자식 타입이 되었음 => age가 optional이기 때문
// 만일 age가 없으면 parent와 child 구조가 같기에 할당 가능
child = cf2;
