
import UIControlsWrapper from "./UIControls"; // ✅ certo para export default

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className=''>
            <div>
                <UIControlsWrapper />
            </div>

            <div className="h-[30vh] max-w-[1500px] mx-auto  flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="">
                    <h1 className='font-Orbitron text-[2.5rem] text-custom-blue font-medium'>JSousa</h1>
                    <h6 className='text-xl text-custom-blue font-medium'>©2024 por <a href=""> JSousa.</a> </h6>
                    <h6 className='text-xl text-custom-blue font-medium'>Todos os direitos reservados.</h6>
                </div>
                <div className="flex gap-4 text-[2.2rem] text-custom-blue">
                    <a
                        href="https://github.com/joaosousadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-blue-500 hover:font-bold hover:scale-110 inline-block transform transition-all duration-300 origin-center cursor-pointer "
                    >
                        <FaGithub />
                    </a>

                    <a href="https://www.instagram.com/_joaosousa.js/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-blue-500 hover:font-bold hover:scale-110 inline-block transform transition-all duration-300 origin-center cursor-pointer ">
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://www.instagram.com/_joaosousa.js/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-blue-500 hover:font-bold hover:scale-110 inline-block transform transition-all duration-300 origin-center cursor-pointer "
                    >
                        <FaInstagram />
                    </a>

                </div>
            </div>
        </footer>
    );
}

export default Footer;