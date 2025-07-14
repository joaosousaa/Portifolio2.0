// Contact.jsx
import robo from "../../assets/tecs2.png"
import TechCarousel from "./TechCarousel";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="w-full  ">
      <TechCarousel />
     <div className="w-full max-w-[1500px] mx-auto pt-[20vh] flex flex-col md:flex-row items-center gap-12">

        {/* Ilustração colada à direita */}
        <div className="w-full md:w-1/2 flex ">
          <img
            src={robo}
            alt="Ilustração de contato"
            className="w-full max-w-[640px] h-auto object-contain"
          />
        </div>

        {/* Conteúdo colado à esquerda */}
        <div className="w-full md:w-1/2 text-left">
          <div className="max-w-[700px]">
            <h2 className="text-[2rem] sm:text-[2.3rem] md:text-[2.5rem] font-rubik py-3">
              VAMOS CONSTRUIR ALGO JUNTOS?
            </h2>

            <ul className="space-y-3 text-zinc-700 dark:text-zinc-200">
              <li className="flex items-center gap-2 text-xl">
                <MdEmail className="text-custom-blue" />
                <span className="font-semibold text-custom-blue ">Email:</span>
                <span className="text-zinc-700">joao.dev@email.com</span>
              </li>

              <li className="flex items-center gap-2 text-xl">
                <FaGithub className="text-custom-blue" />
                <span className="font-semibold text-custom-blue">GitHub:</span>
                <span className="text-zinc-700">github.com/joaosousa</span>
              </li>

              <li className="flex items-center gap-2 text-xl">
                <FaLinkedin className="text-custom-blue" />
                <span className="font-semibold text-custom-blue">LinkedIn:</span>
                <span className="text-zinc-700">linkedin.com/in/joaosousa</span>
              </li>
            </ul>

            <a
              href="mailto:joao.dev@email.com"
              className="inline-block mt-10 rounded-full bg-blue-900 px-[1rem] py-[0.8rem] sm:px-[1.4rem] sm:py-[0.9rem] text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-medium text-white transition duration-200 hover:bg-blue-800 active:bg-blue-700"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>

      <div className="h-[2px] mt-20 max-w-[1500px] bg-black mx-auto" />
    </section>

  );
};

export default Contact;
