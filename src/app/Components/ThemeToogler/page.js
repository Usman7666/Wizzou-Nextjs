"use client";
import { useTheme } from "../../../context/ThemeContext";
import HomePage from "@/app/(pages)/home/page";
import Footer from "../Footer/page";
import Header from "../Header/page";

export default function ThemeTooglefun() {
  const { theme, toggleTheme } = useTheme();

  
 
  return (
    <>
      <HomePage theme={theme} toggleTheme={toggleTheme} />
      <Footer theme={theme} toggleTheme={toggleTheme} />
      <Header theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
