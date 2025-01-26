// "use client";

import Post from "@/components/post";

export default async function Page({ params }: { params: { postId: string } }) {
  console.log("Page", process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
  const postId = await params.postId;
  console.log(postId);

  return <Post id={postId} />;
}
