/* eslint-disable */
import React from "react";
import { Grid } from "@mui/material";
import MainFooterWrapper from "../Wrapper/MainFooter";
import Copyright from "./Copyright";
import SocialIcons from "./SocialIcons";

interface CTAProps {}

const MainFooterComponent: React.FC<CTAProps> = () => {
  return (
    <MainFooterWrapper>
      <Grid item md={6}>
        <Copyright />
      </Grid>
      <Grid item md={6}>
        <SocialIcons />
      </Grid>
    </MainFooterWrapper>
  );
};

MainFooterComponent.propTypes = {};

export default MainFooterComponent;
