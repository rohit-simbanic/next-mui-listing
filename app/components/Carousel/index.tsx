/* eslint-disable */
"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton, Paper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

const CarouselContainer = styled(Paper)({
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: "100%",
  height: "auto",
  boxShadow: "none",
});
const IconContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 10px",
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,

  color: theme.colors.alpha.white[100],
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

interface CarouselProps {
  images: {
    default: {
      src: string;
    };
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  useEffect(() => {
    // Update window width when the window is resized
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const imageHeight = windowWidth <= 768 ? 300 : 700;

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <CarouselContainer>
      <SwipeableViews index={activeIndex} resistance>
        {images.map((image, index) => (
          <Box key={index} style={{ maxHeight: "100%", overflow: "hidden" }}>
            <img
              src={image.default.src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: `${imageHeight}px` }}
            />
          </Box>
        ))}
      </SwipeableViews>
      <IconContainer>
        <StyledIconButton onClick={handlePrev} aria-label="previous">
          <KeyboardArrowLeft />
        </StyledIconButton>
        <StyledIconButton onClick={handleNext} aria-label="next">
          <KeyboardArrowRight />
        </StyledIconButton>
      </IconContainer>
    </CarouselContainer>
  );
};

export default Carousel;
