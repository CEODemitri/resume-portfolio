import "../globals.css"

export const metadata = {
  title: 'My Portfolio App',
  description: 'CRA & Sanity; following a Tutorial, using my own ideas',
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
            <body>{children}</body>
      </html>
    )
  }
  
