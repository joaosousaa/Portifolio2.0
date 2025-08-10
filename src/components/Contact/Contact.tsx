// Contact.jsx
import robo from "../../assets/tecs2.png"
import TechCarousel from "./TechCarousel";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="w-full  ">
      <TechCarousel />
      <div className="w-full max-w-[1500px] mx-auto mt-[16vh] mb-[16vh] flex flex-col md:flex-row items-center gap-12">

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

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:dev.jsousa@gmail.com"
                  className="hover:bg-gray-200 inline-flex items-center gap-2 text-xl text-zinc-700 hover:underline px-2 py-1 rounded transform transition-transform duration-200 hover:scale-105"
                >
                  <MdEmail className="text-custom-blue" />
                  <span className="font-semibold text-custom-blue">Email:</span>
                  dev.jsousa@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/joaosousaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-200 inline-flex items-center gap-2 text-xl text-zinc-700 hover:underline px-2 py-1 rounded transform transition-transform duration-200 hover:scale-105"
                >
                  <FaGithub className="text-custom-blue" />
                  <span className="font-semibold text-custom-blue">GitHub:</span>
                  github.com/joaosousa
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-sousa-357292229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-200 inline-flex items-center gap-2 text-xl text-zinc-700 hover:underline px-2 py-1 rounded transform transition-transform duration-200 hover:scale-105"
                >
                  <FaLinkedin className="text-custom-blue" />
                  <span className="font-semibold text-custom-blue">LinkedIn:</span>
                  linkedin.com/in/joaosousa
                </a>
              </li>
            </ul>



            <a
              href="mailto:joao.dev@email.com"
              className="border-2 border-custom-blue inline-block mt-10 rounded-full bg-blue-900 px-[1rem] py-[0.8rem] sm:px-[1.4rem] sm:py-[0.9rem] text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-medium text-white transition duration-200 hover:bg-blue-800 active:bg-blue-700 transition duration-2000 ease-in-out animate-pulse"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>

      <div className="h-[2px] max-w-[1500px] bg-black mx-auto" />
    </section>

  );
};

export default Contact;
