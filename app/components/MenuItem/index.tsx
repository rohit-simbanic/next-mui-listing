/* eslint-disable */
import React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";

interface MenuTitleProps {
  item?: string;
  link?: string;
  mobile?: boolean;
  onClick?: () => void;
}

const MenuItems = styled(Link)(
  ({ theme }) => `
    color: ${theme.colors.alpha.black[100]};
    text-decoration: none;
    font-size: ${theme.typography.body2.fontSize}`
);

const MenuItem: React.FC<MenuTitleProps> = ({
  item = "",
  link = "",
  mobile,
}) => {
  const padding = mobile ? "0" : "0 23px";

  return (
    <Grid item sx={{ padding }} data-testid="menu-home">
      <MenuItems href={link}>{item}</MenuItems>
    </Grid>
  );
};

MenuItem.propTypes = {
  item: PropTypes.string,
  link: PropTypes.string,
  mobile: PropTypes.bool,
};

export default MenuItem;
