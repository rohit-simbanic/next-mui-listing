/* eslint-disable */
import React from "react";
import { styled, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialIconsContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(2)};
    color: ${theme.colors.alpha.white[70]};
  `
);

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <IconButton aria-label="Facebook" color="inherit">
        <FacebookIcon />
      </IconButton>
      <IconButton aria-label="Twitter" color="inherit">
        <TwitterIcon />
      </IconButton>
      <IconButton aria-label="Instagram" color="inherit">
        <InstagramIcon />
      </IconButton>
      <IconButton aria-label="YouTube" color="inherit">
        <YouTubeIcon />
      </IconButton>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
