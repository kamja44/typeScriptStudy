/**
 * Readonly Type
 */

interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: "야옹",
  age: 5,
};
nyaong.name = "감자";

const bori: Readonly<Cat> = {
  name: "보리",
  age: 10,
};

bori.name;
// bori.name = '고구마' // Error => name은 readonly

// JS에서 readonly로 만드는 방법
Object.freeze(bori);
