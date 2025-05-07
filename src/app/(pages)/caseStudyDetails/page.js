"use client"
import Header from '@/app/Components/Header/page';
import { useTheme } from "../../../context/ThemeContext";
import Image from 'next/image';
import style from './casedetails.module.scss'
import LetsTalkMarquee from '@/app/Components/LetsTalkMarquee/page';
import ContactForm from '@/app/Components/ContactForm/page';
import Footer from '@/app/Components/Footer/page';

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function CaseStudyDetails(){


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

        {/* HeroServices */}
        <section ref={addToRefs} className={style.herosection}>
            <div>
            <h1>
            This will be title of the Case study
            </h1>
            <p>
            Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
             </p>
            </div>
           {/* <div className={style.shadowblack}></div> */}
        </section>

        {/* Overview */}
        <section ref={addToRefs} className={style.overview}>
            <h1>
            Overview
            </h1>
            <p>
            Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
            </p>
        </section>

        {/* ProductShowCase */}
        <section ref={addToRefs} className={style.productShowCase}>
            <h1>
            Product Showcase
            </h1>
            <div className={style.showCasegrid}>
                <div className={style.card}>
                    <Image className={style.cardimage}
                    height={423}
                    width={546}
                    alt='case1'
                    src="/images/showcase1.png"/>
                    <div>
                        <div className={style.colordiv}></div>
                        <h3>
                        Discussion with team
                        </h3>
                    </div>
                </div>
                <div className={style.card}>
                    <Image className={style.cardimage}
                    height={423}
                    width={546}
                    alt='case1'
                    src="/images/showcase2.png"/>
                    <div>
                        <div className={style.colordiv}></div>
                        <h3>
                        Discussion with team
                        </h3>
                    </div>
                </div>
                <div className={style.card}>
                    <Image className={style.cardimage}
                    height={423}
                    width={546}
                    alt='case1'
                    src="/images/showcase3.png"/>
                    <div>
                        <div className={style.colordiv}></div>
                        <h3>
                        Discussion with team
                        </h3>
                    </div>
                </div>
                <div className={style.card}>
                    <Image className={style.cardimage}
                    height={423}
                    width={546}
                    alt='case1'
                    src="/images/showcase4.png"/>
                    <div>
                        <div className={style.colordiv}></div>
                        <h3>
                        Discussion with team
                        </h3>
                    </div>
                </div>
            </div>
            <button>
            Get Free Consultation
            </button>
        </section>

        {/* Tasks */}
        <section ref={addToRefs} className={style.tasks}>
            <div ref={addToRefs} className={style.challenge}>
            <div className={style.challengesvg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.3424 18.3334C10.3424 18.3334 17.0091 15.0001 17.0091 10.0001V4.16675L10.3424 1.66675L3.67578 4.16675V10.0001C3.67578 15.0001 10.3424 18.3334 10.3424 18.3334Z" stroke="#FF1A51" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                  <div className={style.contentdiv}>
                    <div>
                    <h1>
                    Challenge
                    </h1>
                    <p>
                    Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                    </p>
                    </div>
                 
                    <ul>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                    </ul>

                    </div>
              
            </div>

            <div ref={addToRefs} className={style.solution}>
            <div className={style.solutionsvg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
               <path d="M9.5 17C13.6417 17 17 13.6417 17 9.5C17 5.35833 13.6417 2 9.5 2C5.35833 2 2 5.35833 2 9.5C2 13.6417 5.35833 17 9.5 17Z" stroke="#23C965" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M7 9.66667L8.66667 11.3333L12 8" stroke="#23C965" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
                    </div>
                  <div className={style.contentdiv}>
                    <div>
                    <h1>
                    Solution
                    </h1>
                    <p>
                    Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                    </p>
                    </div>
                 
                    <ul>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                    </ul>

                    </div>
              
            </div>

            <div ref={addToRefs} className={style.result}>
            <div className={style.resultsvg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
               <path d="M10.8418 16.6666V8.33325" stroke="#2563EB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M15.8418 16.6666V3.33325" stroke="#2563EB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M5.8418 16.6666V13.3333" stroke="#2563EB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
            </div>
            <div className={style.main}>
            <div className={style.contentdiv}>
                    <div>
                    <h1>
                    Results
                    </h1>
                    <p>
                    Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                    </p>
                    </div>
                 
                    <ul>
                        <div>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        </div>
                        <div>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        <li>
                        Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                        </li>
                        </div>
                    </ul>

             </div>
              <div className={style.breakdiv}>
                <p>
                &quot;Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt . Beta Tester&quot;
                </p>
              </div>

              <div className={style.grid}>
                <div className={style.card}>
                    <div>
                        <div className={style.starbg}>
                        ✨
                        </div>
                        <h4>
                        Time Efficiency
                        </h4>
                    </div>
                    <p>
                    Helped creators reduce daily video production time by approximately 2.5 hours
                    </p>
                </div>
                <div className={style.card}>
                    <div>
                        <div className={style.starbg}>
                        ✨
                        </div>
                        <h4>
                        Content Consistency
                        </h4>
                    </div>
                    <p>
                    Enabled regular posting schedules across multiple platforms
                    </p>
                </div>
                <div className={style.card}>
                    <div>
                        <div className={style.starbg}>
                        ✨
                        </div>
                        <h4>
                        Quality Control
                        </h4>
                    </div>
                    <p>
                    Maintained content quality while increasing production speed
                      </p>
                </div>

                <div className={style.card}>
                    <div>
                        <div className={style.starbg}>
                        ✨
                        </div>
                        <h4>
                        Platform Support
                        </h4>
                    </div>
                    <p>
                    Successfully integrated with major short-form video platforms
                     </p>
                </div>
              </div>


            </div>
            
            </div>
        </section>


        {/* KeyMetrics */}
        <section ref={addToRefs} className={style.keymatrics}>
            <h3>
            Key Metrics
            </h3>
            <div className={style.matricsgrid}>
                <div className={style.matrics}>
                    <h2>
                    30 Days
                    </h2>
                    <p>
                    Dev Timeline
                    </p>
                </div>
                <div className={style.matrics}>
                    <h2>
                    2.5 hrs/day
                    </h2>
                    <p>
                    Time Saved
                    </p>
                </div>
                <div className={style.matrics}>
                    <h2>
                    100%
                    </h2>
                    <p>
                    Features
                    </p>
                </div>
                <div className={style.matrics}>
                    <h2>
                    95%
                    </h2>
                    <p>
                    Test Coverage
                    </p>
                </div>
            </div>
        </section>

        {/* Project Timeline */}
        <section ref={addToRefs} className={style.projectTimeline}>
            <div ref={addToRefs} className={style.heading}>
                <div className={style.svgdiv}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M10.3197 18.755C14.922 18.755 18.653 15.0241 18.653 10.4217C18.653 5.81934 14.922 2.08838 10.3197 2.08838C5.71729 2.08838 1.98633 5.81934 1.98633 10.4217C1.98633 15.0241 5.71729 18.755 10.3197 18.755Z" stroke="#248AF0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.3203 5.42188V10.4219L13.6536 12.0885" stroke="#248AF0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                <h1>
                Project Timeline
                </h1>

            </div>

            <div ref={addToRefs} className={style.timelinediv}>
            <div className={style.line}></div>
            <ul ref={addToRefs}>
                <li ref={addToRefs} className={style.list1}>
                    <div className={style.days}>
                        <a href="#">
                        Days 1-5
                        </a>
                    </div>
                    <h4>
                    Project Setup & Planning
                    </h4>
                    <p>
                    Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                    diagrams for the video creation pipeline.
                    </p>
                </li>
                <li ref={addToRefs} className={style.list2}>
                    <div className={style.days}>
                        <a href="#">
                        Days 1-5
                        </a>
                    </div>
                    <h4>
                    Project Setup & Planning
                    </h4>
                    <p>
                    Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                    diagrams for the video creation pipeline.
                    </p>
                </li>
                <li ref={addToRefs} className={style.list3}>
                    <div className={style.days}>
                        <a href="#">
                        Days 1-5
                        </a>
                    </div>
                    <h4>
                    Project Setup & Planning
                    </h4>
                    <p>
                    Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                    diagrams for the video creation pipeline.
                    </p>
                </li>
                <li ref={addToRefs} className={style.list4}>
                    <div className={style.days}>
                        <a href="#">
                        Days 1-5
                        </a>
                    </div>
                    <h4>
                    Project Setup & Planning
                    </h4>
                    <p>
                    Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                    diagrams for the video creation pipeline.
                    </p>
                </li>
                <li ref={addToRefs} className={style.list5}>
                    <div className={style.days}>
                        <a href="#">
                        Days 1-5
                        </a>
                    </div>
                    <h4>
                    Project Setup & Planning
                    </h4>
                    <p>
                    Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då dovöligen. Prekrosade divaligt 
                    diagrams for the video creation pipeline.
                    </p>
                </li>
            </ul>
            </div>
        </section>

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