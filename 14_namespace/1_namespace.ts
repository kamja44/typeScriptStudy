/**
 * Namespace
 * - 현재 사용하지 않는 기능 => 신규 프로젝트에서 사용 금지
 * - 완전히 독립된 공간으로 구현됨
 */
namespace Home {
  class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  export const yuJin = new Idol("안유진", 23);
}

namespace Post {
  class User {
    email: string;
    name: string;

    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }
  const admin = new User("kamja@kamja.co", Home.yuJin.name);

  console.log(admin);
}

// namespace 중첩
namespace Comment {
  const name = "comment";

  namespace Detail {
    const page = "detail";

    console.log(name);
    console.log(page);
  }

  console.log("============");
  console.log(name);
  //   console.log(page); // Error Detail안에만 page가 있음
}
