/**
 * readonly 프로퍼티
 */
class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yuJin = new Idol("안유진", 23);

yuJin.age = 32;
yuJin.name; //readonly는 불러오기만 가능
// yuJin.name = "감자"; // Error name 프로퍼티는 readonly!!
