import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel() {
    return(
        <Swiper
            modules={ [Navigation, Pagination, EffectFade] }
            navigation
            pagination={{
                clickable: true,
              }}
            effect
            speed={800}
            slidesPerView={1}
            loop
            className='myswiper'
        >
            <SwiperSlide className='slide'>
            <img src="/bg.jpg" alt="" />
                <h1 className='slide-text'>THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY</h1>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src="/about-bg.jpg" alt="" />
                <h1 className='slide-text'>WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM</h1>
            </SwiperSlide>
        </Swiper>
    )
    
}

export default Carousel