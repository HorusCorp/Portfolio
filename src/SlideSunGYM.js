import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';



function SlideSunGYM() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img className='slide-img' src='../ametyst.png' alt='' width='70%' height='75%' style={{marginLeft:'15%',cursor:'grab'}}></img></SwiperSlide>
            <SwiperSlide><img className='slide-img' src='../ametystSlide2.png' alt=''width='70%' height='75%' style={{marginLeft:'15%',cursor:'grab'}}></img></SwiperSlide>
            <SwiperSlide><img className='slide-img' src='../ametystSlide3.png' alt=''width='70%' height='75%' style={{marginLeft:'15%',cursor:'grab'}}></img></SwiperSlide>
            <SwiperSlide><img className='slide-img' src='../ametystSlide4.png' alt=''width='70%' height='75%' style={{marginLeft:'15%',cursor:'grab'}}></img></SwiperSlide>
            <SwiperSlide><img className='slide-img' src='../ametystSlide5.png' alt=''width='70%' height='75%' style={{marginLeft:'15%',cursor:'grab'}}></img></SwiperSlide>
            <SwiperSlide><img className='slide-img' src='../ametystSlide06.png' alt=''width='70%' height='75%' style={{marginLeft:'15%',cursor:'grab'}}></img></SwiperSlide>
            <SwiperSlide><img className='slide-img' src='../ametystSlide6.png' alt=''width='70%' height='75%' style={{marginLeft:'15%',cursor:'grab'}}></img></SwiperSlide>
            <SwiperSlide><img className='slide-img' src='../ametystSlide8.png' alt=''width='70%' height='75%' style={{marginLeft:'15%',cursor:'grab'}}></img></SwiperSlide>
            <div style={{marginLeft:'15%',width:'70%',height:'45px',background:'#000',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>
                Cliquez glisser pour faire défiler les slides du projets
            </div>
        </Swiper>
    )
}

export default SlideSunGYM
