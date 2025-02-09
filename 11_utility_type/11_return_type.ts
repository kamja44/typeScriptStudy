/**
 * Return Type
 */

type ReturnTypeSample1 = ReturnType<() => string>; // string
type ReturnTypeSample2 = ReturnType<() => number>; // number

type FunctionSign = (x: number, y: number) => number;
type ReturnType2 = ReturnType<FunctionSign>; // number
