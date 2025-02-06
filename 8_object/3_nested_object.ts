/**
 * Nested Object
 */

type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const codefactory: NestedPerson = {
  identity: {
    name: "감자",
    age: 25,
  },
  nationality: "한국인",
};

// 타입을 아래와 같이 나눠서 선언해야 나중에 에러가 발생해도 보기편함!
type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};

type TPersonIdentity = {
  name: string;
  age: number;
};

const iu: TPerson = {
  identity: {
    name: "감자",
    age: 25,
  },
  nationality: "한국인",
};

interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

const yuJin: IPerson = {
  identity: {
    name: "안유진",
    age: 22,
  },
  nationality: "한국인",
};
