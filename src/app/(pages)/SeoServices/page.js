"use client";
import Header from "@/app/Components/Header/page";
import Image from "next/image";
import { useTheme } from "../../../context/ThemeContext";
import style from "./seoservices.module.scss";
import BeforeAfter from "@/app/Components/BeforeAfterSlider/page";
import ProjectSwiper from "@/app/Components/Slider/page";
import HowWork from "@/app/Components/HowWeWork/page";
import Review from "@/app/Components/Review/page";
import FAQ from "@/app/Components/FAQ/page";
import LetsTalkMarquee from "@/app/Components/LetsTalkMarquee/page";
import ContactForm from "@/app/Components/ContactForm/page";
import Footer from "@/app/Components/Footer/page";
import AnimatedSections from "@/app/Components/GSAP/page";

export default function SeoServices() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`${style.container} ${theme === "dark" ? style.dark : ""}`}>
      <Header />

      <AnimatedSections>
        {/* HeroSection */}
        <section className={style.herosection}>
          <h1>SEO (Search Engine Optimization)</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
            euismod viverra nisi malesuada venenatis. Vulputate adipiscing
            aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque
            neque.
          </p>
        </section>

        {/* Reasons */}
        <section className={style.reasons}>
          <div className={style.reasonsmain}>
            <h1>6 Reasons Why SEO Is Necessary</h1>
            <p>
              We are a dynamic digital agency committed to turning your ideas
              into reality. With expertise in development, design, digital
              marketing, and cloud hosting services, we empower businesses to
              thrive in a fast-paced digital world.
            </p>
            <div className={style.bottomline}></div>
            <div className={style.grid}>
              <div className={style.contentwrapper}>
                <h2>01</h2>
                <div>
                  <h2>This will be the Reason</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultrices convallis
                    quam euismod viverra nisi malesuada venenatis.
                  </p>
                </div>
              </div>

              <div className={style.contentwrapper}>
                <h2>02</h2>
                <div>
                  <h2>This will be the Reason</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultrices convallis
                    quam euismod viverra nisi malesuada venenatis.
                  </p>
                </div>
              </div>

              <div className={style.contentwrapper}>
                <h2>03</h2>
                <div>
                  <h2>This will be the Reason</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultrices convallis
                    quam euismod viverra nisi malesuada venenatis.
                  </p>
                </div>
              </div>

              <div className={style.contentwrapper}>
                <h2>04</h2>
                <div>
                  <h2>This will be the Reason</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultrices convallis
                    quam euismod viverra nisi malesuada venenatis.
                  </p>
                </div>
              </div>

              <div className={style.contentwrapper}>
                <h2>05</h2>
                <div>
                  <h2>This will be the Reason</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultrices convallis
                    quam euismod viverra nisi malesuada venenatis.
                  </p>
                </div>
              </div>

              <div className={style.contentwrapper}>
                <h2>06</h2>
                <div>
                  <h2>This will be the Reason</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultrices convallis
                    quam euismod viverra nisi malesuada venenatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BeforeAfterSlider */}
        <BeforeAfter />

        {/* WhyChooseUs */}
        <section className={style.WhyChooseUs}>
          <div className={style.imagewrapper}>
            <Image
              className={style.whybanner}
              src="/images/Whychooseusbanner.png"
              height={642}
              width={603}
              alt="banner"
            />
            <div className={style.successdiv}>
              <h1>500+</h1>
              <p>Projects Completed</p>
            </div>
            <div className={style.successdiv2}>
              <h1>100+</h1>
              <p>Clients</p>
            </div>
          </div>
          <div className={style.contentdiv}>
            <h1>Why Choose Us ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis. Lorem ipsum dolor sit
              amet consectetur. Ultrices convallis quam euismod viverra nisi
              malesuada venenatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
              euismod viverra nisi malesuada venenatis.
            </p>
            <ul>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4133_9134)">
                      <path
                        d="M8.44748 13.429L4.96685 9.94834L3.80664 11.1086L8.44748 15.7494L18.3921 5.80474L17.2319 4.64453L8.44748 13.429Z"
                        fill="#23C965"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4133_9134">
                        <rect
                          width="19.8893"
                          height="19.8893"
                          fill="white"
                          transform="translate(0.987305 0.00537109)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>
                  Lörem ipsum geol nystartsjobb milingar. Krokatt
                  stenorade.Lorem ipsum dolor sit amet consectetur. Ultrices
                  convallis quam euismod viverra nisi malesuada venenatis.
                </p>
              </li>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4133_9134)">
                      <path
                        d="M8.44748 13.429L4.96685 9.94834L3.80664 11.1086L8.44748 15.7494L18.3921 5.80474L17.2319 4.64453L8.44748 13.429Z"
                        fill="#23C965"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4133_9134">
                        <rect
                          width="19.8893"
                          height="19.8893"
                          fill="white"
                          transform="translate(0.987305 0.00537109)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>
                  Lörem ipsum geol nystartsjobb milingar. Krokatt
                  stenorade.Lorem ipsum dolor sit amet consectetur. Ultrices
                  convallis quam euismod viverra nisi malesuada venenatis.
                </p>
              </li>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4133_9134)">
                      <path
                        d="M8.44748 13.429L4.96685 9.94834L3.80664 11.1086L8.44748 15.7494L18.3921 5.80474L17.2319 4.64453L8.44748 13.429Z"
                        fill="#23C965"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4133_9134">
                        <rect
                          width="19.8893"
                          height="19.8893"
                          fill="white"
                          transform="translate(0.987305 0.00537109)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>
                  Lörem ipsum geol nystartsjobb milingar. Krokatt
                  stenorade.Lorem ipsum dolor sit amet consectetur. Ultrices
                  convallis quam euismod viverra nisi malesuada venenatis.
                </p>
              </li>
            </ul>
            <button>Get Free Consultation</button>
          </div>
        </section>

        {/* Benefits */}
        <section className={style.benefits}>
          <h1>Benefits</h1>
          <p>
            Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
            borat.
          </p>
          <div className={style.benifitsgrid}>
            <div className={style.benefitscontent}>
              <div className={style.roundeddiv}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={45}
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <path
                    d="M37.8855 14.2581L24.0604 28.0832L16.687 20.7098L5.62695 31.7699M29.5904 13.3364H38.715V22.5531"
                    stroke="#248AF0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2>This can be Benefit</h2>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far. Salig.
                  Reatuna speluskap, borat.
                </p>
              </div>
            </div>
            <div className={style.benefitscontent}>
              <div className={style.roundeddiv}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={45}
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <path
                    d="M37.8855 14.2581L24.0604 28.0832L16.687 20.7098L5.62695 31.7699M29.5904 13.3364H38.715V22.5531"
                    stroke="#248AF0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2>This can be Benefit</h2>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far. Salig.
                  Reatuna speluskap, borat.
                </p>
              </div>
            </div>

            <div className={style.benefitscontent}>
              <div className={style.roundeddiv}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={45}
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <path
                    d="M37.8855 14.2581L24.0604 28.0832L16.687 20.7098L5.62695 31.7699M29.5904 13.3364H38.715V22.5531"
                    stroke="#248AF0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2>This can be Benefit</h2>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far. Salig.
                  Reatuna speluskap, borat.
                </p>
              </div>
            </div>

            <div className={style.benefitscontent}>
              <div className={style.roundeddiv}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={45}
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <path
                    d="M37.8855 14.2581L24.0604 28.0832L16.687 20.7098L5.62695 31.7699M29.5904 13.3364H38.715V22.5531"
                    stroke="#248AF0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2>This can be Benefit</h2>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far. Salig.
                  Reatuna speluskap, borat.
                </p>
              </div>
            </div>
          </div>

          <p>
            Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
            borat.
          </p>
          <button>Get Free Consultation</button>
        </section>

        {/* OurWork */}
        <section className={style.ourwork}>
          <div className={style.contentdiv}>
            <h2>Our Work Speaks for Itself</h2>
            <p>
              Discover how we&apose;ve helped businesses achieve their goals
              with innovative designs, data-driven marketing, and seamless cloud
              solutions.
            </p>
          </div>
          <ProjectSwiper />
        </section>

        {/* Stats */}
        <section className={style.stats}>
          <h1>Stats that Speak for Us</h1>
          <div className={style.maingrid}>
            <div className={style.statgrid}>
              <div className={style.stat1}>
                <Image
                  className={style.stat1image}
                  src="/images/stat1.png"
                  width={399}
                  height={311}
                  alt="statimage"
                />
                <div className={style.numberstat}>
                  <h1>60+</h1>
                  <p>Number of Clients</p>
                </div>
              </div>
              <div className={style.stat2}>
                <div className={style.numberstat}>
                  <h1>60+</h1>
                  <p>Years of Experience</p>
                </div>
                <div className={style.numberstat}>
                  <h1>700%</h1>
                  <p>Average ROI</p>
                </div>
              </div>
            </div>
            <Image
              className={style.stat3}
              src="/images/stat2.png"
              height={643}
              width={399}
              alt="stat2"
            />
          </div>

          <button>Get Free Consultation</button>
        </section>

        {/* HowWeWork */}

        <HowWork />

        {/* Review */}

        <Review />

        {/* FAQ'S */}

        <FAQ />

        {/* Let's Talk */}
        <LetsTalkMarquee />

        {/* ContactForm */}

        <ContactForm />

        {/* Footer */}

        <Footer />
      </AnimatedSections>
    </div>
  );
}
