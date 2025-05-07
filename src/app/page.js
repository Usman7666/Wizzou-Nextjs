"use client";
import style from "./home.module.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../app/Components/Header/page";
import Image from "next/image";
import Marquee from "./Components/Marquee/page";
import ProjectSwiper from "./Components/Slider/page";
import LetsTalkMarquee from "./Components/LetsTalkMarquee/page";
import ContactForm from "./Components/ContactForm/page";
import Footer from "./Components/Footer/page";
import { useTheme } from "../context/ThemeContext";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
  

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`${theme === "dark" ? style.dark : ""} ${style.container}`}>
      <Header />
      {/* Hero Section */}
      <section ref={addToRefs} className={`${style.herosection} ${style.sectionAnimation}`}>
        <div className={style.heading}>
          <h1>Building Digital Experiences That Drive Growth.</h1>
          <Image
            className={style.imagetop}
            height={193}
            width={193}
            alt="TopBullet"
            src="/images/topbullet.svg"
          />
        </div>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M8.02458 1.51917C8.25939 0.479617 9.74061 0.479616 9.97542 1.51917L10.4421 3.58495C10.5942 4.25869 11.3674 4.57894 11.9514 4.21015L13.7421 3.07938C14.6432 2.51034 15.6906 3.55771 15.1216 4.45883L13.9908 6.24952C13.622 6.83354 13.9422 7.60669 14.616 7.75887L16.6818 8.2255C17.7213 8.46032 17.7213 9.94153 16.6818 10.1764L14.616 10.643C13.9422 10.7952 13.622 11.5683 13.9908 12.1523L15.1216 13.943C15.6906 14.8441 14.6432 15.8915 13.7421 15.3225L11.9514 14.1917C11.3674 13.8229 10.5942 14.1432 10.4421 14.8169L9.97542 16.8827C9.74061 17.9222 8.25939 17.9222 8.02458 16.8827L7.55795 14.8169C7.40576 14.1432 6.63261 13.8229 6.04859 14.1917L4.25791 15.3225C3.35679 15.8915 2.30941 14.8441 2.87845 13.943L4.00922 12.1523C4.37801 11.5683 4.05776 10.7952 3.38403 10.643L1.31824 10.1764C0.278689 9.94153 0.278688 8.46032 1.31824 8.2255L3.38403 7.75887C4.05776 7.60669 4.37801 6.83354 4.00922 6.24952L2.87845 4.45884C2.30941 3.55772 3.35679 2.51034 4.25791 3.07938L6.04859 4.21015C6.63261 4.57894 7.40576 4.25869 7.55795 3.58495L8.02458 1.51917Z"
              fill="#999999"
            />
          </svg>
          Your one-stop digital agency for development, marketing, and cloud
          solutions.
        </p>
      </section>

      <Marquee />

      {/* BlueSection */}
      <section ref={addToRefs} className={style.blueSection}>
        <div className={style.bluemain}>
        <div className={style.divtop}>
          <h2>Empowering Your Vision with Digital Excellence</h2>
          <p>
            We are a dynamic digital agency committed to turning your ideas into
            reality. With expertise in development, design, digital marketing,
            and cloud hosting services, we empower businesses to thrive in a
            fast-paced digital world.
          </p>
        </div>
        <div className={style.divbottom}>
          <div className={style.divblue}>
            <div>
              <h1>920+</h1>
              <p>Projects finish</p>
            </div>
            <ul>
              <li>
                <Image
                  alt="person 1"
                  height={70}
                  width={70}
                  src="/images/Ellipse 1.png"
                />
              </li>
              <li>
                <Image
                  alt="person 2"
                  height={70}
                  width={70}
                  src="/images/Ellipse 2.png"
                />
              </li>
              <li>
                <Image
                  alt="person 3"
                  height={70}
                  width={70}
                  src="/images/Ellipse 3.png"
                />
              </li>
              <li>
                <Image
                  alt="person 4"
                  height={70}
                  width={70}
                  src="/images/Ellipse 4.png"
                />
              </li>
            </ul>
          </div>
          <div className={style.videowrapper}>
          <video autoPlay ref={videoRef} loop muted playsInline>
            <source src="/vidoes/officeworkingemployees.mp4" type="video/mp4" />
          </video>
          <svg
            className="video-play-button"
            onClick={togglePlayPause}
            xmlns="http://www.w3.org/2000/svg"
            width="184"
            height="183"
            viewBox="0 0 184 183"
            fill="none"
          >
            <circle
              cx="91.8358"
              cy="91.5869"
              r="91.3017"
              fill="white"
              fillOpacity="0.3"
            />
            <circle
              cx="91.8358"
              cy="89.8096"
              r="70.92"
              fill="white"
              fillOpacity="0.3"
            />
            <circle cx="91.8358" cy="90.2852" r="44" fill="white" />
            <path
              d="M104.742 86.4947C105.343 86.8146 105.846 87.2921 106.197 87.8761C106.548 88.4601 106.734 89.1286 106.734 89.8099C106.734 90.4912 106.548 91.1597 106.197 91.7437C105.846 92.3277 105.343 92.8052 104.742 93.1251L88.6955 101.851C86.1117 103.256 82.938 101.428 82.938 98.5369V81.0842C82.938 78.1911 86.1117 76.3637 88.6955 77.7677L104.742 86.4947Z"
              fill="#218AF0"
            />
          </svg>
          </div>
        </div>
        </div>
      
      </section>

      {/* OurServices */}
      <section ref={addToRefs} className={style.ourservices}>
        <div className={style.contentdiv}>
          <h2>Our Services</h2>
          <p>
            From web development to digital marketing and cloud hosting, we
            deliver tailored solutions to help your business thrive in the
            digital world.
          </p>
          <div ref={addToRefs} className={style.servicebuttons}>
            <div  className={style.servicebutton}>
              <h4>01</h4>
              <h5>Development & Design</h5>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill={theme === "dark" ? "#ffffff" : "#000000"}
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM1 9H25V7H1V9Z"
                    fill={theme === "dark" ? "#ffffff" : "#000000"}
                  />
                </svg>
              </button>
            </div>
            <div className={style.servicebutton}>
              <h4>02</h4>
              <h5>Marketing</h5>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM1 9H25V7H1V9Z"
                    fill={theme === "dark" ? "#ffffff" : "#000000"}
                  />
                </svg>
              </button>
            </div>
            <div className={style.servicebutton}>
              <h4>03</h4>
              <h5>Hosting & Cloud</h5>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM1 9H25V7H1V9Z"
                    fill={theme === "dark" ? "#ffffff" : "#000000"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Image
          className={style.image}
          style={"border-radius: 32px;"}
          src="/images/medium-shot-man-designing-websites.png"
          alt="Boy design images"
          height={455}
          width={455}
        />

        <div className={style.div3}>
          <div>
            <h3>Meet our expert</h3>
            <p>Looking for design experts who can bring your vision to life</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle cx="32" cy="32" r="32" fill="#FF3310" />
            <path
              d="M44.2335 26.3882C44.4479 25.588 43.973 24.7655 43.1728 24.5511L30.1328 21.0571C29.3326 20.8426 28.5101 21.3175 28.2957 22.1177C28.0813 22.9179 28.5562 23.7404 29.3564 23.9548L40.9475 27.0607L37.8417 38.6518C37.6273 39.452 38.1021 40.2745 38.9023 40.4889C39.7025 40.7033 40.525 40.2284 40.7394 39.4282L44.2335 26.3882ZM22.75 39.299L43.5346 27.299L42.0346 24.701L21.25 36.701L22.75 39.299Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* OurWork */}
      <section ref={addToRefs} className={style.ourwork}>
        <div className={style.contentdiv}>
          <h2>Our Work Speaks for Itself</h2>
          <p>
            Discover how we&apose;ve helped businesses achieve their goals with
            innovative designs, data-driven marketing, and seamless cloud
            solutions.
          </p>
        </div>

        <div className={style.buttonsdiv}>
          <button>All</button>
          <button>Marketing</button>
          <button>Hosting & Cloud</button>
          <button>Development & Design</button>
        </div>
        <ProjectSwiper />
      </section>

      {/* 500+Projects */}
      <section ref={addToRefs} className={style.fivehundred}>
        <div className={style.fivehundredmain}> 
        <h2>
          Helping businesses grow through cutting-edge technology, creative
          design, and impactful marketing strategies.
        </h2>
        <div>
          <h1>500+</h1>
          <h4>Projects Completed</h4>
          <p>
            Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet
            jymäde ekotes. Sonera håtär men kavar för dock
          </p>
          <button>Get Free Consultation</button>
        </div>
        </div>

      </section>

      <LetsTalkMarquee />
      <div ref={addToRefs}>
        <ContactForm />
      </div>
    

      {/* Blog */}
      <section ref={addToRefs} className={style.blog}>
        <h1>Read Our Latest News & Blog Get Every Updates</h1>
        <div className={style.grids}>
          <div>
            <div className={style.imageWrapper}>
              <Image
                className={style.blogimage}
                alt="Blog image"
                width={390}
                height={240}
                src="/images/BlogImage.png"
              />
              <button>Development</button>
            </div>
            <h3>This will be the title</h3>
            <p>
              Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade.
              Poliitet jymäde ekotes.
            </p>
          </div>
          <div>
            <div className={style.imageWrapper}>
              <Image
                className={style.blogimage}
                alt="Blog image"
                width={390}
                height={240}
                src="/images/BlogImage.png"
              />
              <button>Development</button>
            </div>
            <h3>This will be the title</h3>
            <p>
              Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade.
              Poliitet jymäde ekotes.
            </p>
          </div>
          <div>
            <div className={style.imageWrapper}>
              <Image
                className={style.blogimage}
                alt="Blog image"
                width={390}
                height={240}
                src="/images/BlogImage.png"
              />
              <button>Development</button>
            </div>
            <h3>This will be the title</h3>
            <p>
              Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade.
              Poliitet jymäde ekotes.
            </p>
          </div>
        </div>

        <button>
          See more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M1.08289 12.5C0.530601 12.5 0.0828857 12.9477 0.0828857 13.5C0.0828857 14.0523 0.530601 14.5 1.08289 14.5V12.5ZM25.79 14.2071C26.1805 13.8166 26.1805 13.1834 25.79 12.7929L19.426 6.42893C19.0355 6.03841 18.4023 6.03841 18.0118 6.42893C17.6213 6.81946 17.6213 7.45262 18.0118 7.84315L23.6687 13.5L18.0118 19.1569C17.6213 19.5474 17.6213 20.1805 18.0118 20.5711C18.4023 20.9616 19.0355 20.9616 19.426 20.5711L25.79 14.2071ZM1.08289 14.5H25.0829V12.5H1.08289V14.5Z"
              fill="white"
            />
          </svg>
        </button>
      </section>
      <div ref={addToRefs}>
       <Footer />
      </div>
     
    </div>
  );
}
