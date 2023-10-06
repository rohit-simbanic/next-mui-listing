/* eslint-disable */
"use client";
import React, { useState, useEffect } from "react";
import { styled, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTopButton = styled(Fab)(
  ({ theme }) => `
    position: fixed;
    bottom: ${theme.spacing(2)};
    right: ${theme.spacing(2)};
    visibility: hidden;
    transition: visibility 0.3s ease-in-out;
    z-index: 1000;
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.alpha.white[100]};
    &: hover {
        background-color:${theme.palette.primary.dark} ;
    }

    &.visible {
      visibility: visible;
    }
  `
);

const ScrollBottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollTopButton
      aria-label="scroll back to top"
      className={isVisible ? "visible" : ""}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon />
    </ScrollTopButton>
  );
};

export default ScrollBottomToTop;
