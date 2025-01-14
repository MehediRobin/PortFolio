import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mehedi Robin | Writing Portfolio",
  description: "Mehedi Robin is SEO content writer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative m-0 p-0 box-border mt-40`}
      >
        <Header />
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[32.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] z-[-10]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] z-[-10]"></div>

        {children}
      </body>
    </html>
  );
}
