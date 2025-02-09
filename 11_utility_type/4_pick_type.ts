/**
 * Pick Type
 * - 입력하고 싶은 프로퍼티를 고른다.
 *  Pick<Post, "title" | "content">
 * - Post 타입에서 title과 content만 있으면 된다.
 */

interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Pick<Post, "title" | "content">): Post {
  return {
    ...post,
    createdAt: new Date(),
  };
}

createPost({
  title: "요즘 개발자 ",
  content: "30 이상",
});
