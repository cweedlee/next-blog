// "use client";

import Post from "@/components/post";
import useFetchArticle from "@/hooks/useFetchArticle";
import useFetchDatabase from "@/hooks/useFetchDatabase";
import { queryResponse } from "@/utils/fetch";
import { use } from "react";

export default async function Page({ params }: { params: { postId: string } }) {
  console.log("Page", process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
  const db = await useFetchDatabase();
  console.log(db);

  return <Post id={postId} />;
}
