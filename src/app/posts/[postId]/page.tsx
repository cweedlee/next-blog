import Post from "@/components/post";

type pageProps = Promise<{ postId: string }>;

export default async function Page({ params }: { params: pageProps }) {
  const { postId } = await params;

  return <Post id={postId} />;
}
