import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviderWrapper from "./theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mui Theme | Property Listing Agent",
  description: "Get listed your properties in a minute",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProviderWrapper>
        <body className={inter.className}>{children}</body>
      </ThemeProviderWrapper>
    </html>
  );
}
