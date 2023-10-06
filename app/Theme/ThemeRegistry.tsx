"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { themeCreator } from "./base";
import { useState } from "react";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeName, _setThemeName] = useState("PureLightTheme");
  const theme = themeCreator(themeName);
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
