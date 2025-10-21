"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./SideThumbCarousel.module.css";
import { imageUrl } from "@/config/apiUrl";
import ImageSliderModal from "@/modals/ImageSliderModal";

export default function CustomCarousel({
  dataArray,
  thumbsPosition = "horizontal",
  customClass,
  showNavBtn = true,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageOpen, setImageOpen] = useState({
    isOpen: false,
    photoIndex: 0,
  });
  return (
    <>
      <div
        className={[
          classes.SwiperWrapper,
          thumbsPosition === "vertical" ? classes.vertical : classes.horizontal,
          customClass && customClass,
        ].join(" ")}
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-color": "#1C1C1C",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-width": "20px",
            "--swiper-pagination-bullet-height": "7px",
            "--swiper-pagination-bullet-border-radius": "30px",
          }}
          loop={true}
          spaceBetween={10}
          navigation={showNavBtn}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className={classes.mainSwiper}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {dataArray?.length > 0 &&
            dataArray?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={classes.content}
                    onClick={() => {
                      setImageOpen({
                        isOpen: true,
                        photoIndex: index,
                      });
                    }}
                  >
                    <img src={item} alt="..." />
                    {/* <img src={imageUrl(item)} alt="..." /> */}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={thumbsPosition === "vertical" ? 2 : 4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          direction={thumbsPosition}
          className={classes.swiperThumbs}
          breakpoints={{
            320: {
              slidesPerView: thumbsPosition === "vertical" ? 2 : 2,
              spaceBetween: 5,
              direction: "horizontal",
            },

            768: {
              slidesPerView: thumbsPosition === "vertical" ? 2 : 3,
              spaceBetween: 10,
              direction: thumbsPosition,
            },

            1024: {
              slidesPerView: thumbsPosition === "vertical" ? 2 : 4,
              spaceBetween: 10,
              direction: thumbsPosition,
            },
          }}
        >
          {dataArray?.length > 0 &&
            dataArray?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={classes.content}>
                    <img src={item} alt="..." />
                    {/* <img src={imageUrl(item)} alt="..." /> */}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      {imageOpen?.isOpen && (
        <ImageSliderModal
          show={imageOpen?.isOpen}
          setShow={(e) => setImageOpen({ isOpen: e, photoIndex: 0 })}
          gallery={dataArray}
          imageIndex={imageOpen?.photoIndex}
          setImageIndex={(e) => setImageOpen({ isOpen: true, photoIndex: e })}
        />
      )}
      {/* {imageOpen?.isOpen && (
        <Lightbox
          onImageLoad={(e) => setSelectedImage(e)}
          mainSrc={dataArray?.[imageOpen?.photoIndex]}
          nextSrc={dataArray?.[imageOpen?.photoIndex + (1 % dataArray?.length)]}
          prevSrc={
            dataArray[
              (imageOpen?.photoIndex + dataArray?.length - 1) %
                dataArray?.length
            ]
          }
          onCloseRequest={() => setImageOpen({ isOpen: false, photoIndex: 0 })}
          onMovePrevRequest={() =>
            setImageOpen({
              isOpen: true,
              photoIndex:
                (imageOpen?.photoIndex + dataArray?.length - 1) %
                dataArray?.length,
            })
          }
          onMoveNextRequest={() =>
            setImageOpen({
              isOpen: true,
              photoIndex: (imageOpen?.photoIndex + 1) % dataArray?.length,
            })
          }
        />
      )} */}
    </>
  );
}
