/**
 * Object Union
 */

/**
 * 추론된 객체 타입 유니언
 */
const dogOrCat =
  Math.random() > 0.5
    ? // 강아지
      {
        name: "별이",
        age: 12,
      } // 고양이
    : {
        name: "오리",
        breed: "길냥이",
      };

dogOrCat.name; // string
dogOrCat.age; // number | undefined and optinal
dogOrCat.breed; // string | undefined and optional

// 강아지일때는 breed가 optional이 아니라 들어오면 안됨!!! => 타입을 추론하는게 아닌 직접 입력해야함
interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat =
  Math.random() > 0.5
    ? // 강아지
      {
        name: "별이",
        age: 12,
      } // 고양이
    : {
        name: "오리",
        breed: "길냥이",
      };

dogOrCat2.name;
// dogOrCat2.age; // Error cat에 age가 존재하지 않기에 에러가 발생
// dogOrCat2.breed; // Error cat에 age가 존재하지 않기에 에러가 발생

// narrowing을 이용하여 해결할 수 있음

if ("age" in dogOrCat2) {
  dogOrCat2.name;
  dogOrCat2.age;
} else {
  dogOrCat2.name;
  dogOrCat2.breed;
}
