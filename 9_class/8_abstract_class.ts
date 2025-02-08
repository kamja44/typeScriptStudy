/**
 * Abstract class
 * - Instance화를 하지 못하게함
 */

abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// abstract class는 직접적으로 선언이 불가능함
// const modelWithId = new ModelWithId(123);

// 무조건 상속받아서 사용
// 공유되는 프로퍼티, 메서드를 상속받을 때 추상 클래스를 사용한다.
// 즉, 프로퍼티 메서드의 구현을 강제할 수 있다.

class Product extends ModelWithId {}

const product = new Product(1);

product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
  shout(name: string): string {
    return "야옹";
  }
}
