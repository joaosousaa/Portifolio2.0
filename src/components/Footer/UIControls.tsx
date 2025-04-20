import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode, MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md"; 

// Componente DarkModeToggle
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 left-3 md:left-4 flex flex-col items-center gap-2 text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px] p-2 bg-gray-200 dark:bg-custom-blue text-gray-800 dark:text-white rounded-full hover:scale-110 transition-transform duration-300"
    >
      {isDarkMode ? (
        <MdLightMode />
      ) : (
        <MdDarkMode />
      )}
    </button>
  );
};

// Componente ScrollArrows
const ScrollArrows = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 right-2 flex flex-col items-center gap-2">
      {!isScrolled ? (
        <button
          className="arrow text-[55px] md:text-[60px] lg:text-[65px] xl:text-[70px] text-custom-blue animate-bounce"
          onClick={() => scrollToSection("footer")}
          aria-label="Scroll to Footer"
        >
          <MdKeyboardDoubleArrowDown />
        </button>
      ) : (
        <button
          className="arrow text-[55px] md:text-[60px] lg:text-[65px] xl:text-[70px] text-custom-blue animate-bounce"
          onClick={() => scrollToSection("Início")}
          aria-label="Scroll to Header"
        >
          <MdKeyboardDoubleArrowUp />
        </button>
      )}
    </div>
  );
};

export { DarkModeToggle, ScrollArrows };
