/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Grid, styled, Container } from "@mui/material";

const SubFooter = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.general.footer.backgroundColor};

`
);

interface SubFooterWrapperProps {
  children?: ReactNode;
}

const SubFooterWrapper: FC<SubFooterWrapperProps> = ({ children }) => {
  return (
    <SubFooter className="Muisubfooter-wrapper">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Container>
    </SubFooter>
  );
};

SubFooterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubFooterWrapper;
