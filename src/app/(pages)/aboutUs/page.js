"use client"
import Header from "@/app/Components/Header/page";
import { useTheme } from "../../../context/ThemeContext";
import style from './about.module.scss';
import Image from "next/image";
import Marquee from "@/app/Components/Marquee/page";
import { useState } from "react";
import WhyUs from "@/app/Components/WhyChooseUs/page";
import TeamSwiper from "@/app/Components/TeamSlider/page";
import LetsTalkMarquee from "@/app/Components/LetsTalkMarquee/page";
import ContactForm from "@/app/Components/ContactForm/page";
import Footer from "@/app/Components/Footer/page";

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Evolution =[
    {
        year : "2000",
        title : "Establishment & Foundation",
        image : "/images/evolutionimage.png"
    },
    {
        year : "2005",
        title : "Establishment & Foundation",
        image : "/images/evolutionimage.png"
    },
    {
      year : "2010",
      title : "Establishment & Foundation",
      image : "/images/evolutionimage.png"
  },
  {
    year : "2018",
    title : "Establishment & Foundation",
    image : "/images/evolutionimage.png"
},
{
  year : "2023",
  title : "Establishment & Foundation",
  image : "/images/evolutionimage.png"
},

]

export default function AboutUs(){

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
  
    const [openIndex , setOpenIndex] = useState(null);
    const { theme, toggleTheme } = useTheme();

    function EvolutonToogle(index) {
        setOpenIndex(openIndex === index ? null : index);
      }
    return(
        <div className={`${style.container} ${theme === 'dark' ? style.dark : ''}`}>
            <Header/>

            {/* BlueShadow */}
            <div className={style.blueshadow}></div>
           
           {/* HeroSection */}
           <section ref={addToRefs} className={style.heroSection}>
            <h1>
            We Create Solutions That help People Grow
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis.
            </p>
            
            <div className={style.topbanner}>
                <Image  className={style.topimage1}
                width={293}
                height={303}
                alt="TopBanner"
                src="/images/aboutushero1.png"
                />
                 <Image  className={style.topimage2}
                width={293}
                height={303}
                alt="TopBanner"
                src="/images/aboutushero2.png"
                />
                 <Image  className={style.topimage3}
                width={293}
                height={303}
                alt="TopBanner"
                src="/images/aboutushero3.png"
                />
                 <Image  className={style.topimage4}
                width={293}
                height={303}
                alt="TopBanner"
                src="/images/aboutushero4.png"
                />
            </div>
           </section>

           {/* Marquee */}
           <Marquee/>

           <div className={style.title}>
                <div className={style.blueline}></div>
                <h3>
                Who We Are
                </h3>
            </div>
           {/* DigitalExperience */}
           <section ref={addToRefs} className={style.digitalexperience}>
           <h1>
                Crafting Digital Experiences That Inspire
           </h1>
            <div className={style.maingrid}>
                <div className={style.headingdiv}>
              
                <Image className={style.experienceimage}
                src="/images/digitalexperienceimage.png"
                height={343}
                width={498}
                alt="Image"
                />
                </div>
                <div className={style.contentdiv}>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer. Ipsum tincidunt non commodo dictumst ultricies in. Aliquet in non sed faucibus purus felis sed vitae. Commodo nisi in lectus dolor ipsum eget venenatis quisque amet. Semper enim dictum a cras scelerisque libero pellentesque potenti sollicitudin. Semper donec phasellus.
                    </p>
                    <div className={style.cardsgrid}>
                        <div className={style.card}>
                            <p>
                            Founding Year
                            </p>
                            <h2>
                            2015
                            </h2>
                        </div>
                        <div className={style.card}>
                            <p>
                            Partnership Valuation
                            </p>
                            <h2>
                            $1.2M+
                            </h2>
                        </div>
                        <div className={style.card}>
                            <p>
                            Projects Done
                            </p>
                            <h2>
                            200+
                            </h2>
                        </div>
                        <div className={style.card}>
                            <p>
                            Satisfied Customers
                            </p>
                            <h2>
                            3k
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
           </section>

           {/* Evolution Of Wizzou */}
           <section ref={addToRefs} className={style.evolution}>
            <div className={style.evolutioncontainer}>
              <h1>The Evolution of Wizzou</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer. Ipsum tincidunt non commodo dictumst ultricies in. Aliquet in non sed faucibus purus felis sed vitae. Commodo nisi in lectus dolor ipsum eget venenatis quisque amet. Semper enim dictum a cras scelerisque libero pellentesque potenti sollicitudin. Semper donec phasellus.</p>
              
              <div className={style.evolutionsteps}>
                <div className={style.linediv}></div>
                
                <div className={style.dotswrapper}>
                  {Evolution.map((item, index) => (
                    <div 
                      key={index}
                      className={ openIndex === index ? style.bluedots : style.dots}
                      onClick={() => EvolutonToogle(index)}
                    >
                      {openIndex === index ? 
                       <div className={style.evolutionContent}>
                          <Image 
                         src={item.image}
                         width={111}
                         height={50}
                         alt={item.title}
                       />
                       <p>{item.year}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                          <circle cx="13.5684" cy="13.4999" r="13" fill="#248AF0"/>
                        </svg> 
                     </div>
                       :
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <circle cx="13.0684" cy="13.4999" r="13" fill="#535353"/>
                        </svg>
                      }
                      {openIndex === index ? <h3>{item.title}</h3> :  <p>{item.year}</p> }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* OurValues */}
          <section ref={addToRefs} className={style.ourvalues}>
            <h1>
            Our Values
            </h1>
            <p>
            Revolutionize Your Marketing Strategy with Intelligent Insights
            </p>

            <div className={style.valuesgrid}>
              <div className={style.valuecard}>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="48" viewBox="0 0 31 48" fill="none">
               <path d="M19.9561 47.6816H10.3407V46.58H19.9561V47.6816ZM21.5587 44.6216H8.73818V43.52H21.5587V44.6216ZM21.5587 41.5616H8.73818V40.46H21.5587V41.5616ZM21.5587 38.5017H8.73818C8.41927 38.5017 8.16126 38.2553 8.16126 37.9509V35.7278C8.16126 33.2461 8.16126 29.4961 4.89042 26.2494C1.83273 23.2109 0.148438 19.3599 0.148438 15.4063C0.148438 7.14894 6.73658 0.681641 15.1484 0.681641C23.5603 0.681641 30.1484 7.14894 30.1484 15.4063C30.1484 19.3599 28.4641 23.2124 25.4064 26.2479C22.1356 29.4961 22.1356 33.2461 22.1356 35.7278V37.9509C22.1356 38.2553 21.8776 38.5017 21.5587 38.5017ZM9.3151 37.4001H20.9818V35.7278C20.9818 33.2308 20.9818 29.0524 24.5747 25.4844C27.4241 22.6524 28.9946 19.0737 28.9946 15.4048C28.9946 7.76553 22.9129 1.78171 15.1484 1.78171C7.38402 1.78171 1.30228 7.76553 1.30228 15.4048C1.30228 19.0737 2.87119 22.6524 5.72216 25.4844C9.3151 29.0524 9.3151 33.2308 9.3151 35.7278V37.4001ZM17.0443 25.4967H13.2542C12.9353 25.4967 12.6773 25.2503 12.6773 24.9459V22.9431L11.5859 22.5071L10.0988 23.9269C9.99139 24.0309 9.84395 24.0875 9.69171 24.0875C9.53786 24.0875 9.39203 24.0294 9.28465 23.9269L6.60517 21.3672C6.37921 21.1515 6.37921 20.8042 6.60517 20.5884L8.08754 19.1717L7.63882 18.1267H5.53305C5.21414 18.1267 4.95613 17.8803 4.95613 17.5759V13.9559C4.95613 13.6514 5.21414 13.4051 5.53305 13.4051H7.63081L8.08754 12.3632L6.60196 10.9433C6.376 10.7276 6.376 10.3803 6.60196 10.1646L9.28145 7.60488C9.4978 7.3968 9.88081 7.3968 10.0972 7.60488L11.5811 9.02166L12.6773 8.59326V6.5859C12.6773 6.28143 12.9353 6.0351 13.2542 6.0351H17.0443C17.3632 6.0351 17.6212 6.28143 17.6212 6.5859V8.58867L18.7125 9.02472L20.1997 7.60488C20.4257 7.38915 20.7911 7.38915 21.017 7.60488L23.6981 10.1646C23.9241 10.3803 23.9241 10.7276 23.6981 10.9433L22.2141 12.3601L22.6629 13.4051H24.7638C25.0827 13.4051 25.3407 13.6514 25.3407 13.9559V17.5759C25.3407 17.8803 25.0827 18.1267 24.7638 18.1267H22.6645L22.2093 19.1686L23.6965 20.5884C23.9225 20.8042 23.9225 21.1515 23.6965 21.3672L21.0154 23.9269C20.9081 24.0309 20.7606 24.0875 20.6068 24.0875C20.4529 24.0875 20.3055 24.0294 20.1981 23.9269L18.7157 22.5101L17.6196 22.9385V24.9459C17.6212 25.2503 17.3632 25.4967 17.0443 25.4967ZM13.8295 24.3951H16.4673V22.5683C16.4673 22.3449 16.6084 22.1429 16.8247 22.0588L18.634 21.3519C18.8488 21.2678 19.0972 21.3152 19.2622 21.4728L20.6084 22.758L22.4738 20.9771L21.1196 19.6857C20.9545 19.5282 20.9048 19.2895 20.9962 19.0829L21.751 17.3617C21.8407 17.1567 22.0507 17.0235 22.2831 17.0235H24.1869V14.5067H22.2766C22.0427 14.5067 21.8327 14.3721 21.743 14.1655L21.001 12.4397C20.9129 12.2347 20.9625 11.9975 21.126 11.8414L22.4738 10.5547L20.6068 8.7738L19.2542 10.0651C19.0875 10.2242 18.8375 10.2701 18.6228 10.1845L16.8199 9.46383C16.6052 9.37815 16.4657 9.17772 16.4657 8.95587V7.1367H13.8279V8.96199C13.8279 9.18537 13.6869 9.38733 13.4706 9.47148L11.6629 10.1799C11.4449 10.264 11.1997 10.2151 11.0363 10.059L9.6885 8.7738L7.82472 10.5547L9.17728 11.846C9.34395 12.0036 9.39203 12.2423 9.30228 12.4489L8.54747 14.1701C8.45773 14.3751 8.2478 14.5082 8.01542 14.5082H6.10998V17.0266H8.02344C8.25741 17.0266 8.46895 17.1612 8.55709 17.3678L9.29748 19.0936C9.38562 19.2987 9.33594 19.5358 9.17087 19.6919L7.82472 20.9786L9.6901 22.7595L11.0427 21.4682C11.2077 21.3091 11.4561 21.2601 11.6741 21.3489L13.477 22.0695C13.6917 22.1552 13.8311 22.3556 13.8311 22.5774L13.8295 24.3951ZM15.1484 20.1417C12.6212 20.1417 10.5651 18.1787 10.5651 15.7659C10.5651 13.3531 12.6212 11.3901 15.1484 11.3901C17.6757 11.3901 19.7318 13.3531 19.7318 15.7659C19.7318 18.1787 17.6757 20.1417 15.1484 20.1417ZM15.1484 12.4917C13.2574 12.4917 11.7189 13.9605 11.7189 15.7659C11.7189 17.5713 13.2574 19.0401 15.1484 19.0401C17.0395 19.0401 18.5779 17.5713 18.5779 15.7659C18.5779 13.9605 17.0395 12.4917 15.1484 12.4917Z" fill="#248AF0" stroke="#248AF0" stroke-width="0.5"/>
             </svg>
             <h3>
             Innovation
             </h3>
             <p>
             Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer.
             </p>
              </div>
              <div className={style.valuecard}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48" fill="none">
  <g clip-path="url(#clip0_4141_12459)">
    <path d="M33.9098 23.2002C34.3527 20.2393 33.9149 17.2077 32.6555 14.5149C31.3961 11.8221 29.3758 9.59764 26.8673 8.14198C26.8673 8.10294 26.878 8.06762 26.878 8.02858C26.878 6.08005 26.1368 4.21133 24.8174 2.83351C23.498 1.45569 21.7085 0.681641 19.8426 0.681641C17.9767 0.681641 16.1873 1.45569 14.8679 2.83351C13.5485 4.21133 12.8073 6.08005 12.8073 8.02858C12.8073 8.06576 12.818 8.10294 12.818 8.14012C10.3092 9.5959 8.28863 11.8206 7.02922 14.5138C5.7698 17.2071 5.33219 20.239 5.77547 23.2002C4.65016 23.4731 3.60667 24.0316 2.73744 24.8263C1.86821 25.621 1.20007 26.6272 0.792207 27.756C0.384342 28.8847 0.249346 30.101 0.399175 31.2973C0.549005 32.4935 0.979036 33.6327 1.65117 34.6139C2.32331 35.5951 3.21681 36.3881 4.25251 36.9225C5.28822 37.457 6.43416 37.7164 7.58882 37.6779C8.74349 37.6394 9.87124 37.3041 10.8722 36.7017C11.8731 36.0993 12.7163 35.2484 13.3271 34.2244C15.336 35.3291 17.5722 35.9064 19.8426 35.9064C22.113 35.9064 24.3493 35.3291 26.3582 34.2244C26.9692 35.2474 27.8124 36.0973 28.813 36.6989C29.8136 37.3005 30.9408 37.6352 32.0948 37.6733C33.2489 37.7114 34.3941 37.4518 35.4291 36.9175C36.4642 36.3832 37.3571 35.5906 38.0288 34.61C38.7006 33.6293 39.1305 32.4908 39.2804 31.2953C39.4303 30.0998 39.2957 28.8841 38.8884 27.7559C38.4811 26.6277 37.8137 25.6217 36.9453 24.8271C36.0769 24.0325 35.0343 23.4737 33.9098 23.2002ZM19.8426 2.54626C20.8805 2.54626 21.8951 2.86764 22.7581 3.46976C23.6211 4.07187 24.2937 4.92769 24.691 5.92901C25.0883 6.93032 25.1923 8.03217 24.99 9.09522C24.7876 10.1583 24.2879 11.1348 23.5542 11.9013C22.8204 12.6679 21.8855 13.19 20.8676 13.4016C19.8497 13.6133 18.7945 13.5051 17.8355 13.0905C16.8765 12.676 16.0568 11.9739 15.4799 11.0729C14.903 10.1718 14.5949 9.11243 14.5946 8.02858C14.596 6.57552 15.1494 5.1824 16.1333 4.15494C17.1172 3.12747 18.4512 2.54774 19.8426 2.54626ZM7.38121 35.8194C6.34333 35.8194 5.32874 35.498 4.46575 34.8959C3.60275 34.2938 2.9301 33.438 2.53283 32.4367C2.13557 31.4353 2.03154 30.3335 2.23389 29.2705C2.43624 28.2074 2.93589 27.2309 3.66966 26.4643C4.40344 25.6978 5.33838 25.1757 6.35628 24.964C7.37419 24.7524 8.42933 24.8606 9.38832 25.2751C10.3473 25.6897 11.1671 26.3918 11.7439 27.2928C12.3208 28.1938 12.6289 29.2532 12.6292 30.3371C12.6278 31.7901 12.0745 33.1833 11.0906 34.2107C10.1067 35.2382 8.77265 35.8179 7.38121 35.8194ZM14.057 32.5475C14.286 31.8347 14.4073 31.0889 14.4166 30.3371C14.4133 28.4179 13.691 26.5762 12.4041 25.206C11.1173 23.8358 9.36814 23.0458 7.53075 23.005C7.43178 22.3556 7.37941 21.6994 7.37409 21.0419C7.37461 18.8601 7.90213 16.7137 8.90784 14.8014C9.91355 12.889 11.3649 11.2725 13.1277 10.1014C13.548 11.622 14.4302 12.9587 15.6414 13.9101C16.8526 14.8614 18.3271 15.3759 19.8426 15.3759C21.3582 15.3759 22.8327 14.8614 24.0438 13.9101C25.255 12.9587 26.1372 11.622 26.5575 10.1014C28.3203 11.2725 29.7717 12.889 30.7774 14.8014C31.7831 16.7137 32.3106 18.8601 32.3112 21.0419C32.3058 21.6994 32.2535 22.3556 32.1545 23.005C30.3171 23.0458 28.5679 23.8358 27.2811 25.206C25.9943 26.5762 25.272 28.4179 25.2687 30.3371C25.2781 31.0883 25.3995 31.8334 25.6283 32.5456C23.8376 33.5033 21.8545 34.0027 19.8426 34.0027C17.8307 34.0027 15.8477 33.5052 14.057 32.5475ZM32.304 35.8176C31.2661 35.8176 30.2514 35.4961 29.3884 34.8939C28.5254 34.2917 27.8527 33.4358 27.4555 32.4344C27.0583 31.433 26.9543 30.331 27.1568 29.2679C27.3593 28.2048 27.8592 27.2283 28.5931 26.4618C29.3271 25.6954 30.2622 25.1734 31.2802 24.9619C32.2982 24.7505 33.3534 24.859 34.3124 25.2738C35.2713 25.6886 36.091 26.3911 36.6676 27.2923C37.2443 28.1936 37.5521 29.2532 37.5521 30.3371C37.5507 31.7901 36.9973 33.1833 36.0134 34.2107C35.0295 35.2382 33.6955 35.8161 32.304 35.8176Z" fill="#248AF0"/>
  </g>
  <defs>
    <clipPath id="clip0_4141_12459">
      <rect width="39" height="47" fill="white" transform="translate(0.339844 0.681641)"/>
    </clipPath>
  </defs>
</svg>
             <h3>
             Collaboration
             </h3>
             <p>
             Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer.
             </p>
              </div>

              <div className={style.valuecard}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48" fill="none">
  <g clip-path="url(#clip0_4141_12468)">
    <path d="M30.3571 33.5717L20.6817 28.5009L30.3571 23.4302C30.81 23.1929 31.0956 22.7098 31.0956 22.1814C31.0956 21.6532 30.8099 21.1701 30.357 20.9328L20.6815 15.8621L30.357 10.7915C30.8098 10.5541 31.0956 10.0711 31.0956 9.5428C31.0956 9.01446 30.8099 8.53146 30.357 8.29412L16.1158 0.830517C15.7349 0.631054 15.2854 0.631978 14.9055 0.83354L0.828701 8.29706C0.378927 8.5355 0.0957031 9.01689 0.0957031 9.5428C0.0957031 10.0687 0.378927 10.5502 0.828701 10.7885L10.398 15.8622L0.828701 20.9358C0.378927 21.1743 0.0957031 21.6557 0.0957031 22.1816C0.0957031 22.7075 0.378927 23.189 0.828701 23.4274L10.398 28.5011L0.828701 33.5747C0.378927 33.8131 0.0957031 34.2945 0.0957031 34.8204C0.0957031 35.3463 0.378927 35.8278 0.828701 36.0662L14.9054 43.5298C15.2865 43.7317 15.7354 43.7319 16.1157 43.5326L30.3571 36.0691C30.8099 35.8318 31.0957 35.3488 31.0957 34.8204C31.0957 34.2922 30.81 33.809 30.3571 33.5717ZM4.39434 9.5428L15.5169 3.64559L26.7696 9.5428L15.5169 15.44L4.39434 9.5428ZM4.39434 22.1814L13.3555 17.4303L14.9054 18.2519C15.2744 18.4475 15.7273 18.4584 16.1157 18.2549C16.4755 18.0663 17.3417 17.6124 17.6965 17.4265L26.7695 22.1814L15.5168 28.0788L4.39434 22.1814ZM15.5168 40.7175L4.39434 34.8203L13.3555 30.069L14.9054 30.8908C15.2958 31.0976 15.748 31.0863 16.1157 30.8936L17.6964 30.0653L26.7694 34.8203L15.5168 40.7175Z" fill="#248AF0"/>
  </g>
  <defs>
    <clipPath id="clip0_4141_12468">
      <rect width="31" height="47" fill="white" transform="translate(0.0957031 0.681641)"/>
    </clipPath>
  </defs>
</svg>
             <h3>
             Transparency
             </h3>
             <p>
             Lorem ipsum dolor sit amet consectetur. Lobortis sed convallis vitae velit ultricies tellus vitae integer.
             </p>
              </div>
            </div>
          </section>

          {/* WhyUs */}
          <div ref={addToRefs}>
          <WhyUs/>
          </div>
         

          {/* TeamSlider */}
          <div ref={addToRefs}>
          <TeamSwiper/>
          </div>
         

          {/* LetsTalkMarquee */}
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