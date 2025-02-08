/**
 * Interface
 * TypeScript에서 implements는 클래스가 특정 인터페이스(Interface)의 규격을 준수한다고 선언할 때 사용하는 키워드예요. 즉, 클래스가 인터페이스에 정의된 속성과 메서드를 모두 구현(implement)한다는 것을 TypeScript 컴파일러에게 알려주고, 컴파일 시점에 이를 강제(검증)하는 역할을 합니다.
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  dance() {}
}

let ori: any = new Dog("오리", 3);

/**
 * object is Animal라는 부분은 “이 함수가 true를 반환한다면, 전달된 object가 Animal 타입이라고 TypeScript 컴파일러가 신뢰하게 만들어라”라는 뜻을 담고 있어요.
 */
function instanceOfAnimal(object: any): object is Animal {
  return "jump" in object;
}
if (instanceOfAnimal(ori)) {
  ori;
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
  legsCounts: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCounts: number;

  constructor(name: string, age: number, legsCounts: number) {
    this.name = name;
    this.age = age;
    this.legsCounts = legsCounts;
  }

  // Animal
  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
    console.log("냐용");
  }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCounts: number;

  constructor(name: string, age: number, legsCounts: number) {
    this.name = name;
    this.age = age;
    this.legsCounts = legsCounts;
  }

  // Animal
  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
    console.log("냐용");
  }
}

interface WrongInterface1 {
  name: string;
}

interface WrongInterface2 {
  name: number;
}

// interface끼리 상속할 때 중복되는 프로퍼티가 없는지 체크
// class Person implements WrongInterface1, WrongInterface2 {
// name: string; // Error name은 string | number => never타입으로 추론됨
// name: number; // Error name은 string | number => never타입으로 추론됨
// }

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// constructor를 interface로 구현(타입화)
// 함수 타입과 동일하지만 앞에 new만 넣어주면 됨
interface IdolConstructor {
  new (name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
  return new Idol(name, age); // 이 코드와 아래 코드와 동일하다
  //   return new constructor(name, age);
}

console.log(createIdol(Idol, "아이유", 30));
