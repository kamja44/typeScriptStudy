/**
 * Partial Type
 * Partial<T>는 TypeScript의 유틸리티 타입(Utility Types) 중 하나로, 제네릭 타입 T의 모든 프로퍼티를 선택적(Optional)인 프로퍼티로 만들어주는 타입입니다. 즉, T에 존재하는 모든 프로퍼티에 물음표(?)가 붙는다고 생각하면 됩니다.
 */
interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yuJin: Idol = {
  name: "안유진",
  age: 23,
  groupName: "아이브",
};

function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
  return {
    ...original,
    ...updates,
  };
}

console.log(
  updateIdol(yuJin, {
    age: 27,
    // name2: '감자' // Error 이건 안됨 Idol에 명시되지 않은 타입이기 때문
  })
);
