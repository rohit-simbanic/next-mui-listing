/* eslint-disable */
"use client";
import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppBarWrapper from "../components/AppBar";
import CtaComponent from "../components/CTA";
import SubFooterComponent from "../components/SubFooter";
import MainFooterComponent from "../components/MainFooter";
import LogoWrapperMain from "../components/Wrapper/LogoWrapper";
import Logo from "../components/Logo";
import HamburgerMenu from "../components/HambergerMenu";
import DrawerMenu from "../components/DrawerMenu";
import MenuWrapper from "../components/Wrapper/MenuWrapper";
import MenuItem from "../components/MenuItem";
import CTAWrapper from "../components/Wrapper/MenuCtaWrapper";
import CTAItem from "../components/MenuCTA";
import SidebarPrimary from "../components/Sidebar";
import PropertyCardFetched from "../components/PropertyCardFetched.tsx";

const DashboardtWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
    background-color:${theme.colors.primary.bg};
`
);

export default function DashboardPage() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DashboardtWrapper>
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
          <MenuItem item="Listing" link="/home"></MenuItem>
          <MenuItem item="Filter" link="/filter"></MenuItem>
          <MenuItem item="Add Property" link="/add-property"></MenuItem>
        </MenuWrapper>

        <CTAWrapper>
          <CTAItem item="Schedule A Visit" />
        </CTAWrapper>
      </AppBarWrapper>
      <Box sx={{ display: "flex" }}>
        <SidebarPrimary />
        <PropertyCardFetched />
      </Box>
      <CtaComponent />
      <SubFooterComponent />
      <MainFooterComponent />
    </DashboardtWrapper>
  );
}
