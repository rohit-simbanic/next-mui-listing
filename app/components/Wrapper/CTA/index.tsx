/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled, Container } from "@mui/material";

const photo = require("@/public/images/cta/CTA.jpg");

const CTA = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(0, 0, 8)};
        background-image: url(${photo.default.src});
        background-size: cover;
        background-position: center;

`
);

interface CTAWrapperProps {
  children?: ReactNode;
}

const CTAWrapper: FC<CTAWrapperProps> = ({ children }) => {
  return (
    <CTA className="Muicta-wrapper">
      <Container
        maxWidth="md"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {children}
        </Grid>
      </Container>
    </CTA>
  );
};

CTAWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CTAWrapper;
