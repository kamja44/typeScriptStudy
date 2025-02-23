/**
 * Method에서 Generic 사용하기
 */
class Idol<T> {
  id: T;
  name: string;

  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello<Time>(logTime: Time) {
    return `[${logTime}] 안녕하세요! 제 이름은 ${this.name}이고 ID는 ${this.id}입니다.`;
  }
}

const yuJin = new Idol("a999", "안유진");

console.log(yuJin.sayHello("2025")); // Time type = string;
console.log(yuJin.sayHello(2025)); // Time type = number

class Message<T> {
  sayHello<Time>(logTime: Time, message: T) {
    console.log(`logTime: ${typeof logTime} / message : ${typeof message}`);
  }
}
const message = new Message<string>();
message.sayHello<number>(2000, "안녕!");

// 클래스의 generic과 메서드의 generic이 중복 선언되면 메서드의 generic을 따라간다.
// 중복되게 쓰지 않는게 젤 좋음
class DuplicatedGenericName<T> {
  sayHello<T>(logTime: T) {
    console.log(`logTime: ${typeof logTime}`);
  }
}
const duplicate = new DuplicatedGenericName<string>();

duplicate.sayHello<number>(123);
