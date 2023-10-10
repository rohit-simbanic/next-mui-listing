"use client";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import AppBarWrapper from "../components/AppBar";
import LogoWrapperMain from "../components/Wrapper/LogoWrapper";
import HamburgerMenu from "../components/HambergerMenu";
import DrawerMenu from "../components/DrawerMenu";
import MenuWrapper from "../components/Wrapper/MenuWrapper";
import MenuItem from "../components/MenuItem";
import CTAItem from "../components/MenuCTA";
import PropertyCardFetched from "../components/PropertyCardFetched.tsx";
import SubFooterComponent from "../components/SubFooter";
import MainFooterComponent from "../components/MainFooter";
import GMap from "../components/GoogleMap";
import Logo from "../components/Logo";
import CTAWrapper from "../components/Wrapper/MenuCtaWrapper";

const FilterPageWrapper = styled(Box)(
  ({ theme }) => `
      overflow: auto;
      flex: 1;
      overflow-x: hidden;
      align-items: center;
      background-color:${theme.colors.primary.bg};
      font-family:${theme.typography.fontFamily};
      font-size:300;
  `
);

export default function FilterPage() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <FilterPageWrapper>
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
          <MenuItem item="Listing" link="/filter"></MenuItem>
          <MenuItem item="Property" link="/dashboard"></MenuItem>
          <MenuItem item="Add Property" link="/add-property"></MenuItem>
        </MenuWrapper>
        <CTAWrapper>
          <CTAItem item="Schedule A Visit" />
        </CTAWrapper>
      </AppBarWrapper>

      <Grid container spacing={1}>
        <Grid item md={5} xs={12}>
          <GMap />
        </Grid>
        <Grid item md={7} xs={12}>
          <PropertyCardFetched />
          <SubFooterComponent />
          <MainFooterComponent />
        </Grid>
      </Grid>
    </FilterPageWrapper>
  );
}
