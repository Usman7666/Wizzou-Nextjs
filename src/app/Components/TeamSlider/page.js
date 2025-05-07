'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './team.module.scss';
import Image from 'next/image';
import { useTheme } from "../../../context/ThemeContext";

const projects = [
  {
    id: 1,
    title: 'Adison Stanton',
    description: 'UI/UX Designer',
    image: '/images/professional1.png',
  },
  {
    id: 2,
    title: 'Terry Geidt',
    description: 'Digital Marketer',
    image: '/images/professional2.png',
  },
  {
    id: 3,
    title: 'Talan Culhane',
    description: 'Web Developer',
    image: '/images/professional3.png',
  },
  {
    id: 4,
    title: 'Paityn Culhane',
    description: 'SEO Expert',
    image: '/images/professional4.png',
  },
];

export default function TeamSwiper() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`${styles.swiperContainer} ${theme === 'dark' ? styles.dark : ''}  `}>

      <div className={styles.headingcontent}> 
        <h1>
        Meet Our Professional Team
        </h1>
        <p>
        Our team is a passionate group of digital experts, creatives, and problem-solvers dedicated to bringing your vision to life. With diverse skills and a collaborative mindset, we work together to deliver exceptional results for every client.
        </p>
      </div>

      <Swiper 
        slidesPerView={2.5}
        spaceBetween={20}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }}
        modules={[Navigation]}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className={styles.swiperSlide}>
            <div  className= {styles.card}>
            <Image
                  src={project.image}
                  alt={project.title}
                  height={189}
                  width={134}
                  className={styles.image}
                  // sizes="(max-width: 459px) 100vw, 33vw"
                />
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
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
  );
}
