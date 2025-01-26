import ReactMarkdown from "react-markdown";

// 플러그인들
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
// import remarkToc from "remark-toc";
// import rehypeHighlight from "rehype-highlight";
// import remarkRehype from "remark-rehype";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import "highlight.js/styles/base16/dracula.min.css";
// import { fetchArticleContent } from "@/utils/notionClient";
import { DetailedHTMLProps, TableHTMLAttributes } from "react";
import clsx from "clsx";
import { fetchArticleContent } from "@/utils/fetch";

export const Table = ({
  className,
  ...props
}: DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>) => {
  return <table className={clsx(className)} {...props} />;
};
// const { parent: temp } = await fetchArticleContent("2");

interface MarkdownProps {
  parent: string;
}

// const MarkdownViewer: React.FC<MarkdownProps> = ({
//   content,
// }: {
//   content: string;
// }) => <ReactMarkdown>{content}</ReactMarkdown>;

const Post = async ({ id }: { id: string }) => {
  const content = (await fetchArticleContent(id)) as unknown as MarkdownProps;

  return (
    <>
      {/* <MarkdownViewer content={content.parent} /> */}
      <ReactMarkdown
        // remarkPlugins={[remarkGfm, remarkToc, remarkRehype]}
        // rehypePlugins={[
        //   rehypeRaw,
        //   rehypeHighlight,
        //   rehypeSlug,
        //   rehypeAutolinkHeadings,
        // ]}
        components={
          {
            // h1: props => <Heading as="h1" {...props} />,
            // // hr: Divider,
            // img: Image,
            // ul: props => <List as="ul" {...props} />,
            // ol: props => <List as="ol" {...props} />,
            // li: ({ children }) => (
            //   <Text as="li" variant="body2" color="textPrimary">
            //     {children}
            //   </Text>
            // ),
            // a: Anchor,
            // p: Paragraph,
            // blockquote: BlockQuote,
            // code: CodeBlock,
            // th: Th,
            // td: Td,
            // table: Table,
          }
        }
      >
        {content.parent}
      </ReactMarkdown>
    </>
  );
};

export default Post;
