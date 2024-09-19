import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import matter from "gray-matter";
import fs from "fs";

function getPostContent(slug) {
  const folder = "posts/";
  const file = folder + `${slug}md`;
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params }) {
  const id = params?.slug ? params?.slug : "";
  return {
    title: `${id.replaceAll("-", " ").toUpperCase().slice(0, -1)}`,
  };
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const options = {
    overrides: {
      h1: {
        component: "h1",
        props: {
          className: "custom-h1",
        },
      },
    },
  };

  return (
    <article className="pt-16">
      <Markdown options={options}>{post.content}</Markdown>
    </article>
  );
}
