"use client";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import { Swiper as ISwiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import CategoryCover from "@/assets/images/temp/category-car.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface Props extends ICmptProps {}

const CategoryCarousel: React.FC<Props> = ({ className }) => {
  const [swiper, setSwiper] = useState<ISwiper>();

  const prev = () => {
    swiper?.slidePrev();
  };

  const next = () => {
    swiper?.slideNext();
  };

  const handleSwiper = (swiper: ISwiper) => {
    setSwiper(swiper);
  };

  useEffect(() => {
    if (swiper) handleSwiperSlideChange();
  }, [swiper]);

  // 是否显示上一页
  const [showPrev, setShowPrev] = useState(false);
  // 是否显示下一页
  const [showNext, setShowNext] = useState(false);

  const handleSwiperSlideChange = () => {
    if (!swiper) return;
    swiper.isBeginning ? setShowPrev(false) : setShowPrev(true);
    swiper.isEnd ? setShowNext(false) : setShowNext(true);
  };

  return (
    <div
      className={[
        " bg-gray rounded-main p-2 relative overflow-hidden",
        className,
      ].join(" ")}
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        navigation
        pagination
        className="text-white text-xs relative"
        onSwiper={handleSwiper}
        onSlideChange={handleSwiperSlideChange}
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item) => {
          return (
            <SwiperSlide
              key={item}
              style={{ width: 140, height: 40 }}
              className=" rounded-main overflow-hidden relative"
            >
              <Link href={""} className="w-full h-full">
                <Image
                  src={CategoryCover}
                  width={0}
                  height={0}
                  className="w-full h-full object-cover relative z-0"
                  alt="分类封面"
                />
                <div className="flex backdrop-blur-[1px] items-center justify-center absolute left-0 top-0 w-full h-full z-10">
                  <span>#Car</span>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/** 下一项 */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to left,rgba(245,245,245,100%) 0%,rgba(245,245,245,100%) 50%,rgba(245,245,245,38.5%) 75%,rgba(245,245,245,0%) 100%)",
        }}
        className={[
          "h-full aspect-[2/1]  absolute z-20 right-0 top-0 flex items-center justify-end transition-all",
          showNext ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <button
          onClick={next}
          className="h-full w-1/2 flex items-center justify-center"
        >
          <i className="iconfont icon-arrow -rotate-90 text-font-100" />
        </button>
      </div>
      {/** 上一项 */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(245,245,245,100%) 0%,rgba(245,245,245,100%) 50%,rgba(245,245,245,38.5%) 75%,rgba(245,245,245,0%) 100%)",
        }}
        className={[
          "h-full aspect-[2/1]  absolute z-20 left-0 top-0 flex items-center justify-start transition-all",
          showPrev ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <button
          onClick={prev}
          className="h-full w-1/2 flex items-center justify-center"
        >
          <i className="iconfont icon-arrow rotate-90 text-font-100" />
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
