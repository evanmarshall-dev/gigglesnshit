import Link from "next/link";

export default function Header() {
  return (
    <nav className="pt-4">
      <Link href={"/"}>
        <h1 className="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
          Giggles N Shit --Blog
        </h1>
      </Link>
    </nav>
  );
}
