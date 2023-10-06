/* eslint-disable */
"use client";
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled, useTheme } from "@mui/material";

const Header = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(0)};
        display:flex;
        @media (max-width: ${theme.breakpoints.values.md}px) {
          display: block;
        }
`
);

interface MenuWrapperProps {
  children?: ReactNode;
}

const MenuWrapper: FC<MenuWrapperProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Header className="MuiMenu-wrapper">
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        gap="16px"
        sx={{ marginBottom: theme.spacing(3) }}
      >
        {children}
      </Grid>
    </Header>
  );
};

MenuWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuWrapper;
