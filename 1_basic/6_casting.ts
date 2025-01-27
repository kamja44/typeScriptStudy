/**
 * Casting
 * Ts는 Js로 컴파일 되는 언어이다.
 * Casting을 사용한다는 것은 실제 그 타입이 아닐 수 도 있지만 그 타입으로 가정하는 것이다.
 * 즉, number타입에 string으로 casting을 적용하면 string 전용 메서드 사용이 가능하다(toUpperCase()와 같은)
 *
 * Ts에서 Casting을 하면 Js에서는 적용이 안된다.
 */
const codefactory = "code factory";
const testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());
let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase()); // 숫자형 타입인데도 string에만 존재하는 함수를 사용할 수 있는 것처럼 나온다.
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // number가 나옴
// casting은 ts에만 존재하는 문법임 즉, js에서는 아무런 상관이 없음
// 즉, 18번 라인의 실행 결과는 number가 출력됨

let number = 5;
console.log((number as any).toUpperCase()); // number로 추론했지만 any로 casting을 진행하여 string 전용 메서드인 toUpperCase()가 자동완성됨
