import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import matter from "gray-matter";
import fs from "fs";
import Image from "next/image";

function getPostContent(slug) {
  const folder = "posts/";
  const file = folder + `${slug}md`;
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  // ? return matterResult;
  return {
    content: matterResult.content,
    data: matterResult.data,
  };
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
  // ? const post = getPostContent(slug);
  const { content, data } = getPostContent(slug);
  const options = {
    overrides: {
      h1: {
        component: "h1",
        props: {
          className: "custom-h1",
        },
      },
      h2: {
        component: "h2",
        props: {
          className: "custom-h2",
        },
      },
      h3: {
        component: "h3",
        props: {
          className: "custom-h3",
        },
      },
      img: {
        component: "img",
        props: {
          className: "custom-img",
        },
      },
      p: {
        component: "p",
        props: {
          className: "custom-p",
        },
      },
      em: {
        component: "em",
        props: {
          className: "custom-em",
        },
      },
      hr: {
        component: "hr",
        props: {
          className: "custom-hr",
        },
      },
    },
  };

  return (
    <article>
      <div className="grid grid-cols-1 gap-2 mt-16 mb-8 mx-auto md:mx-8">
        <div className="relative h-[480px]">
          <Image
            src={data.cover_image}
            alt={`Main image for blog: ${data.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain object-center"
          />
        </div>
      </div>
      <h2 className="mb-2 text-xl font-extrabold text-gray-900 md:text-2xl lg:text-3xl">
        {data.title}
      </h2>
      <p className="mb-8 font-bold">{data.date}</p>
      <Markdown options={options}>{content}</Markdown>
    </article>
  );
}
