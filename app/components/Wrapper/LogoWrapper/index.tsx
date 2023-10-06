/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled } from "@mui/material";

const Logo = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(0)};
`
);

interface LogoWrapperProps {
  children?: ReactNode;
}

const LogoWrapperMain: FC<LogoWrapperProps> = ({ children }) => {
  return (
    <Logo className="Logo-wrapper">
      <Grid container justifyContent="center" alignItems="center">
        {children}
      </Grid>
    </Logo>
  );
};

LogoWrapperMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LogoWrapperMain;
