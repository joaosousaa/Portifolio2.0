import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import Planet from "./Planet";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Navbar from '../NavBar/Navbar';

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row w-full h-screen bg-gradient-to-br from-gray-100 via-gray-100/80 to-blue-600/40">
            <Navbar />

            <div className="absolute top-1/2 left-3 md:left-4 transform -translate-y-1/2 space-y-4  z-[1]">
                <ul className='space-y-4 text-custom-blue text-[1.8rem] sm:text-[2rem] lg:text-[2rem] xl:text-[2.4rem] 2xl:text-[2.4rem]'>
                    <li className='hover:scale-125 transition-transform duration-300'>
                        <a href="/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                            <FaGithub />
                        </a>
                    </li>
                    <li className='hover:scale-125 transition-transform duration-300'>
                        <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" title="Linkedin">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className='hover:scale-125 transition-transform duration-300'>
                        <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="Whstsapp" title="Whstsapp">
                            <FaWhatsapp />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="m-auto flex flex-col lg:flex-row items-center justify-center w-full h-full">
                <div className="inset-0 z-[0] flex justify-center items-center w-full md:w-1/2 h-full max-lg:mt-[-25vh]">
                    <Canvas
                        style={{
                            height: "100%",
                            width: "100%",
                            maxHeight: "100%",
                            maxWidth: "100%",
                        }}
                    >
                        <ambientLight />
                        <spotLight position={[10, 10, 10]} />
                        <Planet />
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="relative flex justify-center w-full md:w-1/2 max-lg:absolute max-lg:mt-[50vh]">
                    {/* <div className="hidden lg:block absolute left-0 top-0 h-full w-[5px] bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_3px] shadow-blue-500/50 animate-pulse"></div> */}


                    {/* Conteúdo dos textos e botões */}
                    <div className="max-lg:text-center relative space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                        <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.7rem] font-Orbitron text-black whitespace-nowrap">
                            HELLO WORLD 🌎
                        </h3>
                        <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[3.5rem] 2xl:text-[4rem] font-Orbitron whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                            Eu sou João Sousa,
                        </h1>
                        <h2 className="text-[1.1rem] sm:text-[1.4rem] md:text-[1.7rem] lg:text-[1.8rem] xl:text-[2.3rem] 2xl:text-[2.6rem] font-Orbitron text-black whitespace-nowrap">
                            Desenvolvedor FullStack
                        </h2>

                        <div className="space-x-4">
                            <button className="border-2 border-custom-blue text-black-500 rounded-full lg:mt-5 mt-[0.8rem] text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.2rem] py-2 px-4 sm:py-2 sm:px-4g md:py-3 md:px-6 xl:py-4 xl:px-8 hover:bg-custom-blue hover:text-white transition duration-300 ease-in-out animate-pulse">
                                FALE COMIGO
                            </button>
                            <button className="border-2 border-custom-blue text-black-500 rounded-full lg:mt-5 mt-[0.8rem] text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.2rem] py-2 px-4 sm:py-2 sm:px-4g md:py-3 md:px-6 xl:py-4 xl:px-8 hover:bg-custom-blue hover:text-white transition duration-300 ease-in-out animate-pulse">
                               VER PROJETOS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
