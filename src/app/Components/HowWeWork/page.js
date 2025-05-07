import Image from 'next/image';
import { useTheme } from "../../../context/ThemeContext";
import style from './HowWork.module.scss'

export default function HowWork(){
    const { theme, toggleTheme } = useTheme();
    return(
        <div className={`${style.container} ${theme === 'dark' ? style.dark : ''}`}>
        <section className={style.worksection}>
          <h1>
          How Do We Work
          </h1>
          <div className={style.workgrid}>
            <div>
                <Image
                src="/images/howwork1.png"
                height={212}
                width={221}
                alt='image'/>
            
            <div className={style.logobg}>
              1
            </div>
            <h2>
            Discover
            </h2>
            <p>
            We start by understanding your goals, challenges, and vision. Through collaboration and research, we craft a customized strategy tailored to your needs.
            </p>
            </div>
            <div>
                <Image
                src="/images/howwork2.png"
                height={212}
                width={221}
                alt='image'/>
            
            <div className={style.logobg}>
            2
            </div>
            <h2>
            Create
            </h2>
            <p>
            Our team designs and develops cutting-edge solutions, from stunning websites to impactful marketing campaigns, ensuring everything aligns with your brand.
           </p>
            </div>

            <div>
                <Image
                src="/images/howwork3.png"
                height={212}
                width={221}
                alt='image'/>
            
            <div className={style.logobg}>
            3
            </div>
            <h2>
            Launch & Grow
            </h2>
            <p>
            Once we deliver, we help you launch seamlessly and provide ongoing support to ensure growth and long-term success.           </p>
            </div>
           
          </div>
          <div className={style.buttonwrapper}>
           <button>
           Get Free Consultation
           </button>
           </div>
         
         </section>
        </div>
    )
}