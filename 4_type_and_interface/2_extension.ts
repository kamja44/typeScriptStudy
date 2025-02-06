/**
 * Extension
 */

interface IName {
  name: string;
}
interface IIdole extends IName {
  age: number;
}

const idol: IIdole = {
  name: "감자",
  age: 20,
};

type TName = {
  name: string;
};
type TIdole = TName & { age: number }; // type으로의 상속

const idol2: TIdole = {
  name: "고구마",
  age: 30,
};

// 인스턴스와 타입 둘 다 상속 가능(섞어서)
interface IDol2 extends TName {
  age: number;
}
const idol3: IDol2 = {
  name: "연근",
  age: 50,
};

type TIdole2 = IName & {
  age: number;
};

const idol4: TIdole2 = {
  name: "찹쌀",
  age: 100,
};

/**
 * interface에서의 상속 = extends 키워드
 * type에서의 상속 = &
 * interface와 type 섞어서 상속 가능
 */

/**
 * extending multiple
 */
type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};
type DogBreed = {
  breed: string;
};
type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "감자",
  age: 10,
  breed: "수미",
};

interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: "오리",
  age: 8,
  breed: "삼색이",
};

/**
 * Overriding
 */

type THeight = {
  height: number;
};
type TRectangle = THeight & {
  height: string;
  width: number;
};

// const rectangle: TRectangle = {
//   width: 100,
// height // number와 string이 동시에 되어야 하기 때문에 never타입이 된다. 즉, 프로퍼티에 값을 입력할 수 없다. => 중복으로 프로퍼티를 선언할 경우 같은 타입으로 선언해야한다.
// };

type TWidth = {
  width: number | string;
};

type TREctangle2 = TWidth & {
  width: number;
  height: number;
};
const rectangle: TREctangle2 = {
  height: 100,
  width: 200, // number | string 에서 number로 narrowing된 것
};

interface IHeight {
  height: number;
}

interface IRectangle extends IHeight {
  // height: string; // Interface는 타입처럼 never를 반환하는게 아닌 에러를 발생시켜 버린다.
  width: number;
}

interface IWidth {
  width: number | string;
}
interface IRectangle extends IWidth {
  width: number;
  height: number;
}

// 둘의 차이점 중 가장 큰 것은 never!!
// interface의 경우 never로 타입 narrowing이 발생하면 에러 발생
