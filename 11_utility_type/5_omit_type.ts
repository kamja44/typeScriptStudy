/**
 * Omit type
 * - 빼고 싶은 타입을 뺸다.
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Omit<Post, "createdAt">): Post {
  return {
    ...post,
    createdAt: new Date(),
  };
}

createPost({
  title: "요즘 개발자 ",
  content: "30 이상",
});
