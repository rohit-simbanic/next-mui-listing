/* eslint-disable */
import React from "react";
import { FC } from "react";
import { styled, Container, Typography } from "@mui/material";

const FooterWrapper = styled("footer")(
  ({ theme }) => `
    padding: ${theme.spacing(4, 0)};
  `
);

const LogoText = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.h6.fontSize};
    font-weight: ${theme.typography.fontWeightBold};
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.alpha.white[100]}
  `
);
const LogoSubText = styled(Typography)(
  ({ theme }) => `
    color: ${theme.colors.alpha.white[70]}
  `
);

interface LogoFooterProps {}

const LogoFooter: FC<LogoFooterProps> = () => {
  return (
    <FooterWrapper>
      <Container>
        <LogoText variant="h3">LOGO</LogoText>
        <LogoSubText variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed non risus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed non risus.
        </LogoSubText>
      </Container>
    </FooterWrapper>
  );
};

export default LogoFooter;
