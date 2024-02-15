import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";
import "../globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demitri Echols' Portfolio App",
  description: "CRA & Sanity; following a Tutorial, using my own ideas",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
      <html lang="en">
        <body className="max-w-3xl mx-auto h-screen py-10 text-white overflow-x-hidden ">
          <header className="flex items-center justify-between border bg-transparent px-5 py-2 rounded-xl">
            <Link
              href="/"
              className="bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent text-lg drop-shadow font-bold"
            >
              Demitri
            </Link>

            <div className="flex gap-5 text-sm text-slate-400 invisible md:visible">
              {pages.map((page) => (
                <Link
                  key={page._id}
                  href={`/${page.slug}`}
                  className="hover:underline"
                >
                  {page.title}
                </Link>
              ))}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </header>
          <main>{children}</main>
        </body>
      </html>
  );
}
