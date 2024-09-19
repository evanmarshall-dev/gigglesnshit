import { Noto_Sans_Mono, Roboto_Mono } from "next/font/google";

export const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["latin"],
  // Add below property if using Tailwind.
  variable: "--font-noto_sans_mono",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});
