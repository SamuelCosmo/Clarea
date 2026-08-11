import type { Metadata } from "next";
import { Inter, MuseoModerno } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({
  variable: "--font-museomoderno",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clarea",
  description: "Proyecto Clarea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${museoModerno.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
