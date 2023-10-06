/* eslint-disable */
import { Theme } from "@mui/material";
import { PureLightTheme } from "./pureLightTheme";

export function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        bg: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      alpha: {
        white: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        trueWhite: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        black: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
      };
      shadows: {
        appbar: string;
      };
    };
    general: {
      button: {
        paddingSm: string;
        borderRadiusSm: string;
        borderRadius: string;
        borderRadiusLg: string;
        borderRadiusXl: string;
        transition: string;
      };
      footer: {
        backgroundColor: string;
      };
    };
  }
  interface ThemeOptions {
    colors: {
      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        bg: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      alpha: {
        white: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        trueWhite: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        black: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
      };
      shadows: {
        appbar: string;
      };
    };
    general: {
      button: {
        paddingSm: string;
        borderRadiusSm: string;
        borderRadius: string;
        borderRadiusLg: string;
        borderRadiusXl: string;
        transition: string;
      };
      footer: {
        backgroundColor: string;
      };
    };
  }
}

const themeMap: { [key: string]: Theme } = {
  PureLightTheme,
};
