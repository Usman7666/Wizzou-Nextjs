"use client";
import Header from "@/app/Components/Header/page";
import { useTheme } from "../../../context/ThemeContext";
import style from "./contact.module.scss";
import Image from "next/image";
import Footer from "@/app/Components/Footer/page";

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {

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
    <div className={`${style.container} ${theme === "dark" ? style.dark : ""}`}>
      <Header />

      {/* BlueShadow */}
      <div className={style.blueshadow}></div>

      <section ref={addToRefs} className={style.main}>
        <div ref={addToRefs} className={style.content}>
          <h1>Lets Talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam
            euismod viverra nisi malesuada venenatis. Lorem ipsum dolor sit amet
            consectetur. Ultrices convallis quam euismod viverra nisi malesuada
            venenatis.
          </p>

          <form ref={addToRefs} className={style.form}>
            <div className={style.formitems}>
              <div>
                <label>Name</label>
                <input placeholder="Name" />
              </div>
              <div>
                <label>Email Address</label>
                <input placeholder="Email Address" />
              </div>
            </div>

            <div className={style.textareadiv}>
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
            </div>
          </form>

          <button ref={addToRefs}>Talk to our Advisor</button>

          <ul ref={addToRefs}>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4133_9134)">
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
                Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade.Lorem
                ipsum dolor sit amet consectetur. Ultrices convallis quam
                euismod viverra nisi malesuada venenatis.
              </p>
            </li>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4133_9134)">
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
                Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade.Lorem
                ipsum dolor sit amet consectetur. Ultrices convallis quam
                euismod viverra nisi malesuada venenatis.
              </p>
            </li>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4133_9134)">
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
                Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade.Lorem
                ipsum dolor sit amet consectetur. Ultrices convallis quam
                euismod viverra nisi malesuada venenatis.
              </p>
            </li>
          </ul>
        </div>

        <div ref={addToRefs} className={style.imagesdiv}>
          <Image className={style.image1}
          src="/images/LetsTalkbanner.png" height={420}
          width={543} alt="Image" />

          <div ref={addToRefs} className={style.credentials}>
            <Image  className={style.image2}
            src="/images/map.png" height={136}
            width={486}
             alt="Image" />
            <ul className={style.credentialslist}>
              <li>
                <p>Phone</p>
                <h4>+32 3 369 33 33</h4>
              </li>
              <li>
                <p>Email Address</p>
                <h4>info@wizzou.Com</h4>
              </li>
              <li>
                <p>Location</p>
                <h4>Aalmoezenierstraat 20A, 2000 Antwerp</h4>
              </li>
            </ul>

            <ul ref={addToRefs} className={style.logoslist}>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                  >
                    <rect
                      x="0.212891"
                      y="0.703369"
                      width="37.3393"
                      height="37.3393"
                      rx="18.6696"
                      fill="white"
                    />
                    <path
                      d="M23.2955 20.2111L23.7678 17.2414H20.815V15.3142C20.815 14.5017 21.2274 13.7098 22.5499 13.7098H23.8923V11.1813C23.8923 11.1813 22.6741 10.9807 21.5094 10.9807C19.0777 10.9807 17.4882 12.4031 17.4882 14.978V17.2414H14.7852V20.2111H17.4882V27.3903H20.815V20.2111H23.2955Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                  >
                    <rect
                      x="0.552734"
                      y="0.703369"
                      width="37.3393"
                      height="37.3393"
                      rx="18.6696"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.8181 15.9649C27.7534 14.564 27.4413 13.323 26.4402 12.3006C25.443 11.2781 24.2326 10.9581 22.8661 10.8879C21.4578 10.8059 17.2367 10.8059 15.8283 10.8879C14.4657 10.9542 13.2553 11.2742 12.2542 12.2967C11.2532 13.3191 10.9449 14.5601 10.8764 15.961C10.7964 17.4049 10.7964 21.7327 10.8764 23.1766C10.9411 24.5776 11.2532 25.8186 12.2542 26.841C13.2553 27.8634 14.4619 28.1834 15.8283 28.2537C17.2367 28.3356 21.4578 28.3356 22.8661 28.2537C24.2326 28.1873 25.443 27.8673 26.4402 26.841C27.4375 25.8186 27.7496 24.5776 27.8181 23.1766C27.8981 21.7327 27.8981 17.4088 27.8181 15.9649ZM23.9009 15.9474C24.4643 15.9474 24.921 15.483 24.921 14.9016C24.921 14.324 24.4643 13.8557 23.9009 13.8557C23.3376 13.8557 22.8809 14.324 22.8809 14.9016C22.8809 15.4791 23.3338 15.9474 23.9009 15.9474ZM19.35 15.0862C16.9292 15.0862 14.9766 17.0881 14.9766 19.5701C14.9766 22.052 16.9292 24.054 19.35 24.054C21.7708 24.054 23.7234 22.052 23.7234 19.5701C23.7234 17.0881 21.7708 15.0862 19.35 15.0862ZM16.5059 19.5716C16.5059 17.9638 17.781 16.6565 19.3492 16.6565C20.9173 16.6565 22.1924 17.9638 22.1924 19.5716C22.1924 21.1794 20.9135 22.4867 19.3492 22.4867C17.7848 22.4867 16.5059 21.1794 16.5059 19.5716ZM24.3762 26.3877C25.126 26.0794 25.7008 25.4901 25.9977 24.7252C26.3796 23.7412 26.3584 21.5886 26.3446 20.1932C26.3423 19.9618 26.3402 19.7511 26.3402 19.5701C26.3402 19.3891 26.3423 19.1785 26.3446 18.9471C26.3584 17.5525 26.3796 15.4024 25.9977 14.415C25.697 13.6463 25.1222 13.057 24.3762 12.7526C23.4133 12.3631 21.3036 12.3838 19.943 12.3972C19.7223 12.3994 19.5213 12.4014 19.3481 12.4014C19.1715 12.4014 18.9661 12.3992 18.7404 12.3969C17.3802 12.3828 15.2831 12.361 14.32 12.7526C13.5702 13.0609 12.9954 13.6502 12.6985 14.415C12.3186 15.4022 12.3389 17.5652 12.3519 18.9602C12.354 19.1865 12.356 19.3926 12.356 19.5701C12.356 19.7512 12.3539 19.9618 12.3516 20.1932C12.3378 21.5878 12.3166 23.7378 12.6985 24.7252C12.9992 25.494 13.574 26.0833 14.32 26.3877C15.2828 26.7772 17.3926 26.7564 18.7532 26.743C18.9739 26.7409 19.1749 26.7389 19.3481 26.7389C19.5247 26.7389 19.7301 26.741 19.9558 26.7434C21.316 26.7575 23.4131 26.7793 24.3762 26.3877Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                  >
                    <rect
                      x="0.890625"
                      y="0.703369"
                      width="37.3393"
                      height="37.3393"
                      rx="18.6696"
                      fill="white"
                    />
                    <path
                      d="M16.9678 25.2952C23.154 25.2952 26.5381 20.3886 26.5381 16.1412C26.5381 16.0039 26.5381 15.8646 26.532 15.7273C27.1908 15.2708 27.7594 14.7055 28.2112 14.0581C27.5958 14.3179 26.9436 14.489 26.2758 14.5661C26.9792 14.1637 27.506 13.5305 27.7584 12.7842C27.0975 13.1589 26.3742 13.422 25.6201 13.5619C25.1132 13.0451 24.4423 12.7027 23.7115 12.5878C22.9806 12.4729 22.2306 12.5919 21.5776 12.9263C20.9245 13.2607 20.4049 13.792 20.0993 14.4377C19.7936 15.0834 19.7189 15.8076 19.8867 16.4981C18.5494 16.4339 17.2411 16.1014 16.0467 15.5221C14.8523 14.9427 13.7985 14.1296 12.9536 13.1353C12.5246 13.8444 12.3937 14.6832 12.5874 15.4814C12.7812 16.2796 13.285 16.9772 13.9966 17.4328C13.4633 17.4154 12.9418 17.2784 12.4741 17.0326V17.0768C12.475 17.8196 12.7438 18.5394 13.2352 19.1145C13.7265 19.6895 14.4102 20.0845 15.1707 20.2327C14.882 20.3088 14.5839 20.3468 14.2845 20.3455C14.0734 20.3461 13.8627 20.3274 13.6554 20.2896C13.8703 20.9291 14.2888 21.4882 14.8523 21.8886C15.4158 22.2891 16.096 22.5108 16.7977 22.5227C15.6057 23.4189 14.1332 23.9049 12.6175 23.9025C12.3504 23.9036 12.0835 23.8889 11.8184 23.8584C13.3567 24.7972 15.1433 25.2957 16.9678 25.2952Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                  >
                    <rect
                      x="0.230469"
                      y="0.703369"
                      width="37.3393"
                      height="37.3393"
                      rx="18.6696"
                      fill="white"
                    />
                    <rect
                      x="12.0664"
                      y="15.2795"
                      width="3.22792"
                      height="10.0171"
                      fill="black"
                    />
                    <path
                      d="M24.0818 15.397C24.0475 15.3861 24.0151 15.3742 23.979 15.3642C23.9357 15.3542 23.8924 15.346 23.8482 15.3387C23.6767 15.3041 23.4891 15.2795 23.269 15.2795C21.3871 15.2795 20.1935 16.661 19.8002 17.1946V15.2795H16.5723V25.2967H19.8002V19.8328C19.8002 19.8328 22.2396 16.4033 23.269 18.9221C23.269 21.1705 23.269 25.2967 23.269 25.2967H26.496V18.5369C26.496 17.0234 25.4684 15.7622 24.0818 15.397Z"
                      fill="black"
                    />
                    <ellipse
                      cx="13.6452"
                      cy="12.3204"
                      rx="1.57877"
                      ry="1.59363"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
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
