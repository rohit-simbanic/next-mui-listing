"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppBarWrapper from "./components/AppBar";
import LogoWrapperMain from "./components/Wrapper/LogoWrapper";
import Logo from "./components/Logo";
import HamburgerMenu from "./components/HambergerMenu";
import { useState } from "react";
import DrawerMenu from "./components/DrawerMenu";
import MenuWrapper from "./components/Wrapper/MenuWrapper";
import MenuItem from "./components/MenuItem";
import CTAWrapper from "./components/Wrapper/MenuCtaWrapper";
import CTAItem from "./components/MenuCTA";
import AboutComponent from "./components/HomeComponents/About";
import CtaComponent from "./components/CTA";
import SubFooterComponent from "./components/SubFooter";
import MainFooterComponent from "./components/MainFooter";
import ScrollBottomToTop from "./components/ScrollTop";
import Carousel from "./components/Carousel";
import SaleComponent from "./components/Sale";
import { useRouter } from "next/navigation";

export default function Home() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const MyReportWrapper = styled(Box)(
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
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const photo = require("@/public/images/about/women.jpg");
  const images = [
    require("@/public/images/slider/img1.jpg"),
    require("@/public/images/slider/img2.jpg"),
    require("@/public/images/slider/img3.jpg"),
  ];
  const router = useRouter();
  return (
    <main>
      <MyReportWrapper>
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
        <Carousel images={images} />
        <AboutComponent photo={photo.default.src} bio="bio" />
        <SaleComponent />
        <CtaComponent />
        <SubFooterComponent />
        <MainFooterComponent />
        <ScrollBottomToTop />
      </MyReportWrapper>
    </main>
  );
}
