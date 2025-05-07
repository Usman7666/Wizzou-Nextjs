"use client"
import Header from '@/app/Components/Header/page';
import style from './case.module.scss';
import { useTheme } from "../../../context/ThemeContext";
import Image from 'next/image';
import LetsTalkMarquee from '@/app/Components/LetsTalkMarquee/page';
import ContactForm from '@/app/Components/ContactForm/page';
import Footer from '@/app/Components/Footer/page';

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function CaseStudies(){


  const sectionRefs = useRef([]);
  sectionRefs.current = [];
  
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    sectionRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease : 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: "top 68.4%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

    const { theme, toggleTheme } = useTheme();
    return(
        <div className={`${style.container} ${theme === 'dark' ? style.dark : ''}`}>
            <Header/>

         {/* HeroSection */}
      <section ref={addToRefs} className={style.heroSection}> 
        <div className={style.heroText}>
            <h1>We Create Solutions That help People Grow</h1>
            <div className={style.buttondiv}>
            <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis.
          </p>
          <button>
          Get Free Consultation
          </button>

            </div>

        </div>
        <div>
        <Image className={style.heroImage}
            src="/images/SeoTopbanner.png" 
            alt='ProgrammingGay'
            height={513}
            width={822}
          />
          <div className={style.herowrapper}>
            <div className={style.stats}>
            <h2>
            15+
            </h2>
            <p>
            Years of Experience
            </p>
            </div>
            <div className={style.stats}>
            <h2>
            500+
            </h2>
            <p>
            Clients we have Worked
            </p>
            </div>

            <div className={style.stats}>
            <h2>
            1300+
            </h2>
            <p>
            Projects Completed
            </p>
            </div>
            
          </div>
        </div>
      </section>

         {/* OurWork */}
         <section ref={addToRefs} className={style.OurWorkSection}>
        <h1>
        Our Work Speaks for Itself
        </h1>
        <p>
        Discover how we’ve helped businesses achieve their goals with innovative designs, data-driven marketing, and seamless cloud solutions.
        </p>
        <div ref={addToRefs} className={style.OurWorkgrid}>
          <div className={style.card}>
            <div className={style.imagewrapper}>
                <button>
                Marketing
                </button>
              <Image className={style.cardimage}
              src="/images/CaseStudy1.png"
              height={457}
              width={603}
              alt='card1'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Lorem ipsum dolor sit amet consectetur. Ornare.
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer. Ipsum tincidunt non commodo dictumst ultricies in. Aliquet in non sed faucibus purus felis sed vitae. Commodo nisi in lectus dolor ipsum eget venenatis quisque amet. Semper enim dictum a cras scelerisque libero pellentesque potenti sollicitudin. Semper donec phasellus.
             </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image  className={style.cardimage}
              src="/images/CaseStudy2.png"
              height={457}
              width={603}
              alt='card1'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Lorem ipsum dolor sit amet consectetur. Ornare.
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer. Ipsum tincidunt non commodo dictumst ultricies in. Aliquet in non sed faucibus purus felis sed vitae. Commodo nisi in lectus dolor ipsum eget venenatis quisque amet. Semper enim dictum a cras scelerisque libero pellentesque potenti sollicitudin. Semper donec phasellus.
             </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image  className={style.cardimage}
              src="/images/CaseStudy3.png"
              height={457}
              width={603}
              alt='card1'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Lorem ipsum dolor sit amet consectetur. Ornare.
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer. Ipsum tincidunt non commodo dictumst ultricies in. Aliquet in non sed faucibus purus felis sed vitae. Commodo nisi in lectus dolor ipsum eget venenatis quisque amet. Semper enim dictum a cras scelerisque libero pellentesque potenti sollicitudin. Semper donec phasellus.
             </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image  className={style.cardimage}
              src="/images/CaseStudy4.png"
              height={457}
              width={603}
              alt='card1'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Lorem ipsum dolor sit amet consectetur. Ornare.
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer. Ipsum tincidunt non commodo dictumst ultricies in. Aliquet in non sed faucibus purus felis sed vitae. Commodo nisi in lectus dolor ipsum eget venenatis quisque amet. Semper enim dictum a cras scelerisque libero pellentesque potenti sollicitudin. Semper donec phasellus.
             </p>
          </div>
        </div>

        <button>
        See More Case Studies
        </button>
        </section>

        {/* Let's TalkMarquee */}
        <LetsTalkMarquee/>

        {/* ContactForm */}
                 <div ref={addToRefs}>
                 <ContactForm/>
                 </div>
                 
       
                 {/* Footer */}
                 <div ref={addToRefs}>
                 <Footer/>
                 </div>
        </div>
    )
}
