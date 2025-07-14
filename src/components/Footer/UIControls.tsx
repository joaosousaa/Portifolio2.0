import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode, MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md"; 

// Componente DarkModeToggle
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-4 left-4 w-20 h-10 rounded-full p-1 flex items-center transition-colors duration-300 z-50 
        ${isDarkMode ? "bg-custom-blue justify-end" : "bg-gray-300 justify-start"}`}
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 
        ${isDarkMode ? "bg-white text-custom-blue" : "bg-white text-yellow-500"}`}
      >
        {isDarkMode ? <MdDarkMode size={18} /> : <MdLightMode size={18} />}
      </div>
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
