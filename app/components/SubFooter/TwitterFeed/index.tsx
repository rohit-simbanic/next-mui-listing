/* eslint-disable */
import React from "react";
import { styled, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

const TwitterFeedContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacing(4)};
    color: ${theme.palette.common.white};
    @media (max-width: ${theme.breakpoints.values.md}px) {
      padding: 0 14px 32px;
    }
  `
);

const TwitterIconWrapper = styled("div")(
  ({ theme }) => `
    display: flex;
    align-items: center;
    margin-top: ${theme.spacing(2)};
  `
);

const TwitterText = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.alpha.white[100]}
  `
);
const TwitterFeedText = styled(Typography)(
  ({ theme }) => `
    color: ${theme.colors.alpha.white[70]}
  `
);

const TwitterFeed = () => {
  return (
    <TwitterFeedContainer>
      <TwitterText variant="h3">Twitter Feed</TwitterText>
      <TwitterIconWrapper>
        <TwitterIcon fontSize="large" />
        <TwitterFeedText variant="body1" style={{ marginLeft: "8px" }}>
          @mynameislorem - Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </TwitterFeedText>
      </TwitterIconWrapper>
      <TwitterIconWrapper>
        <TwitterIcon fontSize="large" />
        <TwitterFeedText variant="body1" style={{ marginLeft: "8px" }}>
          @mynameislorem - Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </TwitterFeedText>
      </TwitterIconWrapper>
    </TwitterFeedContainer>
  );
};

export default TwitterFeed;
