/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled, Container } from "@mui/material";

const About = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(10, 0, 3)};
        @media (max-width: ${theme.breakpoints.values.md}px) {
          padding-top: ${theme.spacing(9.3)}
        }
`
);

interface AboutWrapperProps {
  children?: ReactNode;
}

const AboutWrapper: FC<AboutWrapperProps> = ({ children }) => {
  return (
    <About className="MuiAbout-wrapper">
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {children}
        </Grid>
      </Container>
    </About>
  );
};

AboutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutWrapper;
