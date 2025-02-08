/**
 * Generic in Interface
 */
interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

const cache1: Cache<string> = {
  data: ["data1", "data2"],
  lastUpdate: new Date(),
};

// const cache2: Cache = { // 제네릭은 생략하여 타입 추론이 되지 않는다.
//     data: [123, 456],
//     lastUpdate: new Date()
// }

// Generic의 기본 타입
interface DefaultGeneric<T = string> {
  data: T[];
}

const cache3: DefaultGeneric = {
  data: ["123", "456"],
};
