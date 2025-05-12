
"use client"
import Image from 'next/image';
import styles from './marquee.module.scss';  
import { useTheme } from "../../../context/ThemeContext";

const marqueeItems = [
  { src: "/images/marquee1.svg", alt: "Image 1", width: 126, height: 26 },
  { src: "/images/marquee2.svg", alt: "Image 2", width: 142, height: 35 },
  { src: "/images/marquee3.svg", alt: "Image 3", width: 112, height: 25 },
  { src: "/images/marquee4.svg", alt: "Image 4", width: 112, height: 25 },
  { src: "/images/marquee5.svg", alt: "Image 5", width: 112, height: 25 },
  { src: "/images/marquee6.svg", alt: "Image 6", width: 112, height: 25 },
  { src: "/images/marquee7.svg", alt: "Image 7", width: 112, height: 25 },
  { src: "/images/marquee8.svg", alt: "Image 8", width: 112, height: 25 }
];

const Marquee = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme === 'dark' ? styles.dark : ''}`}>
      <div className={`${theme === 'dark' ? styles.dark : ''} ${styles.marqueeWrapper}`}>
        <div className={styles.marqueeText}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <Image
              key={`${item.alt}-${index}`}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;