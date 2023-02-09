
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css"


// import required modules
import { Pagination } from "swiper";


function Banner(){
    return (

        <div className="banner">


            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Pagination]}
                    className="Lista-Banners"
                >


                        <SwiperSlide>

                            <img src="/imagens/Banner/b1.jpg" alt=""/>

                        </SwiperSlide>

                    <SwiperSlide>

                        <img src="/imagens/Banner/b2.jpg" alt=""/>

                    </SwiperSlide>



                </Swiper>
            </>


        </div>

    );
}

export default Banner;