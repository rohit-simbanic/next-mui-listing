/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled, Container } from "@mui/material";

const MainFooter = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.general.footer.backgroundColor};
  border-top: 1px solid ${theme.colors.alpha.white[70]};

`
);

interface SubFooterWrapperProps {
  children?: ReactNode;
}

const MainFooterWrapper: FC<SubFooterWrapperProps> = ({ children }) => {
  return (
    <MainFooter className="Muisubfooter-wrapper">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          {children}
        </Grid>
      </Container>
    </MainFooter>
  );
};

MainFooterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainFooterWrapper;
