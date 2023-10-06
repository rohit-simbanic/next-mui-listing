/* eslint-disable */
import React, { ReactNode, useEffect, useState } from "react";
import { AppBar, Container } from "@mui/material";
import { CSSObject, styled } from "@mui/material/styles";
import PropTypes from "prop-types";

interface AppLayoutProps {
  children?: ReactNode;
}

interface MenuBarProps {
  isScrolled: boolean;
}

const MenuBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})<MenuBarProps>(({ theme, isScrolled }) => {
  const styles: CSSObject = {
    backgroundColor: theme.colors.alpha.white[100],
    boxShadow: theme.colors.shadows.appbar,
    height: isScrolled ? "80px" : "60px",
    transform: `translateY(${isScrolled ? "0" : "0"})`,
    transition: "height 0.3s ease-in-out, transform 0.3s ease-in-out",
    justifyContent: "space-evenly",
  };
  return styles;
});

const AppBarWrapper: React.FC<AppLayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <MenuBar position="fixed" isScrolled={isScrolled}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </Container>
    </MenuBar>
  );
};

AppBarWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppBarWrapper;
