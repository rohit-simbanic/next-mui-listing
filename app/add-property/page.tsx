"use client";
import React, { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppBarWrapper from "../components/AppBar";
import LogoWrapperMain from "../components/Wrapper/LogoWrapper";
import Logo from "../components/Logo";
import HamburgerMenu from "../components/HambergerMenu";
import DrawerMenu from "../components/DrawerMenu";
import MenuWrapper from "../components/Wrapper/MenuWrapper";
import MenuItem from "../components/MenuItem";
import CTAWrapper from "../components/Wrapper/MenuCtaWrapper";
import CTAItem from "../components/MenuCTA";
import SidebarPrimary from "../components/Sidebar";
import CtaComponent from "../components/CTA";
import SubFooterComponent from "../components/SubFooter";
import MainFooterComponent from "../components/MainFooter";
import AddPropertyForm from "../components/propertyForm";

const SignupWrapper = styled(Box)(
  ({ theme }) => `
      overflow: auto;
      flex: 1;
      overflow-x: hidden;
      align-items: center;
      background-color:${theme.colors.primary.bg};
  `
);

const AddProperty = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <SignupWrapper>
      <AppBarWrapper>
        <LogoWrapperMain>
          <Logo />
        </LogoWrapperMain>
        {/* Start Mobile Responsive code */}
        {isMdBreakpoint && <HamburgerMenu onClick={toggleDrawer} />}
        <DrawerMenu open={drawerOpen} onClose={toggleDrawer} />
        {/* End Mobile Responsive code */}
        <MenuWrapper>
          <MenuItem item="Home" link="/"></MenuItem>
          <MenuItem item="Listing" link="/"></MenuItem>
          <MenuItem item="Property" link="/"></MenuItem>
          <MenuItem item="Pages" link="/"></MenuItem>
          <MenuItem item="Dashboard" link="/dashboard"></MenuItem>
          <MenuItem item="Contact" link="/"></MenuItem>
        </MenuWrapper>
        <CTAWrapper>
          <CTAItem item="Schedule A Visit" />
        </CTAWrapper>
      </AppBarWrapper>
      <Box sx={{ display: "flex" }}>
        <SidebarPrimary />
        <AddPropertyForm />
      </Box>

      <CtaComponent />
      <SubFooterComponent />
      <MainFooterComponent />
    </SignupWrapper>
  );
};

export default AddProperty;
