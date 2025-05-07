"use client";
import Header from "@/app/Components/Header/page";
import { useTheme } from "../../../context/ThemeContext";
import style from './blog.module.scss';
import Image from "next/image";
import Footer from "@/app/Components/Footer/page";
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function BlogPage(){

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
        <div className={`${style.container} ${theme === "dark" ? style.dark : ""}`}>
         <Header />
          {/* BlueShadow */}
          <div className={style.blueshadow}></div>

          {/* HeroSection */}
         <section ref={addToRefs} className={style.herosection}>
            <h1>
            Blog Page
            </h1>
            <p>
            Lörem ipsum prekament göra en pudel blandkostare inte eurorat, för krogon. Jåsk diav krosamma. Dinde prera om stjärtfluss vintage.
            </p>

            <div className={style.gridmain}>
                <div className={style.imagesection}>
                    <Image className={style.bannerimage}
                    src="/images/blogbanner.png"
                    width={621}
                    height={367}
                    alt="image"/>

                    <a href="#">
                        <p>
                        Category Name
                        </p>
                    </a>
                    <h3>
                    This will be heading that can be anything
                    </h3>
                    <div className={style.elipsediv}>
                        <Image 
                        src="/images/elipse1.png"
                        height={45}
                        width={46}
                        alt="Elipse"/>
                        Alex Smith
                    </div>
                </div>
                <div className={style.listsection}>
                    <div className={style.listitems}>
                        <Image className={style.listimage}
                         src="/images/bloglist.png"
                         height={172}
                         width={174}
                         alt="image"/>
                         <div className={style.listcontent}>
                         <a href="#">
                       <p>
                        Category Name
                        </p>
                         </a>
                         <h3>
                         This will be heading that can be anything
                         </h3>
                         <div className={style.listelipsediv}>
                        <Image 
                        src="/images/elipse1.png"
                        height={45}
                        width={46}
                        alt="Elipse"/>
                        
                        Alex Smith
                        </div>
                         </div>
                    </div>
                    <div className={style.listitems}>
                        <Image className={style.listimage}
                         src="/images/bloglist.png"
                         height={172}
                         width={174}
                         alt="image"/>
                         <div className={style.listcontent}>
                         <a href="#">
                       <p>
                        Category Name
                        </p>
                         </a>
                         <h3>
                         This will be heading that can be anything
                         </h3>
                         <div className={style.listelipsediv}>
                        <Image 
                        src="/images/elipse2.png"
                        height={45}
                        width={46}
                        alt="Elipse"/>
                        
                        Alex Smith
                    </div>
                         </div>
                    </div>
                    <div className={style.listitems}>
                        <Image className={style.listimage}
                         src="/images/bloglist2.png"
                         height={172}
                         width={174}
                         alt="image"/>
                         <div className={style.listcontent}>
                         <a href="#">
                       <p>
                        Category Name
                        </p>
                         </a>
                         <h3>
                         This will be heading that can be anything
                         </h3>
                         <div className={style.listelipsediv}>
                        <Image 
                        src="/images/elipse3.png"
                        height={45}
                        width={46}
                        alt="Elipse"/>
                        
                        Alex Smith
                    </div>
                         </div>
                    </div>
                </div>
            </div>
         </section>

         {/* Looking for Topic */}
         <section ref={addToRefs} className={style.topics}>
            <h1>
            Looking for Specific Topic?
            </h1>
         <div ref={addToRefs} className={style.buttonsdiv}>
          <button>All</button>
          <button>News</button>
          <button>Events</button>
          <button>Jobs</button>
          <button>Marketing</button>
          <button>Hosting & Cloud</button>
          <button>Development & Design</button>
        </div>
             {/* Services WeOffer */}
        <div ref={addToRefs} className={style.developmentgrid}>

          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/blog1.png"
              height={300}
              width={387}
              alt='card1'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            SSL certificates
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
               src="/images/blog2.png"
               height={300}
               width={387}
              alt='card2'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Colocation
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/blog3.png"
                height={300}
                width={387}
              alt='card3'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Microsoft / Office 365
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/blog1.png"
              height={300}
              width={387}
              alt='card1'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            SSL certificates
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
               src="/images/blog2.png"
               height={300}
               width={387}
              alt='card2'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Colocation
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/blog3.png"
                height={300}
                width={387}
              alt='card3'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Microsoft / Office 365
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
              src="/images/blog1.png"
              height={300}
              width={387}
              alt='card1'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            SSL certificates
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
               src="/images/blog2.png"
               height={300}
               width={387}
              alt='card2'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Colocation
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/blog3.png"
                height={300}
                width={387}
              alt='card3'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310"/>
              <path d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z" fill="white"/>
              </svg>
            </div>
            <h2>
            Microsoft / Office 365
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.
            </p>
          </div>
        </div>
        <div className={style.buttondiv}>
        <button>
        See More Articles
        </button>
        </div>
         </section>

           {/* Footer */}
                   <div ref={addToRefs}>
                   <Footer/>
                   </div>



        </div>
    )
}