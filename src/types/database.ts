import {
  DatabaseObjectResponse,
  QueryDatabaseParameters,
} from "@notionhq/client/build/src/api-endpoints";

export type QueryProps = {
  filter?: QueryDatabaseParameters["filter"];
  sorts?: QueryDatabaseParameters["sorts"];
  start_cursor?: string; //start page , default 1
  page_size?: number; //default 100;
};

export type DatabaseObjectProps = DatabaseObjectResponse & {
  properties: DatabaseObjectResponse["properties"] & {
    title: {
      id: string;
      type: string;
      title: {
        plain_text: string;
      }[];
    };
    prev_post: {
      id: string; // '%3Auuo',
      type: "number";
      number: string; // null
    };
    description: {
      id: string; // '%3EX%7BZ',
      type: "rich_text";
      rich_text: string[]; // []
    };
    updated: {
      id: string; // 'FpDa',
      type: "last_edited_time";
      last_edited_time: string; // '2025-01-09T08:50:00.000Z'
    };
    featured: {
      id: string; // 'JD%60r',
      type: "checkbox";
      checkbox: boolean; // false
    };
    thumbnail: {
      id: string; // 'LT%3Ay',
      type: "files";
      files: {
        name: string; // 'thumbnail.png'
        type: string; // 'image/png'
        file: {
          url: string; // 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fthumbnail.png'
        };
      }[]; // []
    };
    view: {
      id: string; // 'QR%5CK',
      type: "checkbox";
      checkbox: boolean; // false
    };
    created: {
      id: string; // 'i%5B%3EJ',
      type: "created_time";
      created_time: string; // '2025-01-09T08:50:00.000Z'
    };
    next_post: {
      id: string; // 'yews',
      type: "number";
      number: string; // null
    };
    id: {
      id: string; // '%7CvP%',
      type: "unique_id";
      unique_id: string[]; // [Object]
    };
    tags: {
      id: string; // 'd41c5c12-baa7-4018-a418-00fd1993511c',
      type: "multi_select";
      multi_select: string[]; // []
    };
  };
};
