import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface HamburgerMenuProps {
  onClick: () => void;
}

const HamburgerIcon = styled(MenuIcon)(
  ({ theme }) => `
    color: ${theme.colors.alpha.black[100]};
  `
);

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <HamburgerIcon />
    </IconButton>
  );
};

export default HamburgerMenu;
