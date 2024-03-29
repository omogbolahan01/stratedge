import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        // slidesPerView={2.4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is <= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is <= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is <= 1024px
          1024: {
            slidesPerView: 2.4,
          },
        }}
      >
        <SwiperSlide>
          <div className="text-swiper">
            <div className="swiper-img">
              <img src="/images/Ellipse 1.png" alt="" />
            </div>

            <div className="text-1">
              <h2>Oliver Bennett</h2>
              <h3>CEO, Bam Company</h3>
            </div>
            <div className="star-area">
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
            </div>
            <p>
              StratEdge Consultancy transformed our operations. Their strategic
              insights and automation solutions had an immediate impact on our
              efficiency and bottom line.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-swiper">
            <div className="swiper-img">
              <img src="/images/Ellipse 1 (1).png" alt="" />
            </div>

            <div className="text-1">
              <h2>Ava Thompson</h2>
              <h3>CEO, Kezoo</h3>
            </div>
            <div className="star-area">
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
            </div>
            <p>
              StratEdge brought a fresh perspective to our marketing strategy.
              Their insights exceeded expectations, resulting in a positive
              impact on our brand and market presence.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-swiper">
            <div className="swiper-img">
              <img src="/images/Ellipse 1 (2).png" alt="" />
            </div>

            <div className="text-1">
              <h2>Ethan Rodriguez</h2>
              <h3>CEO, Pwety Company</h3>
            </div>
            <div className="star-area">
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
            </div>
            <p>
              StratEdge's financial acumen and attention to detail transformed
              our fiscal health. Their strategic approach to financial
              optimization is unmatched.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-swiper">
            <div className="swiper-img">
              <img src="/images/Ellipse 1 (3).png" alt="" />
            </div>

            <div className="text-1">
              <h2>Ethan Rodriguez</h2>
              <h3>Manager, Goonz</h3>
            </div>
            <div className="star-area">
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
            </div>
            <p>
              StratEdge played a pivotal role in transforming our operations.
              Their automation solutions improved efficiency, and their
              dedication to our success was evident
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-swiper">
            <div className="swiper-img">
              <img src="/images/Ellipse 1.png" alt="" />
            </div>

            <div className="text-1">
              <h2>Oliver Bennett</h2>
              <h3>CEO, Bam Company</h3>
            </div>
            <div className="star-area">
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
              <div className="star-img">
                <img src="/images/star.png" alt="" />
              </div>
            </div>
            <p>
              StratEdge Consultancy transformed our operations. Their strategic
              insights and automation solutions had an immediate impact on our
              efficiency and bottom line.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
