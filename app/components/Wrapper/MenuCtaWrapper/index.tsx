/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled } from "@mui/material";

const CTA = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(0)};
        display:flex;
        background-color:${theme.colors.primary.main};
        cursor: pointer;
        @media (max-width: ${theme.breakpoints.values.md}px) {
          display: none;
        }
`
);

interface CTAWrapperProps {
  children?: ReactNode;
}

const CTAWrapper: FC<CTAWrapperProps> = ({ children }) => {
  return (
    <CTA className="Muicta-wrapper">
      <Grid container justifyContent="center" alignItems="center">
        {children}
      </Grid>
    </CTA>
  );
};

CTAWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CTAWrapper;
