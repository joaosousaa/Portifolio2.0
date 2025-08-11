import { useState } from "react";

import Biblioteca from "../../assets/biblioteca.gif";
import b from "../../assets/Captura de tela 2025-05-16 213705.png";

import { GoNote, GoChevronLeft, GoChevronRight, GoArrowUpRight } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

// Componente dos Cards
function BigCardGrid() {
    const bigCards = [
        {
            title: "Sistema Bibliotecario",
            price: "Sistema para organizar livros e alunos",
            image: Biblioteca,
            tec: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
            siteLink: "https://joaosousa.vercel.app/",
            githubLink: "https://github.com/seu-repo-sistema",
        },
        {
            title: "Today",
            price: "To-Do List para gerenciar tarefas e manter o controle",
            image: Biblioteca,
            tec: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
            siteLink: "https://joaosousa.vercel.app/",
            githubLink: "https://github.com/seu-repo-sistema",
        },
    ];

    return (
        <div>

            <div className="">
                <h3 className="text-[2.5rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-500 font-semibold mb-2">
                    Projetos Exclusivos
                </h3>
                <div className="h-[2px] bg-gray-200 mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[5vh] ">
                {bigCards.map((card, index) => (
                    <div key={index} className=" border-none rounded-xl overflow-hidden relative transition-transform duration-200 transition-transform duration-300 hover:-translate-y-1 ">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="rounded-xl w-full"
                        />
                        <GoArrowUpRight
                            size={40}
                            className="absolute top-2 right-2 text-white p-1"
                        />
                        <div className=" absolute inset-0 flex flex-col justify-end px-2 py-2.5 sm:px-6 sm:py-6 lg:px-3.5 lg:py-6 xl:px-6 xl:py-8 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="flex justify-between items-end w-full">
                                <div className="flex flex-col justify-end">
                                    <h3 className="text-[1.1rem] sm:text-[1.4rem] xl:text-[1.7rem] font-semibold text-white">
                                        {card.title}
                                    </h3>
                                    <h3 className="text-[0.8rem] sm:text-[1rem] xl:text-[1.2rem] mb-3 font-semibold text-white">
                                        {card.price}
                                    </h3>
                                    <ul className="flex flex-wrap gap-1 mb-1 sm:gap-2 lg:gap-1 xl:gap-2">
                                        {card.tec?.map((tec, idxx) => (
                                            <li
                                                key={idxx}
                                                className="text-[0.60rem] sm:text-2xl rounded text-white"
                                            >
                                                {tec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Botão colado à base */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(card.githubLink, "_blank");
                                    }}
                                    className="whitespace-nowrap inline-flex items-center border border-white px-3 py-2 rounded text-white text-sm sm:text-base hover:bg-black/50 transition"
                                >
                                    <GoNote className="mr-1" /> Ver Código
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Componente do Carrossel
export default function CardsCarousel() {
    const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>([0, 0]);

    const items = [
        {
            id: 1,
            title: "Sistema Bibliotecario",
            description: "Sistema para organizar livros e alunos",
            image: b,
            gif: Biblioteca,
            technologies: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
            siteLink: "https://joaosousa.vercel.app/",
            githubLink: "https://github.com/seu-repo-sistema",
            bgColor: "bg-sky-400"
        },
        {
            id: 2,
            title: "Sistema Bibliotecario",
            description: "Sistema para organizar livros e alunos",
            image: b,
            gif: Biblioteca,
            technologies: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
            bgColor: "bg-emerald-400"
        },
        {
            id: 3,
            title: "Sistema Bibliotecario",
            description: "Sistema para organizar livros e alunos",
            image: b,
            gif: Biblioteca,
            technologies: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
            bgColor: "bg-purple-400"
        },
        {
            id: 4,
            title: "Sistema Bibliotecario",
            description: "Sistema para organizar livros e alunos",
            image: b,
            gif: Biblioteca,
            technologies: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
            bgColor: "bg-orange-300"
        },
        {
            id: 5,
            title: "Sistema Bibliotecario",
            description: "Sistema para organizar livros e alunos",
            image: b,
            gif: Biblioteca,
            technologies: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
            bgColor: "bg-rose-300"
        },
        {
            id: 6,
            title: "Sistema Bibliotecario",
            description: "Sistema para organizar livros e alunos",
            image: b,
            gif: Biblioteca,
            technologies: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
            bgColor: "	bg-slate-400"
        },
    ];

    const indexInArrayScope = ((activeIndex % items.length) + items.length) % items.length;
    const visibleItems = [...items, ...items].slice(indexInArrayScope, indexInArrayScope + 3);

    const handleClick = (newDirection: number) => {
        setActiveIndex(([prevIndex]) => [prevIndex + newDirection, newDirection]);
    };

    return (
        <div className="flex flex-col relative mt-16 ">
            {/* Botão esquerdo */}
            <motion.button
                className="botao absolute top-1/2 left-[-5px] sm:left-[-30px] z-10"
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(1)}
            >
                <GoChevronLeft className="text-[1.5rem]" />
            </motion.button>

            {/* Carrossel */}
            <div className="relative w-full overflow-hidden pb-[16vh] flex justify-center " style={{
                WebkitMask: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10.64%, rgba(0,0,0,1) 88.18%, rgba(0,0,0,0) 100.64%)`,
                WebkitMaskComposite: 'add',
                maskComposite: 'add', // para compatibilidade
            }}>
                <div className="flex justify-center gap-[1rem]">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visibleItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className={` p-2 md:p-4 flex-shrink-0 w-[80vw] lg:w-[30vw]  max-w-[700px] text-[40px] justify-center ${item.bgColor} shadow-xl items-center rounded-[15px] m-auto`}
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
                                onClick={() => {
                                    if (item === visibleItems[0]) {
                                        handleClick(-1);
                                    } else if (item === visibleItems[2]) {
                                        handleClick(1);
                                    }
                                }}
                            >

                                <a
                                    href={item.siteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative w-full"
                                >
                                    <motion.img
                                        src={item === visibleItems[1] ? item.gif : item.image}
                                        alt={item.title}
                                        className="w-full h-auto rounded-[15px] cursor-pointer"
                                        whileHover={{ opacity: 0.6 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {/* Ícone no canto superior esquerdo */}
                                    <GoArrowUpRight
                                        size={40}
                                        className="absolute top-2 right-2 text-white p-1"
                                    />

                                </a>

                                <div className=" flex flex-col sm:flex-row justify-between items-start xl:items-center">
                                    {/* Lado esquerdo: Título e tecnologias */}
                                    <div>
                                        <h1 className="text-xl sm:text-2xl xl:text-xl text-gray-200 font-semibold mt-2">{item.title}</h1>

                                        <ul className="flex flex-wrap gap-2 mt-2">
                                            {item.technologies.map((tech, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-xs sm:text-2xl text-white rounded"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Lado direito: Botões */}
                                    <div className="flex flex-wrap gap-3 mt-6 xl:mt-4">

                                        <a
                                            href={item.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center border border-white px-2 py-1 rounded text-white text-base hover:bg-black/30 transition"
                                        >
                                            <GoNote className="mr-1" /> Ver Código
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
                className="botao absolute top-1/2 right-[-5px] sm:right-[-30px] z-10"
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
        scale: position === "center" ? 1 : 1,
        x: 0,
        zIndex: getZIndex({ position, direction }),
        opacity: 1,

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
