/* eslint-disable */
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { shadows } from "./shadow";
import { palette } from "./pallete";
import typography from "./typography";
import { neutral, secondary } from "./color";

const components = {
  MuiCard: {
    styleOverrides: {
      root: {
        "&.MuiCard-root": {
          width: "100%",
          maxWidth: 400,
        },
        "& .MuiCardMedia-img": {
          height: 224,
        },
        "& .MuiButton-text": {
          textTransform: "capitalize",
        },
        "& .MuiButton-root": {
          color: secondary[1000],
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    variants: [
      {
        props: { variant: "underline-text" },
        style: {
          backgroundColor: "transparent",
          textDecoration: "underline",
          ":hover": {
            backgroundColor: "transparent",
          },
        },
      },
      {
        props: { variant: "underline-text", disabled: true },
        style: {
          backgroundColor: "transparent",
          ":hover": {
            backgroundColor: "transparent",
          },
        },
      },
      {
        props: { variant: "underline-text", color: "primary" },
        style: {
          color: palette.primary.main,
        },
      },
      {
        props: { variant: "underline-text", color: "secondary" },
        style: {
          color: palette.common.black,
        },
      },
      {
        props: { variant: "underline-text", color: "success" },
        style: {
          color: palette.success.main,
        },
      },
      {
        props: { variant: "underline-text", color: "info" },
        style: {
          color: palette.info.main,
        },
      },
      {
        props: { variant: "underline-text", color: "error" },
        style: {
          color: palette.error.main,
        },
      },
      {
        props: { variant: "underline-text", color: "warning" },
        style: {
          color: palette.warning.main,
        },
      },
      {
        props: { size: "large" },
        style: {
          ...typography.buttonLarge,
        },
      },
      {
        props: { size: "medium" },
        style: {
          ...typography.buttonMedium,
        },
      },
      {
        props: { size: "small" },
        style: {
          ...typography.buttonSmall,
        },
      },
    ],
    styleOverrides: {
      root: {
        "&.MuiButton-contained": {
          "&:disabled": {
            backgroundColor: palette.grey[300],
            color: palette.grey[900],
          },
        },
        // Styles needs to be overwritten with !important without this.
        "&.MuiButton-root": {
          boxShadow: "none",
          borderRadius: 4,
          padding: "8px 22px",
          textTransform: "capitalize",

          "&:active": {
            transform: "scale(0.98)",
          },
        },
        "&.MuiButton-underline-text:disabled": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  MuiToggleButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        "&.MuiButtonBase-root": {
          borderRadius: 4,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        "&.MuiPaper-root.MuiPopover-paper, &.MuiPaper-root.MuiPickersPopper-paper":
          {
            // !important needed to replace what's in:
            // src/assets/styles/base/form.scss:21
            boxShadow: `${shadows.medium} !important`,
            filter: "none",
          },
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      placement: "top",
      arrow: true,
    },
    styleOverrides: {
      tooltip: {
        backgroundColor: secondary[1300],
        color: neutral[100],
        fontSize: 14,
        maxWidth: 400,
      },
      arrow: {
        color: secondary[1300],
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.MuiInputBase-root": {
          borderRadius: 4,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-outlined":
          {
            backgroundColor: palette.common.white,
            paddingRight: "8px",
          },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
      fullWidth: true,
      InputLabelProps: {
        disableAnimation: true,
        shrink: true,
      },
      InputProps: {
        startAdornment: null,
        endAdornment: null,
      },
    },
    styleOverrides: {
      root: {
        "&.MuiTextField-root .MuiInputBase-root": {
          ...typography.body1,
        },
        "&.MuiTextField-root .MuiInputBase-sizeSmall": {
          ...typography.body2,
        },
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      size: "large",
    },
    styleOverrides: {
      root: {
        "&.MuiTextField-root .MuiInputLabel-root": {
          backgroundColor: palette.common.white,
          paddingRight: "8px",
        },
      },
    },
    variants: [
      {
        props: { size: "large" },
        style: {
          ...typography.body1,
        },
      },
      {
        props: { size: "small" },
        style: {
          ...typography.body2,
        },
      },
    ],
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        "&.MuiTab-root": {
          textTransform: "capitalize",
        },
      },
    },
  },
  MuiChip: {
    variants: [
      {
        props: { variant: "filled", disabled: true },
        style: {
          backgroundColor: palette.grey[300],
          color: palette.grey[900],
        },
      },
      {
        props: { variant: "light", color: "primary" },
        style: {
          backgroundColor: palette.background.blue,
          color: palette.text.primary,
        },
      },
      {
        props: { variant: "light", color: "secondary" },
        style: {
          backgroundColor: palette.chips.secondaryLight,
          color: palette.text.primary,
        },
      },
      {
        props: { variant: "light", disabled: true },
        style: {
          backgroundColor: palette.grey[50],
          color: palette.grey[900],
        },
      },
      {
        props: { variant: "light", color: "info" },
        style: {
          backgroundColor: palette.background.purple,
          color: palette.text.primary,
        },
      },
      {
        props: { variant: "light", color: "success" },
        style: {
          backgroundColor: palette.background.green,
          color: palette.text.primary,
        },
      },
      {
        props: { variant: "light", color: "warning" },
        style: {
          backgroundColor: palette.background.yellow,
          color: palette.text.primary,
        },
      },
      {
        props: { variant: "light", color: "error" },
        style: {
          backgroundColor: palette.background.red,
          color: palette.text.primary,
        },
      },
    ],
  },
  MuiModal: {
    styleOverrides: {
      root: {
        "&.MuiModal-root.MuiMenu-root": {
          zIndex: 1600,
        },
      },
    },
  },
  MuiAlert: {
    defaultProps: {
      variant: "filled",
      icon: false,
      iconMapping: {
        success: "<CheckCircleOutlineIcon />",
      },
    },
    styleOverrides: {
      root: {
        "&.MuiAlert-root": {
          color: palette.common.white,
        },
      },
      filledWarning: {
        backgroundColor: palette.warning.dark,
      },
    },
    variants: [
      {
        props: { variant: "loading" },
        style: {
          backgroundColor: palette.primary.main,
        },
      },
    ],
  },
  MuiDateCalendar: {
    styleOverrides: {
      root: {
        "&.MuiDateCalendar-root .Mui-selected": {
          backgroundColor: palette.primary.main,
        },
      },
    },
  },
};

export default components;
