"use client";
import Header from "@/app/Components/Header/page";
import { useTheme } from "../../../context/ThemeContext";
import style from "./blogdetails.module.scss";
import Image from "next/image";
import Footer from "@/app/Components/Footer/page";
import AnimatedSections from "@/app/Components/GSAP/page";
import VideoPlayer from "@/app/Components/Video/page";

export default function BlogDetails() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${style.container} ${theme === "dark" ? style.dark : ""}`}>
      <Header />
      <AnimatedSections>
        {/* HeroSection */}
        <section className={style.herosection}>
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
        <section className={style.contentsection}>
          <div className={style.tablediv}>
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
          <div className={style.contentdiv}>
            <p>
              Lörem ipsum dur vitrevis cyberhygien sasamma. Käkahet epir, fortad
              äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då
              dovöligen. Prekrosade divaligt <span>kuddbok pseudon.</span>
              <br /> Soss obel favangen, nöska. Siling vönera jåtebel gör i
              hämndporr. Kick lon paravande, ana. Decigyheten por exoliga par
              kontradefenar. Sonas pohisade när ren lonit ett fat. Sora{" "}
              <span>pott, bivafask.</span> Bende Zoombombning om
              lådvinsalkoholism. Ar spegt plastbanta.
              <br /> Artdöden reasar tvodd var. Dode öligen. Spedost parask om
              än ses fas. Infrafar udat hongar, miligt utvigning.
              <br />
              Min onade, or mangen sor. Dud kedonat spess, kosläpp. Saning
              flyttstajla, metanomi osäre. Akägt iv hexasärade.
              <br />
              Dädat rede. Hjulboja eun padilig mos. Hyponar givomat religen
              infrarengen av homohass. Resk poling. Fotoplastisk krokror virtad
              och multinas. Treskapet des flexitarian. Faskapet dijönas att
              makront oaktat telektig. Kroppsaktivism eudade. <br /> Elektropod
              treng. Saktig nyhetsbok ifall dektigt. Degon epinade decibel för
              renysam. Neheten gubelt progynivis och dekadev pokåktig.
              <br /> Ede mon. Eupade erat, har sang ik. Cli-fi jär. Ohese homong
              ojöre: menskonst då åjögt.
            </p>
            <Image
              className={style.bannerimage}
              src="/images/blogdetailscontent.png"
              height={489}
              width={896}
              alt="Images"
            />

            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx={10}
                    cy={10}
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
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx={10}
                    cy={10}
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
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx={10}
                    cy={10}
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
              äsäsäs. Mjuk betalvägg kefabelt, liksom trivis fasade då
              dovöligen. Prekrosade divaligt kuddbok pseudon. Soss obel
              favangen, nöska. Siling vönera jåtebel gör i hämndporr. Kick lon
              paravande, ana. Decigyheten por exoliga par kontradefenar. Sonas
              pohisade när ren lonit ett fat. Sora pott, bivafask. Bende
              Zoombombning om lådvinsalkoholism. Ar spegt plastbanta. Artdöden
              reasar tvodd var. Dode öligen. Spedost parask om än ses fas.
              Infrafar udat hongar, miligt utvigning. Min onade, or mangen sor.
              Dud kedonat spess, kosläpp. Saning flyttstajla, metanomi osäre.
              Akägt iv hexasärade. Dädat rede. Hjulboja eun padilig mos. Hyponar
              givomat religen infrarengen av homohass. Resk poling. Fotoplastisk
              krokror virtad och multinas. Treskapet des flexitarian. Faskapet
              dijönas att makront oaktat telektig. Kroppsaktivism eudade.
              Elektropod treng. Saktig nyhetsbok ifall dektigt. Degon epinade
              decibel för renysam. Neheten gubelt progynivis och dekadev
              pokåktig. Ede mon. Eupade erat, har sang ik. Cli-fi jär. Ohese
              homong ojöre: menskonst då åjögt.
            </p>

            <div className={style.videowrapper}>
              <VideoPlayer src="/vidoes/officeworkingemployees.mp4" />
            </div>
          </div>
        </section>

        {/* similarsection */}
        <section className={style.similarsection}>
          <h2>Similar Articles</h2>

          <div className={style.developmentgrid}>
            <div className={style.card}>
              <div className={style.imagewrapper}>
                <Image
                  className={style.blogimage}
                  src="/images/blog1.png"
                  height={300}
                  width={387}
                  alt="card1"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={65}
                  height={65}
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <circle cx="32.5132" cy="32.626" r={32} fill="#FF3310" />
                  <path
                    d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={style.categorydiv}>
                <a href="#">Category Name</a>
              </div>
              <h2>This will be Blog Heading</h2>
              <p>
                Lörem ipsum protism soködade att pseudoligen semick, transcism
                heteromatisk och heteroska metrogam endotyp.
              </p>
            </div>
            <div className={style.card}>
              <div className={style.imagewrapper}>
                <Image
                  className={style.blogimage}
                  src="/images/blog2.png"
                  height={300}
                  width={387}
                  alt="card2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={65}
                  height={65}
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <circle cx="32.5132" cy="32.626" r={32} fill="#FF3310" />
                  <path
                    d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={style.categorydiv}>
                <a href="#">Category Name</a>
              </div>
              <h2>This will be Blog Heading</h2>
              <p>
                Lörem ipsum protism soködade att pseudoligen semick, transcism
                heteromatisk och heteroska metrogam endotyp.
              </p>
            </div>
            <div className={style.card}>
              <div className={style.imagewrapper}>
                <Image
                  className={style.blogimage}
                  src="/images/blog3.png"
                  height={300}
                  width={387}
                  alt="card3"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={65}
                  height={65}
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <circle cx="32.5132" cy="32.626" r={32} fill="#FF3310" />
                  <path
                    d="M44.7853 22.107L27.2537 22.107L27.2537 24.579L40.5515 24.5877L22.8708 42.2684L24.624 44.0215L42.3046 26.3409L42.3134 39.6386H44.7853L44.7853 22.107Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={style.categorydiv}>
                <a href="#">Category Name</a>
              </div>
              <h2>This will be Blog Heading</h2>
              <p>
                Lörem ipsum protism soködade att pseudoligen semick, transcism
                heteromatisk och heteroska metrogam endotyp.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}

        <Footer />
      </AnimatedSections>
    </div>
  );
}
