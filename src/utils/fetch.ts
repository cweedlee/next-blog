import { n2m, notionClient } from "./notionClient";
import { QueryProps } from "@/types/database";

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

export const getNotionQuery = async (props?: QueryProps) => {
  return await notionClient.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
    filter: props?.filter || {
      and: [],
    },
    sorts: props?.sorts || [
      {
        property: "created",
        direction: "descending",
      },
    ],
  });
};

export const databaseResponse = await notionClient.databases.retrieve({
  database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
});

export const metaDataResponse = databaseResponse.properties.tags;

export const fetchArticleContent = async (pageId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(mdBlocks);
};
