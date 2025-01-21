// "use client";

import Post from "@/components/post";
import useFetchArticle from "@/hooks/useFetchArticle";
import useFetchDatabase from "@/hooks/useFetchDatabase";
import { queryResponse } from "@/utils/fetch";
import { use } from "react";

export default async function Page() {
  console.log("Page", process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
  // return <Post />;
  const db = await useFetchDatabase();
  console.log(db);

  return <Post id={db[0].id} />;
}
