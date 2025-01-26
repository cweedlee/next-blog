// "use client";

import Post from "@/components/post";

export default function Page({ params }: { params: { postId: string } }) {
  console.log("Page", process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
  const postId = params.postId;
  console.log(postId);

  return <Post id={postId} />;
}
