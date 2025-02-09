/**
 * Exclude Type
 *
 */

// string, boolean, number 타입 중 하나였는데 string을 제외하여 boolean 또는 number 타입이 된다.
type NoString = Exclude<string | boolean | number, string>;

// 함수와 string 타입 중 함수를 제외했으니 string타입이 된다.
type NuFunction = Exclude<string | (() => void), Function>;
