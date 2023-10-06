import React from "react";
import { styled, Typography } from "@mui/material";

const CopyrightContainer = styled("div")(
  ({ theme }) => `
    padding: ${theme.spacing(2)};
    color: ${theme.colors.alpha.white[70]};
  `
);

const Copyright = () => {
  return (
    <CopyrightContainer>
      <Typography variant="body2">
        2023 © Copyright - All Rights Reserved.
      </Typography>
    </CopyrightContainer>
  );
};

export default Copyright;
