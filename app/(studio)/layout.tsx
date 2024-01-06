import "../globals.css"

export const metadata = {
  title: 'Demitri Echols\' Portfolio App',
  description: 'CRA & Sanity; followed a Tutorial; Currently Upgrading, using my own ideas',
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
  
