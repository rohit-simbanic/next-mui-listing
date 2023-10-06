/* eslint-disable */
import React from "react";
import { FC } from "react";
import { styled, Container, Typography } from "@mui/material";
import Link from "next/link";

const FooterMenuWrapper = styled("footer")(
  ({ theme }) => `
    padding: ${theme.spacing(4, 0)};
  `
);

const NavigationText = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.h6.fontSize};
    font-weight: ${theme.typography.fontWeightBold};
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.alpha.white[100]}
  `
);

const MenuList = styled("ul")(
  ({ theme }) => `
    list-style: none;
    padding: 0;
    margin: ${theme.spacing(2, 0)};
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
        margin: ${theme.spacing(1, 0)};
        position: relative;
    }

    .menu-link {
        text-decoration: none;
        color: ${theme.colors.alpha.white[70]};
        border-bottom: 1px dotted ${theme.palette.grey[700]};
        transition: border-color 0.2s ease-in-out;
  
        &:hover {
          border-color: ${theme.palette.primary.main};
        }
      }
  `
);

interface FooterMenuProps {}

const FooterMenu: FC<FooterMenuProps> = () => {
  return (
    <FooterMenuWrapper>
      <Container>
        <NavigationText variant="h3">Navigation</NavigationText>
        <MenuList>
          <li>
            <Link href="/" className="menu-link">
              Menu 1
            </Link>
          </li>
          <li>
            <Link href="/menu2" className="menu-link">
              Menu 2
            </Link>
          </li>
          <li>
            <Link href="/menu3" className="menu-link">
              Menu 3
            </Link>
          </li>
          <li>
            <Link href="/menu4" className="menu-link">
              Menu 4
            </Link>
          </li>
          <li>
            <Link href="/menu5" className="menu-link">
              Menu 5
            </Link>
          </li>
        </MenuList>
      </Container>
    </FooterMenuWrapper>
  );
};

export default FooterMenu;
