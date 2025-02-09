/**
 * Generic in Promise
 * - 비동기 함수를 반환할 때 Promise를 반환하고, 어떤 값을 실제로 반환할지는 Promise의 Generic안에 넣으면 명시가 가능하다.
 */
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
};

const runner = async function () {
  const res = await afterTwoSeconds();
  console.log(res);
};

runner();

const afterOneSeconds = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
};

const runner2 = async function () {
  const res = await afterOneSeconds();
  console.log(res);
};

runner2();

// 반환 타입에 Promise를 명시하든 안하든 async키워드가 붙어 있으면 Promise를 반환하는 것으로 추론한다.
const runner3 = function () {
  // string
  return `string return`;
};

const runner4 = async function () {
  // Promise<string>
  return `string return`;
};
