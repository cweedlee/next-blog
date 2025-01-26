import { DatabaseObjectProps, QueryProps } from "@/types/database";
import { getNotionQuery } from "@/utils/fetch";
import Link from "next/link";

export default async function PostList({
  queryProps,
}: {
  queryProps?: QueryProps;
}) {
  // filter. sort 추가 가능
  const res = await getNotionQuery(queryProps);
  const db = res.results as DatabaseObjectProps[];
  if (!Object.keys(db[0]).includes("properties")) {
    return null;
  }

  console.log("PostList", db[0].id);

  return (
    <div>
      {db &&
        db.length &&
        db.map((post, idx) => (
          <Link href={`/posts/${post.id}`} key={idx}>
            <div key={idx}>
              {post.properties.thumbnail.files[0]?.file.url && (
                <img
                  src={post.properties.thumbnail.files[0].file.url}
                  width="100"
                  height="100"
                  alt="thumbnail"
                />
              )}
              <h2>
                {post.properties.title.title[0]?.plain_text || "title not "}
              </h2>
              <p>{post.properties.created.created_time || "no date"}</p>
              <br />
            </div>
          </Link>
        ))}
    </div>
  );
}
