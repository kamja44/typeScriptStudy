"use strict";
/**
 * Types
 */
let helloText = "Hello";
/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
const stringVar = "String";
const numberVar = 3;
const bigIntVar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any => 아무 타입이나 입력할 수 있음
// 실상 TS를 사용하지 않는 것
let anyVar;
anyVar = 100;
anyVar = "감자";
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown => 알 수 없는 타입
// any와 비슷하지만 any보다는 타입 안전성이 높음
// any처럼 모든 타입을 할당할 수 있지만, 다른 타입에 할당할 때는 명시적으로 타입을 변환해야 함
let unknownType;
unknownType = 100;
unknownType = "감자";
unknownType = true;
let testNumber2 = unknownType;
let testString2 = unknownType;
let testBoolean2 = unknownType;
let unknownType2 = unknownType;
let anyType2 = unknownType;
// never => 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = "test";
/**
 * 리스트 타입
 */
const koreanGirlGroup = ["감자", "고구마", "토마토"];
const booleanList = [true, false, true];
