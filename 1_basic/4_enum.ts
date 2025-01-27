/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 *
 * DONE - 요청 완료
 * ERROR - 에러가 생김
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */

// enum은 첫 글자는 대문자로
// 임의로 원하는 값을 설정하지 않으면 처음부터 0, 1, 2 ... 이런 순으로 숫자가 증가함
enum State {
  DONE = "DONE",
  LOADING = "LOADING",
  INITIAL = "INITIAL",
  ERROR = "ERROR",
}

function runWork() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // 작업
    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork() === State.DONE);
console.log(runWork());
