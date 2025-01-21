import { fetchArticleContent, queryResponse } from "@/utils/fetch";
// import { get } from "http";
import { GetServerSideProps } from "next";

type ArticleProps = {
  [key: string]: any;
};

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await queryResponse.results;
  // Pass data to the page via props
  return res;
};

export default async function fetchDatabas() {
  return getServerSideProps();
}
