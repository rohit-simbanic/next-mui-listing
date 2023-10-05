/* eslint-disable */
"use client";
import React, { ReactNode, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeCreator } from "./base";
import { StylesProvider } from "@mui/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

type ThemeName = "PureLightTheme";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeContext =
  React.createContext<(themeName: ThemeName) => void | undefined>(undefined);

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = (props) => {
  let curThemeName: ThemeName | null = null;

  if (typeof window !== "undefined") {
    curThemeName = localStorage.getItem("appTheme") as ThemeName | null;
  }

  const [themeName, _setThemeName] = useState<ThemeName>(
    curThemeName || "PureLightTheme"
  );

  const setThemeName = (themeName: ThemeName): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem("appTheme", themeName);
      _setThemeName(themeName);
    }
  };

  const theme = themeCreator(themeName);

  // console.log("value:", theme);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <StylesProvider injectFirst>
        <ThemeContext.Provider value={setThemeName}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider>
              <CssBaseline />
              {props.children}
            </LocalizationProvider>
          </ThemeProvider>
        </ThemeContext.Provider>
      </StylesProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeProviderWrapper;
