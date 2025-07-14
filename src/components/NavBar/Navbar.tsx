import { useState, useEffect, useCallback } from "react";
import { GiPolarStar } from "react-icons/gi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";
import { debounce } from 'lodash';

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função de scroll com debounce
  const handleScroll = useCallback(debounce(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        setActiveSection(section.id);
      }
    });
  }, 200), []);

  // Função de resize para fechar o menu no desktop
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  }, []);

  // useEffect para scroll
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // useEffect para resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="bg-opacity-50 backdrop-blur-sm fixed w-full flex items-center justify-between py-3 px-7 max-md:px-4 z-[2]">
        <Link
          to="header"
          smooth={true}
          duration={500}
          className="text-custom-blue font-Orbitron text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px] flex items-center space-x-2 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <GiPolarStar />
          <span>| JSousa</span>
        </Link>

        {/* Menu mobile */}
        <div className="lg:hidden text-custom-blue flex flex-col space-y-2 cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-custom-blue"></div>
          <div className="w-6 h-0.5 bg-custom-blue"></div>
          <div className="w-6 h-0.5 bg-custom-blue"></div>
        </div>

        {/* Links de navegação */}
        <ul className="hidden list-none font-gemunu font-medium text-custom-blue lg:flex items-center lg:space-x-14 xl:space-x-18 2xl:space-x-20 lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]">
          {['Início', 'Sobre', 'Projetos', 'Habilidades', 'Contato'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className={`underline-offset-8 hover:underline hover:text-blue-500 hover:font-bold hover:scale-110 inline-block transform transition-all duration-300 origin-center cursor-pointer ${activeSection === section ? "underline text-blue-500 font-bold scale-110" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
          {/* Redes sociais */}
          <li className="flex space-x-4 text-custom-blue lg:text-[2rem] xl:text-[2.1rem] 2xl:text-[2.2rem]">
            {[FaGithub, FaLinkedin, FaWhatsapp].map((Icon, index) => (
              <a
                key={index}
                href={index === 0 ? "https://github.com" : index === 1 ? "https://linkedin.com" : "https://wa.me"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <Icon />
              </a>
            ))}
          </li>
        </ul>
      </nav>

      {/* Menu mobile aberto */}
      {isMenuOpen && (
        <div className="bg-opacity-50 backdrop-blur-sm w-full fixed top-[3.79rem] pb-3 flex flex-col space-y-4 z-[2]">
          <ul className="flex flex-col list-none text-[1.5rem] sm:text-[1.7rem] font-gemunu space-y-1.5 text-center">
            {['Início', 'Sobre', 'Projetos', 'Habilidades', 'Contato'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                  className={`underline-offset-8 hover:underline hover:text-blue-500 hover:font-bold hover:scale-110 inline-block transform transition-all duration-300 origin-center cursor-pointer ${activeSection === section ? "underline text-blue-500 font-bold scale-110" : ""}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
            <li className="flex text-custom-blue m-auto pt-2 space-x-3">
              {[FaGithub, FaLinkedin, FaWhatsapp].map((Icon, index) => (
                <a
                  key={index}
                  href={index === 0 ? "https://github.com" : index === 1 ? "https://linkedin.com" : "https://wa.me"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 transition-transform duration-300"
                >
                  <Icon />
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
