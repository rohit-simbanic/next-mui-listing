/* eslint-disable */
import { Box, Grid, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.colors.alpha.black[100]};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoTextWrapper = styled(Box)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
`
);

const LogoText = styled(Box)(
  ({ theme }) => `
        font-size: ${theme.typography.pxToRem(35)};
        font-weight: ${theme.typography.fontWeightBold};
        display: flex;
        @media (max-width: 600px) {
          font-size: 1.2rem;
        }
      
        @media (max-width: 960px) {
          font-size: 1.5rem;
        }
`
);

function Logo() {
  return (
    <Grid item>
      <LogoWrapper href="/">
        <Box component="span">
          <LogoTextWrapper>
            <LogoText>
              <Image
                src="https://img.icons8.com/arcade/61/000000/mobile-home.png"
                alt="logo"
                width={60}
                height={60}
              />
            </LogoText>
          </LogoTextWrapper>
        </Box>
      </LogoWrapper>
    </Grid>
  );
}

export default Logo;
