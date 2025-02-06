/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number; // never type

type PersonType = {
  name: string;
  age: number;
};

type CompanyType = {
  company: string;
  companyRegistrationNumber: string;
};

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
  name: "지수",
  age: 10,
  company: "GN",
  companyRegistrationNumber: "xxxyz",
};

// intersection과 union 같이 사용하기
type PetType = {
  petName: string;
  petAge: number;
};
// intersection으로 선언한 타입(PersonType)은 필수 입력, 오른쪽 union(CompanyType | PetType)은 선택해서 사용
type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
  name: "감자",
  age: 20,

  // CompanyType or PetType 하나만 사용해도됨
  // 둘 중 하나의 타입만 만족하면 다른 하나는 타입을 만족하지 않아도 됨(2개 중 1개만 입력해도 됨)

  // CompanyType
  company: "GN",
  companyRegistrationNumber: "xyz",

  // PetType
  petName: "고양이",
  petAge: 30,
};
