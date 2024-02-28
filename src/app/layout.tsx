import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Adriel Vazquez - Fullstack developer",
  description: "Hey! Let's build an app together",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
