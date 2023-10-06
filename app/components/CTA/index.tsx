/* eslint-disable */
import React, { FormEvent } from "react";
import { Grid } from "@mui/material";
import PageTitle from "../Wrapper/PageTtitle";
import ContactDetails from "./ContactCard";
import Form from "./Form";
import CTAWrapper from "../Wrapper/CTA";

interface CTAProps {}

const CtaComponent: React.FC<CTAProps> = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues: Record<string, string> = {};
    formData.forEach((value, key) => {
      formValues[key] = value.toString();
    });
    console.log("Form values:", formValues);
  };
  return (
    <CTAWrapper>
      <Grid item md={6}>
        <PageTitle
          heading="READY TO GET STARTED ?"
          color="white"
          style={{ paddingBottom: "0" }}
        />

        <Form onSubmit={handleSubmit} />
      </Grid>
      <Grid item md={6}>
        <ContactDetails />
      </Grid>
    </CTAWrapper>
  );
};

CtaComponent.propTypes = {};

export default CtaComponent;
