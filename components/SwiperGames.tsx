"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { GameCard } from './GameCard';


export function SwiperGames(){
    return (
            <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides
                slidesPerView={3}
                loop
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
            >
                <SwiperSlide>
                    <GameCard name='Red dead 2' platform='PC' developer='Rockstar' url='https://www.freetogame.com/g/57/thumbnail.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <GameCard name='GTA 5' platform='PC' developer='Rockstar' url='https://www.freetogame.com/g/58/thumbnail.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <GameCard name='Resident evil 2' platform='PC' developer='Capcom' url='https://www.freetogame.com/g/59/thumbnail.jpg'/>
                </SwiperSlide>
            </Swiper>
    )
}