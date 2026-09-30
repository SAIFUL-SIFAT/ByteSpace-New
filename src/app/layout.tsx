import type { Metadata } from "next";
import { poppins, satoshi } from "./fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Learn and Create on ByteSpace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
