// "use client";

import { Post } from "@/components/post";
import {
  databaseResponse,
  fetchArticleContent,
  metaDataResponse,
  queryResponse,
} from "@/utils/notion";
// import { useRef } from "react";

export default function Page() {
  console.log("Page", process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
  // return <Post />;
  queryResponse.results.map(async (result) => {
    console.log(result);
    console.log(await fetchArticleContent(result.id));
  });

  // databaseResponse.map((result) => {
  //   console.log(result);
  // }
  // const dataRef = useRef<
  //   | (
  //       | PageObjectResponse
  //       | PartialPageObjectResponse
  //       | PartialDatabaseObjectResponse
  //       | DatabaseObjectResponse
  //     )
  //   | null
  // >(null);
  // dataRef.current = await queryResponse.results;
  // console.log("dataRef", dataRef.current);

  return <></>;
}
