"use client";
import { useState } from "react";
import Image from "next/image";
import style from "./header.module.scss";
import Link from "next/link";
import { useTheme } from "../../../context/ThemeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };
  return (
    <header className={`${isOpen ? style.navOpen : ''}  ${theme === 'dark' ? style.dark : ''}`}>
      <nav className={`${style.main} ${isOpen ? style.navOpen : ''} ${theme === 'dark' ? style.dark : ''}`}>
        {theme === 'light' ? (
          <Link href="/">
          <Image
            className={style.logo}
            alt="Logo"
            height={39}
            width={233}
            src="/images/logo.svg"
          />
        </Link>
      ) : (
        <Link href="/">
          <Image
            className={style.logo}
            alt="Logo"
            height={39}
            width={233}
            src="/images/logowhite.svg"
          />
        </Link>
        )}

        <ul className={`${style.menu} ${isOpen ? style.open : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/creationServices" className={style.linktribes}>
              Tribes
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M11.5407 0.547579C11.4482 0.454875 11.3383 0.381328 11.2173 0.331146C11.0964 0.280965 10.9667 0.255135 10.8357 0.255135C10.7047 0.255135 10.5751 0.280965 10.4541 0.331146C10.3331 0.381328 10.2232 0.454875 10.1307 0.547579L6.25071 4.42758L2.37071 0.547579C2.18373 0.360601 1.93014 0.255558 1.66571 0.255558C1.40129 0.255558 1.14769 0.360601 0.96071 0.547579C0.773732 0.734556 0.668691 0.988152 0.668691 1.25258C0.668691 1.517 0.773732 1.7706 0.96071 1.95758L5.55071 6.54758C5.64322 6.64028 5.75311 6.71383 5.87409 6.76401C5.99506 6.81419 6.12474 6.84002 6.25571 6.84002C6.38668 6.84002 6.51636 6.81419 6.63733 6.76401C6.75831 6.71383 6.8682 6.64028 6.96071 6.54758L11.5507 1.95758C11.9307 1.57758 11.9307 0.937579 11.5407 0.547579Z" fill="#262626"/>
             </svg>
            </Link>
          </li>
          <li>
            <Link href="/caseStudyDetails">Case Studies</Link>
          </li>
          <li>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/contactUs">Contact Us</Link>
          </li>
          <select className={style.listlanguage}>
            <option className={style.option}>English</option>
          </select>
        </ul>
        <div className={style.mainright}>
          <button
            onClick={toggleTheme}
            className={`${style.darkmodebtn} ${isOpen ? style.open : ""}`}
            aria-label="Toggle dark mode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
            >
              <circle cx="22.5" cy="22.5479" r="22.5" fill="#218AF0" />
              {theme === 'light' ? (
                <>
                  <path
                    d="M22.1125 28.2283C25.4635 28.2283 28.18 25.5118 28.18 22.1608C28.18 18.8098 25.4635 16.0933 22.1125 16.0933C18.7614 16.0933 16.0449 18.8098 16.0449 22.1608C16.0449 25.5118 18.7614 28.2283 22.1125 28.2283Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M22.1133 12.0479V13.0591"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22.1133 31.2617V32.273"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32.2261 22.1602H31.2148"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.0113 22.1602H12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M29.2634 15.0107L28.8662 15.408"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.3592 28.9136L14.9619 29.3109"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M29.2634 29.3098L28.8662 28.9126"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.3592 15.4075L14.9619 15.0103"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <path
                  d="M22.5 29.0479C26.2279 29.0479 29.25 26.0258 29.25 22.2979C29.25 18.57 26.2279 15.5479 22.5 15.5479C18.7721 15.5479 15.75 18.57 15.75 22.2979C15.75 26.0258 18.7721 29.0479 22.5 29.0479Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>

          <select className={`${style.select} ${isOpen ? style.close : ""}`}>
            <option className={style.option}>EN</option>
          </select>

          <div onClick={toggleNavbar} className={style.hamburger}>
            {isOpen ? (
              theme === 'light' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ marginTop: "7px" }}
                >
                  <path
                    d="M22 2L2 22M2 2L22 22"
                    stroke="#262626"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ marginTop: "7px" }}
                >
                  <path
                    d="M22 2L2 22M2 2L22 22"
                    stroke="white"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="19"
                viewBox="0 0 29 19"
                fill="none"
                
              >
                <path
                  d="M28.166 16.9583C28.166 17.8098 27.4758 18.5 26.6243 18.5H7.83268C6.98124 18.5 6.29102 17.8098 6.29102 16.9583C6.29102 16.1069 6.98124 15.4167 7.83268 15.4167H26.6243C27.4758 15.4167 28.166 16.1069 28.166 16.9583ZM28.166 9.25C28.166 10.1014 27.4758 10.7917 26.6243 10.7917H10.8327C9.98124 10.7917 9.29102 10.1014 9.29102 9.25C9.29102 8.39856 9.98124 7.70833 10.8327 7.70833H26.6243C27.4758 7.70833 28.166 8.39856 28.166 9.25ZM26.6243 0C27.4758 0 28.166 0.690228 28.166 1.54167C28.166 2.39311 27.4758 3.08333 26.6243 3.08333H1.95768C1.10624 3.08333 0.416016 2.39311 0.416016 1.54167C0.416016 0.690228 1.10624 0 1.95768 0H26.6243Z"
                  fill={theme === 'light' ? "#262626" : "white"}
                  
                />
              </svg>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
