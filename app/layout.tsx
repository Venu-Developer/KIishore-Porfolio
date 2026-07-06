import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Syne } from "next/font/google";

const syne = Syne({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Kishore Kumar | Content Strategist & Social Media Specialist",
  description: "Portfolio of Kishore Kumar, a Content Strategist and Social Media Growth Specialist helping brands grow through audience-first content strategy.",
  icons: {
    icon: "/hero.png",
    apple: "/hero.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <div className="w-full overflow-x-clip relative flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
