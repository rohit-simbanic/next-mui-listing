/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled, Container, useTheme } from "@mui/material";

const Sale = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(0, 0, 2)};
`
);

interface SaleWrapperProps {
  children?: ReactNode;
}

const SaleWrapper: FC<SaleWrapperProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Sale className="MuiSale-wrapper">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            [theme.breakpoints.down("md")]: {
              marginLeft: 0,
            },
            [theme.breakpoints.up("md")]: {
              marginLeft: 0,
            },
          }}
        >
          {children}
        </Grid>
      </Container>
    </Sale>
  );
};

SaleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SaleWrapper;
