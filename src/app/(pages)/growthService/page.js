"use client";
import Header from '@/app/Components/Header/page';
import Image from 'next/image';
import { useTheme } from "../../../context/ThemeContext";
import style from './grow.module.scss'
import ProjectSwiper from '@/app/Components/Slider/page';
import WhyUs from '@/app/Components/WhyChooseUs/page';
import HowWork from '@/app/Components/HowWeWork/page';
import Review from '@/app/Components/Review/page';
import LetsTalkMarquee from '@/app/Components/LetsTalkMarquee/page';
import ContactForm from '@/app/Components/ContactForm/page';
import Footer from '@/app/Components/Footer/page';

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function GrowthService (){


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
            <a>
            Growth
            </a>
            <h1>
            Marketing
            </h1>
            <Image className={style.topbanner}
            src="/images/growthheader.png"
            height={461}
            width={1240}
            alt='topbanner'
            />
            <p>
            We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.
            </p>
        </section>


      {/* services */}
      <section ref={addToRefs} className={style.services}>
        <div ref={addToRefs} className={style.Designservice}>
          <h1>
          Services We Offer
          </h1>
          <p>
          We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.
         </p>
          </div>
          
          <div className={style.line}></div>
          <div ref={addToRefs} className={style.otherservices}>
            <div className={style.servicescontent}>
            <h1>
            SEO (Search Engine Optimisation)
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service1'
            src="/images/growservice1.png"
            height={105}
            width={158}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <circle cx="25.6555" cy="25.2" r="24.8352" fill="#FF3310"/>
            <path d="M35.1801 17.0358H21.5738V18.9543L31.8942 18.9611L18.1722 32.683L19.5329 34.0437L33.2548 20.3217L33.2616 30.6421H35.1801V17.0358Z" fill="white"/>
            </svg>
          </div>
          </div>

          <div className={style.line}></div>
          <div ref={addToRefs} className={style.otherservices}>
            <div className={style.servicescontent}>
            <h1>
            SEA (Search Engine Advertisement)
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service2'
            src="/images/growservice2.png"
            height={105}
            width={158}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <circle cx="25.6555" cy="25.2" r="24.8352" fill="#FF3310"/>
            <path d="M35.1801 17.0358H21.5738V18.9543L31.8942 18.9611L18.1722 32.683L19.5329 34.0437L33.2548 20.3217L33.2616 30.6421H35.1801V17.0358Z" fill="white"/>
            </svg>
          </div>
          </div>


          <div className={style.line}></div>
          <div ref={addToRefs} className={style.otherservices}>
            <div className={style.servicescontent}>
            <h1>
            Link building
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
         </p>
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service3'
            src="/images/growservice3.png"
            height={105}
            width={158}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <circle cx="25.6555" cy="25.2" r="24.8352" fill="#FF3310"/>
            <path d="M35.1801 17.0358H21.5738V18.9543L31.8942 18.9611L18.1722 32.683L19.5329 34.0437L33.2548 20.3217L33.2616 30.6421H35.1801V17.0358Z" fill="white"/>
            </svg>
          </div>
          </div>

          <div className={style.line}></div>
          <div ref={addToRefs} className={style.otherservicesmore}>
            <div className={style.servicescontent}>
            <h1>
            Social 
          </h1>
          <div>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
       
          <h2>
          Advertisement
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
      
      
          <h2>
          Content generation
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
     
          </div>
         
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service4'
            src="/images/growservice4.png"
            height={105}
            width={158}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <circle cx="25.6555" cy="25.2" r="24.8352" fill="#FF3310"/>
            <path d="M35.1801 17.0358H21.5738V18.9543L31.8942 18.9611L18.1722 32.683L19.5329 34.0437L33.2548 20.3217L33.2616 30.6421H35.1801V17.0358Z" fill="white"/>
            </svg>
          </div>
          </div>

          <div className={style.line}></div>
          <div ref={addToRefs} className={style.otherservices}>
            <div className={style.servicescontent}>
            <h1>
            Conversion optimisation
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service5'
            src="/images/growservice5.png"
            height={105}
            width={158}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <circle cx="25.6555" cy="25.2" r="24.8352" fill="#FF3310"/>
            <path d="M35.1801 17.0358H21.5738V18.9543L31.8942 18.9611L18.1722 32.683L19.5329 34.0437L33.2548 20.3217L33.2616 30.6421H35.1801V17.0358Z" fill="white"/>
            </svg>
          </div>
          </div>

          <div className={style.line}></div>
          <div ref={addToRefs} className={style.otherservicesmore}>
            <div className={style.servicescontent}>
            <h1>
            Lead generation
          </h1>
          <div>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
       
          <h2>
          Landingpages
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
      
      
          <h2>
          E-mai lmarketing (AI)
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
     
          </div>
         
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service6'
            src="/images/growservice6.png"
            height={105}
            width={158}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <circle cx="25.6555" cy="25.2" r="24.8352" fill="#FF3310"/>
            <path d="M35.1801 17.0358H21.5738V18.9543L31.8942 18.9611L18.1722 32.683L19.5329 34.0437L33.2548 20.3217L33.2616 30.6421H35.1801V17.0358Z" fill="white"/>
            </svg>
          </div>
          </div>

          <div className={style.line}></div>
          <div ref={addToRefs} className={style.otherservicesmore}>
            <div className={style.servicescontent}>
            <h1>
            Tracking & Analytics
          </h1>
          <div>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
       
          <h2>
          Insights for optimisation
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
      
      
          <h2>
          Server-side tagging
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
          </p>
     
          </div>
         
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service7'
            src="/images/growservice7.png"
            height={105}
            width={158}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <circle cx="25.6555" cy="25.2" r="24.8352" fill="#FF3310"/>
            <path d="M35.1801 17.0358H21.5738V18.9543L31.8942 18.9611L18.1722 32.683L19.5329 34.0437L33.2548 20.3217L33.2616 30.6421H35.1801V17.0358Z" fill="white"/>
            </svg>
          </div>
          </div>

         

      </section>

      {/* Marketing */}
      <section ref={addToRefs} className={style.marketing}>
        <h1>
        Smarter Marketing Powered by AI
        </h1>
        <p>
        Revolutionize Your Marketing Strategy with Intelligent Insights
        </p>
        <div ref={addToRefs} className={style.Aigrid}>
          <div className={style.marketingcontent}>
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
          <circle cx="33.8994" cy="33.5955" r="33" fill="url(#paint0_linear_4126_29569)" fill-opacity="0.3"/>
          <path d="M23.8667 22.8708H44.6665C45.57 22.8709 46.4375 23.1975 47.1021 23.782L47.2319 23.9021C47.9109 24.5617 48.2915 25.4552 48.2915 26.3845V41.5398C48.2915 42.4111 47.9572 43.2502 47.356 43.8953L47.2319 44.0222C46.5528 44.6818 45.6302 45.0534 44.6665 45.0535H23.8667C22.963 45.0535 22.0948 44.727 21.4302 44.1423L21.3003 44.0222C20.6213 43.3626 20.2417 42.4691 20.2417 41.5398V26.3845L20.2456 26.2107C20.2869 25.4022 20.6152 24.6311 21.1763 24.0291L21.3003 23.9021C21.9371 23.2836 22.788 22.9181 23.686 22.8748L23.8667 22.8708ZM23.8667 24.8464C23.4516 24.8464 23.0513 25.0063 22.7554 25.2937C22.4592 25.5815 22.2915 25.974 22.2915 26.3845V41.5398C22.2915 41.899 22.4203 42.2439 22.6509 42.5173L22.7554 42.6306C23.0513 42.918 23.4516 43.0779 23.8667 43.0779H44.6665C45.0297 43.0778 45.3812 42.9554 45.6616 42.7322L45.7769 42.6306C46.0731 42.3428 46.2417 41.9503 46.2417 41.5398V26.3845C46.2417 25.974 46.0731 25.5815 45.7769 25.2937C45.481 25.0064 45.0815 24.8465 44.6665 24.8464H23.8667ZM29.0659 32.9744C29.306 32.9744 29.537 33.0549 29.7192 33.2L29.7935 33.2664C29.9847 33.4522 30.0912 33.7024 30.0913 33.9617V39.0144C30.0912 39.2413 30.0103 39.4615 29.8618 39.6375L29.7935 39.7097C29.6018 39.8958 29.3402 40.0017 29.0659 40.0017C28.826 40.0016 28.5957 39.921 28.4136 39.7761L28.3384 39.7097C28.1472 39.5239 28.0416 39.2736 28.0415 39.0144V33.9617C28.0416 33.7348 28.1225 33.5146 28.271 33.3386L28.3384 33.2664C28.5299 33.0803 28.7917 32.9745 29.0659 32.9744ZM34.2661 30.448C34.5061 30.448 34.7363 30.5296 34.9185 30.6746L34.9937 30.74C35.185 30.9259 35.2915 31.1769 35.2915 31.4363V39.0144C35.2914 39.2412 35.2104 39.4615 35.062 39.6375L34.9937 39.7097C34.802 39.8958 34.5404 40.0017 34.2661 40.0017C34.0262 40.0017 33.7959 39.921 33.6138 39.7761L33.5386 39.7097C33.3474 39.5239 33.2418 39.2736 33.2417 39.0144V31.4363C33.2417 31.2093 33.3227 30.9893 33.4712 30.8132L33.5386 30.74C33.7302 30.5539 33.9919 30.448 34.2661 30.448ZM39.4663 27.9226C39.7063 27.9226 39.9365 28.0033 40.1187 28.1482L40.1938 28.2146C40.3851 28.4004 40.4916 28.6506 40.4917 28.9099V39.0144C40.4916 39.2414 40.4098 39.4615 40.2612 39.6375L40.1938 39.7097C40.0022 39.8959 39.7407 40.0017 39.4663 40.0017C39.2264 40.0017 38.9961 39.921 38.814 39.7761L38.7388 39.7097C38.5475 39.5239 38.441 39.2737 38.4409 39.0144V28.9099C38.441 28.6829 38.5228 28.4629 38.6714 28.2869L38.7388 28.2146C38.9304 28.0284 39.1919 27.9226 39.4663 27.9226Z" fill="#2181F0" stroke="#D3E4F8" stroke-width="0.55"/>
          <defs>
            <linearGradient id="paint0_linear_4126_29569" x1="33.8994" y1="0.595459" x2="33.8994" y2="66.5955" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2181F0"/>
              <stop offset="1" stop-color="#E2EFFD"/>
            </linearGradient>
          </defs>
          </svg>
          <div>
            <h2>
            Predictive Analytics
            </h2>
            <p>
            Make datadriven decisions with AI insights.
            </p>
          </div>
          </div>
          <div className={style.marketingcontent}>
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
  <circle cx="33.416" cy="33.3884" r="33" fill="url(#paint0_linear_4126_29583)" fill-opacity="0.3"/>
  <path d="M33.4159 27.6905C36.14 27.6905 38.3484 25.703 38.3484 23.2512C38.3484 20.7995 36.14 18.812 33.4159 18.812C30.6917 18.812 28.4834 20.7995 28.4834 23.2512C28.4834 25.703 30.6917 27.6905 33.4159 27.6905Z" stroke="#2181F0" stroke-width="1.45662" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.4971 38.5415H21.5781C19.9437 38.5415 18.6187 39.7782 18.6187 41.3037V42.6848C18.6187 44.2103 19.9437 45.447 21.5781 45.447H27.4971C29.1316 45.447 30.4566 44.2103 30.4566 42.6848V41.3037C30.4566 39.7782 29.1316 38.5415 27.4971 38.5415Z" stroke="#2181F0" stroke-width="1.45662" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2539 38.5415H39.335C37.7005 38.5415 36.3755 39.7782 36.3755 41.3037V42.6848C36.3755 44.2103 37.7005 45.447 39.335 45.447H45.2539C46.8884 45.447 48.2134 44.2103 48.2134 42.6848V41.3037C48.2134 39.7782 46.8884 38.5415 45.2539 38.5415Z" stroke="#2181F0" stroke-width="1.45662" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5376 38.5413V35.5818C24.5376 34.7969 24.8494 34.0441 25.4044 33.4891C25.9594 32.9341 26.7122 32.6223 27.4971 32.6223H39.335C40.1199 32.6223 40.8727 32.9341 41.4277 33.4891C41.9827 34.0441 42.2945 34.7969 42.2945 35.5818V38.5413" stroke="#2181F0" stroke-width="1.45662" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33.4155 27.6899V32.6224" stroke="#2181F0" stroke-width="1.45662" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_4126_29583" x1="33.416" y1="0.388428" x2="33.416" y2="66.3884" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2181F0"/>
      <stop offset="1" stop-color="#E2EFFD"/>
    </linearGradient>
  </defs>
</svg>
          <div>
            <h2>
            Automated Workflows
            </h2>
            <p>
            Save time with intelligent automation.
            </p>
          </div>
          </div>

          <div className={style.marketingcontent}>
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
  <circle cx="33.8994" cy="33.4126" r="33" fill="url(#paint0_linear_4126_29576)" fill-opacity="0.3"/>
  <path d="M34.2656 31.1943C34.9005 31.1943 35.5026 31.5286 35.7354 32.168V32.1689L36.6572 34.7422V34.7432L37.2656 36.4863V36.4873C38.0614 38.7994 38.651 40.6517 39.041 42.0791C39.434 43.5171 39.6152 44.4928 39.6152 45.0664C39.615 47.7969 37.2425 50.0498 34.2656 50.0498C31.2887 50.0498 28.9162 47.7969 28.916 45.0664C28.916 44.4213 29.1442 43.2751 29.6387 41.5479C30.1295 39.8335 30.8713 37.5817 31.873 34.7451L32.7959 32.1689L32.7949 32.168C33.0275 31.5284 33.6306 31.1943 34.2656 31.1943ZM33.9336 38.1982L33.3096 40.084L33.3076 40.0889L32.876 41.46V41.4629C32.595 42.3822 32.3808 43.1439 32.2373 43.7393C32.0964 44.3239 32.0156 44.7786 32.0156 45.0664C32.0158 46.2629 33.0454 47.1943 34.2656 47.1943C35.4859 47.1943 36.5154 46.2629 36.5156 45.0664C36.5156 44.7195 36.3967 44.1187 36.1875 43.3164C36.0278 42.7039 35.8096 41.9521 35.5342 41.0674L35.2393 40.1387L35.2383 40.1357L34.5977 38.1992L34.2656 37.1943L33.9336 38.1982ZM34.2656 18.749C44.5879 18.749 52.9158 26.5734 52.916 36.1768C52.916 39.4491 51.947 42.5917 50.1494 45.3145L49.7783 45.8535C49.3359 46.4716 48.4542 46.6758 47.751 46.3262L47.6133 46.249C46.9489 45.8327 46.7533 45.0352 47.1113 44.4062L47.1904 44.2832C48.8923 41.9052 49.8154 39.1076 49.8154 36.1768C49.8152 28.1074 42.8312 21.6045 34.2656 21.6045C25.7 21.6045 18.7161 28.1074 18.7158 36.1768C18.7158 38.9245 19.5275 41.5546 21.0312 43.832L21.3408 44.2832C21.8017 44.9275 21.6266 45.805 20.918 46.249C20.2414 46.6728 19.3448 46.5339 18.8467 45.9717L18.7529 45.8535C16.7181 43.0101 15.6152 39.6674 15.6152 36.1768C15.6155 26.5734 23.9434 18.749 34.2656 18.749Z" fill="#2181F0" stroke="#D4E4F8" stroke-width="0.7"/>
  <defs>
    <linearGradient id="paint0_linear_4126_29576" x1="33.8994" y1="0.412598" x2="33.8994" y2="66.4126" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2181F0"/>
      <stop offset="1" stop-color="#E2EFFD"/>
    </linearGradient>
  </defs>
</svg>
          <div>
            <h2>
            Real-Time Performance
            </h2>
            <p>
            Monitor and adjust campaigns instantly.
            </p>
          </div>
          </div>

          <div className={style.marketingcontent}>
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
  <circle cx="33.416" cy="33.2056" r="33" fill="url(#paint0_linear_4126_29595)" fill-opacity="0.3"/>
  <path d="M47.1056 25.1614V19.3338C47.1056 18.692 46.7754 18.1151 46.2223 17.7906C45.667 17.4649 44.9991 17.4581 44.436 17.7731C39.0579 20.7808 33.2076 22.5372 27.0474 22.994C27.0002 22.9975 21.4325 23.0218 21.4325 23.0218C20.0342 23.0218 18.8784 24.0775 18.7185 25.4334H17.5757C16.3246 25.4334 15.3066 26.4513 15.3066 27.7024V32.6874C15.3066 33.9385 16.3246 34.9564 17.5757 34.9564H18.7183C18.8335 35.9323 19.4642 36.752 20.3302 37.1352L24.3967 48.3581C24.6509 49.0567 25.3211 49.5261 26.0647 49.5261H30.1455C30.7241 49.5261 31.2675 49.2432 31.5993 48.7694C31.9312 48.2954 32.0112 47.688 31.8137 47.1452L28.3198 37.5076C34.0132 38.0991 39.429 39.8139 44.4359 42.6139C44.7121 42.7684 45.0136 42.8455 45.3145 42.8455C45.627 42.8454 45.9392 42.7623 46.222 42.5964C46.7752 42.2718 47.1055 41.695 47.1055 41.0531V35.2254C49.5957 34.9029 51.5262 32.7701 51.5262 30.1935C51.5262 27.6168 49.5957 25.4839 47.1056 25.1614ZM18.6988 33.2064H17.5757C17.2894 33.2064 17.0566 32.9736 17.0566 32.6873V27.7024C17.0566 27.4163 17.2894 27.1834 17.5757 27.1834H18.6988V33.2064ZM21.0317 35.5319C20.6886 35.3781 20.4487 35.0339 20.4487 34.6343V25.7554C20.4487 25.213 20.8901 24.7717 21.4325 24.7717H26.1957V35.618C26.1957 35.618 21.391 35.6162 21.3702 35.6149C21.1947 35.5946 21.1578 35.5856 21.0317 35.5319ZM30.1687 47.7424C30.1716 47.7495 30.1734 47.7546 30.1658 47.7653C30.1584 47.776 30.1529 47.776 30.1455 47.776H26.0646C26.0542 47.776 26.0447 47.7694 26.0415 47.7608L22.2757 37.3679H26.4078L30.1687 47.7424ZM45.3557 41.0532C45.3557 41.0658 45.3557 41.0759 45.3368 41.0871C45.3143 41.1001 45.3009 41.0926 45.2901 41.0866C39.9114 38.0787 34.0798 36.273 27.9456 35.7131V24.6747C34.0803 24.1139 39.9119 22.3081 45.2899 19.3004C45.3009 19.2944 45.3146 19.287 45.3368 19.3C45.3557 19.3111 45.3557 19.3211 45.3557 19.3338V41.0532ZM47.1056 33.4541V26.9328C48.6268 27.238 49.7762 28.5838 49.7762 30.1934C49.7762 31.803 48.6267 33.149 47.1056 33.4541Z" fill="#2181F0"/>
  <defs>
    <linearGradient id="paint0_linear_4126_29595" x1="33.416" y1="0.205566" x2="33.416" y2="66.2056" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2181F0"/>
      <stop offset="1" stop-color="#E2EFFD"/>
    </linearGradient>
  </defs>
</svg>
          <div>
            <h2>
            Personalized Campaigns
            </h2>
            <p>
            Deliver tailored experiences to your audience.
             </p>
          </div>
          </div>
        </div>

        <button>
        Get Free Consultation
        </button>
      </section>

       
          {/* OurWork */}
          <section ref={addToRefs}  className={`${theme === 'dark' ? style.dark : ''} ${style.ourwork}`}>
        <div className={style.ourworkmain}>
        <div className={style.contentdiv}>
          <h2 className={`${theme === 'dark' ? style.dark : ''}`}>Our Work Speaks for Itself</h2>
          <p className={`${theme === 'dark' ? style.dark : ''}`}>
            Discover how weve helped businesses achieve their goals with
            innovative designs, data-driven marketing, and seamless cloud
            solutions.
          </p>
        </div>
        <ProjectSwiper />
        </div>
   
         </section>

         
          {/* WhyUs */}
                 <div ref={addToRefs}>
                 <WhyUs/>
                 </div>

      
               {/* HowWeWork */}
               <div ref={addToRefs}>
               <HowWork/>
               </div>
           
      
              {/* Review */}
              <div ref={addToRefs}>
              <Review/>
              </div>
       
       {/* Let's Talk Marquee */}
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