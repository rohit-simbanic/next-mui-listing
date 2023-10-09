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
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth); // Track window width

  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: number, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageHeight = windowWidth <= 768 ? 300 : 800;
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <Box key={index} style={{ maxHeight: "100%", overflow: "hidden" }}>
            <SwiperSlide>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: `${imageHeight}px` }}
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
