import style from './faq.module.scss'
import { useTheme } from "../../../context/ThemeContext";
import { useState } from 'react';

const FAQs = [
    {
        title: 'This will be Heading',
        desc: "Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock"
    },
    {
        title: 'This will be Heading',
        desc: "Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock"
    },
    {
        title: 'This will be Heading',
        desc: "Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock"
    },
    {
        title: 'This will be Heading',
        desc: "Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock"
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const { theme } = useTheme();

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`${style.container} ${theme === 'dark' ? style.dark : ''}`}>
            <div className={style.faq}>
                <h1>Frequently Asked Questions</h1>
                <p>
                    Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock
                </p>

                {FAQs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={openIndex === index ? style.faqOpen : style.faqClose}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={style.faqcontent}>
                            <h1>{faq.title}</h1>
                            {openIndex === index && <p>{faq.desc}</p>}
                        </div>
                        <div className={style.toggleIcon}>
                            {openIndex === index ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <circle cx="20.7188" cy="20.5249" r="20.5" fill="#218AF0"/>
                                    <path d="M16 25.36L26.3133 15M16 15L26.3133 25.36" stroke="white" strokeWidth="2.1875" strokeLinecap="round"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <ellipse opacity="0.1" cx="25" cy="25" rx="20.5" ry="20.5986" transform="rotate(-45 25 25)" fill="#808080"/>
                                    <path d="M24.892 32.1792L24.859 17.5609M17.5664 24.8535L32.1847 24.8865" stroke="#808080" strokeWidth="2.1875" strokeLinecap="round"/>
                                </svg>
                            )}
                        </div>
                    </div>
                ))}


                <h1 className={style.ContactHeading}>
                Contact us below if you any more questions.
                </h1>
                <button>
                Contact Us Today
               </button>
            </div>
        </div>
    )
}