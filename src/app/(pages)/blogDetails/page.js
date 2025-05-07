"use client";
import Header from "@/app/Components/Header/page";
import { useTheme } from "../../../context/ThemeContext";
import style from "./blogdetails.module.scss";
import Image from "next/image";
import Footer from "@/app/Components/Footer/page";
import { useRef, useState } from "react";
import {  useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export default function BlogDetails() {

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
    <div className={`${style.container} ${theme === "dark" ? style.dark : ""}`}>
      <Header />
      {/* HeroSection */}
      <section ref={addToRefs} className={style.herosection}>
        <a href="#">
          <p>Category Name</p>
        </a>
        <h1>This will be heading which can be anything you want</h1>
        <p>
          20 April 2025{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
          >
            <circle cx="4.4671" cy="4.09375" r="3.84211" fill="#D4D4D4" />
          </svg>{" "}
          5 Min to Read
        </p>

        <Image
          className={style.bannerimage}
          src="/images/BlogdetailsBanner.png"
          height={446}
          width={1240}
          alt="Images"
        />
      </section>

      {/* ContentSection */}
      <section ref={addToRefs} className={style.contentsection}>
        <div ref={addToRefs} className={style.tablediv}>
          <div className={style.tableofcontent}>
            <h3>Table of Contents</h3>
            <h5>This will be heading</h5>
            <p>Second heading with great content</p>
            <p>Third paragraph with content</p>
          </div>

          <div className={style.bottomdiv}>
            <p>Written By</p>
            <div className={style.elipsediv}>
              <Image
                src="/images/Ellipse 1248.png"
                height={45}
                width={46}
                alt="Elipse"
              />
              Alex Smith
            </div>
          </div>
        </div>
        <div ref={addToRefs} className={style.contentdiv}>
          <p>
            Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad
            äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen.
            Prekrosade divaligt kuddbok pseudon. Soss obel favangen, nöska.
            Siling vönera jåtebel gör i hämndporr. Kick lon paravande, ana.
            Decigyheten por exoliga par kontradefenar. Sonas pohisade när ren
            lonit ett fat. Sora pott, bivafask. Bende Zoombombning om
            lådvinsalkoholism. Ar spegt plastbanta. Artdöden reasar tvodd var.
            Dode öligen. Spedost parask om än ses fas. Infrafar udat hongar,
            miligt utvigning. Min onade, or mangen sor. Dud kedonat spess,
            kosläpp. Saning flyttstajla, metanomi osäre. Akägt iv hexasärade.
            Dädat rede. Hjulboja eun padilig mos. Hyponar givomat religen
            infrarengen av homohass. Resk poling. Fotoplastisk krokror virtad
            och multinas. Treskapet des flexitarian. Faskapet dijönas att
            makront oaktat telektig. Kroppsaktivism eudade. Elektropod treng.
            Saktig nyhetsbok ifall dektigt. Degon epinade decibel för renysam.
            Neheten gubelt progynivis och dekadev pokåktig. Ede mon. Eupade
            erat, har sang ik. Cli-fi jär. Ohese homong ojöre: menskonst då
            åjögt.
          </p>
          <Image ref={addToRefs}
            className={style.bannerimage}
            src="/images/blogdetailscontent.png"
            height={489}
            width={896}
            alt="Images"
          />

          <ul ref={addToRefs}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9.5"
                  fill="#F1F4FA"
                  stroke="#DEDEDE"
                />
              </svg>
              <p>
                Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir,
                fortad äsäsäs.
              </p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9.5"
                  fill="#F1F4FA"
                  stroke="#DEDEDE"
                />
              </svg>
              <p>
                Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir,
                fortad äsäsäs.
              </p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9.5"
                  fill="#F1F4FA"
                  stroke="#DEDEDE"
                />
              </svg>
              <p>
                Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir,
                fortad äsäsäs.
              </p>
            </li>
          </ul>

          <h2>This will be heading which can be anything you want</h2>
          <p>
            Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad
            äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen.
            Prekrosade divaligt kuddbok pseudon. Soss obel favangen, nöska.
            Siling vönera jåtebel gör i hämndporr. Kick lon paravande, ana.
            Decigyheten por exoliga par kontradefenar. Sonas pohisade när ren
            lonit ett fat. Sora pott, bivafask. Bende Zoombombning om
            lådvinsalkoholism. Ar spegt plastbanta. Artdöden reasar tvodd var.
            Dode öligen. Spedost parask om än ses fas. Infrafar udat hongar,
            miligt utvigning. Min onade, or mangen sor. Dud kedonat spess,
            kosläpp. Saning flyttstajla, metanomi osäre. Akägt iv hexasärade.
            Dädat rede. Hjulboja eun padilig mos. Hyponar givomat religen
            infrarengen av homohass. Resk poling. Fotoplastisk krokror virtad
            och multinas. Treskapet des flexitarian. Faskapet dijönas att
            makront oaktat telektig. Kroppsaktivism eudade. Elektropod treng.
            Saktig nyhetsbok ifall dektigt. Degon epinade decibel för renysam.
            Neheten gubelt progynivis och dekadev pokåktig. Ede mon. Eupade
            erat, har sang ik. Cli-fi jär. Ohese homong ojöre: menskonst då
            åjögt.
          </p>

          <div ref={addToRefs} className={style.videowrapper}>
            <video autoPlay ref={videoRef} loop muted playsInline>
              <source
                src="/vidoes/officeworkingemployees.mp4"
                type="video/mp4"
              />
            </video>

            <svg
              className="video-play-button"
              onClick={togglePlayPause}
              xmlns="http://www.w3.org/2000/svg"
              width="122"
              height="122"
              viewBox="0 0 122 122"
              fill="none"
            >
              <rect
                opacity="0.1"
                x="0.673828"
                y="0.736328"
                width="121.07"
                height="121.07"
                rx="60.5352"
                fill="white"
              />
              <rect
                opacity="0.1"
                x="5.27734"
                y="5.33887"
                width="110.943"
                height="110.943"
                rx="55.4714"
                fill="white"
              />
              <rect
                x="13.1035"
                y="12.7056"
                width="96.2118"
                height="96.2118"
                rx="48.1059"
                fill="#FF3310"
              />
              <path
                d="M75.6406 58.8356C77.7786 60.07 77.7786 63.156 75.6406 64.3904L55.1956 76.1943C53.0575 77.4287 50.385 75.8857 50.385 73.4169L50.385 49.809C50.385 47.3402 53.0575 45.7972 55.1956 47.0316L75.6406 58.8356Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* similarsection */}
      <section ref={addToRefs} className={style.similarsection}>
        <h2>Similar Articles</h2>

        <div className={style.developmentgrid}>
          <div className={style.card}>
            <div className={style.imagewrapper}>
              <Image
                src="/images/blog1.png"
                height={300}
                width={387}
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
                src="/images/blog2.png"
                height={300}
                width={387}
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
                src="/images/blog3.png"
                height={300}
                width={387}
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
        </div>
      </section>

       {/* Footer */}
             <div ref={addToRefs}>
             <Footer/>
             </div>
    </div>
  );
}
