/**
 * Override
 *  => 자식에서 부모의 메서드를 덮어쓴다.
 */
class Parent {
  shout(name: string) {
    return `${name}님 안녕하세요!`;
  }
}

class WrongChild extends Parent {
  // Override 규칙 3가지
  // 1. 부모 메서드와 반환 타입이 일치해야 함 => 부모가 string을 반환하기에 string을 반환해야함
  // 2. 부모 메서드에 필수인 파라미터들이 존재해야 한다. => 부모에 파라미터가 있으니 자식에도 파라미터가 있어야함
  // 3. 부모 메서드에서 optional인 파라미터들이 자식에서 필수로 지정되면 안된다.
  // shout(){
  // }
}

class Child extends Parent {
  shout(name: string, me?: string): string {
    if (!me) {
      return super.shout(name);
    } else {
      return super.shout(name) + `내 이름은 ${me}야!`;
    }
  }
}

const child = new Child();
console.log(child.shout("아이유"));
console.log(child.shout("아이유", "감자"));

/**
 * 속성 override
 * 넓은 타입에서 좁은 타입으로 좁혀서(Narrowing) 필드(속성)을 덮어씌우는건 가능
 */

class PropertyParent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// class PropertyChild extends PropertyParent {
//   name: number;

//   constructor(name: number) {
//     this.name = name;
//   }
// }

class PropertyParent2 {
  name?: string | number; // optional이든 아니든 상관없음

  constructor(name: string | number) {
    this.name = name;
  }
}

class PropertChild2 extends PropertyParent2 {
  name: string;

  constructor(name: string) {
    super(name);
    this.name = name;
  }
}

const child2 = new PropertChild2("안녕");
child2.name;
