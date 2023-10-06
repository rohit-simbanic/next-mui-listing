/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled } from "@mui/material";

const Header = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(0)};
        display:flex;
        @media (max-width: ${theme.breakpoints.values.md}px) {
          display: none;
        }
`
);

interface MenuWrapperProps {
  children?: ReactNode;
}

const MenuWrapper: FC<MenuWrapperProps> = ({ children }) => {
  return (
    <Header className="MuiMenu-wrapper">
      <Grid container justifyContent="center" alignItems="center">
        {children}
      </Grid>
    </Header>
  );
};

MenuWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuWrapper;
