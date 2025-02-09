/**
 * Accessor Decorator
 * - method decorator와 똑같음
 */
class Rectangle {
  #height: number;
  #width: number;

  constructor(height: number, width: number) {
    this.#height = height;
    this.#width = width;
  }

  @Configurable(false)
  get height() {
    return this.#height;
  }

  @Configurable(false)
  get width() {
    return this.#width;
  }
}

// target => 1. static method에 데코레이팅을 할 경우 생성자 함수
// target => 2. instance method에 데코레이팅 할 경우 인스턴스의 prototype
// propertyKey => 메서드의 이름
// descripter => property descriptor
function Configurable(configurable: boolean) {
  return function (
    target: any,
    propertyKEy: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = configurable;
  };
}

const rectangle = new Rectangle(100, 200);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
