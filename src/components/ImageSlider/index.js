import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RenderFile from "../RenderFile";
import "./ImageSlider.css";

export default function ImageSlider({
  gallery,
  imageHeight,
  customStyle,
  mediaStyle,
  imageIndex = 0,
  setImageIndex,
}) {
  return (
    <>
      <style>
        {`
        .swiper-button-prev{
            color:#f1af16;
        }
        `}
      </style>

      <div className="slider_modal">
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          initialSlide={imageIndex}
          onSlideChange={(swiper) => {
            setImageIndex(swiper?.activeIndex);
          }}
        >
          {gallery?.map((elem, index) => {
            return (
              <SwiperSlide key={index}>
                <RenderFile
                  elem={elem}
                  imageHeight={imageHeight}
                  mediaStyle={mediaStyle}
                  customStyle={customStyle}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
