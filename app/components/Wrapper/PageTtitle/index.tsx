/* eslint-disable */
import { FC } from "react";
import PropTypes from "prop-types";
import { Typography, styled } from "@mui/material";
import PageTitleWrapper from "./SectionTitle";

const StyledHeading = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.black[100]};
      padding: ${theme.spacing(0, 1, 0, 0)};
      font-size:${theme.typography.h2.fontSize};
      font-weight: ${theme.typography.h2.fontWeight};
      padding: ${theme.typography.h2.padding};
      @media (max-width: 960px) {
        font-size: 1.2rem;
      }
      
    `
);
const StyledSubHeading = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.black[50]}; // Different color for subHeading
      font-size:${theme.typography.body2.fontSize};
      line-height: ${theme.typography.body2.lineHeight}
    `
);

interface PageTitleProps {
  heading?: string;
  subHeading?: string;
  color?: string;
  style?: {
    paddingBottom: string;
  };
}

const PageTitle: FC<PageTitleProps> = ({
  heading = "",
  subHeading = "",
  color = "",
  style,
  ...rest
}) => {
  return (
    <PageTitleWrapper {...rest}>
      <StyledHeading variant="h2" style={{ color: `${color}` }}>
        {heading}
      </StyledHeading>
      <StyledSubHeading variant="body2" style={{ color: `${color}` }}>
        {subHeading}
      </StyledSubHeading>
    </PageTitleWrapper>
  );
};

PageTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.shape({
    paddingBottom: PropTypes.string.isRequired,
  }),
};

export default PageTitle;
