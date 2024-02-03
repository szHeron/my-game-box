"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { GameCard } from './GameCard';
import Link from 'next/link';

export function SwiperGames(){
    return (   
        <div>
            <div className='flex flex-row justify-around'>
                <p className="font-bold text-2xl">Top jogos relevantes</p>
                <Link href="/all-games">
                    <span className="text-sm text-tertiaryBlue font-light cursor-pointer">Ver todos</span>
                </Link>
            </div>
            <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides
                slidesPerView={5}
                loop
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
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
                <SwiperSlide>
                    <GameCard name='Devil May Cry 5' platform='PC' developer='Capcom' url='https://www.freetogame.com/g/1/thumbnail.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <GameCard name='Devil May Cry 6' platform='PC' developer='Capcom' url='https://www.freetogame.com/g/2/thumbnail.jpg'/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}