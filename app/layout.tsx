import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./Theme/ThemeRegistry";

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
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
