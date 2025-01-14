//Notion to markdown

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});
export const n2m = new NotionToMarkdown({
  notionClient: notionClient,
});

export const queryResponse = await notionClient.databases.query({
  database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
  filter: {
    and: [],
  },
  sorts: [
    {
      property: "created",
      direction: "descending",
    },
  ],
});

export const databaseResponse = await notionClient.databases.retrieve({
  database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
});

export const metaDataResponse = databaseResponse.properties.tags;

export const fetchArticleContent = async (pageId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(mdBlocks);
};
