/* eslint-disable */
import React from "react";
import { Grid } from "@mui/material";
import TwitterFeed from "./TwitterFeed";
import SubFooterWrapper from "../Wrapper/SubFooter";
import LogoFooter from "./LogoArea";
import FooterMenu from "./NavArea";

interface CTAProps {}

const SubFooterComponent: React.FC<CTAProps> = () => {
  return (
    <SubFooterWrapper>
      <Grid item md={4}>
        <LogoFooter />
      </Grid>
      <Grid item md={4}>
        <FooterMenu />
      </Grid>
      <Grid item md={4}>
        <TwitterFeed />
      </Grid>
    </SubFooterWrapper>
  );
};

SubFooterComponent.propTypes = {};

export default SubFooterComponent;
