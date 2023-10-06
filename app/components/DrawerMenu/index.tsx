/* eslint-disable */
import React from "react";
import { styled, Drawer, Box } from "@mui/material";
import MenuWrapper from "../Wrapper/MenuWrapper/Mobile";
import MenuItem from "../MenuItem";
import CTAItem from "../MenuCTA";
import CTAWrapper from "../Wrapper/MenuCtaWrapper/Mobile";

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const StyledDrawer = styled(Drawer)`
  width: 240px;
`;

const DrawerContent = styled(Box)`
  padding: 16px;
`;

const DrawerMenu: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
  return (
    <StyledDrawer anchor="right" open={open} onClose={onClose}>
      <DrawerContent>
        <MenuWrapper>
          <MenuItem mobile={true} item="Home" link="/mui-theme"></MenuItem>
          <MenuItem mobile={true} item="Listing" link="/mui-theme"></MenuItem>
          <MenuItem mobile={true} item="Property" link="/mui-theme"></MenuItem>
          <MenuItem mobile={true} item="Pages" link="/mui-theme"></MenuItem>
          <MenuItem mobile={true} item="Blog" link="/mui-theme"></MenuItem>
          <MenuItem mobile={true} item="Contact" link="/mui-theme"></MenuItem>
        </MenuWrapper>
        <CTAWrapper>
          <CTAItem item="Schedule A Visit" />
        </CTAWrapper>
      </DrawerContent>
    </StyledDrawer>
  );
};

export default DrawerMenu;
