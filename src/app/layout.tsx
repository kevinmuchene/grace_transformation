import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grace Connect Transformation",
    template: "%s | Grace Transformation",
  },
  description: "Grace Connect Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col pt-0 md:pt-8 bg-white text-gray-900">
          <Header />

          <main className="flex-1 w-full space-y-6 flex flex-col my-8">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
{
  /* <main className="max-w-[120ch] mx-auto w-full space-y-6 flex flex-col ">
            {children}
          </main> */
}
