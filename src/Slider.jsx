import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, EffectCube} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({datas}) => {
  return (
    <div>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
      {
        datas.map((data)=>(
            <SwiperSlide key={data.image}>
                <img src={data.image} alt={data.title} />
            </SwiperSlide>
        ))
      }

    </Swiper>
    </div>
  )
}

export default Slider