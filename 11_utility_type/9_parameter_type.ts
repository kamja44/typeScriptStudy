/**
 * Parameter Type
 * **Parameters<T>**는 “함수 타입 T의 매개변수 타입”들을 튜플로 만들어주는 유틸리티 타입.
typeof 키워드로 함수의 타입 시그니처를 얻은 뒤 Parameters를 적용하면,
원래 함수의 매개변수 타입만 깔끔히 추출해 재사용할 수 있음.
함수 간 매개변수 타입을 공유하거나, 콜백 함수 타입을 재활용할 때 굉장히 유용함.

즉, Parameters는 함수를 객체 리터럴처럼 분석해 “매개변수 타입만 추출”하고 싶을 때 쓰는 도구이며,
이를 통해 매개변수 타입에 의존적인 여러 함수나 타입을 쉽게 정의할 수 있게 되는 것입니다.
 */
function sampleFunction(x: number, y: string, z: boolean) {}
// typeof를 사용하는 이유 => sampleFunction은 객체가 아닌 함수임
type Params = Parameters<typeof sampleFunction>;

type Params2 = Parameters<(one: number) => void>;
