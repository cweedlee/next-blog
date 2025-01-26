import { DatabaseObjectProps } from "@/types/database";
import { getNotionQuery } from "@/utils/fetch";
export default async function PostList() {
  // filter. sort 추가 가능
  const res = await getNotionQuery();
  const db = res.results as DatabaseObjectProps[];
  console.log(db[3].properties.thumbnail.files[0].file.url);
  if (!Object.keys(db[0]).includes("properties")) {
    return null;
  }

  return (
    <div>
      {db &&
        db.length &&
        db.map((post, idx) => (
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
        ))}
    </div>
  );
}
