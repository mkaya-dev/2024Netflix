import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../Pages/All.css"

import korku1 from "../Images/korku1.jpg"
import korku2 from "../Images/korku2.jpg"
import korku3 from "../Images/korku3.jpg"
import korku4 from "../Images/korku4.jpg"
import korku5 from "../Images/korku5.jpg"
import korku6 from "../Images/korku6.jpg"
import korku7 from "../Images/korku7.jpg"
import korku8 from "../Images/korku8.jpg"
import korku9 from "../Images/korku9.jpg"
import korku10 from "../Images/korku10.jpg"
import korku11 from "../Images/korku11.jpg"
import korku12 from "../Images/korku12.jpg"
import korku13 from "../Images/korku13.jpg"
import korku14 from "../Images/korku14.jpg"
import korku15 from "../Images/korku15.jpg"




// Import Swiper styles




function Swiper1() {
    return (
        <div className="App">

            <Swiper
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 1,
                    modifier: 2.5
                }}
                slidesPerView={7}
                centeredSlides
                style={{ height: "300px" }}
            >
                
                <SwiperSlide>
                        <img src={korku1}  />
                </SwiperSlide>
                
                <SwiperSlide>
                        <img src={korku2}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku3}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku4}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku5}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku6}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku7}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku8}  />
                </SwiperSlide>
                <SwiperSlide >
                        <img src={korku9}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku10}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku11}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku12}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku13}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku14}  />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={korku15}  />
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
}


export default Swiper1;
