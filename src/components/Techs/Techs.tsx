import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaPhp
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFigmaLogoFill } from "react-icons/pi";
function Techs() {
  const icons = [
    { Icon: FaReact, color: "#61DBFB", name: "React" },
    { Icon: FaHtml5, color: "#e34c26", name: "HTML" },
    { Icon: FaCss3Alt, color: "#264de4", name: "CSS" },
    { Icon: FaJsSquare, color: "#f0db4f", name: "JavaScript" },
    { Icon: FaNodeJs, color: "#68a063", name: "Node.js" },
    { Icon: FaGitAlt, color: "#f1502f", name: "Git" },
    { Icon: FaGithub, color: "#000", name: "GitHub" },
    { Icon: FaDatabase, color: "#00618a", name: "MySQL" },
    { Icon: FaDatabase, color: "#008", name: "SQL" },
    { Icon: FaDatabase, color: "#008", name: "SQL" },
    { Icon: FaDatabase, color: "#008", name: "SQL" },
    { Icon: RiTailwindCssFill, color: "rgba(16, 143, 202, 1)", name: "Tailwind CSS" },
    { Icon: FaPhp, color: "#008", name: "PHP" },
    { Icon: PiFigmaLogoFill, color: "rgba(174, 34, 209, 1)", name: "Figma" },
  ];
  return (
    <div>
      {/* Div inclinada */}
      <div
        className="bottom-0 left-0 w-full h-[75px] bg-gray-100 z-0"
        style={{
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
        }}
      />

      {/* Conteúdo ajustado para subir e encostar */}
 <div className="bg-gray-100 -mt-[1px]">
  <div className="max-w-[1300px] px-4 sm:px-6 lg:px-8 pt-[16vh] pb-[25vh] m-auto">
    <div
      className="p-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-[4rem] sm:rounded-[6rem] lg:rounded-full"
      style={{
        boxShadow:
          "0 0 10px #3b83f660, 0 0 20px #3b83f63d, 0 0 30px #8a5cf64b, 0 0 40px #8a5cf654"
      }}
    >
      <div className="bg-white rounded-[4rem] sm:rounded-[6rem] lg:rounded-full lg:px-[15vh] px-[8vh] pb-[6vh] pt-[3vh] flex flex-col items-center">

        {/* Título centralizado com gradiente */}
        <h1 className="text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-semibold mb-10 text-center">
          HABILIDADES
        </h1>

        {/* Grid de tecnologias */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-20 justify-center">
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-125 transition-transform duration-500 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl"
              style={{ color: item.color }}
            >
              <item.Icon />
              <p className="mt-4 text-lg font-semibold text-gray-700">{item.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</div>

    </div>

  );
}

export default Techs;
