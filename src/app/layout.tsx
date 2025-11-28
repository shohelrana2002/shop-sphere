import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s |ShopSphere BD",
    default: "ShopSphere BD",
  },
  description:
    "ShopSphere BD is a complete online marketplace in Bangladesh, offering all types of products in one place — electronics, fashion, home essentials, groceries, and more. Fast delivery, trusted quality, and a seamless shopping experience, all in one universe of products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
