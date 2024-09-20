import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
// import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <nav className="z-10 flex items-center justify-between flex-col md:flex-row h-10">
      <Link href={"/"}>
        <h1 className="text-2xl text-ebony font-semibold hover:text-sandrift active:text-sandrift transition">
          Giggles N Shit --Blog
        </h1>
      </Link>
      <div className="flex items-center gap-5 text-lg">
        <Link
          className="hover:underline hover:text-sandrift active:text-sandrift text-ebony font-bold px-3 py-2 transition"
          href={"/"}
        >
          Home
        </Link>
        {/* {pages.map((page) => {
          return (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className={clsx(
                "hover:underline active:underline transition px-3 py-2",
                {
                  "text-ebony bg-wild_sand rounded":
                    pathname === `/${page.slug}`,
                }
              )}
            >
              {page.title}
            </Link>
          );
        })} */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/instagingagram"
          className="hover:text-sandrift active:text-sandrift text-ebony font-bold px-3 py-2 transition text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/GingaRanga"
          className="hover:text-sandrift active:text-sandrift text-ebony font-bold px-3 py-2 transition text-2xl"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
}
