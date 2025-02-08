/**
 * Generic in Type
 */

type GenericSimpleType<T> = T; // T타입을 제네릭으로 선언하고 T를 반환한다.

const genericString: GenericSimpleType<string> = "감자";
// const genericString2: GenericSimpleType<string> = 1; // Error string을 선언해야함
// const genericString3: GenericSimpleType = "감자"; // Error Generic은 타입 추론이 안됨

// interface, generic, type 통합
interface DoneState<T> {
  data: T[];
}

interface LoadingState {
  requestedAt: Date;
}

interface ErrorState {
  error: string;
}

type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
  data: ["123", "456"],
};

state = {
  requestedAt: new Date(),
};

state = { error: "error" };

let state2: State = {
  data: ["123", "456"],
};
