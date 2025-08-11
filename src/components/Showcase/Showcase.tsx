import { useState } from "react";
import CertificateSection from "../Certificates/CertificateSection";
import { CardsCarousel, BigCardGrid } from '../Projects/Cards';

const Showwcase = () => {
    const [active, setActive] = useState<"Projetos" | "Certificados" | "Eventos">("Projetos");

    const sections = {
        Projetos: {
            title: "Projects",
            subtitle: "PROJETOS",
            content: (
                <div>
                    <BigCardGrid />
                    <CardsCarousel />
                </div>
            ),
        },
        Certificados: {
            title: "Certificates",
            subtitle: "CERTIFICADOS",
            content: <CertificateSection />,
        },
        Eventos: {
            title: "Events",
            subtitle: "EVENTOS",
            content: <p>Eventos que marcaram minha jornada.</p>,
        },
    };

    return (
        <div className="rounded-[6vh] pt-[16vh]">
            <div className="w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 m-auto">
                <nav className="w-full max-w-[620px] mx-auto bg-blue-600 p-2 rounded-full shadow-sm py-3">
                    <div className="overflow-x-auto scrollbar-hide">
                        <ul className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 min-w-max sm:min-w-0">
                            {Object.keys(sections).map((section) => {
                                const isActive = active === section;
                                return (
                                    <li key={section} className="shrink-0">
                                        <button
                                            className={`uppercase font-semibold px-4 sm:px-5 py-3 rounded-full text-sm sm:text-lg md:text-xl transition-all duration-300 whitespace-nowrap
                ${isActive
                                                    ? "bg-white text-blue-600"
                                                    : "text-white hover:bg-white hover:text-blue-600"}`}
                                            aria-pressed={isActive}
                                            onClick={() =>
                                                setActive(section as "Projetos" | "Certificados" | "Eventos")
                                            }
                                        >
                                            {section === "Eventos" ? "Eventos Tecnologias" : section}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>




                <div className="mt-8 md:mt-20">{sections[active].content}</div>
            </div>
        </div>
    );
};

export default Showwcase;
