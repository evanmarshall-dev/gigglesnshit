import "@/app/globals.css";
import { roboto_mono } from "@/app/ui/fonts";
import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL("https://gigglesnshit-gamma.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Giggles N Shit --Blog",
    description:
      "Join me as I narrate my first attempt at parenting. As a stay at home daddy, it is not your most conventional family life. Expect lots of love, laughter and poo mixed into these stories!",
    url: "https://gigglesnshit-gamma.vercel.app",
    siteName: "Giggles N Shit --Blog",
    images: [
      {
        url: "https://gigglesnshit-gamma.vercel.app/beach-bums.jpg",
        width: 425,
        height: 425,
        alt: "My two littles ladies relaxing on the beach, looking into the water and letting it touch their toes.",
      },
      {
        url: "https://gigglesnshit-gamma.vercel.app/family.jpg",
        width: 600,
        height: 400,
        alt: "Our little family in a portrait photo, while we sit in the grass during the golden hour.",
      },
    ],
    locale: "en_CA",
    type: "website",
    authors: ["Evan Marshall"],
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
    images: ["https://gigglesnshit-gamma.vercel.app/beach-bums.jpg"],
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
            <nav>
              <Header />
            </nav>
          </header>
          <hr className="mt-8" />
          {children}
          <Analytics />
          <SpeedInsights />
          <hr className="mt-16" />
          <footer>
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
