/* eslint-disable */
"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface VerticalTextBoxProps {
  text1: string;
  text2: string;
}

const VerticalTextContainer = styled(Box)(
  ({ theme }) => `
    margin: ${theme.spacing(3.5, 0)};
    @media (max-width: ${theme.breakpoints.values.md}px) {
      margin-bottom: 0
    }
    `
);

const StyledH2 = styled(Typography)(
  ({ theme }) => `
    position: relative;
    color: ${theme.colors.alpha.black[100]};
    padding: ${theme.spacing(2, 1, 0, 0)};
    font-size:${theme.typography.h3.fontSize};
    `
);

const VerticalTextBox: React.FC<VerticalTextBoxProps> = ({ text1, text2 }) => {
  const [isSpecial] = useState(true);
  const theme = useTheme();
  return (
    <VerticalTextContainer>
      <StyledH2 variant="h3">{text1}</StyledH2>
      <StyledH2
        variant="h3"
        style={{
          color: isSpecial
            ? theme.colors.secondary.main
            : theme.colors.alpha.black[100],
        }}
      >
        {text2}
      </StyledH2>
    </VerticalTextContainer>
  );
};

VerticalTextBox.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default VerticalTextBox;
