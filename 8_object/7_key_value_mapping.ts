/**
 * Key Value Mapping
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State | boolean;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State | boolean;
  paginateUsers: State | undefined;
  banUser: State | null;
};

// key값을 통해서 타입을 가져옴
type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginateUsers: GlobalApiStatus["paginateUsers"];
  getUbanUserser: GlobalApiStatus["banUser"];
};

// UserApiStatus3DMS UserApiStatus2와 동일하다.
type UserApiStatus3 = {
  // union에 있는 값들이 key에 들어간다.
  // 즉, getUser, paginateUser, banUser가 키인 객체가 만들어짐
  // getUser:
  // paginateUsers:
  // banUser:
  [key in "getUser" | "paginateUsers" | "banUser"]: GlobalApiStatus[key];
};

type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "banUser" | "paginateUsers"
>; // globalApiStatus에서 3가지 키 값을 가져옴
// 즉, UserApiStatus3과 동일하다.

type OmitUserApiStatus = Omit<GlobalApiStatus, "getPosts">; // Omit은 밖으로 빼는거

/**
 * keyof
 * - keyof를 사용하면 해당 타입의 키값들을 모두 가져올 수  있다.
 */
type AllKeys = keyof GlobalApiStatus; // GlobalApiStatus의 키값들을 가져옴

const key: AllKeys = "getUser";

type KeyOfUserApiStatus = {
  [key in keyof GlobalApiStatus]: GlobalApiStatus[key];
};

// Exclued를 제외해서 키를 제거할 수 있음
type KeyOfUserApiStatus2 = {
  [key in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[key];
};

type KeyOfUserApiStatus3 = {
  [key in Exclude<keyof GlobalApiStatus, "getPosts">]?: GlobalApiStatus[key];
};

interface LoadingStatus {
  type: "loading";
  data: string[];
}

interface ErrorStatus {
  type: "error";
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus["type"]; // type StatusType = "loading" | "error"
