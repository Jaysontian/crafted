import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "crafted",
  description: "a popup cafe with a focus on innovation & quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased font-sans`}>
        <header className="w-full">
          <nav className="w-full flex items-center justify-around px-6 py-16">
            <img src="/logo.png" alt="crafted" className="w-10 h-10" />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
