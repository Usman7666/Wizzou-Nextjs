"use client";
import Header from '@/app/Components/Header/page';
import style from './createSection.module.scss';
import Image from 'next/image';
import { useTheme } from "../../../context/ThemeContext";
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

export default function CreateSection() {

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
  
  return (
    <div className={`${style.container} ${theme === 'dark' ? style.dark : ''}`}>
      <Header/>
      
      {/* HeroSection */}
      <section ref={addToRefs} className={style.heroSection}> 
        <div className={style.heroText}>
          <div>
            <a>Creation</a>
            <h1>Development & Design</h1>
          </div>
          <p>
          We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.          </p>
        </div>
        <div>
          <div className={style.herowrapper}>
            <h2>
            From stunning designs to powerful development—your one-stop solution for websites, applications, branding, and more.            </h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                <circle cx="32.8699" cy="32.5703" r="32" fill="#FF3310"/>
                <path d="M45.142 22.0513L27.6104 22.0513L27.6104 24.5233L40.9081 24.5321L23.2275 42.2127L24.9807 43.9659L42.6613 26.2852L42.6701 39.5829H45.142L45.142 22.0513Z" fill="white"/>
              </svg>
            </div>
          </div>
          <Image className={style.heroImage}
            src="/images/programminggay.png" 
            alt='ProgrammingGay'
            height={461}
            width={677}
          />
         
        </div>
      </section>

      {/* Frame */}
      <div ref={addToRefs} className={style.frame}>
      <Image 
      width={1240}
      height={16}
      alt='Frame'
      src="/images/Frame.png"/>
      </div>

      {/* Development */}
      <section ref={addToRefs} className={style.developmentSection}>
        <h1>
        Development
        </h1>
        <p>
        We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.
        </p>
        <div ref={addToRefs} className={style.developmentgrid}>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/card1.png"
              height={209}
              width={209}
              alt='card1'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Websites
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/card2.png"
              height={209}
              width={209}
              alt='card2'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Prototypes
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/card3.png"
              height={209}
              width={209}
              alt='card3'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Webshops
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/card4.png"
              height={209}
              width={209}
              alt='card4'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Maintenance & Support
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/card5.png"
              height={209}
              width={209}
              alt='card5'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Applications
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/card6.png"
              height={209}
              width={209}
              alt='card6'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Code Reviews & Optimi...
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
        </div>
      </section>

      {/* services */}
      <section ref={addToRefs} className={style.services}>
        <div ref={addToRefs} className={style.Designservice}>
          <h1>
          Design
          </h1>
          <p>
          We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.
          </p>
          </div>
          
          <div className={style.line}></div>
          <div ref={addToRefs} className={style.otherservices}>
            <div className={style.servicescontent}>
            <h1>
          UI/UX design
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.       
          </p>
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service1'
            src="/images/service1.png"
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
            Brand creation
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.       
          </p>
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service2'
            src="/images/service2.png"
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
            Graphic design
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.       
          </p>
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service3'
            src="/images/service3.png"
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
            Printing service
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.       
          </p>
            </div>
          <div className={style.imagewrapper}> 
            <Image
            alt='service4'
            src="/images/service4.png"
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

         {/* OurWork */}
         <section  ref={addToRefs} className={`${theme === 'dark' ? style.dark : ''} ${style.ourwork}`}>
        <div className={style.ourworkmain}>
        <div className={style.contentdiv}>
          <h2 className={`${theme === 'dark' ? style.dark : ''}`}>Our Work Speaks for Itself</h2>
          <p className={`${theme === 'dark' ? style.dark : ''}`}>
            Discover how we've helped businesses achieve their goals with
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

  );
}