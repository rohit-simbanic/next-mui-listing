/* eslint-disable */
"use client";
import { Grid, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import AboutWrapper from "../../Wrapper/AboutWrapper";
import PageTitle from "../../Wrapper/PageTtitle";
import ButtonComponent from "../../Button";
import VerticalTextBox from "../../InfoBox";

interface photoProps {
  photo?: string;
  bio?: string;
}

const AboutComponent: React.FC<photoProps> = ({ photo, bio }) => {
  const theme = useTheme();
  return (
    <AboutWrapper>
      <Grid item xs={12} md={6}>
        <img
          src={photo}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          alt={bio}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PageTitle
          data-testid="home-text"
          heading="The 8 Billion Dollar Woman"
          subHeading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..."
        />
        <ButtonComponent text="Read More.." />
        <Grid
          container
          spacing={3}
          sx={{
            padding: "0 32px",
            [theme.breakpoints.down("md")]: {
              justifyContent: "center",
            },
          }}
        >
          <Grid item md={4}>
            <VerticalTextBox text1="Properties" text2="100+" />
          </Grid>
          <Grid item md={4}>
            <VerticalTextBox text1="Customers" text2="50+" />
          </Grid>
          <Grid item md={4}>
            <VerticalTextBox text1="Revenue" text2="1M+" />
          </Grid>
        </Grid>
      </Grid>
    </AboutWrapper>
  );
};

AboutComponent.propTypes = {
  photo: PropTypes.string,
  bio: PropTypes.string,
};

export default AboutComponent;
