import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href={"/"}>
        <h1 className="pt-8 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
          Giggles N Shit --Blog
        </h1>
      </Link>
    </>
  );
}
