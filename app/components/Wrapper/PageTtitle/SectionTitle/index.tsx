/* eslint-disable */
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
        @media (max-width: ${theme.breakpoints.values.md}px) {
          padding: 0 0 32px;
        }
`
);

interface PageTitleWrapperProps {
  children?: ReactNode;
}

const PageTitleWrapper: FC<PageTitleWrapperProps> = ({ children }) => {
  return <PageTitle className="MuiPageTitle-wrapper">{children}</PageTitle>;
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitleWrapper;
