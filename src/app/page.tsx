import PostList from "@/components/PostList";

export default function Home() {
  const queryProps = {
    filter: { property: "featured", checkbox: { equals: true } },
  };
  return (
    <div>
      <h1>Welcome to cweedlee blog</h1>
      <h2>Featured Posts</h2>
      <PostList queryProps={queryProps} />
    </div>
  );
}
