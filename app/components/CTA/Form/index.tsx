/* eslint-disable */
import React, { FormEvent } from "react";
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, styled, TextField, Button } from "@mui/material";

const FormWrapper = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(0, 4, 0)};
    @media (max-width: ${theme.breakpoints.values.md}px) {
      padding: 0
    }
  `
);

const FormField = styled(TextField)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(3)};
    & .MuiInputLabel-root {
        color: ${theme.colors.alpha.white[100]}; 
      }
  `
);

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors.primary.main,
  color: theme.colors.alpha.white[100],
  padding: theme.general.button.paddingSm,
  borderRadius: theme.general.button.borderRadiusSm,
  border: "none",
  cursor: "pointer",
  transition: theme.general.button.transition,
  "&:hover": {
    backgroundColor: theme.colors.primary.dark,
  },
}));

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
}

const Form: FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <FormWrapper>
      <form onSubmit={onSubmit} data-testid="test-form">
        <FormField label="Your Name" fullWidth />
        <FormField label="Phone Number" fullWidth />
        <FormField label="Your Email" fullWidth />
        <FormField label="Your Message" multiline fullWidth rows={4} />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormWrapper>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Form;
