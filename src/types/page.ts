import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type PageProps = (
  | PageObjectResponse
  | PartialPageObjectResponse
  | PartialDatabaseObjectResponse
  | DatabaseObjectResponse
) & {
  // 테이블 내에서 내가 설정해 둔 값
  properties?: {
    prev_post: {
      id: string; // '%3Auuo',
      type: string; // 'number',
      number: string; // null
    };
    description: {
      id: string; // '%3EX%7BZ',
      type: string; // 'rich_text',
      rich_text: string[]; // []
    };
    updated: {
      id: string; // 'FpDa',
      type: string; // 'last_edited_time',
      last_edited_time: string; // '2025-01-09T08:50:00.000Z'
    };
    featured: {
      id: string; // 'JD%60r',
      type: string; // 'checkbox',
      checkbox: boolean; // false
    };
    thumbnail: {
      id: string; // 'LT%3Ay',
      type: string; // 'files',
      files: string[]; // []
    };
    view: {
      id: string; // 'QR%5CK',
      type: string; // 'checkbox',
      checkbox: boolean; // false
    };
    created: {
      id: string; // 'i%5B%3EJ',
      type: string; // 'created_time',
      created_time: string; // '2025-01-09T08:50:00.000Z'
    };
    next_post: {
      id: string; // 'yews',
      type: string; // 'number',
      number: string; // null
    };
    id: {
      id: string; // '%7CvP%',
      type: string; // 'unique_id',
      unique_id: string[]; // [Object]
    };
    title: {
      id: string; // 'title',
      type: string; // 'title',
      title: string[]; // []
    };
    tags: {
      id: string; // 'd41c5c12-baa7-4018-a418-00fd1993511c',
      type: string; // 'multi_select',
      multi_select: string[]; // []
    };
  };
};
