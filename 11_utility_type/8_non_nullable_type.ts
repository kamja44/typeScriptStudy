/**
 * Non Nullable type
 * - 여러개의 타입 중 null이 될 수 없는 것들만 추출 가능
 */
type NonNull = NonNullable<
  string | number | boolean | null | undefined | object
>;
// null과 undefined는 null이 될 수 있기에 제외된다.
// type NonNull = string | number | boolean | object
