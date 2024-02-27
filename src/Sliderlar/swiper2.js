import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../Pages/All.css"

import macera1 from "../Images/macera1.jpg"
import macera2 from "../Images/macera2.jpg"
import macera3 from "../Images/macera3.jpg"
import macera4 from "../Images/macera4.jpg"
import macera5 from "../Images/macera5.jpg"
import macera6 from "../Images/macera6.jpg"
import macera7 from "../Images/macera7.jpg"
import macera8 from "../Images/macera8.jpg"
import macera9 from "../Images/macera9.jpg"
import macera10 from "../Images/macera10.jpg"
import macera11 from "../Images/macera11.jpg"
import macera12 from "../Images/macera12.jpg"
import macera13 from "../Images/macera13.jpg"
import macera14 from "../Images/macera14.jpg"
import macera15 from "../Images/macera15.jpg"






// Import Swiper styles




function Swiper2() {
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


export default Swiper2;
