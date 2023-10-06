/* eslint-disable */
import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

// common button component
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors.primary.main,
  color: theme.colors.alpha.white[100],
  padding: theme.general.button.paddingSm,
  borderRadius: theme.general.button.borderRadiusSm,
  border: "none",
  cursor: "pointer",
  transition: theme.general.button.transition,
  margin: theme.spacing(0, 4),
  "&:hover": {
    backgroundColor: theme.colors.primary.dark,
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0), // Apply margin for mobile view
  },
}));

// Define the prop types
interface ButtonComponentProps {
  text: string;
  disabled?: boolean;
  type?: ButtonType;
  style?: React.CSSProperties;
  onClick?: () => void;
}
type ButtonType = "button" | "submit" | "reset";
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  disabled,
  type,
  style,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      type={type || "submit"}
      style={style}
      onClick={onClick}
    >
      <Typography>{text}</Typography>
    </StyledButton>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  style: PropTypes.object,
};

export default ButtonComponent;
