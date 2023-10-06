/* eslint-disable */
import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
import PropTypes from "prop-types";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface CtaProps {
  item?: string;
}

const CTAItems = styled(Box)(
  ({ theme }) => `
    color: ${theme.colors.alpha.white[100]};
    text-decoration: none;
    display:flex;
    align-items:center;
    gap:11px;
    font-weight: ${theme.typography.fontWeightBold};
    margin: 0`
);
const IconWrapperMenu = styled("div")(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[10]};
    width:${theme.spacing(5)};
    height:${theme.spacing(5)};
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius:50%;
`
);

const CTAItem: React.FC<CtaProps> = ({ item = "" }) => {
  return (
    <Grid item sx={{ padding: "0 23px" }} data-testid="icon-wrapper">
      <CTAItems>
        <IconWrapperMenu>
          <CalendarMonthIcon />
        </IconWrapperMenu>
        <p>{item}</p>
      </CTAItems>
    </Grid>
  );
};

CTAItem.propTypes = {
  item: PropTypes.string,
};

export default CTAItem;
