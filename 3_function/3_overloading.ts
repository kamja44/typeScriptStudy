/**
 * Overloading
 * - 오버로딩시 함수 이름은 동일해야함
 * - 매개변수 이름은 동일하지 않아도 됨(순서는 맞춰야 함)
 */

/**
 * 파라미터를
 * 1. 하나를 받거나
 * 2. 세개를 받는 함수
 */
function stringOrString(members: string): string;
function stringOrString(
  member1: string,
  member2: string,
  member3: string
): string;
// function stringOrString(member: string): number; // Error => number를 반환하는 구현체가 없기에 에러, return 타입에 number를 추가해주면 가능

/**
 *  만일 하나의 파라미터만 입력받는다면
 * 음식들을 하나의 스트링으로 입력받는다.
 * 예) '감자, 고구마, 연근'
 *
 * 만일, 세개의 파라미터를 받는다면
 * 각각 음식들을 각각의 파라미터 값으로 입력한다.
 * 예) '감자', '고구마', '연근'
 */
function stringOrString(
  memberOrMembers: string,
  member2?: string,
  member3?: string
) {
  if (member2 && member3) {
    return `맛있는: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `맛있는: ${memberOrMembers}`;
  }
}

console.log(stringOrString("감자, 고구마, 연근"));
console.log(stringOrString("감자", "고구마", "연근"));
// console.log(stringOrString("감자", "고구마")); // Error => 인수는 1개 혹은 3개만 들어갈 수 있음 여긴 2개가 들어갔으니 Error 이게 오버로딩
