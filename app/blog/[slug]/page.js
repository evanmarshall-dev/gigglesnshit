import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import matter from "gray-matter";
import fs from "fs";
import Image from "next/image";

// Utility function which takes a slug and fetches the content from the markdown posts that matches the slug.
function getPostContent(slug) {
  console.log(`Received slug: ${slug}`);

  const folder = "posts/";
  const file = folder + `${slug}.md`;

  console.log(`Constructed file path: ${file}`);

  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  // ? return matterResult;
  return {
    content: matterResult.content,
    data: matterResult.data,
  };
}

// When we build the pages it will get all of the posts and it will create a URL/page for every post.slug that it finds (This function uses getPostMetadata imported at top of file).
export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
};

// Allows us to get the metadata for the page
export async function generateMetadata({ params }) {
  // If the slug does exist we assign params?.slug to id, else we assign an empty string.
  const id = params?.slug ? params?.slug : "";
  // const { data } = getPostContent(id);

  return {
    title: `${id.replaceAll("-", " ").toUpperCase()}`,
    // description: data.excerpt,
    // openGraph: {
    //   title: `${id.replaceAll("-", " ").toUpperCase()}`,
    //   description: data.excerpt,
    //   images: [
    //     {
    //       url: `https://gigglesnshit.me/images/${data.cover_image}.webp`,
    //       alt: `Main image for blog: ${id.replaceAll("-", " ").toUpperCase()}`,
    //     },
    //   ],
    // },
  };
}

const CustomAnchor = ({ children, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

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
      a: {
        component: CustomAnchor,
        props: {
          className: "custom-a",
        },
      },
    },
  };

  return (
    <article className="px-6">
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
      <p>
        <strong>{data.date}</strong>
      </p>
      <p className="mb-8 underline">
        <em>{`By: ${data.author}`}</em>
      </p>
      <Markdown options={options}>{content}</Markdown>
    </article>
  );
}
