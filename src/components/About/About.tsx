import foto from "../../assets/joao1.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import TechCarousel from "./TechCarousel";
function About() {
    return (

        <div>
            <TechCarousel />
            <div className="w-full max-w-[1600px] px-8 sm:px-14 lg:px-20 mx-auto pb-[15vh]">
                {/* Título e Subtítulo */}
                <div className="relative flex justify-center my-[5vh]">
                    <h1 className="title-size text-gray-200">About</h1>
                    <h3 className="subtitle-size text-blue-500">SOBRE</h3>
                </div>
                {/* Conteúdo Principal */}
                <div className="flex flex-col lg:flex-row items-center justify-center m-auto gap-10">
                    {/* Descrição */}
                    <div className="lg:w-1/2 justify-center">
                        <div className="md:max-w-[700px]">
                            <h1 className="text-[1.4rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[2.1rem] xl:text-[2.5rem] 2xl:text-[2.6rem] font-rubik py-3">
                                Programar é criar o futuro
                            </h1>
                            <h2 className="text-[1.2rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] text-blue-700 font-semibold">
                                Desenvolvedor Full Stack
                            </h2>
                            <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.5rem] text-gray-600 py-4">
                                Desde 2020, quando a programação me chamou a atenção pelo seu potencial de conectar pessoas e resolver problemas, venho me aprimorando em tecnologias de front-end e back-end. Desenvolvo páginas e sistemas web responsivos, sempre buscando novas oportunidades para aplicar e expandir minhas habilidades em desenvolvimento web.
                            </p>
                            <div className="flex items-center gap-6 mt-6">
                                <button className="rounded-full bg-blue-900 px-[1rem] py-[0.8rem] sm:px-[1.4rem] sm:py-[0.9rem] text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-medium text-white transition duration-200 hover:bg-blue-800 active:bg-blue-700">
                                    PROJETOS
                                </button>
                                <h3 className="text-gray-700 text-[0.85rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]">💻 +10 Projetos Finalizados</h3>
                            </div>
                        </div>
                    </div>
                    {/* Card de Informações */}
                    <div className="lg:w-1/2">
                        <div className="relative flex flex-col lg:ml-auto max-w-full md:max-w-[700px] lg:max-w-[500px] bg-blue-500 w-full p-[1rem] sm:p-6 rounded-lg">
                            <div className="h-full w-full">
                                <div className="relative w-full">
                                    {/* Ícones Sociais */}
                                    <div className="flex flex-row justify-between items-center w-full mb-3">
                                        <div className="flex text-white">
                                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative z-0 bg-blue-500 rounded-full p-1 text-[1.8rem] sm:text-[2.3rem] md:text-[2.3rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.4rem]">
                                                <FaGithub />
                                            </a>
                                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="relative z-1 bg-blue-500 rounded-full p-1 text-[1.8rem] sm:text-[2.3rem] md:text-[2.3rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.4rem]">
                                                <FaLinkedin />
                                            </a>
                                            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="relative z-2 bg-blue-500 rounded-full p-1 text-[1.8rem] sm:text-[2.3rem] md:text-[2.3rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.4rem]">
                                                <FaWhatsapp />
                                            </a>
                                        </div>
                                        {/* Localização */}
                                        <div className="text-right text-white text-[0.8rem] sm:text-[1.15rem]">
                                            <p>Desde 2020</p>
                                            <h1 className="flex items-center text-[1rem] sm:text-[1.3rem]">
                                                Recife - PE <IoLocationSharp className="ml-1" />
                                            </h1>
                                        </div>
                                    </div>
                                    {/* Imagem */}
                                    <img src={foto} alt="imagem" className="mb-3 h-full w-full rounded-xl" />
                                </div>
                                {/* Nome e Cargo */}
                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <p className="text-[0.9rem] sm:text-[1.7rem] lg:text-[1.2rem] xl:text-[1.5rem] font-medium text-gray-200">Desenvolvedor Full Stack</p>
                                        <p className="text-[1.2rem] sm:text-[2rem] font-bold text-white">João Sousa</p>
                                    </div>
                                    <div>
                                        <button className="rounded-full bg-white text-blue-900 px-[0.7rem] py-[0.8rem] sm:px-[1.4rem] sm:py-[0.9rem]  text-[0.7rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1rem] font-medium transition duration-200 hover:bg-gray-200">
                                            Download CV
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
