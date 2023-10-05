/* eslint-disable */
import {
  black,
  white,
  primary,
  secondary,
  warning,
  error,
  neutral,
  success,
  deepPurple,
} from "./color";

export const setAlpha = (color: string, alpha: number) => {
  const rgba = color.split(",");
  if (rgba.length !== 4) return color;
  rgba.pop();
  return `${[...rgba, alpha].join(",")})`;
};

export const palette = {
  type: "light",
  primary: {
    main: primary["1000"],
    light: primary["400"],
    dark: primary["1300"],
    contrastText: white,
  },
  secondary: {
    main: secondary["1000"],
    light: secondary["700"],
    dark: secondary["1300"],
    graph: secondary["1500"],
    contrastText: white,
  },
  warning: {
    main: warning["700"],
    light: warning["500"],
    dark: warning["900"],
    contrastText: neutral["1600"],
  },
  error: {
    modal: error[1100],
    main: error["1000"],
    light: error["500"],
    dark: error["1200"],
  },
  text: {
    primary: neutral["1600"],
    secondary: neutral["1000"],
    disabled: neutral["600"],
    hint: neutral["1600p"],
  },
  common: {
    black,
    white,
  },
  success: {
    main: success["1000"],
    light: success["500"],
    dark: success["1300"],
    contrastText: white,
  },
  grey: {
    50: neutral["100"],
    100: neutral["200"],
    200: neutral["300"],
    300: neutral["400"],
    400: neutral["500"],
    500: neutral["600"],
    600: neutral["700"],
    700: neutral["800"],
    800: neutral["900"],
    900: neutral["1000"],
    A100: neutral["1100"],
    A200: neutral["1200"],
    A400: neutral["1300"],
    A700: neutral["1400"],
  },
  info: {
    main: deepPurple["1000"],
    light: deepPurple["500"],
    dark: deepPurple["1300"],
    contrastText: white,
  },
  data: {
    blue: primary["1200"],
    green: success[900],
    yellow: warning[800],
    red: error[900],
    darkBlue: secondary[900],
    purple: deepPurple["900"],
  },
  divider: setAlpha(neutral["1600p"], 0.12),
  background: {
    paper: white,
    default: white,
    grey: neutral["1800"],
    red: error["100"],
    yellow: warning["100"],
    blue: primary["100"],
    purple: deepPurple["100"],
    green: success["100"],
    dark: neutral["1900"],
    map: {
      data: "#ffffffe6",
    },
  },
  chips: {
    secondaryLight: secondary[100],
  },
  action: {
    active: setAlpha(neutral["1600p"], 0.54),
    hover: setAlpha(neutral["1600p"], 0.04),
    hoverOpacity: 0.04,
    selected: setAlpha(neutral["1600p"], 0.08),
    selectedOpacity: 0.08,
    disabled: setAlpha(neutral["1600p"], 0.26),
    disabledBackground: setAlpha(neutral["1600p"], 0.12),
    disabledOpacity: 0.38,
    focus: setAlpha(neutral["1600p"], 0.12),
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  mapShapes: {
    lightest: deepPurple["200"],
    light: deepPurple["400"],
    medium: deepPurple["800"],
    dark: deepPurple["1300"],
    darkest: deepPurple["1600"],
  },
};
