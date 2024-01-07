import { getPages } from "@/sanity/sanity-utils";
import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demitri Echols\' Portfolio App',
  description: 'CRA & Sanity; following a Tutorial, using my own ideas',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 bg-[url('/me.jpg')] lg:bg-center bg-no-repeat bg-contain lg:bg-cover text-white overflow-x-hidden">
        <header className="flex items-center justify-between border bg-black/70 px-5 py-2 rounded-xl">
          <Link
            href="/"
            className="bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent text-lg drop-shadow font-bold">
              Demitri
            </Link>

            <div className="flex gap-5 text-sm text-slate-400">
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                  {page.title}
                </Link>
              ))}
            </div>

        </header>
        <main className="py-20">
          {children}
        </main>
      </body>
    </html>
  )
}
