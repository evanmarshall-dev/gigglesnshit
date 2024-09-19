import Image from "next/image";
import Link from "next/link";

export default function PostCard(props) {
  const { post } = props;
  return (
    <Link
      className="pt-8 text-inherit no-underline"
      href={`/blog/${post.slug}`}
    >
      <div className="hover:border-[#cbd5e1] p-3.5 md:p-7 bg-white flex flex-col gap-3.5 rounded-2xl h-full border border-solid border-transparent duration-200 shadow">
        <h3>{post.title}</h3>
        <Image
          src={post.cover_image}
          width={150}
          height={150}
          className="mx-auto"
          alt={`Main image for ${post.title}`}
        />
        <p className="flex-1 text-[#475569]">{post.date}</p>
        <div className="grid grid-cols-1 gap-3.5">
          <div>
            {/* <h5>Excerpt</h5> */}
            <p className="flex-1 text-[#475569]">{post.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
