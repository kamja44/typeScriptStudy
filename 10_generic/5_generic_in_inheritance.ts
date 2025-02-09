/**
 * Generic in Inheritance
 */

class BaseCache<T> {
  data: T[] = [];
}

class StringCache extends BaseCache<string> {}

const stringCache = new StringCache();
stringCache.data;

// 자식 class에서 generic을 받아 부모에게 전달 가능
class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
}

const genericChild = new GenericChild<string, string>("error");
genericChild.data;
genericChild.message;

/**
 * 제네릭을 inheritance
 * - 제네릭을 상속받으면 상속받은 타입이 필수로 존재하면 타입을 만족한다고 본다.
 * - 즉 아래 예제에서 name만 있으면 만족
 */

interface BaseGeneric {
  name: string;
}
class Idol<T extends BaseGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

const yuJin = new Idol({
  name: "안유진",
  age: 20,
});

/**
 * keyof 함께 사용하기
 */
const testObject = {
  a: 1,
  b: 2,
  c: 3,
};

// O객체의 모든 키들을 가져온걸 K로 명명(저장)한다.
function objectParser<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const val = objectParser(testObject, "a");

/**
 * Ternary
 * 1 === 2 ? true : false
 *
 * 3항연산자를 ternary라고 부름 이를 extends를 이용하여 구현
 */
class Idol2 {
  type?: string;
}
class FemaleIdol extends Idol2 {
  type: "Female Idol" = "Female Idol";
}

class MaleIdol extends Idol2 {
  type: "Male Idol" = "Male Idol";
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol();
