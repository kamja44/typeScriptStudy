/**
 * Intersection
 *
 * 교집합 개념(And)
 */

interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: "감자",
  age: 20,
  phone: "010-010-010",
  address: "서울시",
};

// primitive 타입을 intersection으로 선언하면 never타입으로 선언된다.
// 존재할 수 가 없기 때문
type NumbeAndString = number & string;

// let numberAndString: NumbeAndString = never;
