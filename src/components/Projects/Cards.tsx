import { useState } from "react";

import Biblioteca from "../../assets/biblioteca.gif";
import Formulario from "../../assets/formulario.gif";


import { FaGithub } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";



// Componente dos Cards
function BigCardGrid() {
    const bigCards = [
        {
            title: "SISTEMA BIBLIOTECARIO",
            price: "Sistema para organizar livros e alunos",
            image: Biblioteca,
            siteLink: "https://joaosousa.vercel.app/",
            githubLink: "https://github.com/seu-repo-sistema",
        },
        {
            title: "SISTEMA BIBLIOTECARIO",
            price: "Sistema para organizar livros e alunos",
            image: Formulario,
            siteLink: "https://link-do-outro-projeto.com",
            githubLink: "https://github.com/seu-repo-outro-projeto",
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
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            window.open(card.githubLink, "_blank");
                                        }}
                                        className="bg-blue-600 bg-opacity-40 flex items-center scale-90 hover:scale-100 hover:bg-blue-700 px-4 py-2 rounded-lg text-[1.3rem] text-white gap-2"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </button>
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
    const items = ["🍔", "🍕", "🌭", "🍗", "asdasd"];

    // Mantém o índice dentro do escopo do array para que o carrossel seja infinito
    const indexInArrayScope = ((activeIndex % items.length) + items.length) % items.length;

    // Para garantir que o carrossel seja infinito, repetimos os itens duas vezes
    const visibleItems = [...items, ...items].slice(indexInArrayScope, indexInArrayScope + 3);

    const handleClick = (newDirection: number) => {
        setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
    };

    return (
        <div className="flex flex-col relative my-10 ">
            {/* Botão esquerdo */}
            <motion.button
                className="botao absolute top-1/2 left-0  z-10"
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(1)}
            >
                ◀︎
            </motion.button>

            {/* Carrossel */}
            <div className="relative w-full  overflow-hidden flex justify-center">
                <div className="flex justify-center gap-4">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visibleItems.map((item) => (
                            <motion.div
                                key={item}
                                className="flex-shrink-0 w-[80vw] max-w-[500px] h-[250px] text-[40px] 
                     flex justify-center items-center bg-white rounded-[10px] 
                     shadow-[0px_5px_15px_rgba(0,0,0,0.35)]"
                                layout
                                custom={{
                                    direction,
                                    position: item === visibleItems[0] ? "left" : item === visibleItems[1] ? "center" : "right"
                                }}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 1 }}
                            >
                             
                                {item}
                                 <div>
                                   <h1>asdsad</h1>
                               </div>
                            </motion.div>
                            
                        ))}
                    </AnimatePresence>
                </div>
            </div>


            {/* Botão direito */}
            <motion.button
                className="botao absolute top-1/2 right-0 z-10"
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(-1)}
            >
                ▶︎
            </motion.button>
        </div>

    );
}

const variants = {
    enter: ({ direction }: { direction: number }) => {
        return { scale: 0.3, x: direction < 1 ? 50 : -50, opacity: 0 };
    },
    center: ({ position, direction }: { position: "left" | "center" | "right"; direction: number }) => {
        return {
            scale: position === "center" ? 1 : 0.8,
            x: 0,
            zIndex: getZIndex({ position, direction }),
            opacity: 1
        };
    },
    exit: ({ direction }: { direction: number }) => {
        return { scale: 0.3, x: direction < 1 ? -50 : 50, opacity: 0 };
    }
};

function getZIndex({ position, direction }: { position: "left" | "center" | "right"; direction: number }) {
    const indexes = {
        left: direction > 0 ? 2 : 1,
        center: 3,
        right: direction > 0 ? 1 : 2
    };
    return indexes[position];
}


export { CardsCarousel, BigCardGrid };
