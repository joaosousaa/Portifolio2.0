import { useState } from "react";

import Biblioteca from "../../assets/biblioteca.gif";
import Formulario from "../../assets/formulario.gif";
import { GoLinkExternal, GoNote, GoChevronLeft, GoChevronRight } from "react-icons/go";

import { AnimatePresence, motion } from "framer-motion";



// Componente dos Cards
function BigCardGrid() {
    const bigCards = [
        {
            title: "SISTEMA BIBLIOTECARIO",
            price: "Sistema para organizar livros e alunos",
            image: Biblioteca,
            tec: ["HTML", "CSS", "React"],
            siteLink: "https://joaosousa.vercel.app/",
            githubLink: "https://github.com/seu-repo-sistema",
        },
        {
            title: "SISTEMA BIBLIOTECARIO",
            price: "Sistema para organizar livros e alunos",
            image: Biblioteca,
            tec: ["HTML", "CSS", "React"],
            siteLink: "https://joaosousa.vercel.app/",
            githubLink: "https://github.com/seu-repo-sistema",
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[7vh] ">
            {bigCards.map((card, index) => (
                <motion.a
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    href={card.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl block"
                >
                    <div className="border-none rounded-xl overflow-hidden relative">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="rounded-xl w-full"
                        />

                        {/*<div className="absolute top-2 right-2 bg-black bg-opacity-20 text-[2vh] rounded-full p-2 text-black text-opacity-40 ">
                            <GoEye />
                        </div>*/}

                        <div className="absolute inset-0 flex flex-col justify-end px-6 py-[3vh] bg-gradient-to-t from-black/100 to-transparent">
                            <div className="flex justify-between items-end w-full">
                                <div>
                                    <h3 className="text-[1rem] sm:text-[1.7rem] font-semibold text-white  ">
                                        {card.title}
                                    </h3>
                                    <h3 className="text-[0.8rem] sm:text-[1.2rem] font-semibold text-gray-200">
                                        {card.price}
                                    </h3>
                                    <ul className="flex flex-wrap gap-2 mt-2">
                                        {card.tec?.map((tec, idxx) => (
                                            <li
                                                key={idxx}
                                                className="text-[0.9rem] bg-gray-200 rounded px-2 py-1"
                                            >
                                                {tec}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href={card.siteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center border border-white px-3 py-2 rounded text-white text-[1rem] hover:bg-red-600 transition"
                                    >
                                        <GoLinkExternal className="mr-2" /> Ver Projeto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.a>
            ))}
        </div>
    );
}


// Componente do Carrossel
export default function CardsCarousel() {
    const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>([0, 0]);

    const items = [
        {
            id: 1,
            title: "SISTEMA BIBLIOTECARIO",
            description: "Sistema para organizar livros e alunos",
            image: Biblioteca,
            technologies: ["HTML", "CSS", "React"],
            siteLink: "https://joaosousa.vercel.app/",
            githubLink: "https://github.com/seu-repo-sistema",
        },
        {
            id: 2,
            title: "SISTEMA BIBLIOTECARIO",
            description: "Sistema para organizar livros e alunos",
            image: Formulario,
            technologies: ["HTML", "CSS", "Node.js", "boostrap"],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
        },
        {
            id: 3,
            title: "SISTEMA BIBLIOTECARIO",
            description: "Sistema para organizar livros e alunos",
            image: Formulario,
            technologies: ["HTML", "CSS", "Node.js"],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
        },
        {
            id: 4,
            title: "SISTEMA BIBLIOTECARIO",
            description: "Sistema para organizar livros e alunos",
            image: Formulario,
            technologies: ["HTML", "CSS", "Node.js"],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
        },
        {
            id: 5,
            title: "SISTEMA BIBLIOTECARIO",
            description: "Sistema para organizar livros e alunos",
            image: Formulario,
            technologies: ["HTML", "CSS", "Node.js"],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
        },
        {
            id: 6,
            title: "SISTEMA BIBLIOTECARIO",
            description: "Sistema para organizar livros e alunos",
            image: Formulario,
            technologies: ["HTML", "CSS", "Node.js"],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
        },
    ];

    const indexInArrayScope = ((activeIndex % items.length) + items.length) % items.length;
    const visibleItems = [...items, ...items].slice(indexInArrayScope, indexInArrayScope + 3);

    const handleClick = (newDirection: number) => {
        setActiveIndex(([prevIndex]) => [prevIndex + newDirection, newDirection]);
    };

    return (
        <div className="flex flex-col relative my-10 ">
            {/* Botão esquerdo */}
            <motion.button
                className="botao absolute top-1/2 left-[-20px] sm:left-[-30px] z-10"
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(1)}
            >
                <GoChevronLeft className="text-[1.5rem]" />
            </motion.button>

            {/* Carrossel */}
            <div className="relative w-full overflow-hidden flex justify-center">
                <div className="flex justify-center gap-[2.6rem]">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visibleItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="cursor-pointer flex-shrink-0 w-[80vw] lg:w-[35vw] max-w-[500px] text-[40px] justify-center items-center rounded-[15px] bg-gray-500 m-auto"
                                layout
                                custom={{
                                    direction,
                                    position:
                                        item === visibleItems[0]
                                            ? "left"
                                            : item === visibleItems[1]
                                                ? "center"
                                                : "right",
                                }}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 1 }}
                                whileHover={{ scale: 1 }}
                                onClick={() => {
                                    if (item === visibleItems[0]) {
                                        handleClick(-1); 
                                    } else if (item === visibleItems[2]) {
                                        handleClick(1); 
                                    }
                                }}
                            >

                                <div>
                                    <img src={item.image} alt={item.title} className="w-full h-auto rounded-t-[15px] bg-gradient-to-t from-black/100 to-transparent " />
                                </div>

                                <div className="m-4 flex flex-col">
                                    <h1 className="text-xl sm:text-2xl text-gray-200 font-semibold">{item.title}</h1>
                                    <h2 className="text-sm sm:text-base text-gray-200">{item.description}</h2>

                                    <ul className="flex flex-wrap gap-2 mt-3">
                                        {item.technologies.map((tech, idx) => (
                                            <li
                                                key={idx}
                                                className="text-xs sm:text-sm bg-gray-200 text-black rounded px-2 py-1"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-3 mt-3">
                                        <a
                                            href={item.siteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center border border-white px-3 py-2 rounded text-white text-sm sm:text-base hover:bg-red-600 transition"
                                        >
                                            <GoLinkExternal className="mr-2" /> Ver Projeto
                                        </a>

                                        <a
                                            href={item.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center border border-white px-3 py-2 rounded text-white text-sm sm:text-base hover:bg-blue-600 transition"
                                        >
                                            <GoNote className="mr-2" /> Ver Código
                                        </a>
                                    </div>

                                </div>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Botão direito */}
            <motion.button
                className="botao absolute top-1/2 right-[-20px] sm:right-[-30px] z-10"
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(-1)}
            >
                <GoChevronRight className="text-[1.5rem]" />
            </motion.button>
        </div>
    );
}

const variants = {
    enter: ({ direction }: { direction: number }) => ({
        scale: 0.3,
        x: direction < 1 ? 50 : -50,
        opacity: 0,
    }),
    center: ({ position, direction }: { position: "left" | "center" | "right"; direction: number }) => ({
        scale: position === "center" ? 1 : 0.9,
        x: 0,
        zIndex: getZIndex({ position, direction }),
        opacity: 1, // mantém 100% de opacidade
        filter: position === "center"
            ? "brightness(1) blur(0px)"
            : "brightness(0.7) blur(3px)", // aqui está o blur
    }),

    exit: ({ direction }: { direction: number }) => ({
        scale: 0.3,
        x: direction < 1 ? -50 : 50,
        opacity: 0,
    }),
};

function getZIndex({
    position,
    direction,
}: {
    position: "left" | "center" | "right";
    direction: number;
}) {
    const indexes = {
        left: direction > 0 ? 2 : 1,
        center: 3,
        right: direction > 0 ? 1 : 2,
    };
    return indexes[position];
}


export { CardsCarousel, BigCardGrid };
