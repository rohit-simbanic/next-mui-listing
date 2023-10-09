import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

// import required modules
import {
  Pagination,
  Navigation,
  Scrollbar,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Box } from "@mui/material";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
        }}
        effect={"fade"}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, EffectFade, Autoplay]}
        scrollbar={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <Box key={index} style={{ maxHeight: "100%", overflow: "hidden" }}>
            <SwiperSlide>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "800px" }}
              />
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Box>
        ))}
      </Swiper>
    </>
  );
};
export default Carousel;
