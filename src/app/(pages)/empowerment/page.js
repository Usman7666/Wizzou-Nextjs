"use client";
import Header from "@/app/Components/Header/page";
import Image from "next/image";
import { useTheme } from "../../../context/ThemeContext";
import style from "./empowerment.module.scss";
import ProjectSwiper from "@/app/Components/Slider/page";
import WhyUs from "@/app/Components/WhyChooseUs/page";
import HowWork from "@/app/Components/HowWeWork/page";
import Review from "@/app/Components/Review/page";
import LetsTalkMarquee from "@/app/Components/LetsTalkMarquee/page";
import ContactForm from "@/app/Components/ContactForm/page";
import Footer from "@/app/Components/Footer/page";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Empowerment() {
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
          ease: "power2.out",
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
    <div className={`${style.container} ${theme === "dark" ? style.dark : ""}`}>
      <Header />

      {/* HeroSection */}
      <section ref={addToRefs} className={style.heroSection}>
        <a>Empowerment</a>
        <h1>Cloud & ICT</h1>
        <div>
          <Image
            className={style.heroImage}
            src="/images/empowerementtop.png"
            alt="ProgrammingGay"
            height={461}
            width={677}
          />

          <div className={style.herowrapper}>
            <h2>
              Lorem ipsum dolor sit amet consectetur. Tincidunt leo nulla mauris
              vel velit fermentum fusce lectus arcu. Tempor proin vel velit
              fermentum fusce lectus arcumalesuada volutpat vestibulum.
            </h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.8699" cy="32.5703" r="32" fill="#FF3310" />
                <path
                  d="M45.142 22.0513L27.6104 22.0513L27.6104 24.5233L40.9081 24.5321L23.2275 42.2127L24.9807 43.9659L42.6613 26.2852L42.6701 39.5829H45.142L45.142 22.0513Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Frame */}
      <div ref={addToRefs} className={style.frame}>
        <Image width={1240} height={16} alt="Frame" src="/images/Frame.png" />
      </div>

      {/* Services WeOffer */}
      <section ref={addToRefs} className={style.ServicesSection}>
        <h1>Services We Offer</h1>
        <p>
          We are a dynamic digital agency committed to turning your ideas into
          reality. With expertise in development, design, digital marketing, and
          cloud hosting services, we empower businesses to thrive in a
          fast-paced digital world.
        </p>
        <div ref={addToRefs} className={style.developmentgrid}>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice1.png"
                height={209}
                width={209}
                alt="card1"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Webhosting</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice2.png"
                height={209}
                width={209}
                alt="card2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Public cloud</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice3.png"
                height={209}
                width={209}
                alt="card3"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Private cloud</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice4.png"
                height={209}
                width={209}
                alt="card4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Kubernetes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice5.png"
                height={209}
                width={209}
                alt="card5"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Domain names</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice6.png"
                height={209}
                width={209}
                alt="card6"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Mailboxes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>

          <div  className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice7.png"
                height={209}
                width={209}
                alt="card1"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>SSL certificates</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice8.png"
                height={209}
                width={209}
                alt="card2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Colocation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice9.png"
                height={209}
                width={209}
                alt="card3"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Microsoft / Office 365</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice10.png"
                height={209}
                width={209}
                alt="card4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Remote support</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice11.png"
                height={209}
                width={209}
                alt="card5"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Managed ICT helpdesk</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice12.png"
                height={209}
                width={209}
                alt="card6"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Managed VoIP / PBX</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>

          <div  className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice13.png"
                height={209}
                width={209}
                alt="card4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Networking & installation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice14.png"
                height={209}
                width={209}
                alt="card5"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Software Licenses</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/EmpowermentServices/empservice15.png"
                height={209}
                width={209}
                alt="card6"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <circle cx="32.5132" cy="32.626" r="32" fill="#FF3310" />
                <path
                  d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>Local & Remote Backup</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Vulputate adipiscing
              aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
              neque.
            </p>
          </div>
        </div>
      </section>

      {/* OurExpertise */}
      <section ref={addToRefs} className={style.Expertise}>
        <Image
          className={style.expertiseimage}
          src="/images/expertise.png"
          width={603}
          height={500}
          alt="image"
        />
        <div className={style.expertiseContent}>
          <h1>Our Expertise</h1>
          <p>Revolutionize Your Marketing Strategy with Intelligent Insights</p>
          <div ref={addToRefs} className={style.expertiselist}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
              >
                <circle
                  cx="45.8184"
                  cy="45.2383"
                  r="45"
                  fill="url(#paint0_linear_4127_8127)"
                  fill-opacity="0.3"
                />
                <path
                  d="M34.749 52.6504C32.7288 52.6504 31.0911 54.2875 31.0908 56.3076C31.0908 58.3279 32.7287 59.9658 34.749 59.9658C36.7692 59.9656 38.4062 58.3277 38.4062 56.3076C38.406 54.2877 36.769 52.6506 34.749 52.6504ZM56.8877 52.6504C54.8678 52.6506 53.2307 54.2877 53.2305 56.3076C53.2305 58.3277 54.8676 59.9656 56.8877 59.9658C58.908 59.9658 60.5459 58.3279 60.5459 56.3076C60.5457 54.2875 58.9078 52.6504 56.8877 52.6504ZM34.749 30.5107C32.7287 30.5107 31.0908 32.1486 31.0908 34.1689C31.0911 36.1891 32.7288 37.8262 34.749 37.8262C36.769 37.8259 38.406 36.1889 38.4062 34.1689C38.4062 32.1488 36.7692 30.511 34.749 30.5107ZM56.8877 30.5107C54.8676 30.511 53.2305 32.1488 53.2305 34.1689C53.2307 36.1889 54.8678 37.8259 56.8877 37.8262C58.9078 37.8262 60.5457 36.1891 60.5459 34.1689C60.5459 32.1486 58.908 30.5107 56.8877 30.5107ZM33.6621 39.8984L33.582 39.8818C30.9212 39.3415 28.9182 36.9891 28.918 34.1689C28.918 30.949 31.5291 28.3379 34.749 28.3379C37.5692 28.3381 39.9216 30.3412 40.4619 33.002L40.4785 33.082H51.1582L51.1748 33.002C51.7152 30.3412 54.0676 28.3381 56.8877 28.3379C60.1077 28.3379 62.7188 30.949 62.7188 34.1689C62.7185 36.9891 60.7155 39.3415 58.0547 39.8818L57.9746 39.8984V50.5781L58.0547 50.5947C60.7155 51.1351 62.7185 53.4875 62.7188 56.3076C62.7188 59.5276 60.1077 62.1387 56.8877 62.1387C54.0676 62.1385 51.7152 60.1354 51.1748 57.4746L51.1582 57.3945H40.4785L40.4619 57.4746C39.9216 60.1354 37.5692 62.1385 34.749 62.1387C31.5291 62.1387 28.918 59.5276 28.918 56.3076C28.9182 53.4875 30.9212 51.1351 33.582 50.5947L33.6621 50.5781V39.8984ZM55.8018 39.8984L55.7217 39.8818C53.4378 39.4181 51.6386 37.619 51.1748 35.335L51.1582 35.2549H40.4785L40.4619 35.335C39.9981 37.619 38.199 39.4181 35.915 39.8818L35.835 39.8984V50.5781L35.915 50.5947C38.199 51.0586 39.9981 52.8577 40.4619 55.1416L40.4785 55.2217H51.1582L51.1748 55.1416C51.6386 52.8577 53.4378 51.0586 55.7217 50.5947L55.8018 50.5781V39.8984Z"
                  fill="#2181F0"
                  stroke="#D0E2F7"
                  stroke-width="0.2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4127_8127"
                    x1="45.8184"
                    y1="0.238281"
                    x2="45.8184"
                    y2="90.2383"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2181F0" />
                    <stop offset="1" stop-color="#E2EFFD" />
                  </linearGradient>
                </defs>
              </svg>
              <h2>Infrastructure as a service (IaaS)</h2>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
              >
                <circle
                  cx="45.8184"
                  cy="45.2383"
                  r="45"
                  fill="url(#paint0_linear_4127_8133)"
                  fill-opacity="0.3"
                />
                <path
                  d="M32.2236 52.3955H60.4131C61.2887 52.3984 62.1279 52.7469 62.7471 53.3662C63.3663 53.9856 63.7158 54.8252 63.7188 55.7012V58.835L63.7139 58.998C63.6704 59.814 63.3266 60.5877 62.7461 61.168C62.127 61.7867 61.2882 62.1358 60.4131 62.1387H32.2236L32.0596 62.1338C31.2442 62.0908 30.471 61.748 29.8906 61.168C29.2715 60.5492 28.9216 59.7104 28.918 58.835V55.7012L28.9229 55.5371C28.9631 54.7755 29.2645 54.0506 29.7764 53.4854L29.8896 53.3662C30.4701 52.7857 31.2438 52.4424 32.0596 52.3994L32.2236 52.3955ZM32.3096 54.5371C31.8759 54.5372 31.5371 54.6198 31.3066 54.8164C31.0725 55.016 30.9697 55.3156 30.9697 55.7012V58.835C30.9697 59.2348 31.0422 59.5374 31.2422 59.7363C31.4422 59.9351 31.7466 60.0078 32.1504 60.0078H60.4131C60.8277 60.0078 61.1448 59.9311 61.3555 59.7324C61.5676 59.5324 61.6504 59.2298 61.6504 58.835V55.7012C61.6504 55.2676 61.6047 54.9582 61.4033 54.7686C61.3022 54.6734 61.1703 54.6158 61.0088 54.582C60.848 54.5484 60.6504 54.5371 60.4131 54.5371H32.3096ZM55.8945 55.9941C56.1895 55.9942 56.4739 56.0969 56.7002 56.2822L56.7939 56.3672C57.0323 56.6058 57.166 56.9292 57.166 57.2666C57.166 57.562 57.0635 57.8468 56.8779 58.0732L56.7939 58.166C56.5554 58.4046 56.2318 58.539 55.8945 58.5391C55.5993 58.5391 55.3143 58.4366 55.0879 58.251L54.9951 58.166C54.7566 57.9274 54.6221 57.604 54.6221 57.2666C54.6221 56.9713 54.7247 56.6864 54.9102 56.46L54.9951 56.3672C55.2337 56.1286 55.5572 55.9941 55.8945 55.9941ZM32.2236 39.8662H60.4131C61.2342 39.8689 62.0233 40.1766 62.6289 40.7256L62.7471 40.8379C63.3663 41.4573 63.7159 42.2969 63.7188 43.1729V46.3037L63.7139 46.4678C63.6737 47.2294 63.3722 47.9542 62.8604 48.5195L62.7471 48.6387C62.1279 49.258 61.2887 49.6075 60.4131 49.6104H32.2236L32.0596 49.6055C31.2979 49.5653 30.573 49.2633 30.0078 48.751L29.8896 48.6387C29.2704 48.0193 28.9208 47.1797 28.918 46.3037V43.1729L28.9229 43.0088C28.963 42.2472 29.2646 41.5223 29.7764 40.957L29.8896 40.8379C30.4701 40.2574 31.2437 39.9141 32.0596 39.8711L32.2236 39.8662ZM32.2236 42.0645C31.8511 42.0645 31.5471 42.1872 31.3369 42.4082C31.1274 42.6287 31.0196 42.9368 31.0195 43.29V46.3545C31.0196 46.6625 31.134 46.9445 31.3447 47.1494C31.5556 47.3545 31.8579 47.4766 32.2236 47.4766H60.4131C60.8504 47.4766 61.1673 47.4299 61.3711 47.2686C61.5829 47.1006 61.6475 46.8312 61.6475 46.4688V43.4111L61.6504 43.4141V43.1729C61.6504 42.7973 61.56 42.5108 61.3438 42.3223C61.1308 42.1366 60.8161 42.0645 60.4131 42.0645H32.2236ZM55.8945 43.4658C56.1896 43.4659 56.4739 43.5685 56.7002 43.7539L56.7939 43.8389C57.0323 44.0775 57.166 44.4009 57.166 44.7383C57.166 45.0337 57.0635 45.3184 56.8779 45.5449L56.7939 45.6377C56.5554 45.8763 56.2318 46.0107 55.8945 46.0107C55.5993 46.0107 55.3143 45.9083 55.0879 45.7227L54.9951 45.6377C54.7566 45.3991 54.6221 45.0757 54.6221 44.7383C54.6221 44.443 54.7247 44.1581 54.9102 43.9316L54.9951 43.8389C55.2337 43.6002 55.5572 43.4658 55.8945 43.4658ZM32.2236 27.3379H60.4131C61.2882 27.3408 62.127 27.6899 62.7461 28.3086C63.3652 28.9274 63.7151 29.7661 63.7188 30.6416V33.7754L63.7139 33.9395C63.6708 34.7556 63.3275 35.5298 62.7471 36.1104C62.1279 36.7296 61.2887 37.0782 60.4131 37.0811H32.2236L32.0596 37.0771C31.2979 37.037 30.573 36.735 30.0078 36.2227L29.8896 36.1104C29.2705 35.491 28.9209 34.6513 28.918 33.7754V30.6416L28.9229 30.4785C28.9664 29.6626 29.3101 28.8888 29.8906 28.3086C30.471 27.7286 31.2442 27.3858 32.0596 27.3428L32.2236 27.3379ZM32.2236 29.46C32.1066 29.458 31.9901 29.4737 31.8779 29.5059L31.7666 29.5439C31.6573 29.5875 31.5553 29.6472 31.4639 29.7207L31.376 29.7988C31.2922 29.8812 31.2208 29.9752 31.165 30.0781L31.1143 30.1846C31.0537 30.3292 31.0224 30.4848 31.0225 30.6416V33.8623C31.0225 34.2007 31.1214 34.4847 31.3301 34.6836C31.5382 34.8818 31.8417 34.9814 32.2236 34.9814H60.4131C60.8179 34.9814 61.1274 34.9004 61.333 34.6943C61.5386 34.4883 61.6191 34.1789 61.6191 33.7754V30.6416C61.6191 30.3352 61.4367 30.0704 61.1436 29.8486L61.0107 29.7568L61.0098 29.7559L60.8311 29.6504C60.6569 29.5554 60.5063 29.4917 60.4541 29.4688L60.4346 29.46H32.2236ZM55.8945 31.1836C56.1895 31.1836 56.474 31.2864 56.7002 31.4717L56.7939 31.5566C57.0324 31.7952 57.1659 32.1187 57.166 32.4561C57.166 32.7514 57.0635 33.0363 56.8779 33.2627L56.7939 33.3564C56.5554 33.595 56.2318 33.7285 55.8945 33.7285C55.5992 33.7285 55.3143 33.6261 55.0879 33.4404L54.9951 33.3564C54.7566 33.1178 54.6221 32.7935 54.6221 32.4561C54.6221 32.161 54.725 31.8767 54.9102 31.6504L54.9951 31.5566C55.2337 31.3181 55.5572 31.1836 55.8945 31.1836Z"
                  fill="#2181F0"
                  stroke="#D0E2F7"
                  stroke-width="0.2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4127_8133"
                    x1="45.8184"
                    y1="0.238281"
                    x2="45.8184"
                    y2="90.2383"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2181F0" />
                    <stop offset="1" stop-color="#E2EFFD" />
                  </linearGradient>
                </defs>
              </svg>
              <h2>Platform as a service (PaaS)</h2>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
              >
                <circle
                  cx="45.8184"
                  cy="45.2383"
                  r="45"
                  fill="url(#paint0_linear_4127_8138)"
                  fill-opacity="0.3"
                />
                <path
                  d="M29.5508 29.1211H44.4268V31.5527H29.4004V53.71H62.4863V46.8799H64.918V53.5596C64.918 54.1589 64.7096 54.7368 64.333 55.1963L64.1621 55.3857C63.6779 55.87 63.0207 56.1416 62.3359 56.1416H51.2578V61.9062H56.7217V64.3379H35.165V61.9062H40.6289V56.1416H29.5508C28.9515 56.1416 28.3736 55.9332 27.9141 55.5566L27.7246 55.3857C27.2404 54.9015 26.9688 54.2444 26.9688 53.5596V31.7031C26.9688 31.104 27.1764 30.5259 27.5527 30.0664L27.7246 29.877C28.1482 29.4533 28.704 29.1926 29.2949 29.1338L29.5508 29.1211ZM43.0615 61.9062H48.8252V56.1416H43.0615V61.9062Z"
                  fill="#2181F0"
                  stroke="#D1E2F7"
                  stroke-width="0.3"
                />
                <path
                  d="M55.5059 26.3887C55.7159 26.3887 55.9227 26.4424 56.1055 26.5459C56.2425 26.6235 56.3629 26.7269 56.46 26.8496L56.5488 26.9795L64.7451 40.6396C64.8281 40.7781 64.8831 40.9312 64.9062 41.0898L64.9189 41.25C64.9216 41.4651 64.8667 41.6771 64.7607 41.8643C64.6812 42.0047 64.5749 42.1283 64.4482 42.2266L64.3145 42.3164C64.1286 42.4246 63.9172 42.4815 63.7021 42.4814H47.3096L47.1484 42.4707C47.0427 42.4566 46.9392 42.4288 46.8408 42.3877L46.6973 42.3154C46.558 42.2342 46.4365 42.1267 46.3398 41.999L46.251 41.8643C46.1715 41.7238 46.1216 41.5693 46.1025 41.4102L46.0938 41.25C46.0958 41.0885 46.1296 40.9295 46.1934 40.7822L46.2666 40.6396L54.4629 26.9795C54.5709 26.7993 54.7235 26.6494 54.9062 26.5459C55.089 26.4424 55.2958 26.3887 55.5059 26.3887ZM55.377 30.1826L49.5928 39.8223L49.457 40.0488H61.5547L61.418 39.8223L55.6338 30.1826L55.5059 29.9678L55.377 30.1826Z"
                  fill="#2181F0"
                  stroke="#D1E2F7"
                  stroke-width="0.3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4127_8138"
                    x1="45.8184"
                    y1="0.238281"
                    x2="45.8184"
                    y2="90.2383"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2181F0" />
                    <stop offset="1" stop-color="#E2EFFD" />
                  </linearGradient>
                </defs>
              </svg>
              <h2>Software as a service (SaaS)</h2>
            </div>
          </div>
        </div>
      </section>

      {/* OurWork */}
      <section ref={addToRefs} className={style.ourwork}>
        <div className={style.contentdiv}>
          <h2>Our Work Speaks for Itself</h2>
          <p>
            Discover how we've helped businesses achieve their goals with
            innovative designs, data-driven marketing, and seamless cloud
            solutions.
          </p>
        </div>
        <ProjectSwiper />
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
      <LetsTalkMarquee />

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
