import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Adriel Vazquez - Fullstack developer",
  description: "Hey Adriel here! I'm a Fullstack developer, let's build an app together",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adrielvazquez.com.ar" />
        <meta property="og:title" content="Adriel Vazquez - Fullstack developer" />
        <meta property="og:description" content= "Hey Adriel here! I'm a Fullstack developer, let's build an app together" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${raleway.className} antialiased`}>
        <NavBar />
        <main className="px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
