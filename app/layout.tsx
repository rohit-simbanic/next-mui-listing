import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./Theme/ThemeRegistry";
import { PropertyProvider } from "./context/PropertyContext";
import { PaginationProvider } from "./components/Utils/PaginationProvider";
import { FavoriteProvider } from "./components/Utils/FavouriteProvide";

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
      <PropertyProvider>
        <PaginationProvider>
          <FavoriteProvider>
            <ThemeRegistry>
              <body>{children}</body>
            </ThemeRegistry>
          </FavoriteProvider>
        </PaginationProvider>
      </PropertyProvider>
    </html>
  );
}
