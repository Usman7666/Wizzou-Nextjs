import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './review.module.scss'
import { useTheme } from '@/context/ThemeContext'
const testimonials = [
    {
      name: 'Alex Smith',
      role: 'Owner at ABC',
      image: '/images/Reviewclient.png',
      text: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.',
    },
    {
      name: 'Alex Smith',
      role: 'Owner at ABC',
      image: '/images/Reviewclient.png',
      text: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.',
    },
    {
      name: 'Alex Smith',
      role: 'Owner at ABC',
      image: '/images/Reviewclient.png',
      text: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.',
    },
    {
      name: 'Alex Smith',
      role: 'Owner at ABC',
      image: '/images/Reviewclient.png',
      text: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.',
    },
    {
      name: 'Alex Smith',
      role: 'Owner at ABC',
      image: '/images/Reviewclient.png',
      text: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.',
    },
    {
      name: 'Alex Smith',
      role: 'Owner at ABC',
      image: '/images/Reviewclient.png',
      text: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.',
    },
  ];

export default function Review(){
    const { theme, toggleTheme } = useTheme();
    return(
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : ''}`}>
            <section className={styles.review}>
                <h1>
                What People Are Saying
                </h1>

        <div className={styles.testimonialSlider}>
        <Swiper
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
         modules={[Navigation]} >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.card}>
              <div className={styles.header}>
              <div className={styles.stars}>★★★★★</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
             <path d="M20.7947 30.7214L8.28755 43.2286L4.16729 39.1084L14.9678 28.3079V26.6012H3.31396V6.20703H20.7947V30.7214Z" fill="black" fill-opacity="0.2"/>
              <path d="M26.6216 26.6012H38.2754V28.3079L27.4749 39.1084L31.5951 43.2286L44.1023 30.7214V6.20703H26.6216V26.6012Z" fill="black" fill-opacity="0.2"/>
              </svg>
              </div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.footer}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.avatar} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      <div className={styles.navigation}>
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