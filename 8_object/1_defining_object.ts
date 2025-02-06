/**
 * Object
 */
const codeFactory = {
  name: "감자",
  age: 32,
};

interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
};

const iPerson: IPerson = {
  name: "감자",
  age: 30,
};
const tPerson: TPerson = {
  name: "고구마",
  age: 20,
};
iPerson.name;
tPerson.age;
