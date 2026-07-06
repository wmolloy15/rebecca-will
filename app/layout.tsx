import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebecca & Will",
  description: "Save the date for Rebecca and Will's wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}