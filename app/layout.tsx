import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ConstructCo - Premier Construction & Building Services",
    template: "%s | ConstructCo",
  },
  description:
    "Leading construction company specializing in commercial, residential, and industrial projects. 25+ years of excellence in building and renovation services.",
  keywords: [
    "construction company",
    "building services",
    "commercial construction",
    "residential construction",
    "renovation",
    "contractors",
    "building contractors",
    "construction management",
    "sustainable construction",
    "modern architecture",
  ],
  authors: [{ name: "ConstructCo" }],
  creator: "ConstructCo",
  publisher: "ConstructCo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
