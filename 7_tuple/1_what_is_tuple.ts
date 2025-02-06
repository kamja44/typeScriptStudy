/**
 * Tuple
 */
let iveTopMembers: string[] = ["안유진", "장원영", "레이"];

let numberAndStringtuple: [number, string] = [23, "감자"];
// numberAndStringtuple = ['감자', "감자"]; // Error => tuple은 정확히 명시된 값만 넣어야함
// 위 예제의 경우 tuple은 2개의 인수를 가지며, 1번째 인수는 number, 2번째 인수는 string을 가져야 한다.

numberAndStringtuple.push("감자");
// JS에는 tuple 개념이 없음 => 런타임만 통과하면 됨 즉, push를 이용하면 tuple의 개수 변경 가능
console.log(numberAndStringtuple);

let unmodifiableTuple: readonly [number, string] = [23, "감자"];
// unmodifiableTuple.push('감자'); // ERROR unmodifiableTuple이 readonly이기 때문
// tuple을 정확하게 사용하기 위해 readonly 사용 권장

/**
 * Tuple 유추하기
 */
let actresses = ["김고은", "박소담", "전여빈"];

let actressesTuple = ["김고은", "박소담", "전여빈"] as const; // as const를 이용하면 더 정확한 타입 추론이 가능하다.
const actressesTupleConst = ["김고은", "박소담", "전여빈"] as const; // as const를 이용하면 더 정확한 타입 추론이 가능하다.

// let stringArray: string[] = [...actressesTuple, actressesTupleConst];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ["감자", 25];

/**
 * Assigining Tuple to Tuple
 *
 * Tuple은 같은 타입끼리면 할당이 가능하다.
 */
const tuple1: [string, string] = ["감자", "고구마"];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = ["장원영", "안유진"]; // 상세한 타입
let stringArr: string[] = ive; // 몇개의 값이 들어가든 string으로만 들어가면 되는 배열
// 즉, array에 tuple할당이 가능하다.(타입이 맞다면)
// tuple에 array 할당은 불가능하다.
// let ive2: [string ,string] = stringArr // Error => stringArr에 인수가 몇개인지 알 수 없고, 타입이 맞을지도 알 수 없어서 에러

/**
 * Multi Dimensional Tuple
 */
const tuple2D: [string, number][] = [
  ["감자", 10],
  ["고구마", 20],
  ["연근", 30],
];
