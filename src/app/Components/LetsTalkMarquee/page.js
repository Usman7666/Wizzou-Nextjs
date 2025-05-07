
import style from "./letsTalk.module.scss"
import { useTheme } from "../../../context/ThemeContext";
const LetsTalkMarquee = () => {
    const { theme, toggleTheme } = useTheme();
    return(
        <div className={`${theme === 'dark' ? style.dark : ''} ${style.marqueeWrapper}`}>
            <h1>
            Let's Talk
            </h1>
        </div>
    )
}

export default LetsTalkMarquee;