/* eslint-disable */
import React from "react";
import { styled, Container, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PageTitle from "../../Wrapper/PageTtitle";

const photo = require("@/public/images/cta/contact.jpg");

const ContactDetailsWrapper = styled(Container)(
  ({ theme }) => `
    background-image: url(${photo});
    background-size: cover;
    background-position: center;
    border-radius: ${theme.spacing(1)};
    padding-bottom:${theme.spacing(4)}
    
  `
);

const ContactItem = styled(Grid)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(3)};
    color: ${theme.colors.alpha.white[100]},
  `
);

const IconWrapper = styled("div")(
  ({ theme }) => `
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.primary.main};
    border-radius: 50%;
    color: ${theme.palette.common.white};
  `
);

const ContactDetails = () => {
  return (
    <ContactDetailsWrapper>
      <PageTitle
        heading="CONTACT DETAILS"
        color="white"
        subHeading="Please find below contact details and contact us today!"
      />
      <ContactItem>
        <IconWrapper>
          <LocationOnIcon />
        </IconWrapper>
        <Typography variant="body2" sx={{ color: "#e1d4d4" }}>
          123 Main Street, City, Country
        </Typography>
      </ContactItem>
      <ContactItem>
        <IconWrapper>
          <PhoneIcon />
        </IconWrapper>
        <Typography variant="body2" sx={{ color: "#e1d4d4" }}>
          +123 456 7890
        </Typography>
      </ContactItem>
      <ContactItem>
        <IconWrapper>
          <EmailIcon />
        </IconWrapper>
        <Typography variant="body2" sx={{ color: "#e1d4d4" }}>
          info@example.com
        </Typography>
      </ContactItem>
      <ContactItem>
        <IconWrapper>
          <AccessTimeIcon />
        </IconWrapper>
        <Typography variant="body2" sx={{ color: "#e1d4d4" }}>
          9.00 AM - 9.00 PM
        </Typography>
      </ContactItem>
    </ContactDetailsWrapper>
  );
};

export default ContactDetails;
