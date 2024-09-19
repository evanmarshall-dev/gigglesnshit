import "@/app/globals.css";
import { roboto_mono } from "@/app/ui/fonts";
import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";

export const metadata = {
  title: {
    template: "Giggles N Shit --Blog | %s",
    default: "Giggles N Shit --Blog",
  },
  description:
    "Join me as I narrate my first attempt at parenting. As a stay at home daddy, it is not your most conventional family life. Expect lots of love, laughter and poo mixed into these stories!",
  keywords: [
    "Web Developer",
    "Website",
    "Nova Scotia",
    "Web Design",
    "Funny Blog",
    "New Family",
    "New Dad",
  ],
  authors: [
    { name: "Evan Marshall", url: "https://github.com/evanmarshall-dev" },
  ],
  creator: "Evan Marshall",
  metadataBase: new URL("https://giggles-n-shit-blog.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Giggles N Shit --Blog",
    description:
      "Join me as I narrate my first attempt at parenting. As a stay at home daddy, it is not your most conventional family life. Expect lots of love, laughter and poo mixed into these stories!",
    url: "https://giggles-n-shit-blog.vercel.app/",
    images: [
      {
        url: "https://giggles-n-shit-blog.vercel.app/beach-bums.jpg",
        width: 850,
        height: 850,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Giggles N Shit --Blog",
    description:
      "Join me as I narrate my first attempt at parenting. As a stay at home daddy, it is not your most conventional family life. Expect lots of love, laughter and poo mixed into these stories!",
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: ["https://giggles-n-shit-blog.vercel.app/beach-bums.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main
          className={`${roboto_mono.variable} font-mono max-w-7xl antialiased min-h-screen text-center mx-auto`}
        >
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
