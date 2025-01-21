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
    default:
      "Sudarshan Construction - Premier Construction & Building Services",
    template: "%s | Sudarshan Construction",
  },
  description:
    "Leading construction company specializing in commercial, residential, and industrial projects. 14+ years of excellence in building and renovation services.",
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
  authors: [{ name: "Sudarshan Construction" }],
  creator: "Sudarshan Construction",
  publisher: "Sudarshan Construction",
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
