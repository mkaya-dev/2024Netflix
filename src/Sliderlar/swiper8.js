import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../Pages/All.css"

import macera1 from "../Images/g1.jpg"
import macera2 from "../Images/g2.jpg"
import macera3 from "../Images/g3.jpg"
import macera4 from "../Images/g4.jpg"
import macera5 from "../Images/g5.jpg"
import macera6 from "../Images/g6.jpg"
import macera7 from "../Images/g7.jpg"
import macera8 from "../Images/g8.jpg"
import macera9 from "../Images/g9.jpg"
import macera10 from "../Images/g10.jpg"
import macera11 from "../Images/g11.jpg"
import macera12 from "../Images/g12.jpg"
import macera13 from "../Images/g13.jpg"
import macera14 from "../Images/g14.jpg"
import macera15 from "../Images/g15.jpg"






// Import Swiper styles




function Swiper8() {
    return (
        <div className="App">

            <Swiper
                navigation
                effect="coverflow"
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 1,
                    modifier:2.5
                }}
                slidesPerView={7}
                centeredSlides
                style={{ height: "300px" }}
            >
                <SwiperSlide>
                        <img src={macera1} width={230}  />
                </SwiperSlide>
                
                <SwiperSlide>
                        <img src={macera2}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera3}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera4}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera5}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera6}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera7}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera8}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera9}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera10}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera11}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera12}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera13}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera14}  width={230}   />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={macera15}  width={230}   />
                </SwiperSlide>
               

               
               
            </Swiper>
        </div>
    );
}


export default Swiper8;
