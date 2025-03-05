import "./globals.css";

import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import QueryProvider from "@/providers/react-query-provider";
import NextTopLoader from 'nextjs-toploader';

// Google Fonts
const figtree = Figtree({
  display: "swap", //load font without delay
  subsets: ["latin"], //just load latin letter
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree", //access to this variable for applying the font
});

// Local Font
const estedad = localFont({
  src: [
    {
      path: "../../public/fonts/estedad/Estedad-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad/Estedad-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad/Estedad-Bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${estedad.variable}`}>
      <body
        style={{ fontWeight: "300" }}
        className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content"
      >
        <NextTopLoader showSpinner={false} color="var(--color-primary)" />
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
