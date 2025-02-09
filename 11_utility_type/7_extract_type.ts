/**
 * Extract Type
 */

// string, boolean, number 타입 중 string만 추출해서 사용한다 => 즉, 타입은 string이 된다.
type stringOnly = Extract<string | boolean | number, string>;

// string, function 타입 중 functionㅁ나 추출해서 사용한다 => 즉, 타입은 Funciton이 된다.
type functionOnly = Extract<string | (() => void), Function>;
