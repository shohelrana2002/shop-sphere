import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1"> {children}</main>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
