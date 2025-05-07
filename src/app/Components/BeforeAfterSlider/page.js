"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import style from './BeforeAfter.module.scss'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image';

const testimonials = [
  {
    id:1,
    title : "This will be project title",
    image1: '/images/Before.png',
    image2 : "/images/After.png"
  },
  {
    id:2,
    title : "This will be project title",
    image1: '/images/Before.png',
    image2 : "/images/After.png"
  },
  {
    id:3,
    title : "This will be project title",
    image1: '/images/Before.png',
    image2 : "/images/After.png"
  },
  {
    id:4,
    title : "This will be project title",
    image1: '/images/Before.png',
    image2 : "/images/After.png"
  },
  {
    id:5,
    title : "This will be project title",
    image1: '/images/Before.png',
    image2 : "/images/After.png"
  },
  {
    id:6,
    title : "This will be project title",
    image1: '/images/Before.png',
    image2 : "/images/After.png"
  }
]
export default function BeforeAfter(){
    const { theme, toggleTheme } = useTheme();
    return(
        <div className={`${style.container} ${theme === 'dark' ? style.dark : ''}`}>
           <section className={style.BeforeAfter}>
                <h1>
                Before and After Results
                </h1>
                <p>
                Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock
                </p>
                <div className={style.testimonialSlider}>

                <Swiper 
                   navigation ={
                    {
                        nextEl :".custom-next",
                        prevEl : ".custom-prev"
                    }
                }
                spaceBetween={20}
                slidesPerView={1}
                pagination={{clickable:true}}
                breakpoints={{
                  576: {
          slidesPerView: 1.2,
          spaceBetween: 20
                  },
                  768: {
          slidesPerView: 1.5,
          spaceBetween: 25
                  },
                  992: {
          slidesPerView: 2,
          spaceBetween: 30
                  },
                  1200: {
          slidesPerView: 2.5,
          spaceBetween: 30
                  }
                }}
                modules={[Navigation]}
                >
                  {testimonials.map((testimonial)=>(
                       <SwiperSlide key={testimonial.id} className={style.card}>
                       <h1>
                      {testimonial.title}
                       </h1>
                       <div>
                           <div className={style.imageWrapper}>
                           <Image className={style.BeforeImg}
                           src={testimonial.image1}
                           height={243}
                           width={311}
                           alt='before'
                           style={{ width: '100%', height: 'auto' }}
                           />
                           <button>
                           Before
                           </button>
                           </div>
   
                           <div className={style.imageWrapper}>
                           <Image className={style.AfterImg}
                           src={testimonial.image2}
                           height={243}
                           width={311}
                           alt='After'
                           style={{ width: '100%', height: 'auto' }}
                           />
                            <button>
                            After
                           </button>
                           </div>
                       </div>
                    </SwiperSlide>
                  ))}

                </Swiper>

        <div className={style.navigation}>
       <button className="custom-prev"  > 
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
         <path d="M3.59985 14.2924L12.0621 22.7546L13.2553 21.5615L6.84089 15.1386H23.9092V13.4462L6.84089 13.4462L13.2553 7.02336L12.0621 5.83019L3.59985 14.2924Z" fill="#262626"/>
          </svg>     
        </button>
       <button className="custom-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M23.704 14.2469L15.2418 5.78467L14.0486 6.97784L20.4629 13.4007H3.39464V15.0931H20.4629L14.0486 21.5159L15.2418 22.7091L23.704 14.2469Z" fill="#262626"/>
        </svg>
        </button>
        </div>
            </div>
          </section>
        </div>
    )
}