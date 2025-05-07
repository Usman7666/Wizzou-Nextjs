// src/components/Marquee.js

import Image from 'next/image';
import styles from './marquee.module.scss';  // Import the SCSS module
import { useTheme } from "../../../context/ThemeContext";
const Marquee = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? styles.dark : ''}`}>
         <div className={`${theme === 'dark' ? styles.dark : ''} ${styles.marqueeWrapper}`}>
      <div className={styles.marqueeText}>
        <Image
          src="/images/marquee1.svg"
          alt="Image 1"
          width={126}
          height={26}
        />
        <Image
          src="/images/marquee2.svg"
          alt="Image 2"
          width={142}
          height={35}
        />
        <Image
          src="/images/marquee3.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
           <Image
          src="/images/marquee4.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
           <Image
          src="/images/marquee5.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
               <Image
          src="/images/marquee6.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
               <Image
          src="/images/marquee7.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
               <Image
          src="/images/marquee8.svg"
          alt="Image 3"
          width={112}
          height={25}
        />

        <Image
          src="/images/marquee1.svg"
          alt="Image 1"
          width={126}
          height={26}
        />
        <Image
          src="/images/marquee2.svg"
          alt="Image 2"
          width={142}
          height={35}
        />
        <Image
          src="/images/marquee3.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
           <Image
          src="/images/marquee4.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
           <Image
          src="/images/marquee5.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
               <Image
          src="/images/marquee6.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
               <Image
          src="/images/marquee7.svg"
          alt="Image 3"
          width={112}
          height={25}
        />
               <Image
          src="/images/marquee8.svg"
          alt="Image 3"
          width={112}
          height={25}
        />

      </div>
    </div>
    </div>
 
  );
};

export default Marquee;
