import { useState } from "react";
import CertificateSection from "../Certificates/CertificateSection";
import { CardsCarousel, BigCardGrid } from '../Projects/Cards';

{/*const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="relative flex justify-center  my-[4vh] mb-6">
        <h1 className="title-size text-gray-200">{title}</h1>
        <h3 className="subtitle-size text-blue-500">{subtitle}</h3>
    </div>
); */}

const Showwcase = () => {
    const [active, setActive] = useState<"Projetos" | "Certificados" | "Eventos">("Projetos");

    const sections = {
        Projetos: { title: "Projects", subtitle: "PROJETOS", content: <div> <BigCardGrid /> <CardsCarousel /></div> },
        Certificados: { title: "Certificates", subtitle: "CERTIFICADOS", content: <CertificateSection /> },
        Eventos: { title: "Events", subtitle: "EVENTOS", content: <p>Eventos que marcaram minha jornada.</p> },
    };

    return (

        <div className=" rounded-[6vh] pt-[12vh]">
            <div className="w-full max-w-[1500px] px-3 sm:px-8 m-auto">

                {/*<SectionTitle title={sections[active].title} subtitle={sections[active].subtitle} />*/}
                <nav className="m-auto max-w-[750px] overflow-x-auto scroll-smooth hide-scrollbar">
                    <ul className="flex px-4 snap-x snap-mandatory overflow-x-auto">
                        {Object.keys(sections).map((section) => (
                            <li key={section} className="snap-center shrink-0 p-2 m-auto">
                                <button
                                    className={`uppercase border-2 border-black font-semibold  px-[1rem] py-[0.8rem] sm:px-[1.4rem] sm:py-[0.9rem] text-[0.8rem] sm:text-[1rem] md:text-[1.1rem]  xl:text-[1.2rem] 2xl:text-[1.3rem] rounded-full transition-all duration-300 transform whitespace-nowrap
                        ${active === section ? " bg-blue-900 text-white border-none " : "scale-90 hover:scale-100 hover:text-white"}`}
                                    aria-pressed={active === section}
                                    onClick={() => setActive(section as "Projetos" | "Certificados" | "Eventos")}
                                >
                                    {section === "Eventos" ? "Eventos Tecnologias" : section}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
             
                <div className="mt-8 md:mt-10 ">{sections[active].content}</div>
            </div>
        </div>
    );
};

export default Showwcase;
