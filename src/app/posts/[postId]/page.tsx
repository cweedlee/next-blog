import Post from "@/components/post";

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = await params;

  return <Post id={postId} />;
}
