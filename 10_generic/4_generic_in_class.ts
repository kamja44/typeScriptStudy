/**
 * Class에서 Generic 사용하기
 */

class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;

class Pagination2<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;

  constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

const pagination2 = new Pagination2([123, 456]);

pagination2.data;
pagination2.message; // unknown 타입으로 유추됨 => pagination2를 인스턴스화 할 때 Message에 아무것도 제공하지 않음
// 기본값 미제공, message 값 미제공 즉, unknown으로 유추한다.
// 즉, 아래와 같이 타입을 명시적으로 제공하는 것이 좋다.
// const pagination2 = new Pagination2<number, string>([123, 456]);
pagination2.lastFetchedAt;

class DefaultGeneric<T = boolean> {
  data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data;
