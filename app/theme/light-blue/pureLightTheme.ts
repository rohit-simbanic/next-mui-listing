/* eslint-disable */
import { createTheme, lighten, darken, alpha } from "@mui/material";
// import "@mui/lab/themeAugmentation";

const themeColors = {
  primary: "#274ABB",
  secondary: "#FF385C",
  success: "#444444",
  warning: "#666666",
  error: "#FF1943",
  info: "#33C2FF",
  black: "#223354",
  white: "#ffffff",
  primaryAlt: "#000C57",
  bg: "f2f5f9",
};

const colors = {
  secondary: {
    lighter: lighten(themeColors.secondary, 0.85),
    light: lighten(themeColors.secondary, 0.25),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2),
  },
  primary: {
    lighter: lighten(themeColors.primary, 0.85),
    light: lighten(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2),
    bg: themeColors.bg,
  },
  success: {
    lighter: lighten(themeColors.success, 0.85),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2),
  },
  warning: {
    lighter: lighten(themeColors.warning, 0.85),
    light: lighten(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2),
  },
  error: {
    lighter: lighten(themeColors.error, 0.85),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2),
  },
  info: {
    lighter: lighten(themeColors.info, 0.85),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2),
  },
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
    trueWhite: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black,
    },
  },
  shadows: {
    appbar:
      "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
  },
};

export const PureLightTheme = createTheme({
  // direction: i18n.dir(),
  colors: {
    secondary: {
      lighter: alpha(themeColors.secondary, 0.1),
      light: lighten(themeColors.secondary, 0.3),
      main: themeColors.secondary,
      dark: darken(themeColors.secondary, 0.2),
    },
    primary: {
      lighter: alpha(themeColors.primary, 0.1),
      light: lighten(themeColors.primary, 0.3),
      main: themeColors.primary,
      dark: darken(themeColors.primary, 0.2),
      bg: themeColors.bg,
    },
    success: {
      lighter: alpha(themeColors.success, 0.1),
      light: lighten(themeColors.success, 0.3),
      main: themeColors.success,
      dark: darken(themeColors.success, 0.2),
    },
    warning: {
      lighter: alpha(themeColors.warning, 0.1),
      light: lighten(themeColors.warning, 0.3),
      main: themeColors.warning,
      dark: darken(themeColors.warning, 0.2),
    },
    error: {
      lighter: alpha(themeColors.error, 0.1),
      light: lighten(themeColors.error, 0.3),
      main: themeColors.error,
      dark: darken(themeColors.error, 0.2),
    },
    info: {
      lighter: alpha(themeColors.info, 0.1),
      light: lighten(themeColors.info, 0.3),
      main: themeColors.info,
      dark: darken(themeColors.info, 0.2),
    },
    alpha: {
      white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white,
      },
      trueWhite: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white,
      },
      black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black,
      },
    },
    shadows: {
      appbar: colors.shadows.appbar,
    },
  },
  general: {
    button: {
      paddingSm: "10px 20px",
      borderRadiusSm: "5px",
      borderRadius: "10px",
      borderRadiusLg: "12px",
      borderRadiusXl: "16px",
      transition: "background-color 0.3s ease-in-out",
    },
    footer: {
      backgroundColor: "#303441",
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: 35,
    },
    h2: {
      fontWeight: 700,
      fontSize: "30px",
      padding: "22px 0",
    },
    h3: {
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: 1.4,
      color: colors.alpha.black[100],
    },
    h4: {
      fontWeight: 700,
      fontSize: 20,
    },
    h5: {
      fontWeight: 600,
      fontSize: 19,
    },
    h6: {
      fontSize: 15,
      fontWeight: 400,
    },
    body1: {
      fontSize: 13,
      fontFamily: "Rubik",
    },
    body2: {
      fontSize: "15px",
      lineHeight: 1.63,
      fontFamily: "Rubik",
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: 13,
      textTransform: "uppercase",
      color: colors.alpha.black[50],
    },
    subtitle1: {
      fontSize: 14,
      color: colors.alpha.black[70],
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 15,
      color: colors.alpha.black[70],
    },
    overline: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
});
