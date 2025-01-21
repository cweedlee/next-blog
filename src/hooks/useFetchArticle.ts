import { fetchArticleContent } from "@/utils/fetch";
// import { get } from "http";
import { GetServerSideProps } from "next";
import { MdStringObject } from "notion-to-md/build/types";

type ArticleProps = {
  [key: string]: any;
};

export const getServerSideProps = async (pageId: string) => {
  // Fetch data from external API
  const res = await fetchArticleContent(pageId);
  // Pass data to the page via props
  return res;
};

type MarkdownProps = MdStringObject & {
  parent: string;
};
export default async function useFetchArticle(pageId: string) {
  return getServerSideProps(pageId) as MarkdownProps;
}
