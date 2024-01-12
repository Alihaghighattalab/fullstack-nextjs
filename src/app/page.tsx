import prisma from "@/lib/prisma";
import { PostComponent } from "./components/post";

export default async function Home() {
  const getPost = async () => {
    const posts = await prisma.post?.findMany({
      where: {
        published: true,
      },
      include: { author: { select: { name: true } } },
    });
    return posts;
  };
  const posts = await getPost();
  return (
    <main className="flex min-h-screen flex-col items-center p-10 gap-3">
      <h1>Posts</h1>
      <div className="flex flex-col gap-2 max-h-[455px] overflow-y-auto">
        {posts.map((post: any) => (
          <PostComponent
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        ))}
      </div>
    </main>
  );
}
